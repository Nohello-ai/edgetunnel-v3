import test from 'node:test';
import assert from 'node:assert/strict';

import { socks5Connect } from '../src/connector/socks5.js';

function 创建模拟Socket(responsesByWrite, closeAfterLastResponse = false) {
	const writes = [];
	let responseController;
	const readable = new ReadableStream({
		start(controller) { responseController = controller; }
	});
	const writable = new WritableStream({
		write(chunk) {
			writes.push(new Uint8Array(chunk));
			const chunks = responsesByWrite[writes.length - 1] || [];
			for (const response of chunks) responseController.enqueue(new Uint8Array(response));
			if (closeAfterLastResponse && writes.length === responsesByWrite.length) responseController.close();
		},
	});
	return {
		socket: { readable, writable, closed: Promise.resolve(), close() { try { responseController.close(); } catch { } } },
		writes,
		enqueue(chunk) { responseController.enqueue(new Uint8Array(chunk)); },
		closeReadable() { responseController.close(); }
	};
}

async function 读取全部(readable) {
	const reader = readable.getReader();
	const result = [];
	while (true) {
		const { done, value } = await reader.read();
		if (done) return result;
		result.push(...value);
	}
}

test('SOCKS5 所有握手响应均可跨任意 chunk 边界读取', async () => {
	const connectResponse = [5, 0, 0, 1, 127, 0, 0, 1, 0x1f, 0x90];
	for (let split = 1; split < connectResponse.length; split++) {
		const mock = 创建模拟Socket([[[5], [0]], [connectResponse.slice(0, split), connectResponse.slice(split)]]);
		await socks5Connect('example.com', 443, new Uint8Array(0), () => mock.socket, { hostname: 'proxy', port: 1080 });
		assert.equal(mock.writes.length, 2);
	}
});

test('SOCKS5 认证使用 UTF-8 字节长度并保留 CONNECT 后的隧道数据', async () => {
	const tunnelData = [9, 8, 7];
	const mock = 创建模拟Socket([[[5], [2]], [[1], [0]], [[5, 0], [0, 3, 2], [111, 107, 0, 80, ...tunnelData]]]);
	const socket = await socks5Connect('目标.example', 443, new Uint8Array([1, 2]), () => mock.socket, {
		username: '用户', password: '密码', hostname: 'proxy', port: 1080
	});
	assert.equal(mock.writes.length, 4);
	assert.equal(mock.writes[1][1], new TextEncoder().encode('用户').byteLength);
	mock.closeReadable();
	assert.deepEqual(await 读取全部(socket.readable), tunnelData);
});

test('SOCKS5 隧道余量包装流支持取消', async () => {
	const mock = 创建模拟Socket([[[5, 0]], [[5, 0, 0, 1, 127, 0, 0, 1, 0, 80, 9]]]);
	const socket = await socks5Connect('example.com', 80, null, () => mock.socket, { hostname: 'proxy', port: 1080 });
	const reader = socket.readable.getReader();
	assert.deepEqual([...(await reader.read()).value], [9]);
	await assert.doesNotReject(() => reader.cancel('test complete'));
});

test('SOCKS5 支持 IPv6 BND.ADDR 响应', async () => {
	const ipv6 = new Array(16).fill(0);
	const mock = 创建模拟Socket([[[5, 0]], [[5, 0, 0, 4, ...ipv6, 0, 80]]]);
	await assert.doesNotReject(() => socks5Connect('example.com', 80, null, () => mock.socket, { hostname: 'proxy', port: 1080 }));
});

test('SOCKS5 拒绝超过 255 字节的用户名、密码和目标域名', async () => {
	const oversized = '界'.repeat(86);
	const 不应连接 = () => { throw new Error('should not connect'); };
	await assert.rejects(() => socks5Connect('example.com', 443, null, 不应连接, { username: oversized, password: 'ok', hostname: 'proxy', port: 1080 }), /username exceeds/);
	await assert.rejects(() => socks5Connect('example.com', 443, null, 不应连接, { username: 'ok', password: oversized, hostname: 'proxy', port: 1080 }), /password exceeds/);
	await assert.rejects(() => socks5Connect(oversized, 443, null, () => { throw new Error('should not connect'); }, { hostname: 'proxy', port: 1080 }), /hostname exceeds/);
});

test('SOCKS5 拒绝截断和畸形 CONNECT 响应', async () => {
	for (const response of [
		[[[5]]],
		[[[5, 0]], [[5, 0, 0, 1, 127]]],
		[[[5, 0]], [[5, 0, 1, 1, 127, 0, 0, 1, 0, 80]]],
		[[[5, 0]], [[5, 0, 0, 9]]],
	]) {
		const mock = 创建模拟Socket(response, true);
		await assert.rejects(() => socks5Connect('example.com', 443, null, () => mock.socket, { hostname: 'proxy', port: 1080 }), /S5/);
	}
});

test('SOCKS5 拒绝方法选择和认证阶段的错误状态', async () => {
	for (const responses of [
		[[[4, 0]]],
		[[[5, 0xff]]],
	]) {
		const mock = 创建模拟Socket(responses, true);
		await assert.rejects(() => socks5Connect('example.com', 443, null, () => mock.socket, { hostname: 'proxy', port: 1080 }), /S5/);
	}

	for (const authResponse of [[2, 0], [1, 1]]) {
		const mock = 创建模拟Socket([[[5, 2]], [authResponse]], true);
		await assert.rejects(() => socks5Connect('example.com', 443, null, () => mock.socket, {
			username: 'user', password: 'pass', hostname: 'proxy', port: 1080
		}), /authentication failed/);
	}
});

test('SOCKS5 拒绝 CONNECT 阶段的错误版本和失败 REP', async () => {
	for (const connectResponse of [
		[4, 0, 0, 1, 127, 0, 0, 1, 0, 80],
		[5, 5, 0, 1, 127, 0, 0, 1, 0, 80],
	]) {
		const mock = 创建模拟Socket([[[5, 0]], [connectResponse]], true);
		await assert.rejects(() => socks5Connect('example.com', 443, null, () => mock.socket, { hostname: 'proxy', port: 1080 }), /S5/);
	}
});
