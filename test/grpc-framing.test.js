import test from 'node:test';
import assert from 'node:assert/strict';

import { GRPC入站帧最大载荷字节, GRPC单块最大帧数 } from '../src/constants.js';
import { 创建GRPC入站解析状态, 解析GRPC入站块, 完成GRPC入站解析 } from '../src/transport/grpc.js';

function 构造GRPC帧(payload, compressedFlag = 0) {
	const bytes = payload instanceof Uint8Array ? payload : new Uint8Array(payload);
	const frame = new Uint8Array(5 + bytes.byteLength);
	frame[0] = compressedFlag;
	new DataView(frame.buffer).setUint32(1, bytes.byteLength);
	frame.set(bytes, 5);
	return frame;
}

test('gRPC 帧头的所有跨块切分点均可解析', () => {
	const frame = 构造GRPC帧(new Uint8Array([1, 2, 3, 4]));
	for (let split = 1; split < 5; split++) {
		const state = 创建GRPC入站解析状态();
		assert.equal(解析GRPC入站块(state, frame.subarray(0, split)).length, 0);
		const frames = 解析GRPC入站块(state, frame.subarray(split));
		assert.deepEqual([...frames[0]], [1, 2, 3, 4]);
		assert.doesNotThrow(() => 完成GRPC入站解析(state));
	}
});

test('补齐分片帧后继续解析完整帧和部分下一帧', () => {
	const state = 创建GRPC入站解析状态();
	const first = 构造GRPC帧(new Uint8Array([1, 2]));
	const second = 构造GRPC帧(new Uint8Array([3]));
	const third = 构造GRPC帧(new Uint8Array([4, 5]));
	解析GRPC入站块(state, first.subarray(0, 6));
	const input = new Uint8Array(1 + second.byteLength + 3);
	input.set(first.subarray(6), 0);
	input.set(second, 1);
	input.set(third.subarray(0, 3), 1 + second.byteLength);
	assert.deepEqual(解析GRPC入站块(state, input).map(frame => [...frame]), [[1, 2], [3]]);
	assert.throws(() => 完成GRPC入站解析(state), /Truncated/);
	assert.deepEqual(解析GRPC入站块(state, third.subarray(3)).map(frame => [...frame]), [[4, 5]]);
	assert.doesNotThrow(() => 完成GRPC入站解析(state));
});

test('无符号高位长度和超过上限的长度均会在帧头处拒绝', () => {
	for (const declared of [GRPC入站帧最大载荷字节 + 1, 0x80000000, 0xffffffff]) {
		const header = new Uint8Array(5);
		new DataView(header.buffer).setUint32(1, declared);
		assert.throws(() => 解析GRPC入站块(创建GRPC入站解析状态(), header), /frame is too large/);
	}
});

test('恰好达到单帧上限的数据可按细碎块线性写入固定缓冲', () => {
	const state = 创建GRPC入站解析状态();
	const frame = 构造GRPC帧(new Uint8Array(GRPC入站帧最大载荷字节));
	let frames = [];
	for (let offset = 0; offset < frame.byteLength; offset += 1021) {
		frames = frames.concat(解析GRPC入站块(state, frame.subarray(offset, offset + 1021)));
	}
	assert.equal(frames.length, 1);
	assert.equal(frames[0].byteLength, GRPC入站帧最大载荷字节);
	assert.doesNotThrow(() => 完成GRPC入站解析(state));
});

test('不支持压缩帧且 EOF 不接受残缺帧', () => {
	assert.throws(() => 解析GRPC入站块(创建GRPC入站解析状态(), 构造GRPC帧([1], 1)), /compression/);
	for (const partial of [new Uint8Array([0]), 构造GRPC帧([1, 2]).subarray(0, 6)]) {
		const state = 创建GRPC入站解析状态();
		解析GRPC入站块(state, partial);
		assert.throws(() => 完成GRPC入站解析(state), /Truncated/);
	}
});

test('单块帧数量有明确上限', () => {
	const input = new Uint8Array((GRPC单块最大帧数 + 1) * 5);
	assert.throws(() => 解析GRPC入站块(创建GRPC入站解析状态(), input), /Too many/);
});
