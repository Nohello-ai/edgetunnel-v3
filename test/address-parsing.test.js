import test from 'node:test';
import assert from 'node:assert/strict';

import { 安全解码URIComponent, 解析主机端口, 解析端口 } from '../src/net/address.js';
import { 解析地址端口字符串 } from '../src/net/address-resolver.js';
import { 反代参数获取, 获取SOCKS5账号 } from '../src/net/proxy.js';
import { base64SecretEncode } from '../src/utils/base64.js';

test('非法百分号编码保留原文且代理路径解析不抛出', async () => {
	assert.equal(安全解码URIComponent('%E0%A4%A'), '%E0%A4%A');
	const url = new URL('https://example.com/proxyip=%E0%A4%A');
	const result = await 反代参数获取(url, '00000000-0000-4000-8000-000000000000');
	assert.equal(result.反代IP, '%e0%a4%a');
});

test('统一解析域名、IPv4 和方括号 IPv6 端口', () => {
	for (const [input, hostname, port] of [
		['example.com', 'example.com', 443],
		['example.com:8080', 'example.com', 8080],
		['192.0.2.1:80', '192.0.2.1', 80],
		['[2001:db8::1]', '[2001:db8::1]', 443],
		['[2001:db8::1]:8443', '[2001:db8::1]', 8443],
	]) {
		assert.deepEqual(解析主机端口(input), { hostname, port });
		assert.deepEqual(解析地址端口字符串(input), [hostname, port]);
	}
});

test('严格拒绝非法、混杂和越界端口', () => {
	for (const input of ['example.com:', 'example.com:80abc', 'example.com:1e3', 'example.com:+80', 'example.com:0', 'example.com:65536', 'example.com:-1', '[2001:db8::1]:x', '2001:db8::1', '999.1.1.1:80']) {
		assert.throws(() => 解析主机端口(input));
		assert.throws(() => 获取SOCKS5账号(input));
	}
	for (const port of ['', '1e3', '+80', '0', '65536']) assert.throws(() => 解析端口(port));
});

test('代理账号保留密码中的冒号并解码认证字段', () => {
	assert.deepEqual(获取SOCKS5账号('user:pass:word@example.com:1080'), {
		username: 'user', password: 'pass:word', hostname: 'example.com', port: 1080
	});
	assert.deepEqual(获取SOCKS5账号('user%40name:p%3Ass@[2001:db8::1]:1080'), {
		username: 'user@name', password: 'p:ss', hostname: '[2001:db8::1]', port: 1080
	});
});

test('自定义路径 proxyip 与 socks5 语法保持兼容', async () => {
	const proxy = await 反代参数获取(new URL('https://example.com/base/proxyip=proxy.example:8443'), 'uuid');
	assert.equal(proxy.反代IP, 'proxy.example:8443');
	const socks = await 反代参数获取(new URL('https://example.com/base/socks5=user:pass@[2001:db8::1]:1080'), 'uuid');
	assert.equal(socks.代理类型, 'socks5');
	assert.deepEqual(socks.代理参数, { username: 'user', password: 'pass', hostname: '[2001:db8::1]', port: 1080 });
});

test('链式代理 JSON 严格验证主机和端口', async () => {
	const uuid = 'test-secret';
	const valid = base64SecretEncode(JSON.stringify({ type: 'socks5', hostname: '[2001:db8::1]', port: 1080 }), uuid);
	const result = await 反代参数获取(new URL(`https://example.com/video/${encodeURIComponent(valid)}`), uuid);
	assert.deepEqual(result.代理参数, { username: undefined, password: undefined, hostname: '[2001:db8::1]', port: 1080 });

	const invalid = base64SecretEncode(JSON.stringify({ type: 'socks5', hostname: 'bad host', port: 1080 }), uuid);
	const rejected = await 反代参数获取(new URL(`https://example.com/video/${encodeURIComponent(invalid)}`), uuid);
	assert.equal(rejected.代理类型, null);
});
