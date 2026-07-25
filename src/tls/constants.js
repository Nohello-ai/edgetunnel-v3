/**
 * TLS 常量定义模块
 *
 * 包含 TLS 协议版本、内容类型、握手类型、扩展类型、告警类型，
 * 以及密码套件、命名群组、签名算法映射表等常量。
 * 提取自原始 Cloudflare Workers 单文件 worker.js（第 2926-2950 行，含 TLS_MAX_PLAINTEXT_FRAGMENT）。
 */

export const TLS_VERSION_10 = 769, TLS_VERSION_12 = 771, TLS_VERSION_13 = 772;
export const CONTENT_TYPE_CHANGE_CIPHER_SPEC = 20, CONTENT_TYPE_ALERT = 21, CONTENT_TYPE_HANDSHAKE = 22, CONTENT_TYPE_APPLICATION_DATA = 23;
export const HANDSHAKE_TYPE_CLIENT_HELLO = 1, HANDSHAKE_TYPE_SERVER_HELLO = 2, HANDSHAKE_TYPE_NEW_SESSION_TICKET = 4, HANDSHAKE_TYPE_ENCRYPTED_EXTENSIONS = 8, HANDSHAKE_TYPE_CERTIFICATE = 11, HANDSHAKE_TYPE_SERVER_KEY_EXCHANGE = 12, HANDSHAKE_TYPE_CERTIFICATE_REQUEST = 13, HANDSHAKE_TYPE_SERVER_HELLO_DONE = 14, HANDSHAKE_TYPE_CERTIFICATE_VERIFY = 15, HANDSHAKE_TYPE_CLIENT_KEY_EXCHANGE = 16, HANDSHAKE_TYPE_FINISHED = 20, HANDSHAKE_TYPE_KEY_UPDATE = 24;
export const EXT_SERVER_NAME = 0, EXT_SUPPORTED_GROUPS = 10, EXT_EC_POINT_FORMATS = 11, EXT_SIGNATURE_ALGORITHMS = 13, EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION = 16, EXT_SUPPORTED_VERSIONS = 43, EXT_PSK_KEY_EXCHANGE_MODES = 45, EXT_KEY_SHARE = 51;

export const ALERT_CLOSE_NOTIFY = 0, ALERT_LEVEL_WARNING = 1, ALERT_UNRECOGNIZED_NAME = 112;
export const shouldIgnoreTlsAlert = fragment => fragment?.[0] === ALERT_LEVEL_WARNING && fragment?.[1] === ALERT_UNRECOGNIZED_NAME;

export const textEncoder = new TextEncoder();
export const textDecoder = new TextDecoder();
export const EMPTY_BYTES = new Uint8Array(0);

export const CIPHER_SUITES_BY_ID = new Map([
	[4865, { id: 4865, keyLen: 16, ivLen: 12, hash: "SHA-256", tls13: !0 }],
	[4866, { id: 4866, keyLen: 32, ivLen: 12, hash: "SHA-384", tls13: !0 }],
	[4867, { id: 4867, keyLen: 32, ivLen: 12, hash: "SHA-256", tls13: !0, chacha: !0 }],
	[49199, { id: 49199, keyLen: 16, ivLen: 4, hash: "SHA-256", kex: "ECDHE" }],
	[49200, { id: 49200, keyLen: 32, ivLen: 4, hash: "SHA-384", kex: "ECDHE" }],
	[52392, { id: 52392, keyLen: 32, ivLen: 12, hash: "SHA-256", kex: "ECDHE", chacha: !0 }],
	[49195, { id: 49195, keyLen: 16, ivLen: 4, hash: "SHA-256", kex: "ECDHE" }],
	[49196, { id: 49196, keyLen: 32, ivLen: 4, hash: "SHA-384", kex: "ECDHE" }],
	[52393, { id: 52393, keyLen: 32, ivLen: 12, hash: "SHA-256", kex: "ECDHE", chacha: !0 }]
]);
export const GROUPS_BY_ID = new Map([[29, "X25519"], [23, "P-256"]]);
export const SUPPORTED_SIGNATURE_ALGORITHMS = [2052, 2053, 2054, 1025, 1281, 1537, 1027, 1283, 1539];

export const TLS_MAX_PLAINTEXT_FRAGMENT = 16 * 1024;
