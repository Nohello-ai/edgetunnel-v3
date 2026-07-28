import test from 'node:test';
import assert from 'node:assert/strict';

import { forwardataudp, 读取单条DNSoverTCP响应 } from '../src/stream/forward.js';

function 创建分块Reader(chunks, close = true) {
	let index = 0;
	return {
		async read() {
			if (index < chunks.length) return { done: false, value: new Uint8Array(chunks[index++]) };
			return close ? { done: true } : new Promise(() => { });
		}
	};
}

test('DNS over TCP 响应长度头和载荷可跨任意 chunk 边界读取', async () => {
	const response = [0, 5, 1, 2, 3, 4, 5];
	for (let split = 1; split < response.length; split++) {
		const parsed = await 读取单条DNSoverTCP响应(创建分块Reader([response.slice(0, split), response.slice(split)], false));
		assert.deepEqual([...parsed], response);
	}
});

test('DNS over TCP 只读取长度声明的一条响应', async () => {
	const parsed = await 读取单条DNSoverTCP响应(创建分块Reader([[0, 2, 1, 2, 0, 2, 3, 4]], false));
	assert.deepEqual([...parsed], [0, 2, 1, 2]);
});

test('DNS over TCP 拒绝空响应和截断响应', async () => {
	await assert.rejects(() => 读取单条DNSoverTCP响应(创建分块Reader([[0], []])), /truncated/);
	await assert.rejects(() => 读取单条DNSoverTCP响应(创建分块Reader([[0, 3, 1, 2]])), /truncated/);
	await assert.rejects(() => 读取单条DNSoverTCP响应(创建分块Reader([[0, 0]])), /empty payload/);
});

test('DNS 转发收到完整一条响应后立即发送并关闭仍保持开放的上游', async () => {
	let controller;
	let closed = 0;
	const writes = [];
	const sent = [];
	const socket = {
		readable: new ReadableStream({ start(value) { controller = value; } }),
		writable: new WritableStream({ write(chunk) { writes.push(new Uint8Array(chunk)); } }),
		close() { closed++; try { controller.close(); } catch { } }
	};
	const TCP连接 = () => socket;
	const webSocket = {
		readyState: WebSocket.OPEN,
		bufferedAmount: 0,
		send(data) { sent.push(new Uint8Array(data)); }
	};
	const task = forwardataudp(new Uint8Array([0, 1, 9]), webSocket, null, null, null, TCP连接);
	await Promise.resolve();
	controller.enqueue(new Uint8Array([0]));
	controller.enqueue(new Uint8Array([2, 7, 8]));
	await task;
	assert.deepEqual([...writes[0]], [0, 1, 9]);
	assert.deepEqual([...sent[0]], [0, 2, 7, 8]);
	assert.equal(closed, 1);
});

test('DNS 转发返回前会等待异步 socket close 完成', async () => {
	let controller;
	let closeFinished = false;
	const socket = {
		readable: new ReadableStream({ start(value) { controller = value; } }),
		writable: new WritableStream(),
		async close() {
			await Promise.resolve();
			closeFinished = true;
			try { controller.close(); } catch { }
		}
	};
	const webSocket = { readyState: WebSocket.OPEN, bufferedAmount: 0, send() { } };
	const task = forwardataudp(new Uint8Array([0, 1, 9]), webSocket, null, null, null, () => socket);
	await Promise.resolve();
	controller.enqueue(new Uint8Array([0, 1, 7]));
	await task;
	assert.equal(closeFinished, true);
});
