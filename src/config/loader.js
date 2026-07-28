/**
 * 配置加载器
 */
import { 特征码字典 } from '../constants.js';
import { MD5MD5 } from '../utils/crypto.js';
import { getCloudflareUsage } from '../utils/cloudflare.js';
import { 获取传输协议配置, 获取传输路径参数值 } from '../net/proxy.js';
import { 整理成数组, 掩码敏感信息 } from '../utils/misc.js';
import { getSOCKS5白名单 } from '../state.js';
import { 安全规范化配置, 格式化配置错误 } from './schema.js';

export async function 读取config_JSON(env, hostname, userID, UA = "Mozilla/5.0", 重置配置 = false) {
	let config_JSON;
	const _p = 特征码字典[0];
	const host = hostname, Ali_DoH = "https://dns.alidns.com/dns-query", ECH_SNI = "cloudflare-ech.com", 占位符 = '{{IP:PORT}}', 初始化开始时间 = performance.now(), 默认配置JSON = {
		TIME: new Date().toISOString(),
		HOST: host,
		HOSTS: [hostname],
		UUID: userID,
		PATH: "/",
		协议类型: "v" + "le" + "ss",
		传输协议: "ws",
		gRPC模式: "gun",
		gRPCUserAgent: UA,
		跳过证书验证: false,
		启用0RTT: false,
		TLS分片: null,
		随机路径: false,
		ECH: false,
		ECHConfig: {
			DNS: Ali_DoH,
			SNI: ECH_SNI,
		},
		SS: {
			加密方式: "aes-128-gcm",
			TLS: true,
		},
		Fingerprint: "chrome",
		优选订阅生成: {
			local: true, // true: 基于本地的优选地址  false: 优选订阅生成器
			本地IP库: {
				随机IP: true, // 当 随机IP 为true时生效，启用随机IP的数量，否则使用KV内的ADD.txt
				随机数量: 16,
				指定端口: -1,
			},
			SUB: null,
			SUBNAME: "edge" + "tunnel",
			SUBUpdateTime: 3, // 订阅更新时间（小时）
			TOKEN: await MD5MD5(hostname + userID),
		},
		订阅转换配置: {
			SUBAPI: `https://SUBAPI.${特征码字典[1]}ssss.net`,
			SUBCONFIG: `https://raw.githubusercontent.com/${特征码字典[1]}/ACL4SSR/refs/heads/main/Clash/config/ACL4SSR_Online_Mini_MultiMode_CF.ini`,
			SUBEMOJI: false,
			SUBLIST: false, //仅输出节点信息
			UDP: false, // 启用 UDP
			XUDP: false, // 启用 XUDP
			TLS13: false, // 启用 TLS 1.3
			APPEND_TYPE: false, // 插入节点类型
			SORT: false, // 基础节点排序
		},
		反代: {
			[_p]: "auto",
			SOCKS5: {
				启用: null,
				全局: false,
				账号: '',
				白名单: getSOCKS5白名单(),
			},
			路径模板: {
				[_p]: "proxyip=" + 占位符,
				SOCKS5: {
					全局: "socks5://" + 占位符,
					标准: "socks5=" + 占位符
				},
				HTTP: {
					全局: "http://" + 占位符,
					标准: "http=" + 占位符
				},
				HTTPS: {
					全局: "https://" + 占位符,
					标准: "https=" + 占位符
				},
				TURN: {
					全局: "turn://" + 占位符,
					标准: "turn=" + 占位符
				},
				SSTP: {
					全局: "sstp://" + 占位符,
					标准: "sstp=" + 占位符
				},
			},
		},
		TG: {
			启用: false,
			BotToken: null,
			ChatID: null,
		},
		CF: {
			Email: null,
			GlobalAPIKey: null,
			AccountID: null,
			APIToken: null,
			UsageAPI: null,
			Usage: {
				success: false,
				pages: 0,
				workers: 0,
				total: 0,
				max: 100000,
			},
		}
	};

	try {
		let configJSON = await env.KV.get('config.json');
		if (!configJSON || 重置配置 == true) {
			await env.KV.put('config.json', JSON.stringify(默认配置JSON, null, 2));
			config_JSON = 默认配置JSON;
		} else {
			config_JSON = JSON.parse(configJSON);
		}
	} catch (error) {
		console.error(`读取config_JSON出错: ${error.message}`);
		config_JSON = 默认配置JSON;
	}

	const 配置校验结果 = 安全规范化配置(config_JSON, 默认配置JSON, _p);
	if (配置校验结果.success) {
		config_JSON = 配置校验结果.data;
	} else {
		console.error('config.json 配置校验失败，已回退到默认配置:', JSON.stringify(格式化配置错误(配置校验结果.error)));
		config_JSON = 默认配置JSON;
	}

	if (!config_JSON.订阅转换配置.SUBLIST) config_JSON.订阅转换配置.SUBLIST = false;
	if (!config_JSON.订阅转换配置.UDP) config_JSON.订阅转换配置.UDP = false;
	if (!config_JSON.订阅转换配置.XUDP) config_JSON.订阅转换配置.XUDP = false;
	if (!config_JSON.订阅转换配置.TLS13) config_JSON.订阅转换配置.TLS13 = false;
	if (!config_JSON.订阅转换配置.APPEND_TYPE) config_JSON.订阅转换配置.APPEND_TYPE = false;
	if (!config_JSON.订阅转换配置.SORT) config_JSON.订阅转换配置.SORT = false;
	if (!config_JSON.gRPCUserAgent) config_JSON.gRPCUserAgent = UA;
	config_JSON.HOST = host;
	if (!config_JSON.HOSTS) config_JSON.HOSTS = [hostname];
	if (env.HOST) config_JSON.HOSTS = (await 整理成数组(env.HOST)).map(h => h.toLowerCase().replace(/^https?:\/\//, '').split('/')[0].split(':')[0]);
	config_JSON.UUID = userID;
	if (!config_JSON.随机路径) config_JSON.随机路径 = false;
	if (!config_JSON.启用0RTT) config_JSON.启用0RTT = false;

	if (env.PATH) config_JSON.PATH = env.PATH.startsWith('/') ? env.PATH : '/' + env.PATH;
	else if (!config_JSON.PATH) config_JSON.PATH = '/';

	if (!config_JSON.gRPC模式) config_JSON.gRPC模式 = 'gun';
	if (!config_JSON.SS) config_JSON.SS = { 加密方式: "aes-128-gcm", TLS: false };

	if (!config_JSON.反代.路径模板?.[_p]) {
		config_JSON.反代.路径模板 = {
			[_p]: "proxyip=" + 占位符,
			SOCKS5: {
				全局: "socks5://" + 占位符,
				标准: "socks5=" + 占位符
			},
			HTTP: {
				全局: "http://" + 占位符,
				标准: "http=" + 占位符
			},
			HTTPS: {
				全局: "https://" + 占位符,
				标准: "https=" + 占位符
			},
			TURN: {
				全局: "turn://" + 占位符,
				标准: "turn=" + 占位符
			},
			SSTP: {
				全局: "sstp://" + 占位符,
				标准: "sstp=" + 占位符
			},
		};
	}
	if (!config_JSON.反代.路径模板.HTTPS) config_JSON.反代.路径模板.HTTPS = { 全局: "https://" + 占位符, 标准: "https=" + 占位符 };
	if (!config_JSON.反代.路径模板.TURN) config_JSON.反代.路径模板.TURN = { 全局: "turn://" + 占位符, 标准: "turn=" + 占位符 };
	if (!config_JSON.反代.路径模板.SSTP) config_JSON.反代.路径模板.SSTP = { 全局: "sstp://" + 占位符, 标准: "sstp=" + 占位符 };

	const 代理配置 = config_JSON.反代.路径模板[config_JSON.反代.SOCKS5.启用?.toUpperCase()];

	let 路径反代参数 = '';
	if (代理配置 && config_JSON.反代.SOCKS5.账号) 路径反代参数 = (config_JSON.反代.SOCKS5.全局 ? 代理配置.全局 : 代理配置.标准).replace(占位符, config_JSON.反代.SOCKS5.账号);
	else if (config_JSON.反代[_p] !== 'auto') 路径反代参数 = config_JSON.反代.路径模板[_p].replace(占位符, config_JSON.反代[_p]);

	let 反代查询参数 = '';
	if (路径反代参数.includes('?')) {
		const [反代路径部分, 反代查询部分] = 路径反代参数.split('?');
		路径反代参数 = 反代路径部分;
		反代查询参数 = 反代查询部分;
	}

	config_JSON.PATH = config_JSON.PATH.replace(路径反代参数, '').replace('//', '/');
	const normalizedPath = config_JSON.PATH === '/' ? '' : config_JSON.PATH.replace(/\/+(?=\?|$)/, '').replace(/\/+$/, '');
	const [路径部分, ...查询数组] = normalizedPath.split('?');
	const 查询部分 = 查询数组.length ? '?' + 查询数组.join('?') : '';
	const 最终查询部分 = 反代查询参数 ? (查询部分 ? 查询部分 + '&' + 反代查询参数 : '?' + 反代查询参数) : 查询部分;
	config_JSON.完整节点路径 = (路径部分 || '/') + (路径部分 && 路径反代参数 ? '/' : '') + 路径反代参数 + 最终查询部分 + (config_JSON.启用0RTT ? (最终查询部分 ? '&' : '?') + 'ed=2560' : '');

	if (!config_JSON.TLS分片 && config_JSON.TLS分片 !== null) config_JSON.TLS分片 = null;
	const TLS分片参数 = config_JSON.TLS分片 == 'Shadowrocket' ? `&fragment=${encodeURIComponent('1,40-60,30-50,tlshello')}` : config_JSON.TLS分片 == 'Happ' ? `&fragment=${encodeURIComponent('3,1,tlshello')}` : '';
	if (!config_JSON.Fingerprint) config_JSON.Fingerprint = "chrome";
	if (!config_JSON.ECH) config_JSON.ECH = false;
	if (!config_JSON.ECHConfig) config_JSON.ECHConfig = { DNS: Ali_DoH, SNI: ECH_SNI };
	const ECHLINK参数 = config_JSON.ECH ? `&ech=${encodeURIComponent((config_JSON.ECHConfig.SNI ? config_JSON.ECHConfig.SNI + '+' : '') + config_JSON.ECHConfig.DNS)}` : '';
	const { type: 传输协议, 路径字段名, 域名字段名 } = 获取传输协议配置(config_JSON);
	const 传输路径参数值 = 获取传输路径参数值(config_JSON, config_JSON.完整节点路径);
	config_JSON.LINK = config_JSON.协议类型 === 'ss'
		? `${config_JSON.协议类型}://${btoa(config_JSON.SS.加密方式 + ':' + userID)}@${host}:${config_JSON.SS.TLS ? '443' : '80'}?plugin=v2${encodeURIComponent(`ray-plugin;mode=websocket;host=${host};path=${((config_JSON.完整节点路径.includes('?') ? config_JSON.完整节点路径.replace('?', '?enc=' + config_JSON.SS.加密方式 + '&') : (config_JSON.完整节点路径 + '?enc=' + config_JSON.SS.加密方式)) + (config_JSON.SS.TLS ? ';tls' : ''))};mux=0`) + ECHLINK参数}#${encodeURIComponent(config_JSON.优选订阅生成.SUBNAME)}`
		: `${config_JSON.协议类型}://${userID}@${host}:443?security=tls&type=${传输协议 + ECHLINK参数}&${域名字段名}=${host}&fp=${config_JSON.Fingerprint}&sni=${host}&${路径字段名}=${encodeURIComponent(传输路径参数值) + TLS分片参数}&encryption=none#${encodeURIComponent(config_JSON.优选订阅生成.SUBNAME)}`;
	config_JSON.优选订阅生成.TOKEN = await MD5MD5(hostname + userID);

	const 初始化TG_JSON = { BotToken: null, ChatID: null };
	config_JSON.TG = { 启用: config_JSON.TG.启用 ? config_JSON.TG.启用 : false, ...初始化TG_JSON };
	try {
		const TG_TXT = await env.KV.get('tg.json');
		if (!TG_TXT) {
			await env.KV.put('tg.json', JSON.stringify(初始化TG_JSON, null, 2));
		} else {
			const TG_JSON = JSON.parse(TG_TXT);
			config_JSON.TG.ChatID = TG_JSON.ChatID ? TG_JSON.ChatID : null;
			config_JSON.TG.BotToken = TG_JSON.BotToken ? 掩码敏感信息(TG_JSON.BotToken) : null;
		}
	} catch (error) {
		console.error(`读取tg.json出错: ${error.message}`);
	}

	const 初始化CF_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
	config_JSON.CF = { ...初始化CF_JSON, Usage: { success: false, pages: 0, workers: 0, total: 0, max: 100000 } };
	try {
		const CF_TXT = await env.KV.get('cf.json');
		if (!CF_TXT) {
			await env.KV.put('cf.json', JSON.stringify(初始化CF_JSON, null, 2));
		} else {
			const CF_JSON = JSON.parse(CF_TXT);
			if (CF_JSON.UsageAPI) {
				try {
					const response = await fetch(CF_JSON.UsageAPI);
					const Usage = await response.json();
					config_JSON.CF.Usage = Usage;
				} catch (err) {
					console.error(`请求 CF_JSON.UsageAPI 失败: ${err.message}`);
				}
			} else {
				config_JSON.CF.Email = CF_JSON.Email ? CF_JSON.Email : null;
				config_JSON.CF.GlobalAPIKey = CF_JSON.GlobalAPIKey ? 掩码敏感信息(CF_JSON.GlobalAPIKey) : null;
				config_JSON.CF.AccountID = CF_JSON.AccountID ? 掩码敏感信息(CF_JSON.AccountID) : null;
				config_JSON.CF.APIToken = CF_JSON.APIToken ? 掩码敏感信息(CF_JSON.APIToken) : null;
				config_JSON.CF.UsageAPI = null;
				const Usage = await getCloudflareUsage(CF_JSON.Email, CF_JSON.GlobalAPIKey, CF_JSON.AccountID, CF_JSON.APIToken);
				config_JSON.CF.Usage = Usage;
			}
		}
	} catch (error) {
		console.error(`读取cf.json出错: ${error.message}`);
	}

	config_JSON.加载时间 = (performance.now() - 初始化开始时间).toFixed(2) + 'ms';
	return config_JSON;
}
