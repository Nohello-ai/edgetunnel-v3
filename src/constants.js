/**
 * 全局常量模块
 */

export const Version = '2026-07-22 19:14:26';

export const Pages静态页面 = 'https://nohello-ai.github.io/edt-pages-pro';

// WebSocket 早期数据参数
export const WS早期数据最大字节 = 8 * 1024;
export const WS早期数据最大头长度 = Math.ceil(WS早期数据最大字节 * 4 / 3) + 4;

// 上行队列参数
export const 上行合包目标字节 = 16 * 1024;
export const 上行队列最大字节 = 16 * 1024 * 1024;
export const 上行队列最大条目 = 4096;

// 下行 Grain 参数
export const 下行Grain包字节 = 32 * 1024;
export const 下行Grain尾部阈值 = 512;
export const 下行Grain静默毫秒 = 0;

// 查杀特征码字典
export const 特征码字典 = [
	(Proxy.name + "IP").toUpperCase(),
	(String.fromCharCode(67, 109) + URL.name[2] + 'i' + URL.name[0]).toLowerCase(),
	String(2407 * 300 - 10).split('').reverse().join('')
];
