import { 数据转Uint8Array, 有效数据长度 } from '../utils/bytes.js';

const CONNECT响应头最大字节 = 8 * 1024;

export async function 读取CONNECT响应(reader, proxyName = 'HTTP') {
	const header = new Uint8Array(CONNECT响应头最大字节);
	let length = 0;
	let matched = 0;
	while (true) {
		const { done, value } = await reader.read();
		if (done || !value) throw new Error(`${proxyName} 代理在返回 CONNECT 响应前关闭连接`);
		const chunk = 数据转Uint8Array(value);
		for (let offset = 0; offset < chunk.byteLength; offset++) {
			if (length >= CONNECT响应头最大字节) throw new Error('代理 CONNECT 响应头过长或无效');
			const byte = chunk[offset];
			header[length++] = byte;
			const expected = [0x0d, 0x0a, 0x0d, 0x0a][matched];
			if (byte === expected) matched++;
			else matched = byte === 0x0d ? 1 : 0;
			if (matched === 4) {
				const statusLine = new TextDecoder().decode(header.subarray(0, length)).split('\r\n', 1)[0];
				const statusMatch = statusLine.match(/^HTTP\/\d\.\d\s+(\d{3})(?:\s|$)/);
				const statusCode = statusMatch ? Number(statusMatch[1]) : NaN;
				if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300) {
					throw new Error(`Connection failed: HTTP ${Number.isFinite(statusCode) ? statusCode : 'invalid'}`);
				}
				return { statusCode, bufferedData: chunk.slice(offset + 1) };
			}
		}
	}
}

function 回灌CONNECT剩余数据(socket, bufferedData) {
	if (!bufferedData.byteLength) return socket;
	const sourceReader = socket.readable.getReader();
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
				try { sourceReader.releaseLock() } catch (e) { }
				controller.error(error);
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

export async function httpConnect(targetHost, targetPort, initialData, HTTPS代理 = false, TCP连接, parsedSocks5) {
	const { username, password, hostname, port } = parsedSocks5 || {};
	const socket = HTTPS代理
		? TCP连接({ hostname, port }, { secureTransport: 'on', allowHalfOpen: false })
		: TCP连接({ hostname, port });
	const writer = socket.writable.getWriter(), reader = socket.readable.getReader();
	const encoder = new TextEncoder();
	try {
		if (HTTPS代理) await socket.opened;

		const auth = username && password ? `Proxy-Authorization: Basic ${btoa(`${username}:${password}`)}\r\n` : '';
		const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r\nHost: ${targetHost}:${targetPort}\r\n${auth}User-Agent: Mozilla/5.0\r\nConnection: keep-alive\r\n\r\n`;
		await writer.write(encoder.encode(request));
		writer.releaseLock();

		const { bufferedData } = await 读取CONNECT响应(reader, HTTPS代理 ? 'HTTPS' : 'HTTP');

		reader.releaseLock();

		if (有效数据长度(initialData) > 0) {
			const 远端写入器 = socket.writable.getWriter();
			try { await 远端写入器.write(initialData) }
			finally { try { 远端写入器.releaseLock() } catch (e) { } }
		}

		// CONNECT 响应头后可能夹带隧道数据，先回灌到可读流，避免首包被吞。
		return 回灌CONNECT剩余数据(socket, bufferedData);
	} catch (error) {
		try { writer.releaseLock() } catch (e) { }
		try { reader.releaseLock() } catch (e) { }
		try { await Promise.resolve(socket.close()) } catch (e) { }
		throw error;
	}
}
