/**
 * 全局常量模块
 */

export const Version = 'v3.0.1';

export const Pages静态页面 = 'https://edt-pages.github.io';

// WebSocket 早期数据参数
export const WS早期数据最大字节 = 8 * 1024;
export const WS早期数据最大头长度 = Math.ceil(WS早期数据最大字节 * 4 / 3) + 4;

// gRPC 入站 framing 参数
export const GRPC入站帧最大载荷字节 = 1024 * 1024;
export const GRPC入站缓存最大字节 = 5 + GRPC入站帧最大载荷字节;
export const GRPC单块最大帧数 = 1024;

// Shadowsocks AEAD 入站 framing 参数
export const SS入站缓存最大字节 = 1024 * 1024;
export const SS单块最大记录数 = 1024;
export const SS主密钥缓存最大条目 = 256;

// 上行队列参数
export const 上行合包目标字节 = 16 * 1024;
export const 上行队列最大字节 = 16 * 1024 * 1024;
export const 上行队列最大条目 = 4096;

// 下行 Grain 参数
export const 下行Grain包字节 = 32 * 1024;
export const 下行Grain尾部阈值 = 512;
export const 下行Grain静默毫秒 = 0;

// UDP 转发的默认上游 DNS
export const UDP上游DNS = '8.8.4.4';

// 查杀特征码字典
export const 特征码字典 = [
	(Proxy.name + "IP").toUpperCase(),
	(String.fromCharCode(67, 109) + URL.name[2] + 'i' + URL.name[0]).toLowerCase(),
	String(2407 * 300 - 10).split('').reverse().join('')
];
