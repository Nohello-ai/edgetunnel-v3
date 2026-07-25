/**
 * 字节数据工具函数
 */

/**
 * 将各种数据类型转换为 Uint8Array
 * @param {Uint8Array|ArrayBuffer|ArrayBufferView|*} data
 * @returns {Uint8Array}
 */
export function 数据转Uint8Array(data) {
	if (data instanceof Uint8Array) return data;
	if (data instanceof ArrayBuffer) return new Uint8Array(data);
	if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
	return new Uint8Array(data || 0);
}

/**
 * 拼接多个字节数据块
 * @param {...(Uint8Array|ArrayBuffer|ArrayBufferView)} chunkList
 * @returns {Uint8Array}
 */
export function 拼接字节数据(...chunkList) {
	if (!chunkList || chunkList.length === 0) return new Uint8Array(0);
	const chunks = chunkList.map(数据转Uint8Array);
	const total = chunks.reduce((sum, c) => sum + c.byteLength, 0);
	const result = new Uint8Array(total);
	let offset = 0;
	for (const c of chunks) {
		result.set(c, offset);
		offset += c.byteLength;
	}
	return result;
}

/**
 * 获取数据的有效字节长度
 * @param {Uint8Array|ArrayBuffer|ArrayBufferView|*} data
 * @returns {number}
 */
export function 有效数据长度(data) {
	if (!data) return 0;
	if (typeof data.byteLength === 'number') return data.byteLength;
	if (typeof data.length === 'number') return data.length;
	return 0;
}
