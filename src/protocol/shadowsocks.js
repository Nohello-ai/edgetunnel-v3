import { 数据转Uint8Array, 拼接字节数据 } from '../utils/bytes.js';
import { MD5字节 } from '../utils/crypto.js';
import { SS入站缓存最大字节, SS单块最大记录数, SS主密钥缓存最大条目 } from '../constants.js';

export const SS支持加密配置 = {
	'aes-128-gcm': { method: 'aes-128-gcm', keyLen: 16, saltLen: 16, maxChunk: 0x3fff, aesLength: 128 },
	'aes-256-gcm': { method: 'aes-256-gcm', keyLen: 32, saltLen: 32, maxChunk: 0x3fff, aesLength: 256 },
};

export const SSAEAD标签长度 = 16, SSNonce长度 = 12;
export const SS子密钥信息 = new TextEncoder().encode('ss-subkey');
export const SS文本编码器 = new TextEncoder(), SS文本解码器 = new TextDecoder(), SS主密钥缓存 = new Map();

export function SS递增Nonce计数器(counter) {
	for (let i = 0; i < counter.length; i++) { counter[i] = (counter[i] + 1) & 0xff; if (counter[i] !== 0) return }
}

export async function SS派生主密钥(passwordText, keyLen) {
	const cacheKey = `${keyLen}:${passwordText}`;
	if (SS主密钥缓存.has(cacheKey)) return SS主密钥缓存.get(cacheKey);
	while (SS主密钥缓存.size >= SS主密钥缓存最大条目) {
		const oldestKey = SS主密钥缓存.keys().next().value;
		if (oldestKey === undefined) break;
		SS主密钥缓存.delete(oldestKey);
	}
	const deriveTask = (async () => {
		const pwBytes = SS文本编码器.encode(passwordText || '');
		let prev = new Uint8Array(0), result = new Uint8Array(0);
		while (result.byteLength < keyLen) {
			const input = new Uint8Array(prev.byteLength + pwBytes.byteLength);
			input.set(prev, 0); input.set(pwBytes, prev.byteLength);
			prev = MD5字节(input);
			result = 拼接字节数据(result, prev);
		}
		return result.slice(0, keyLen);
	})();
	SS主密钥缓存.set(cacheKey, deriveTask);
	try { return await deriveTask }
	catch (error) { SS主密钥缓存.delete(cacheKey); throw error }
}

export async function SS派生会话密钥(config, masterKey, salt, usages) {
	const hmacOpts = { name: 'HMAC', hash: 'SHA-1' };
	const saltHmacKey = await crypto.subtle.importKey('raw', salt, hmacOpts, false, ['sign']);
	const prk = new Uint8Array(await crypto.subtle.sign('HMAC', saltHmacKey, masterKey));
	const prkHmacKey = await crypto.subtle.importKey('raw', prk, hmacOpts, false, ['sign']);
	const subKey = new Uint8Array(config.keyLen);
	let prev = new Uint8Array(0), written = 0, counter = 1;
	while (written < config.keyLen) {
		const input = 拼接字节数据(prev, SS子密钥信息, new Uint8Array([counter]));
		prev = new Uint8Array(await crypto.subtle.sign('HMAC', prkHmacKey, input));
		const copyLen = Math.min(prev.byteLength, config.keyLen - written);
		subKey.set(prev.subarray(0, copyLen), written);
		written += copyLen; counter += 1;
	}
	return crypto.subtle.importKey('raw', subKey, { name: 'AES-GCM', length: config.aesLength }, false, usages);
}

export async function SSAEAD加密(cryptoKey, nonceCounter, plaintext) {
	const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonceCounter, tagLength: 128 }, cryptoKey, plaintext);
	SS递增Nonce计数器(nonceCounter);
	return new Uint8Array(ct);
}

export async function SSAEAD解密(cryptoKey, nonceCounter, ciphertext) {
	const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonceCounter, tagLength: 128 }, cryptoKey, ciphertext);
	SS递增Nonce计数器(nonceCounter);
	return new Uint8Array(pt);
}

export function 解析SS目标地址(data) {
	const bytes = 数据转Uint8Array(data);
	if (bytes.byteLength < 1) return null;
	const addressType = bytes[0];
	let cursor = 1;
	let hostname = '';
	if (addressType === 1) {
		if (bytes.byteLength < cursor + 4 + 2) return null;
		hostname = `${bytes[cursor]}.${bytes[cursor + 1]}.${bytes[cursor + 2]}.${bytes[cursor + 3]}`;
		cursor += 4;
	} else if (addressType === 3) {
		if (bytes.byteLength < cursor + 1) return null;
		const domainLength = bytes[cursor];
		if (domainLength === 0) throw new Error('invalid ss domain length');
		cursor += 1;
		if (bytes.byteLength < cursor + domainLength + 2) return null;
		hostname = SS文本解码器.decode(bytes.subarray(cursor, cursor + domainLength));
		cursor += domainLength;
	} else if (addressType === 4) {
		if (bytes.byteLength < cursor + 16 + 2) return null;
		const ipv6 = [];
		const ipv6View = new DataView(bytes.buffer, bytes.byteOffset + cursor, 16);
		for (let i = 0; i < 8; i++) ipv6.push(ipv6View.getUint16(i * 2).toString(16));
		hostname = ipv6.join(':');
		cursor += 16;
	} else {
		throw new Error(`invalid ss addressType: ${addressType}`);
	}
	if (!hostname) throw new Error(`invalid ss address: ${addressType}`);
	const port = (bytes[cursor] << 8) | bytes[cursor + 1];
	if (port === 0) throw new Error('invalid ss port: 0');
	cursor += 2;
	return { hostname, port, rawClientData: bytes.subarray(cursor) };
}

