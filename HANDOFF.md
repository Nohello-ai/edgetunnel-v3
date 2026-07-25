# Worker.js 模块化拆分任务交接文档

## 一、项目概述

将一个单文件的 Cloudflare Workers 代理脚本（约 6212 行，298KB）拆分为模块化的 ES Module 项目。原始文件位于 `/workspace/.uploads/05baf3bc-58e8-4ebf-912f-72191329a655__worker.js`。

## 二、已完成的文件（36 个模块文件 + 1 个状态文件 + 1 个常量文件）

以下文件已全部创建在 `/workspace/src/` 目录下，代码逻辑已从原始文件中完整提取，使用 `import/export` 语法：

```
src/
├── constants.js              # 全局常量（版本号、队列参数、特征码字典等）
├── state.js                  # 全局可变状态（配置缓存、拨号参数、白名单等）+ getter/setter
├── config/
│   ├── loader.js             # 读取config_JSON 函数（含默认配置生成）
│   └── logging.js            # 请求日志记录 函数
├── connector/
│   ├── factory.js            # 创建请求TCP连接器
│   ├── socks5.js             # socks5Connect
│   ├── http.js               # httpConnect
│   ├── https.js              # httpsConnect
│   ├── turn.js               # TURN/STUN 连接器（含 withTimeout, isIPv4 等）
│   └── sstp.js              # SSTP 连接器
├── net/
│   ├── address.js            # stripIPv6Brackets, isIPHostname, isIPv4
│   ├── address-resolver.js   # 解析地址端口 函数
│   ├── doh.js                # DoH查询 函数
│   ├── operator.js           # 识别运营商 函数
│   ├── proxy.js              # 获取传输协议配置, 获取传输路径参数值, 反代参数获取, 获取SOCKS5账号 等
│   └── resolver.js           # 生成随机IP, 获取优选订阅生成器数据, 请求优选API
├── pages/
│   ├── nginx.js              # nginx 伪装页
│   └── html1101.js           # 1101 错误页
├── protocol/
│   ├── vless.js              # VLESS 协议解析
│   ├── trojan.js             # Trojan 协议解析 + 木马反代
│   └── shadowsocks.js        # Shadowsocks 协议（SS加密/解密）
├── stream/
│   ├── forward.js            # forwardataTCP, forwardataudp 转发函数
│   ├── grain.js              # 创建下行Grain发送器
│   ├── pipe.js               # connectStreams
│   ├── queue.js              # 创建上行写入队列
│   └── utils.js              # closeSocketQuietly, WebSocket发送并等待, 构造本地204响应 等
├── subscription/
│   ├── clash.js              # Clash订阅配置文件热补丁
│   ├── singbox.js            # Singbox订阅配置文件热补丁
│   └── surge.js              # Surge订阅配置文件热补丁
├── tls/
│   ├── constants.js          # TLS 常量（版本号、密码套件、扩展类型等）
│   ├── crypto.js             # TLS 加密原语（HKDF, ChaCha20-Poly1305, AES-GCM 等）
│   ├── record.js             # TLS 记录层（buildTlsRecord, TlsRecordParser 等）
│   ├── handshake.js           # TLS 握手解析（parseServerHello, buildClientHello 等）
│   └── client.js              # TlsClient 类
├── transport/
│   ├── xhttp.js              # 处理XHTTP请求, 读取XHTTP首包
│   ├── grpc.js               # 处理gRPC请求
│   └── ws.js                 # 处理WS请求, 是有效WS早期数据, 解码WS早期数据
└── utils/
    ├── base64.js             # base64SecretEncode, base64SecretDecode
    ├── bytes.js              # 数据转Uint8Array, 拼接字节数据, 有效数据长度
    ├── cloudflare.js         # getCloudflareUsage
    ├── crypto.js             # MD5MD5, sha224
    ├── log.js                # log
    └── misc.js               # 随机路径, 替换星号为随机字符, 整理成数组, isSpeedTestSite, 掩码敏感信息
```

