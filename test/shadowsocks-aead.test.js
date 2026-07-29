import test from 'node:test';
import assert from 'node:assert/strict';
import { MD5字节 } from '../src/utils/crypto.js';

import {
	SS支持加密配置,
	SSNonce长度,
	SS主密钥缓存,
	SS派生主密钥,
	SS派生会话密钥,
	SSAEAD加密,
	SSAEAD解密,
	SS递增Nonce计数器,
	创建SSAEAD入站解密器,
	解析SS目标地址,
} from '../src/protocol/shadowsocks.js';
import { 拼接字节数据 } from '../src/utils/bytes.js';

const hex = (bytes) => Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');

async function 构造AEAD流(password, method, payloads) {
	const config = SS支持加密配置[method];
	const salt = new Uint8Array(config.saltLen).fill(11);
	const key = await SS派生会话密钥(config, await SS派生主密钥(password, config.keyLen), salt, ['encrypt']);
	const nonce = new Uint8Array(SSNonce长度);
	const encryptedRecords = [];
	for (const payload of payloads) {
		const length = new Uint8Array([payload.byteLength >>> 8, payload.byteLength & 0xff]);
		encryptedRecords.push(await SSAEAD加密(key, nonce, length), await SSAEAD加密(key, nonce, payload));
	}
	return 拼接字节数据(salt, ...encryptedRecords);
}

test('MD5 字节实现符合标准向量', () => {
	assert.equal(hex(MD5字节(new TextEncoder().encode(''))), 'd41d8cd98f00b204e9800998ecf8427e');
	assert.equal(hex(MD5字节(new TextEncoder().encode('abc'))), '900150983cd24fb0d6963f7d28e17f72');
	assert.equal(hex(MD5字节(new TextEncoder().encode('1234567890'.repeat(8)))), '57edf4a22be3c955ac49da2e2107b67a');
});

test('Shadowsocks EVP_BytesToKey 主密钥符合固定向量', async () => {
	assert.equal(hex(await SS派生主密钥('password', 16)), '5f4dcc3b5aa765d61d8327deb882cf99');
	assert.equal(hex(await SS派生主密钥('password', 32)), '5f4dcc3b5aa765d61d8327deb882cf992b95990a9151374abd8ff8c5a7a0fe08');
});

test('Shadowsocks AEAD 两种配置可往返并按 nonce 递增', async () => {
	for (const config of Object.values(SS支持加密配置)) {
		const master = await SS派生主密钥(`test-${config.method}`, config.keyLen);
		const salt = new Uint8Array(config.saltLen).fill(7);
		const encryptKey = await SS派生会话密钥(config, master, salt, ['encrypt']);
		const decryptKey = await SS派生会话密钥(config, master, salt, ['decrypt']);
		const encryptNonce = new Uint8Array(12), decryptNonce = new Uint8Array(12);
		const plaintext = new TextEncoder().encode('shadowsocks test payload');
		const ciphertext = await SSAEAD加密(encryptKey, encryptNonce, plaintext);
		assert.equal(ciphertext.byteLength, plaintext.byteLength + 16);
		assert.deepEqual([...await SSAEAD解密(decryptKey, decryptNonce, ciphertext)], [...plaintext]);
		assert.deepEqual([...encryptNonce], [...decryptNonce]);
	}
});

test('Shadowsocks HKDF-SHA1 与 AES-GCM 符合独立固定向量', async () => {
	const vectors = {
		'aes-128-gcm': 'deb60652087cc2535aa954147b947fa81ecc0b739d3cb71a849b0fe3',
		'aes-256-gcm': 'b337982112ad550092b8f98251a13a48220d96b474b7d8b798d8b084',
	};
	for (const config of Object.values(SS支持加密配置)) {
		const master = await SS派生主密钥('password', config.keyLen);
		const salt = new Uint8Array(config.saltLen).fill(7);
		const key = await SS派生会话密钥(config, master, salt, ['encrypt']);
		const ciphertext = await SSAEAD加密(key, new Uint8Array(12), new TextEncoder().encode('fixed-vector'));
		assert.equal(hex(ciphertext), vectors[config.method]);
	}
});

