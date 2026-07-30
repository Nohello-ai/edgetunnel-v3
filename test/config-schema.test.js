import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

import { 安全规范化配置, 规范化持久化配置, 格式化配置错误 } from '../src/config/schema.js';
import { 读取config_JSON } from '../src/config/loader.js';

const 反代字段名 = 'PROXYIP';
const 默认配置 = {
	TIME: '2026-07-28T00:00:00.000Z',
	HOST: 'example.com',
	HOSTS: ['example.com'],
	UUID: '00000000-0000-4000-8000-000000000000',
	PATH: '/',
	协议类型: 'vless',
	传输协议: 'ws',
	gRPC模式: 'gun',
	gRPCUserAgent: 'test',
	跳过证书验证: false,
	启用0RTT: false,
	TLS分片: null,
	随机路径: false,
	ECH: false,
	ECHConfig: { DNS: 'https://dns.example/dns-query', SNI: 'example.com' },
	SS: { 加密方式: 'aes-128-gcm', TLS: true },
	Fingerprint: 'chrome',
	优选订阅生成: {
		local: true,
		本地IP库: { 随机IP: true, 随机数量: 16, 指定端口: -1 },
		SUB: null,
		SUBNAME: 'edgetunnel',
		SUBUpdateTime: 3,
		TOKEN: 'token',
	},
	订阅转换配置: {
		SUBAPI: 'https://sub.example',
		SUBCONFIG: 'https://config.example',
		SUBEMOJI: false,
		SUBLIST: false,
		UDP: false,
		XUDP: false,
		TLS13: false,
		APPEND_TYPE: false,
		SORT: false,
	},
	反代: {
		[反代字段名]: 'auto',
		SOCKS5: { 启用: null, 全局: false, 账号: '', 白名单: ['*.example.com'] },
		路径模板: {
			[反代字段名]: 'proxyip={{IP:PORT}}',
			SOCKS5: { 全局: 'socks5://{{IP:PORT}}', 标准: 'socks5={{IP:PORT}}' },
			HTTP: { 全局: 'http://{{IP:PORT}}', 标准: 'http={{IP:PORT}}' },
			HTTPS: { 全局: 'https://{{IP:PORT}}', 标准: 'https={{IP:PORT}}' },
			TURN: { 全局: 'turn://{{IP:PORT}}', 标准: 'turn={{IP:PORT}}' },
		},
	},
	TG: { 启用: false, BotToken: null, ChatID: null },
	CF: {
		Email: null,
		GlobalAPIKey: null,
		AccountID: null,
		APIToken: null,
		UsageAPI: null,
		Usage: { success: false, pages: 0, workers: 0, total: 0, max: 100000 },
	},
};

test('旧版部分配置会深度补齐所有必需嵌套对象', () => {
	const result = 安全规范化配置({ UUID: 默认配置.UUID, HOST: 默认配置.HOST }, 默认配置, 反代字段名);
	assert.equal(result.success, true);
	assert.equal(result.data.订阅转换配置.SUBAPI, 默认配置.订阅转换配置.SUBAPI);
	assert.equal(result.data.反代.SOCKS5.全局, false);
	assert.equal(result.data.优选订阅生成.本地IP库.随机数量, 16);
	assert.equal(result.data.TG.启用, false);
});

test('部分嵌套配置只覆盖用户提供的字段', () => {
	const result = 安全规范化配置({
		UUID: 默认配置.UUID,
		HOST: 默认配置.HOST,
		订阅转换配置: { UDP: true },
	}, 默认配置, 反代字段名);
	assert.equal(result.success, true);
	assert.equal(result.data.订阅转换配置.UDP, true);
	assert.equal(result.data.订阅转换配置.XUDP, false);
});

test('兼容加载时会保留根级未知扩展字段', () => {
	const result = 安全规范化配置({
		UUID: 默认配置.UUID,
		HOST: 默认配置.HOST,
		自定义功能: { enabled: true },
	}, 默认配置, 反代字段名);
	assert.equal(result.success, true);
	assert.deepEqual(result.data.自定义功能, { enabled: true });
});

test('代理路径模板只输出当前支持的字段', () => {
	const result = 安全规范化配置({
		UUID: 默认配置.UUID,
		HOST: 默认配置.HOST,
		反代: { 路径模板: { 未来协议: { 全局: 'future://x', 标准: 'future=x' } } },
	}, 默认配置, 反代字段名);
	assert.equal(result.success, true);
	assert.equal(result.data.反代.路径模板.未来协议, undefined);
	assert.deepEqual(Object.keys(result.data.反代.路径模板).sort(), ['HTTP', 'HTTPS', 'PROXYIP', 'SOCKS5', 'TURN']);
});

test('未知代理类型只会被禁用而不会使整份配置回退', () => {
	const result = 安全规范化配置({
		UUID: 默认配置.UUID,
		HOST: 默认配置.HOST,
		PATH: '/kept',
		反代: { SOCKS5: { 启用: 'future' } },
	}, 默认配置, 反代字段名);
	assert.equal(result.success, true);
	assert.equal(result.data.反代.SOCKS5.启用, null);
	assert.equal(result.data.PATH, '/kept');
});

