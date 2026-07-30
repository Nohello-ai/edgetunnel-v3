import test from 'node:test';
import assert from 'node:assert/strict';

import { connectStreams } from '../src/stream/pipe.js';

globalThis.WebSocket ??= { OPEN: 1, CLOSING: 2 };

function socketFromReadable(readable) {
	return { readable, close() { } };
}

function fakeWebSocket() {
	return {
		readyState: WebSocket.OPEN,
		closed: false,
		send() { },
		close() { this.closed = true; this.readyState = 3; },
	};
}

test('远端正常无数据关闭时允许执行重试', async () => {
	let retries = 0;
	const ws = fakeWebSocket();
	await connectStreams(socketFromReadable(new ReadableStream({ start(controller) { controller.close(); } })), ws, null, async () => { retries++; });
	assert.equal(retries, 1);
	assert.equal(ws.closed, false);
});

test('远端读取异常时关闭 WebSocket 且不再拨号重试', async () => {
	let retries = 0;
	const ws = fakeWebSocket();
	await connectStreams(socketFromReadable(new ReadableStream({ start(controller) { controller.error(new Error('read failed')); } })), ws, null, async () => { retries++; });
	assert.equal(retries, 0);
	assert.equal(ws.closed, true);
});