test('Shadowsocks AEAD 错误 tag 不推进 nonce，后续有效帧仍可解密', async () => {
	const config = SS支持加密配置['aes-128-gcm'];
	const master = await SS派生主密钥('nonce-test', config.keyLen);
	const salt = new Uint8Array(config.saltLen).fill(3);
	const encryptKey = await SS派生会话密钥(config, master, salt, ['encrypt']);
	const decryptKey = await SS派生会话密钥(config, master, salt, ['decrypt']);
	const encryptNonce = new Uint8Array(12), decryptNonce = new Uint8Array(12);
	const first = await SSAEAD加密(encryptKey, encryptNonce, new Uint8Array([1]));
	const corrupted = first.slice();
	corrupted[corrupted.length - 1] ^= 1;
	await assert.rejects(() => SSAEAD解密(decryptKey, decryptNonce, corrupted));
	assert.deepEqual([...decryptNonce], new Array(12).fill(0));
	assert.deepEqual([...await SSAEAD解密(decryptKey, decryptNonce, first)], [1]);
});

test('Shadowsocks nonce 计数器按小端字节溢出递增', () => {
	const counter = new Uint8Array(12).fill(255);
	counter[0] = 254;
	SS递增Nonce计数器(counter);
	assert.equal(counter[0], 255);
	SS递增Nonce计数器(counter);
	assert.deepEqual(counter, new Uint8Array(12));
});

test('Shadowsocks 入站 framing 支持所有单一字节切分点', async () => {
	const password = 'framing-split';
	const payloads = [new Uint8Array([1, 2, 3]), new TextEncoder().encode('second-record')];
	const stream = await 构造AEAD流(password, 'aes-128-gcm', payloads);
	for (let split = 1; split < stream.byteLength; split++) {
		const decryptor = 创建SSAEAD入站解密器(password, 'aes-128-gcm');
		const plaintext = [];
		await decryptor.输入(stream.subarray(0, split), chunk => plaintext.push(chunk));
		await decryptor.输入(stream.subarray(split), chunk => plaintext.push(chunk));
		assert.deepEqual(plaintext, payloads, `split=${split}`);
	}
});

test('Shadowsocks 入站 framing 限制完整记录数但允许部分下一记录', async () => {
	const password = 'record-limit';
	const payloads = Array.from({ length: 1025 }, () => new Uint8Array(0));
	const stream = await 构造AEAD流(password, 'aes-128-gcm', payloads);
	const recordBytes = 2 + 16 + 16;
	const first1024End = 16 + 1024 * recordBytes;
	const accepted = 创建SSAEAD入站解密器(password, 'aes-128-gcm');
	let count = 0;
	await accepted.输入(stream.subarray(0, first1024End + 1), () => { count += 1 });
	assert.equal(count, 1024);
	await accepted.输入(stream.subarray(first1024End + 1), () => { count += 1 });
	assert.equal(count, 1025);

	const rejected = 创建SSAEAD入站解密器(password, 'aes-128-gcm');
	await assert.rejects(
		() => rejected.输入(stream, () => {}),
		/SS records per message exceed 1024/,
	);
});

test('Shadowsocks 目标地址解析支持跨记录累积后的三种地址', () => {
	const domain = new TextEncoder().encode('example.com');
	const domainHeader = 拼接字节数据(new Uint8Array([3, domain.byteLength]), domain, new Uint8Array([1, 187, 9, 8]));
	for (let split = 0; split < domainHeader.byteLength - 2; split++) assert.equal(解析SS目标地址(domainHeader.subarray(0, split)), null);
	assert.deepEqual(解析SS目标地址(domainHeader), {
		hostname: 'example.com',
		port: 443,
		rawClientData: new Uint8Array([9, 8]),
	});
	assert.deepEqual(解析SS目标地址(new Uint8Array([1, 127, 0, 0, 1, 0, 80])), {
		hostname: '127.0.0.1', port: 80, rawClientData: new Uint8Array(0),
	});
	const ipv6 = 解析SS目标地址(new Uint8Array([4, 0x20, 1, 0x0d, 0xb8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 53]));
	assert.equal(ipv6.hostname, '2001:db8:0:0:0:0:0:1');
	assert.equal(ipv6.port, 53);
});

test('Shadowsocks 主密钥缓存有容量上限且并发调用复用结果', async () => {
	const results = await Promise.all(Array.from({ length: 32 }, () => SS派生主密钥('cache-same', 16)));
	const sizeAfterFirst = SS主密钥缓存.size;
	for (const result of results) assert.deepEqual(result, results[0]);
	await SS派生主密钥('cache-same', 16);
	assert.equal(SS主密钥缓存.size, sizeAfterFirst);
	for (let i = 0; i < 300; i++) await SS派生主密钥(`cache-${i}`, 16);
	assert.ok(SS主密钥缓存.size <= 256);
});