export function 创建SSAEAD入站解密器(passwordText, preferredMethod = '', onLog = () => {}) {
	const preferredConfig = SS支持加密配置[preferredMethod] || SS支持加密配置['aes-128-gcm'];
	const candidates = [preferredConfig, ...Object.values(SS支持加密配置).filter(config => config.method !== preferredConfig.method)];
	const masterKeyTasks = new Map();
	const state = {
		buffer: new Uint8Array(0),
		hasSalt: false,
		waitPayloadLength: null,
		decryptKey: null,
		nonceCounter: new Uint8Array(SSNonce长度),
		config: null,
	};
	const getMasterKey = (config) => {
		if (!masterKeyTasks.has(config.method)) masterKeyTasks.set(config.method, SS派生主密钥(passwordText, config.keyLen));
		return masterKeyTasks.get(config.method);
	};
	const append = (chunk) => {
		if (chunk.byteLength === 0) return;
		state.buffer = state.buffer.byteLength === 0 ? chunk : 拼接字节数据(state.buffer, chunk);
	};
	const assertRetainedBufferLimit = () => {
		if (state.buffer.byteLength > SS入站缓存最大字节) throw new Error(`SS inbound buffer exceeds ${SS入站缓存最大字节} bytes`);
	};
	const initialize = async () => {
		const lengthCipherLength = 2 + SSAEAD标签长度;
		const maxSaltLength = Math.max(...candidates.map(config => config.saltLen));
		const maxAlignmentOffset = 16;
		const scanEnd = Math.min(maxAlignmentOffset, Math.max(0, state.buffer.byteLength - (lengthCipherLength + Math.min(...candidates.map(config => config.saltLen)))));
		for (let offset = 0; offset <= scanEnd; offset++) {
			for (const config of candidates) {
				const minimumLength = offset + config.saltLen + lengthCipherLength;
				if (state.buffer.byteLength < minimumLength) continue;
				const salt = state.buffer.subarray(offset, offset + config.saltLen);
				const lengthCipher = state.buffer.subarray(offset + config.saltLen, minimumLength);
				const decryptKey = await SS派生会话密钥(config, await getMasterKey(config), salt, ['decrypt']);
				const nonceCounter = new Uint8Array(SSNonce长度);
				try {
					const lengthPlain = await SSAEAD解密(decryptKey, nonceCounter, lengthCipher);
					const payloadLength = (lengthPlain[0] << 8) | lengthPlain[1];
					if (lengthPlain.byteLength !== 2 || payloadLength > config.maxChunk) continue;
					if (offset > 0) onLog(`[SS入站] 检测到前导噪声 ${offset}B，已自动对齐`);
					if (config.method !== preferredConfig.method) onLog(`[SS入站] URL enc=${preferredMethod || preferredConfig.method} 与实际 ${config.method} 不一致，已自动切换`);
					state.buffer = state.buffer.subarray(minimumLength);
					state.decryptKey = decryptKey;
					state.nonceCounter = nonceCounter;
					state.waitPayloadLength = payloadLength;
					state.config = config;
					state.hasSalt = true;
					return true;
				} catch (_) { }
			}
		}
		if (state.buffer.byteLength >= maxSaltLength + lengthCipherLength + maxAlignmentOffset) {
			throw new Error(`SS handshake decrypt failed (enc=${preferredMethod || 'auto'}, candidates=${candidates.map(config => config.method).join('/')})`);
		}
		return false;
	};
	return {
		get config() { return state.config },
		async 输入(dataChunk, onPlaintext) {
			append(数据转Uint8Array(dataChunk));
			if (!state.hasSalt && !await initialize()) {
				assertRetainedBufferLimit();
				return 0;
			}
			let processedRecords = 0;
			let readOffset = 0;
			try {
				while (true) {
					if (state.waitPayloadLength === null) {
						const lengthCipherLength = 2 + SSAEAD标签长度;
						if (state.buffer.byteLength - readOffset < lengthCipherLength) break;
						const lengthPlain = await SSAEAD解密(state.decryptKey, state.nonceCounter, state.buffer.subarray(readOffset, readOffset + lengthCipherLength));
						readOffset += lengthCipherLength;
						const payloadLength = (lengthPlain[0] << 8) | lengthPlain[1];
						if (lengthPlain.byteLength !== 2 || payloadLength > state.config.maxChunk) throw new Error(`SS payload length invalid: ${payloadLength}`);
						state.waitPayloadLength = payloadLength;
					}
					const payloadCipherLength = state.waitPayloadLength + SSAEAD标签长度;
					if (state.buffer.byteLength - readOffset < payloadCipherLength) break;
					if (processedRecords >= SS单块最大记录数) throw new Error(`SS records per message exceed ${SS单块最大记录数}`);
					const payloadPlain = await SSAEAD解密(state.decryptKey, state.nonceCounter, state.buffer.subarray(readOffset, readOffset + payloadCipherLength));
					readOffset += payloadCipherLength;
					state.waitPayloadLength = null;
					processedRecords += 1;
					await onPlaintext(payloadPlain);
				}
			} finally {
				state.buffer = readOffset === state.buffer.byteLength ? new Uint8Array(0) : state.buffer.slice(readOffset);
			}
			assertRetainedBufferLimit();
			return processedRecords;
		},
	};
}
