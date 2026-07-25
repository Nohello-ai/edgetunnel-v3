/**
 * 流处理工具函数
 */
import { 有效数据长度, 数据转Uint8Array } from '../utils/bytes.js';
import { log } from '../utils/log.js';

/**
 * 安静地关闭 WebSocket
 * @param {WebSocket} socket
 */
export function closeSocketQuietly(socket) {
	try {
		if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CLOSING) {
			socket.close();
		}
	} catch (error) { }
}

/**
 * 格式化 UUID 标识符
 * @param {Uint8Array} arr
 * @param {number} offset
 * @returns {string}
 */
export function formatIdentifier(arr, offset = 0) {
	const hex = [...arr.slice(offset, offset + 16)].map(b => b.toString(16).padStart(2, '0')).join('');
	return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}

/**
 * WebSocket 发送并等待
 * @param {WebSocket} webSocket
 * @param {*} payload
 */
export async function WebSocket发送并等待(webSocket, payload) {
	const sendResult = webSocket.send(payload);
	if (sendResult && typeof sendResult.then === 'function') await sendResult;
}

/**
 * 构造本地 204 响应（HTTP）
 * @param {Uint8Array|null} respHeader
 * @returns {Uint8Array}
 */
export function 构造本地204响应(respHeader = null) {
	const 本地204响应 = new TextEncoder().encode(
		'HTTP/1.1 204 No Content\r\n' +
		'Content-Length: 0\r\n' +
		'Connection: close\r\n' +
		'\r\n'
	);
	if (有效数据长度(respHeader) === 0) return 本地204响应;
	const 协议响应头 = 数据转Uint8Array(respHeader);
	const response = new Uint8Array(协议响应头.byteLength + 本地204响应.byteLength);
	response.set(协议响应头, 0);
	response.set(本地204响应, 协议响应头.byteLength);
	log(`[TCP转发] 构造本地204响应: ${response.byteLength}B`);
	return response;
}

/**
 * 构造 WebSocket 本地 204 响应
 * @param {Uint8Array|null} respHeader
 * @returns {Uint8Array}
 */
export function 构造WS本地204响应(respHeader = null) {
	const WS本地204响应 = new TextEncoder().encode(
		'HTTP/1.1 204 No Content\r\n' +
		'Content-Length: 0\r\n' +
		'Connection: keep-alive\r\n' +
		'\r\n'
	);
	if (有效数据长度(respHeader) === 0) return WS本地204响应;
	const 协议响应头 = 数据转Uint8Array(respHeader);
	const response = new Uint8Array(协议响应头.byteLength + WS本地204响应.byteLength);
	response.set(协议响应头, 0);
	response.set(WS本地204响应, 协议响应头.byteLength);
	return response;
}