## 三、需要修复的已知问题

### 问题 1：导入路径错误

文件 `src/stream/forward.js` 第 17 行：
```javascript
// 错误 - 解析地址端口 在 address-resolver.js 中，不在 proxy.js 中
import { 解析地址端口 } from '../net/proxy.js';
```
应改为：
```javascript
import { 解析地址端口 } from '../net/address-resolver.js';
```

### 问题 2：循环依赖

以下文件之间存在循环依赖（ES Module 在运行时可以处理，但需要确认）：
- `src/protocol/trojan.js` 导入了 `src/stream/forward.js` 的 `forwardataudp`
- `src/stream/forward.js` 导入了 `src/protocol/trojan.js` 的 `连接木马反代` 和 `提取木马反代握手数据`

这不会导致语法错误，但需要确保两个模块中没有在模块顶层直接使用对方导出的值（仅函数内部使用是安全的）。

### 问题 3：检查所有文件的导入路径

需要逐一验证每个文件的 import 语句是否指向正确的文件。可能存在子代理创建时路径不匹配的问题。

## 四、需要创建的文件

### 1. `src/index.js` — 主入口文件

这是 Cloudflare Workers 的入口文件，对应原始 `worker.js` 的第 17-529 行（`export default { async fetch(request, env, ctx) { ... } }`）。

需要从各模块导入所有使用到的函数，然后实现主路由逻辑。关键逻辑包括：

1. URL 解析和参数获取
2. WebSocket 代理路由 -> 调用 `处理WS请求`
3. gRPC/XHTTP 代理路由 -> 调用 `处理gRPC请求` / `处理XHTTP请求`
4. 管理后台路由（/admin, /login, /sub 等）
5. 伪装页逻辑
6. Cloudflare KV 交互

从原始文件读取第 1-529 行获取完整入口逻辑。入口函数中使用的所有函数都需要从对应模块导入。

### 2. `wrangler.toml` — Cloudflare Workers 配置

```toml
name = "edgetunnel-v2"
main = "src/index.js"
compatibility_date = "2024-09-23"

[vars]
# 环境变量通过 Cloudflare Dashboard 或 wrangler 设置
```

### 3. `package.json`

```json
{
  "name": "edgetunnel-v2",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy"
  },
  "devDependencies": {
    "wrangler": "^3.0.0"
  }
}
```

### 4. `.gitignore`

```
node_modules/
.wrangler/
.dev.vars
```

## 五、验证步骤

1. **语法检查**：对所有 `.js` 文件运行 `node --check`
2. **导入导出验证**：检查每个 `import` 语句对应的 `export` 是否存在于目标文件中
3. **功能完整性**：对比原始文件，确保所有函数和常量都已提取到对应模块
4. **入口逻辑验证**：确保 `index.js` 中的路由逻辑与原始文件第 1-529 行完全一致

## 六、原始文件参考

- 原始文件路径：`/workspace/.uploads/05baf3bc-58e8-4ebf-912f-72191329a655__worker.js`
- 文件大小：298KB，约 6212 行
- 由于文件超过 64KB 读取限制，需要使用 `Read` 工具的 `offset` 和 `limit` 参数分段读取

### 原始文件关键行号映射

