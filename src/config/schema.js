import * as z from 'zod/mini';

const 危险对象键 = new Set(['__proto__', 'prototype', 'constructor']);

function 是普通对象(value) {
	return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * 用默认配置深度补齐旧配置，同时保留未来版本或用户自定义的未知字段。
 */
export function 深度补齐配置(默认值, 用户值) {
	if (!是普通对象(默认值) || !是普通对象(用户值)) return 用户值 === undefined ? 默认值 : 用户值;

	const result = { ...默认值 };
	for (const key of Object.keys(用户值)) {
		if (危险对象键.has(key)) continue;
		const 用户字段 = 用户值[key];
		result[key] = 是普通对象(默认值[key]) && 是普通对象(用户字段)
			? 深度补齐配置(默认值[key], 用户字段)
			: 用户字段;
	}
	return result;
}

const 非空字符串 = z.string().check(z.minLength(1));
const 可空字符串 = z.nullable(z.string());
const 代理路径模板字段 = {
	全局: z.string(),
	标准: z.string(),
};

function 对象Schema(shape, 保留未知字段) {
	return 保留未知字段 ? z.looseObject(shape) : z.object(shape);
}

function 创建配置Schema(反代字段名, { 保留未知字段 = true, 持久化 = false } = {}) {
	const object = shape => 对象Schema(shape, 保留未知字段);
	const 代理路径模板Schema = object(代理路径模板字段);
	const 优选订阅生成字段 = {
		local: z.boolean(),
		本地IP库: object({
			随机IP: z.boolean(),
			随机数量: z.number().check(z.int(), z.minimum(0)),
			指定端口: z.number().check(z.int(), z.minimum(-1), z.maximum(65535)),
		}),
		SUB: 可空字符串,
		SUBNAME: 非空字符串,
		SUBUpdateTime: z.number().check(z.positive()),
	};
	if (!持久化) 优选订阅生成字段.TOKEN = 非空字符串;

	const 配置字段 = {
		TIME: z.string(),
		HOST: 非空字符串,
		HOSTS: z.array(非空字符串),
		UUID: 非空字符串,
		PATH: 非空字符串,
		协议类型: 非空字符串,
		传输协议: 非空字符串,
		gRPC模式: 非空字符串,
		gRPCUserAgent: z.string(),
		跳过证书验证: z.boolean(),
		启用0RTT: z.boolean(),
		TLS分片: 可空字符串,
		随机路径: z.boolean(),
		ECH: z.boolean(),
		ECHConfig: object({
			DNS: 非空字符串,
			SNI: 可空字符串,
		}),
		SS: object({
			加密方式: 非空字符串,
			TLS: z.boolean(),
		}),
		Fingerprint: 非空字符串,
		优选订阅生成: object(优选订阅生成字段),
		订阅转换配置: object({
			SUBAPI: 非空字符串,
			SUBCONFIG: 非空字符串,
			SUBEMOJI: z.boolean(),
			SUBLIST: z.boolean(),
			UDP: z.boolean(),
			XUDP: z.boolean(),
			TLS13: z.boolean(),
			APPEND_TYPE: z.boolean(),
			SORT: z.boolean(),
		}),
		反代: object({
			[反代字段名]: 非空字符串,
			SOCKS5: object({
				启用: 可空字符串,
				全局: z.boolean(),
				账号: z.string(),
				白名单: z.array(z.string()),
			}),
			路径模板: object({
				[反代字段名]: 非空字符串,
				SOCKS5: 代理路径模板Schema,
				HTTP: 代理路径模板Schema,
				HTTPS: 代理路径模板Schema,
				TURN: 代理路径模板Schema,
				SSTP: 代理路径模板Schema,
			}),
		}),
		TG: object(持久化 ? {
			启用: z.boolean(),
		} : {
			启用: z.boolean(),
			BotToken: 可空字符串,
			ChatID: 可空字符串,
		}),
	};

	if (!持久化) {
		配置字段.CF = object({
			Email: 可空字符串,
			GlobalAPIKey: 可空字符串,
			AccountID: 可空字符串,
			APIToken: 可空字符串,
			UsageAPI: 可空字符串,
			Usage: z.nullable(object({
				success: z.boolean(),
				pages: z.number(),
				workers: z.number(),
				total: z.number(),
				max: z.number(),
			})),
		});
	}

	return object(配置字段);
}

export function 安全规范化配置(用户配置, 默认配置, 反代字段名) {
	if (!是普通对象(用户配置)) {
		return {
			success: false,
			error: { issues: [{ code: 'custom', path: [], message: '配置必须是 JSON 对象' }] },
		};
	}

	return 创建配置Schema(反代字段名).safeParse(深度补齐配置(默认配置, 用户配置));
}

/**
 * 生成写入 config.json 的白名单对象。运行时派生字段、用量信息、掩码凭据和未知输入均会被剥离。
 */
export function 规范化持久化配置(用户配置, 默认配置, 反代字段名) {
	if (!是普通对象(用户配置)) {
		return {
			success: false,
			error: { issues: [{ code: 'custom', path: [], message: '配置必须是 JSON 对象' }] },
		};
	}

	return 创建配置Schema(反代字段名, { 保留未知字段: false, 持久化: true })
		.safeParse(深度补齐配置(默认配置, 用户配置));
}

export function 格式化配置错误(error) {
	return error.issues.map(issue => ({
		path: issue.path.length ? issue.path.join('.') : '$',
		message: issue.message,
	}));
}
