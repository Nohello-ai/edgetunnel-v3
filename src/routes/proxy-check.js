/**
 * 管理后台代理连通性检测
 */
import { 拼接字节数据 } from '../utils/bytes.js';
import { 获取SOCKS5账号, 获取代理默认端口 } from '../net/proxy.js';
import { 创建请求TCP连接器 } from '../connector/factory.js';
import { socks5Connect } from '../connector/socks5.js';
import { httpConnect } from '../connector/http.js';
import { httpsConnect } from '../connector/https.js';
import { turnConnect } from '../connector/turn.js';
import { sstpConnect } from '../connector/sstp.js';
import { TlsClient } from '../tls/client.js';
import { isIPHostname } from '../net/address.js';

/**
 * @param {Request} request
 * @param {URL} url
 * @returns {Promise<Response>}
 */
export async function 处理代理检测(request, url) {
	const 代理协议 = ['socks5', 'http', 'https', 'turn', 'sstp'].find(类型 => url.searchParams.has(类型)) || null;
	if (!代理协议) return new Response(JSON.stringify({ error: '缺少代理参数' }), { status: 400, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
	const 代理参数 = url.searchParams.get(代理协议);
	const startTime = Date.now();
	let 检测代理响应;
	try {
		const checkParsed = await 获取SOCKS5账号(代理参数, 获取代理默认端口(代理协议));
		const { username, password, hostname, port } = checkParsed;
		const 完整代理参数 = username && password ? `${username}:${password}@${hostname}:${port}` : `${hostname}:${port}`;
		try {
			const 检测主机 = 'cloudflare.com', 检测端口 = 443, encoder = new TextEncoder(), decoder = new TextDecoder();
			const TCP连接 = 创建请求TCP连接器(request);
			let tcpSocket = null, tlsSocket = null;
			try {
				tcpSocket = 代理协议 === 'socks5'
					? await socks5Connect(检测主机, 检测端口, new Uint8Array(0), TCP连接, checkParsed)
					: 代理协议 === 'turn'
						? await turnConnect(checkParsed, 检测主机, 检测端口, TCP连接)
						: 代理协议 === 'sstp'
							? await sstpConnect(checkParsed, 检测主机, 检测端口, TCP连接)
							: (代理协议 === 'https' && isIPHostname(hostname)
								? await httpsConnect(检测主机, 检测端口, new Uint8Array(0), TCP连接, checkParsed)
								: await httpConnect(检测主机, 检测端口, new Uint8Array(0), 代理协议 === 'https', TCP连接, checkParsed));
				if (!tcpSocket) throw new Error('无法连接到代理服务器');
				tlsSocket = new TlsClient(tcpSocket, { serverName: 检测主机, insecure: true });
				await tlsSocket.handshake();
				await tlsSocket.write(encoder.encode(`GET /cdn-cgi/trace HTTP/1.1\r\nHost: ${检测主机}\r\nUser-Agent: Mozilla/5.0\r\nConnection: close\r\n\r\n`));
				let responseBuffer = new Uint8Array(0), headerEndIndex = -1, contentLength = null, chunked = false;
				const 最大响应字节 = 64 * 1024;
				while (responseBuffer.length < 最大响应字节) {
					const value = await tlsSocket.read();
					if (!value) break;
					if (value.byteLength === 0) continue;
					responseBuffer = 拼接字节数据(responseBuffer, value);
					if (headerEndIndex === -1) {
						const crlfcrlf = responseBuffer.findIndex((_, i) => i < responseBuffer.length - 3 && responseBuffer[i] === 0x0d && responseBuffer[i + 1] === 0x0a && responseBuffer[i + 2] === 0x0d && responseBuffer[i + 3] === 0x0a);
						if (crlfcrlf !== -1) {
							headerEndIndex = crlfcrlf + 4;
							const headers = decoder.decode(responseBuffer.slice(0, headerEndIndex));
							const statusLine = headers.split('\r\n')[0] || '';
							const statusMatch = statusLine.match(/HTTP\/\d\.\d\s+(\d+)/);
							const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
							if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300) throw new Error(`代理检测请求失败: ${statusLine || '无效响应'}`);
							const lengthMatch = headers.match(/\r\nContent-Length:\s*(\d+)/i);
							if (lengthMatch) contentLength = parseInt(lengthMatch[1], 10);
							chunked = /\r\nTransfer-Encoding:\s*chunked/i.test(headers);
						}
					}
					if (headerEndIndex !== -1 && contentLength !== null && responseBuffer.length >= headerEndIndex + contentLength) break;
					if (headerEndIndex !== -1 && chunked && decoder.decode(responseBuffer).includes('\r\n0\r\n\r\n')) break;
				}
				if (headerEndIndex === -1) throw new Error('代理检测响应头过长或无效');
				const response = decoder.decode(responseBuffer);
				const ip = response.match(/(?:^|\n)ip=(.*)/)?.[1];
				const loc = response.match(/(?:^|\n)loc=(.*)/)?.[1];
				if (!ip || !loc) throw new Error('代理检测响应无效');
				检测代理响应 = { success: true, proxy: 代理协议 + "://" + 完整代理参数, ip, loc, responseTime: Date.now() - startTime };
			} finally {
				try { tlsSocket ? tlsSocket.close() : await tcpSocket?.close?.() } catch (e) { }
			}
		} catch (error) {
			检测代理响应 = { success: false, error: error.message, proxy: 代理协议 + "://" + 完整代理参数, responseTime: Date.now() - startTime };
		}
	} catch (err) {
		检测代理响应 = { success: false, error: err.message, proxy: 代理协议 + "://" + 代理参数, responseTime: Date.now() - startTime };
	}
	return new Response(JSON.stringify(检测代理响应, null, 2), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });

}
