import { 数据转Uint8Array, 有效数据长度 } from '../utils/bytes.js';

const SOCKS5单字节字段最大长度 = 255;

function 编码单字节字段(value, name) {
	const bytes = new TextEncoder().encode(String(value ?? ''));
	if (bytes.byteLength > SOCKS5单字节字段最大长度) throw new Error(`S5 ${name} exceeds 255 bytes`);
	return bytes;
}

export function 创建SOCKS5精确读取器(reader) {
	let buffered = new Uint8Array(0);
	return {
		async 读取(length, stage) {
			if (!Number.isSafeInteger(length) || length < 0) throw new Error('Invalid S5 read length');
			while (buffered.byteLength < length) {
				const { done, value } = await reader.read();
				if (done || !value) throw new Error(`S5 ${stage} response is truncated`);
				const chunk = 数据转Uint8Array(value);
				if (!chunk.byteLength) continue;
				const merged = new Uint8Array(buffered.byteLength + chunk.byteLength);
				merged.set(buffered, 0);
				merged.set(chunk, buffered.byteLength);
				buffered = merged;
			}
			const result = buffered.slice(0, length);
			buffered = buffered.slice(length);
			return result;
		},
		取出剩余数据() {
			const result = buffered;
			buffered = new Uint8Array(0);
			return result;
		}
	};
}

function 回灌SOCKS5剩余数据(socket, bufferedData) {
	if (!bufferedData.byteLength) return socket;
	const source = socket.readable;
	const sourceReader = source.getReader();
	let bufferedPending = true;
	const readable = new ReadableStream({
		async pull(controller) {
			if (bufferedPending) {
				bufferedPending = false;
				controller.enqueue(bufferedData);
				return;
			}
			try {
				const { done, value } = await sourceReader.read();
				if (done) {
					sourceReader.releaseLock();
					controller.close();
					return;
				}
				if (value?.byteLength) controller.enqueue(value);
			} catch (error) {
				controller.error(error);
				try { sourceReader.releaseLock() } catch (e) { }
			}
		},
		cancel(reason) {
			return sourceReader.cancel(reason).finally(() => {
				try { sourceReader.releaseLock() } catch (e) { }
			});
		}
	});
	return { readable, writable: socket.writable, closed: socket.closed, close: () => socket.close() };
}

export async function socks5Connect(targetHost, targetPort, initialData, TCP连接, parsedSocks5) {
	const { username, password, hostname, port } = parsedSocks5 || {};
	if ((username && !password) || (!username && password)) throw new Error('S5 username and password must be provided together');
	if (!Number.isInteger(targetPort) || targetPort < 1 || targetPort > 65535) throw new Error('S5 target port is invalid');
	const userBytes = username && password ? 编码单字节字段(username, 'username') : null;
	const passBytes = username && password ? 编码单字节字段(password, 'password') : null;
	const hostBytes = 编码单字节字段(targetHost, 'hostname');
	if (!hostBytes.byteLength) throw new Error('S5 hostname is empty');
	const socket = TCP连接({ hostname, port }), writer = socket.writable.getWriter(), reader = socket.readable.getReader();
	const 精确读取器 = 创建SOCKS5精确读取器(reader);
	try {
		const authMethods = username && password ? new Uint8Array([0x05, 0x02, 0x00, 0x02]) : new Uint8Array([0x05, 0x01, 0x00]);
		await writer.write(authMethods);
		const methodResponse = await 精确读取器.读取(2, 'method selection');
		if (methodResponse[0] !== 0x05) throw new Error('S5 method selection has invalid version');
		const selectedMethod = methodResponse[1];
		if (selectedMethod === 0x02) {
			if (!username || !password) throw new Error('S5 requires authentication');
			const authPacket = new Uint8Array([0x01, userBytes.length, ...userBytes, passBytes.length, ...passBytes]);
			await writer.write(authPacket);
			const authResponse = await 精确读取器.读取(2, 'authentication');
			if (authResponse[0] !== 0x01 || authResponse[1] !== 0x00) throw new Error('S5 authentication failed');
		} else if (selectedMethod !== 0x00) throw new Error(`S5 unsupported auth method: ${selectedMethod}`);

		const connectPacket = new Uint8Array([0x05, 0x01, 0x00, 0x03, hostBytes.length, ...hostBytes, targetPort >> 8, targetPort & 0xff]);
		await writer.write(connectPacket);
		const connectHeader = await 精确读取器.读取(4, 'CONNECT header');
		if (connectHeader[0] !== 0x05 || connectHeader[2] !== 0x00) throw new Error('S5 CONNECT response is invalid');
		if (connectHeader[1] !== 0x00) throw new Error(`S5 connection failed: ${connectHeader[1]}`);
		let addressLength;
		if (connectHeader[3] === 0x01) addressLength = 4;
		else if (connectHeader[3] === 0x04) addressLength = 16;
		else if (connectHeader[3] === 0x03) addressLength = (await 精确读取器.读取(1, 'CONNECT domain length'))[0];
		else throw new Error(`S5 CONNECT response has unsupported address type: ${connectHeader[3]}`);
		await 精确读取器.读取(addressLength + 2, 'CONNECT address');

		if (有效数据长度(initialData) > 0) await writer.write(initialData);
		const bufferedData = 精确读取器.取出剩余数据();
		writer.releaseLock(); reader.releaseLock();
		return 回灌SOCKS5剩余数据(socket, bufferedData);
	} catch (error) {
		try { writer.releaseLock() } catch (e) { }
		try { reader.releaseLock() } catch (e) { }
		try { socket.close() } catch (e) { }
		throw error;
	}
}
