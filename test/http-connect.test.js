import test from 'node:test';
import assert from 'node:assert/strict';

import { httpConnect, 读取CONNECT响应 } from '../src/connector/http.js';

const encoder = new TextEncoder();

function readerFrom(chunks, close = true) {
	let index = 0;
	return { async read() {
		if (index < chunks.length) return { done: false, value: encoder.encode(chunks[index++]) };
		return close ? { done: true } : new Promise(() => { });
	} };
}

test('CONNECT 响应头可在所有字节边界处分片', async () => {
	const response = 'HTTP/1.1 200 Connection Established\r\nProxy-Agent: test\r\n\r\n';
	for (let split = 1; split < response.length; split++) {
		const result = await 读取CONNECT响应(readerFrom([response.slice(0, split), response.slice(split)], false));
		assert.equal(result.statusCode, 200);
		assert.equal(result.bufferedData.byteLength, 0);
	}
});

test('CONNECT 严格限制响应头为 8KiB 即使来自单个 chunk', async () => {
	const oversized = `HTTP/1.1 200 OK\r\nX: ${'a'.repeat(8192)}\r\n\r\n`;
	await assert.rejects(() => 读取CONNECT响应(readerFrom([oversized])), /过长/);
});

test('CONNECT 只接受合法 2xx 状态行', async () => {
	for (const response of [
		'HTTP/1.1 407 Proxy Authentication Required\r\n\r\n',
		'garbage 200 OK\r\n\r\n',
		'HTTP/1 200 OK\r\n\r\n',
		'HTTP/2 200 OK\r\n\r\n',
		'http/1.1 200 OK\r\n\r\n',
	]) {
		await assert.rejects(() => 读取CONNECT响应(readerFrom([response])), /Connection failed/);
	}
});

test('CONNECT 允许终止符恰好落在 8KiB 上限', async () => {
	const prefix = 'HTTP/1.1 200 OK\r\nX: ';
	const suffix = '\r\n\r\n';
	const response = prefix + 'a'.repeat(8192 - prefix.length - suffix.length) + suffix;
	assert.equal(encoder.encode(response).byteLength, 8192);
	await assert.doesNotReject(() => 读取CONNECT响应(readerFrom([response])));
});

test('HTTP CONNECT 保留响应头后的隧道数据并发送初始数据', async () => {
	let controller;
	const writes = [];
	const socket = {
		readable: new ReadableStream({ start(value) { controller = value; } }),
		writable: new WritableStream({ write(chunk) {
			writes.push(new Uint8Array(chunk));
			if (writes.length === 1) controller.enqueue(encoder.encode('HTTP/1.1 200 OK\r\n\r\nabc'));
		} }),
		closed: Promise.resolve(), close() { try { controller.close(); } catch { } }
	};
	const connected = await httpConnect('example.com', 443, new Uint8Array([1, 2]), false, () => socket, { hostname: 'proxy', port: 8080 });
	assert.equal(writes.length, 2);
	assert.deepEqual([...writes[1]], [1, 2]);
	const reader = connected.readable.getReader();
	assert.equal(new TextDecoder().decode((await reader.read()).value), 'abc');
	await reader.cancel();
});

test('平台 TLS CONNECT 等待 opened 并传递 TLS 连接选项', async () => {
	let opened = false;
	let options;
	const socket = {
		opened: Promise.resolve().then(() => { opened = true; }),
		readable: new ReadableStream({ start(controller) { controller.enqueue(encoder.encode('HTTP/1.1 204 OK\r\n\r\n')); } }),
		writable: new WritableStream({ write() { assert.equal(opened, true); } }),
		closed: Promise.resolve(), close() { }
	};
	await httpConnect('example.com', 443, null, true, (_address, init) => { options = init; return socket; }, { hostname: 'proxy', port: 443 });
	assert.deepEqual(options, { secureTransport: 'on', allowHalfOpen: false });
});
