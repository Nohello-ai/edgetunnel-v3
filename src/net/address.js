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
