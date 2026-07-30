/**
 * 加密工具函数
 */

const 文本编码器 = new TextEncoder();
const doubleMd5Cache = new Map();
const doubleMd5CacheLimit = 256;

function 字节转十六进制(bytes) {
	let hex = '';
	for (let i = 0; i < bytes.length; i++) {
		hex += bytes[i].toString(16).padStart(2, '0');
	}
	return hex;
}

const MD5移位 = [
	7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
	5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
	4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
	6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21,
];
const MD5常量 = Array.from({ length: 64 }, (_, i) => Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000) >>> 0);

/**
 * MD5 字节摘要（WebCrypto 与 Workers 均不提供 MD5）
 * @param {ArrayBuffer|ArrayBufferView} input
 * @returns {Uint8Array}
 */
export function md5Bytes(input) {
	const bytes = input instanceof ArrayBuffer
		? new Uint8Array(input)
		: new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
	const paddedLength = Math.ceil((bytes.byteLength + 9) / 64) * 64;
	const padded = new Uint8Array(paddedLength);
	padded.set(bytes);
	padded[bytes.byteLength] = 0x80;
	const bitLength = BigInt(bytes.byteLength) * 8n;
	for (let i = 0; i < 8; i++) padded[paddedLength - 8 + i] = Number((bitLength >> BigInt(i * 8)) & 0xffn);

	let h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476;
	const words = new Uint32Array(16);
	for (let offset = 0; offset < paddedLength; offset += 64) {
		for (let i = 0; i < 16; i++) {
			const p = offset + i * 4;
			words[i] = (padded[p] | (padded[p + 1] << 8) | (padded[p + 2] << 16) | (padded[p + 3] << 24)) >>> 0;
		}
		let a = h0, b = h1, c = h2, d = h3;
		for (let i = 0; i < 64; i++) {
			let f, g;
			if (i < 16) { f = (b & c) | (~b & d); g = i }
			else if (i < 32) { f = (d & b) | (~d & c); g = (5 * i + 1) % 16 }
			else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) % 16 }
			else { f = c ^ (b | ~d); g = (7 * i) % 16 }
			const sum = (a + f + MD5常量[i] + words[g]) >>> 0;
			const rotated = ((sum << MD5移位[i]) | (sum >>> (32 - MD5移位[i]))) >>> 0;
			const nextD = c;
			a = d; d = nextD; c = b; b = (b + rotated) >>> 0;
		}
		h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0;
	}

	const digest = new Uint8Array(16);
	for (const [wordIndex, word] of [h0, h1, h2, h3].entries()) {
		for (let byteIndex = 0; byteIndex < 4; byteIndex++) digest[wordIndex * 4 + byteIndex] = (word >>> (byteIndex * 8)) & 0xff;
	}
	return digest;
}

/**
 * 文本输入的单层 MD5 字节摘要。
 * @param {string} 文本
 * @returns {Uint8Array}
 */
export function md5TextBytes(文本) {
	return md5Bytes(文本编码器.encode(String(文本 ?? '')));
}

/**
 * 双重 MD5 哈希（isolate 内按输入文本缓存，避免热路径重复计算）
 * @param {string} 文本
 * @returns {Promise<string>} 十六进制哈希字符串
 */
export async function doubleMd5(文本) {
	const 键 = String(文本 ?? '');
	const 命中 = doubleMd5Cache.get(键);
	if (命中) return 命中;

	const 任务 = (async () => {
		const 第一次哈希 = md5TextBytes(键);
		const 第一次十六进制 = 字节转十六进制(第一次哈希);
		const 第二次哈希 = md5Bytes(文本编码器.encode(第一次十六进制.slice(7, 27)));
		return 字节转十六进制(第二次哈希);
	})();

	doubleMd5Cache.set(键, 任务);
	try {
		const 结果 = await 任务;
		if (doubleMd5Cache.size > doubleMd5CacheLimit) {
			const 最旧键 = doubleMd5Cache.keys().next().value;
			doubleMd5Cache.delete(最旧键);
		}
		return 结果;
	} catch (error) {
		doubleMd5Cache.delete(键);
		throw error;
	}
}

/**
 * SHA-224 哈希（纯 JS 实现，Workers 环境不原生支持 SHA-224）
 * @param {string} s 输入字符串
 * @returns {string} 十六进制哈希字符串
 */
export function sha224Text(s) {
	const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
	const r = (n, b) => ((n >>> b) | (n << (32 - b))) >>> 0;
	s = unescape(encodeURIComponent(s));
	const l = s.length * 8; s += String.fromCharCode(0x80);
	while ((s.length * 8) % 512 !== 448) s += String.fromCharCode(0);
	const h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
	const hi = Math.floor(l / 0x100000000), lo = l & 0xFFFFFFFF;
	s += String.fromCharCode((hi >>> 24) & 0xFF, (hi >>> 16) & 0xFF, (hi >>> 8) & 0xFF, hi & 0xFF, (lo >>> 24) & 0xFF, (lo >>> 16) & 0xFF, (lo >>> 8) & 0xFF, lo & 0xFF);
	const w = []; for (let i = 0; i < s.length; i += 4)w.push((s.charCodeAt(i) << 24) | (s.charCodeAt(i + 1) << 16) | (s.charCodeAt(i + 2) << 8) | s.charCodeAt(i + 3));
	for (let i = 0; i < w.length; i += 16) {
		const x = new Array(64).fill(0);
		for (let j = 0; j < 16; j++)x[j] = w[i + j];
		for (let j = 16; j < 64; j++) {
			const s0 = r(x[j - 15], 7) ^ r(x[j - 15], 18) ^ (x[j - 15] >>> 3);
			const s1 = r(x[j - 2], 17) ^ r(x[j - 2], 19) ^ (x[j - 2] >>> 10);
			x[j] = (x[j - 16] + s0 + x[j - 7] + s1) >>> 0;
		}
		let [a, b, c, d, e, f, g, h0] = h;
		for (let j = 0; j < 64; j++) {
			const S1 = r(e, 6) ^ r(e, 11) ^ r(e, 25), ch = (e & f) ^ (~e & g), t1 = (h0 + S1 + ch + K[j] + x[j]) >>> 0;
			const S0 = r(a, 2) ^ r(a, 13) ^ r(a, 22), maj = (a & b) ^ (a & c) ^ (b & c), t2 = (S0 + maj) >>> 0;
			h0 = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
		}
		for (let j = 0; j < 8; j++)h[j] = (h[j] + (j === 0 ? a : j === 1 ? b : j === 2 ? c : j === 3 ? d : j === 4 ? e : j === 5 ? f : j === 6 ? g : h0)) >>> 0;
	}
	let hex = '';
	for (let i = 0; i < 7; i++) {
		for (let j = 24; j >= 0; j -= 8)hex += ((h[i] >>> j) & 0xFF).toString(16).padStart(2, '0');
	}
	return hex;
}

export { md5Bytes as MD5字节, md5TextBytes as MD5文本字节, doubleMd5 as MD5MD5, sha224Text as sha224 };
