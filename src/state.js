/**
 * 全局可变状态模块
 * Cloudflare Workers 的 isolate 内跨请求共享的可变状态
 */

// 全局配置缓存
export let config_JSON = null;

// SOCKS5 白名单缓存
export let 缓存SOCKS5白名单 = null;

// 调试日志开关
export let 调试日志打印 = false;

// SOCKS5 白名单默认值
export let SOCKS5白名单 = [
	'*tapecontent.net',
	'*cloudatacdn.com',
	'*loadshare.org',
	'*cdn-centaurus.com',
	'scholar.google.com'
];

// 并发拨号参数
export let TCP并发拨号数 = 2;
export let 反代并发拨号数 = 1;
export let 预加载竞速拨号 = false;

// 身份推导缓存（密码/UUID/KEY 未变时跨请求复用）
let 身份缓存键 = null;
let 身份缓存值 = null;

// HOST 列表缓存
let HOST缓存键 = null;
let HOST缓存值 = null;

// 更新函数
/** @deprecated 配置请用请求局部变量，勿再写入全局 */
export function setConfig_JSON(value) { config_JSON = value; }
/** @deprecated 配置请用请求局部变量 */
export function getConfig_JSON() { return config_JSON; }

export function set缓存SOCKS5白名单(value) { 缓存SOCKS5白名单 = value; }
export function get缓存SOCKS5白名单() { return 缓存SOCKS5白名单; }

export function set调试日志打印(value) { 调试日志打印 = value; }
export function get调试日志打印() { return 调试日志打印; }

export function setSOCKS5白名单(value) { SOCKS5白名单 = value; }
export function getSOCKS5白名单() { return SOCKS5白名单; }

export function setTCP并发拨号数(value) { TCP并发拨号数 = value; }
export function getTCP并发拨号数() { return TCP并发拨号数; }

export function set反代并发拨号数(value) { 反代并发拨号数 = value; }
export function get反代并发拨号数() { return 反代并发拨号数; }

export function set预加载竞速拨号(value) { 预加载竞速拨号 = value; }
export function get预加载竞速拨号() { return 预加载竞速拨号; }

/**
 * 缓存用户身份（userID / MD5），env 相关字段不变时直接复用
 * @param {string} 缓存键
 * @param {() => Promise<{userID: string, userIDMD5: string}>} 计算函数
 */
export async function 获取缓存身份(缓存键, 计算函数) {
	if (身份缓存键 === 缓存键 && 身份缓存值) return 身份缓存值;
	const 结果 = await 计算函数();
	身份缓存键 = 缓存键;
	身份缓存值 = 结果;
	return 结果;
}

/**
 * 缓存 env.HOST 解析结果
 * @param {string|undefined|null} hostEnv
 * @param {() => Promise<string[]>} 计算函数
 */
export async function 获取缓存HOST列表(hostEnv, 计算函数) {
	const 键 = hostEnv == null ? '' : String(hostEnv);
	if (HOST缓存键 === 键 && HOST缓存值) return HOST缓存值;
	const 结果 = await 计算函数();
	HOST缓存键 = 键;
	HOST缓存值 = 结果;
	return 结果;
}
