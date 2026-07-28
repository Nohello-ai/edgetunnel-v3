/**
 * 网络地址工具函数
 */

/**
 * 去除 IPv6 方括号
 * @param {string} hostname
 * @returns {string}
 */
export function stripIPv6Brackets(hostname = '') {
	const host = String(hostname || '').trim();
	return host.startsWith('[') && host.endsWith(']') ? host.slice(1, -1) : host;
}

export function 安全解码URIComponent(value = '') {
	const text = String(value ?? '');
	try { return decodeURIComponent(text) }
	catch { return text }
}

export function 解析端口(value, 字段名 = '端口号') {
	const text = String(value ?? '');
	if (!/^\d{1,5}$/.test(text)) throw new Error(`${字段名}必须是 1 到 65535 的整数`);
	const port = Number(text);
	if (port < 1 || port > 65535) throw new Error(`${字段名}必须是 1 到 65535 的整数`);
	return port;
}

export function 解析主机端口(value, 默认端口 = 443) {
	const input = String(value ?? '').trim();
	if (!input) throw new Error('地址不能为空');
	let hostname;
	let portText = null;
	const bracketedIPv6 = input.startsWith('[');
	if (bracketedIPv6) {
		const match = input.match(/^(\[[^\]]+\])(?::(\d+))?$/);
		if (!match || !isIPHostname(match[1])) throw new Error('IPv6 地址格式无效');
		[, hostname, portText = null] = match;
	} else {
		const colonCount = (input.match(/:/g) || []).length;
		if (colonCount > 1) throw new Error('IPv6 地址必须使用方括号');
		if (colonCount === 1) [hostname, portText] = input.split(':');
		else hostname = input;
	}
	if (!hostname) throw new Error('主机名不能为空');
	if (!bracketedIPv6 && /\s|[/@?#\[\]]/.test(hostname)) throw new Error('主机名格式无效');
	if (/^[\d.]+$/.test(hostname) && !isIPv4(hostname)) throw new Error('IPv4 地址格式无效');
	const port = portText === null ? 解析端口(默认端口) : 解析端口(portText);
	return { hostname, port };
}

/**
 * 判断是否为 IP 地址
 * @param {string} hostname
 * @returns {boolean}
 */
export function isIPHostname(hostname = '') {
	const host = stripIPv6Brackets(hostname);
	const ipv4Regex = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
	if (ipv4Regex.test(host)) return true;
	if (!host.includes(':')) return false;
	try {
		new URL(`http://[${host}]/`);
		return true;
	} catch (e) {
		return false;
	}
}

/**
 * 判断是否为 IPv4 地址
 * @param {string} value
 * @returns {boolean}
 */
export function isIPv4(value) {
	const parts = String(value || '').split('.');
	return parts.length === 4 && parts.every(part => /^\d{1,3}$/.test(part) && Number(part) >= 0 && Number(part) <= 255);
}
