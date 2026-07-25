/**
 * TLS 记录层模块
 *
 * 提供 TLS 记录与握手消息的构造，以及流式记录/握手解析器。
 * 提取自原始 Cloudflare Workers 单文件 worker.js（第 3115-3159 行）。
 */

import { TLS_VERSION_12 } from "./constants.js";
import { tlsBytes, concatBytes, readUint16, readUint24 } from "./crypto.js";
import { 数据转Uint8Array } from "../utils/bytes.js";

export function buildTlsRecord(contentType, fragment, version = TLS_VERSION_12) {
	const data = 数据转Uint8Array(fragment);
	const record = new Uint8Array(5 + data.byteLength);
	record[0] = contentType;
	record[1] = version >> 8 & 255;
	record[2] = version & 255;
	record[3] = data.byteLength >> 8 & 255;
	record[4] = data.byteLength & 255;
	record.set(data, 5);
	return record;
}
export function buildHandshakeMessage(handshakeType, body) { return tlsBytes(handshakeType, (length => [length >> 16 & 255, length >> 8 & 255, 255 & length])(body.length), body) }
export class TlsRecordParser {
	constructor() { this.buffer = new Uint8Array(0) }
	feed(chunk) {
		const bytes = 数据转Uint8Array(chunk);
		this.buffer = this.buffer.length ? concatBytes(this.buffer, bytes) : bytes
	}
	next() {
		if (this.buffer.length < 5) return null;
		const contentType = this.buffer[0],
			version = readUint16(this.buffer, 1),
			length = readUint16(this.buffer, 3);
		if (this.buffer.length < 5 + length) return null;
		const fragment = this.buffer.subarray(5, 5 + length);
		return this.buffer = this.buffer.subarray(5 + length), { type: contentType, version, length, fragment }
	}
}
export class TlsHandshakeParser {
	constructor() { this.buffer = new Uint8Array(0) }
	feed(chunk) {
		const bytes = 数据转Uint8Array(chunk);
		this.buffer = this.buffer.length ? concatBytes(this.buffer, bytes) : bytes
	}
	next() {
		if (this.buffer.length < 4) return null;
		const handshakeType = this.buffer[0],
			length = readUint24(this.buffer, 1);
		if (this.buffer.length < 4 + length) return null;
		const body = this.buffer.subarray(4, 4 + length),
			raw = this.buffer.subarray(0, 4 + length);
		return this.buffer = this.buffer.subarray(4 + length), { type: handshakeType, length, body, raw }
	}
}