| 行号范围 | 内容 | 对应模块 |
|---------|------|---------|
| 1-16 | 全局变量和常量 | constants.js, state.js |
| 17-529 | 主入口 fetch 处理函数 | index.js（待创建）|
| 530-858 | XHTTP 传输 | transport/xhttp.js |
| 860-1125 | gRPC 传输 | transport/grpc.js |
| 1126-1665 | WebSocket 传输 | transport/ws.js |
| 1666-1800 | Trojan 协议 | protocol/trojan.js |
| 1801-1890 | VLESS 协议 | protocol/vless.js |
| 1891-2045 | Shadowsocks 协议 | protocol/shadowsocks.js |
| 2046-2336 | TCP/UDP 转发 | stream/forward.js |
| 2338-2354 | 流工具函数 | stream/utils.js |
| 2356-2538 | 上行写入队列 | stream/queue.js |
| 2540-2643 | 下行 Grain 发送器 | stream/grain.js |
| 2645-2722 | connectStreams + 204响应 | stream/pipe.js, stream/utils.js |
| 2724-2924 | SOCKS5/HTTP/HTTPS 连接器 | connector/*.js |
| 2926-3598 | TLS 客户端实现 | tls/*.js |
| 3600-3617 | 地址工具 | net/address.js |
| 3619-3889 | TURN 连接器 | connector/turn.js |
| 3890-4329 | SSTP 连接器 | connector/sstp.js |
| 4330-4386 | Base64 + 传输配置 | utils/base64.js, net/proxy.js |
| 4388-4391 | 日志函数 | utils/log.js |
| 4392-4607 | Clash 订阅补丁 | subscription/clash.js |
| 4609-4888 | Singbox 订阅补丁 | subscription/singbox.js |
| 4889-4907 | Surge 订阅补丁 | subscription/surge.js |
| 4908-4962 | 日志记录 | config/logging.js |
| 4963-4987 | 掩码 + MD5MD5 | utils/misc.js, utils/crypto.js |
| 4988-5005 | 随机路径 + 替换星号 | utils/misc.js |
| 5006-5168 | DoH 查询 | net/doh.js |
| 5169-5414 | 配置加载器 | config/loader.js |
| 5415-5477 | 运营商识别 + 随机IP | net/operator.js, net/resolver.js |
| 5478-5536 | 数组工具 + 优选数据 | utils/misc.js, net/resolver.js |
| 5537-5740 | 优选API请求 | net/resolver.js |
| 5741-5915 | 反代参数 + SOCKS5账号 | net/proxy.js |
| 5916-5973 | Cloudflare 使用量 | utils/cloudflare.js |
| 5974-6006 | sha224 | utils/crypto.js |
| 6007-6091 | 地址端口解析 | net/address-resolver.js |
| 6092-6212 | HTML 页面 | pages/nginx.js, pages/html1101.js |

## 七、执行顺序建议

1. 先修复问题 1（导入路径错误）
2. 运行 `node --check` 对所有文件做语法检查
3. 全量扫描所有 `import` 语句，验证对应的 `export` 是否存在
4. 创建 `src/index.js` 主入口文件
5. 创建 `wrangler.toml`、`package.json`、`.gitignore`
6. 最终验证：确保所有函数都已正确导出和导入
7. 用户提供 Git 密钥后，初始化 Git 仓库并推送

## 八、当前状态（2026-07-25 续作）

### 已完成
1. `src/index.js` 主入口已存在，路由标记与原版 `_worker.js` 入口一致（version/WS/gRPC/XHTTP/admin/login/sub/locations/伪装页等）。
2. 全局可变状态通过 `state.js` getter/setter 访问（与原版直接赋值等价）。
3. 原版顶层函数/类均已落入模块树（无缺失实现）。
4. 全部 44 个 `.js` 文件 `node --check` 语法通过。
5. 全部相对路径 `import` 与目标文件 `export` 对齐（IMPORT_ISSUES=0）。
6. 修复 `src/connector/turn.js` 中 `isIPv4` 重复声明：改为从 `net/address.js` 导入并 re-export。
7. `src/stream/forward.js` 直接从 `net/address.js` 导入 `isIPv4`；`解析地址端口` 已从 `address-resolver.js` 导入。

### 待部署侧注意
- `wrangler.toml` 中 KV `id` 仍为占位 `your-kv-namespace-id`，部署前需替换。
- 本环境未完成 wrangler 实际 bundle/deploy 验证（依赖安装超时）。
- 循环依赖：`protocol/trojan.js` ↔ `stream/forward.js` 仍存在，但仅函数内互相调用，ESM 运行时一般可用。

### 对照原版
- 原版仓库：https://github.com/cmliu/edgetunnel （`_worker.js` 6212 行）
- 模块化仓库：本仓库 `src/` 共 44 文件