test('持久化输出剥离运行时、掩码和未知字段', () => {
	const result = 规范化持久化配置({
		...默认配置,
		LINK: 'vless://runtime-only',
		完整节点路径: '/runtime-only',
		加载时间: '1.23ms',
		自定义注入: { enabled: true },
		优选订阅生成: { ...默认配置.优选订阅生成, TOKEN: 'runtime-token' },
		TG: { 启用: true, BotToken: 'abc***xyz', ChatID: '123' },
		CF: {
			...默认配置.CF,
			GlobalAPIKey: 'abc***xyz',
			Usage: null,
		},
	}, 默认配置, 反代字段名);
	assert.equal(result.success, true);
	assert.equal(result.data.LINK, undefined);
	assert.equal(result.data.完整节点路径, undefined);
	assert.equal(result.data.加载时间, undefined);
	assert.equal(result.data.自定义注入, undefined);
	assert.equal(result.data.优选订阅生成.TOKEN, undefined);
	assert.deepEqual(result.data.TG, { 启用: true });
	assert.equal(result.data.CF, undefined);
});

test('持久化兼容管理 UI 的可空 ECH SNI 和 CF Usage', () => {
	const result = 规范化持久化配置({
		...默认配置,
		ECHConfig: { ...默认配置.ECHConfig, SNI: null },
		CF: { ...默认配置.CF, Usage: null },
	}, 默认配置, 反代字段名);
	assert.equal(result.success, true);
	assert.equal(result.data.ECHConfig.SNI, null);
	assert.equal(result.data.CF, undefined);
});

test('已知字段类型错误会返回可定位的校验信息', () => {
	const result = 安全规范化配置({
		UUID: 默认配置.UUID,
		HOST: 默认配置.HOST,
		订阅转换配置: { UDP: 'true' },
	}, 默认配置, 反代字段名);
	assert.equal(result.success, false);
	assert.deepEqual(格式化配置错误(result.error)[0].path, '订阅转换配置.UDP');
});

test('配置根节点必须是 JSON 对象', () => {
	const result = 安全规范化配置([], 默认配置, 反代字段名);
	assert.equal(result.success, false);
	assert.equal(格式化配置错误(result.error)[0].path, '$');
});

test('加载器读取只有 UUID/HOST 的旧 KV 配置时不会抛异常', async () => {
	const 原始Crypto = globalThis.crypto;
	Object.defineProperty(globalThis, 'crypto', {
		configurable: true,
		value: {
			...原始Crypto,
			subtle: {
				...原始Crypto.subtle,
				digest: async (algorithm, data) => {
					if (String(algorithm).toUpperCase() !== 'MD5') return 原始Crypto.subtle.digest(algorithm, data);
					const digest = createHash('md5').update(new Uint8Array(data)).digest();
					return digest.buffer.slice(digest.byteOffset, digest.byteOffset + digest.byteLength);
				},
			},
		},
	});

	const storage = new Map([
		['config.json', JSON.stringify({ UUID: 默认配置.UUID, HOST: 默认配置.HOST })],
	]);
	const env = {
		KV: {
			get: async key => storage.get(key) ?? null,
			put: async (key, value) => storage.set(key, value),
		},
	};

	try {
		const config = await 读取config_JSON(env, 默认配置.HOST, 默认配置.UUID, 'schema-test');
		assert.equal(config.订阅转换配置.UDP, false);
		assert.equal(config.反代.SOCKS5.全局, false);
		assert.equal(config.优选订阅生成.本地IP库.随机数量, 16);
		assert.equal(config.TG.启用, false);
		assert.match(config.LINK, /^vless:\/\//);
	} finally {
		Object.defineProperty(globalThis, 'crypto', { configurable: true, value: 原始Crypto });
	}
});

test('加载器接受旧配置中的空 ECH SNI', async () => {
	const 原始Crypto = globalThis.crypto;
	Object.defineProperty(globalThis, 'crypto', {
		configurable: true,
		value: {
			...原始Crypto,
			subtle: {
				...原始Crypto.subtle,
				digest: async (algorithm, data) => {
					if (String(algorithm).toUpperCase() !== 'MD5') return 原始Crypto.subtle.digest(algorithm, data);
					const digest = createHash('md5').update(new Uint8Array(data)).digest();
					return digest.buffer.slice(digest.byteOffset, digest.byteOffset + digest.byteLength);
				},
			},
		},
	});
	const env = {
		KV: {
			get: async key => key === 'config.json' ? JSON.stringify({
				UUID: 默认配置.UUID,
				HOST: 默认配置.HOST,
				ECHConfig: { SNI: null },
			}) : null,
			put: async () => {},
		},
	};

	try {
		const config = await 读取config_JSON(env, 默认配置.HOST, 默认配置.UUID, 'schema-test-null-sni');
		assert.equal(config.ECHConfig.SNI, null);
		assert.equal(config.订阅转换配置.UDP, false);
	} finally {
		Object.defineProperty(globalThis, 'crypto', { configurable: true, value: 原始Crypto });
	}
});
