# AI 续接说明

更新时间：2026-07-28
仓库：`Nohello-ai/edgetunnel-v3`
分支：`main`

## 目标

本轮工作按“自写功能开源替代/参考清单”逐项加固协议与配置边界。原始清单位于仓库外的 `/root/1/OPEN_SOURCE_REPLACEMENT_CHECKLIST.md`；本文件包含继续工作所需的状态摘要，因此新的 AI 无需依赖会话记忆即可续接。

必须遵守以下执行约束：

1. 按优先级一次只处理一个独立项目。
2. 每项先检查实现与调用链，再做最小完整修改并增加专项测试。
3. 先运行专项测试，再运行 `npm test` 和 `npm run build`。
4. `dist/worker.js` 与 `dist/build-meta.json` 是提交到仓库的交付产物，源码改动完成后必须重新构建并一同提交。
5. 协议、安全或资源边界改动在提交前进行一次独立只读审查；审查发现的高/中风险应闭环。
6. 每完成一项创建一个单独提交，不把多个清单项目合并提交。
7. 不推送无关改动，不覆盖已有用户改动。

## 已完成项目

| 清单项 | 提交 | 结果 |
| --- | --- | --- |
| P0 配置校验与默认值合并 | `2478e08` | 使用 Zod 统一配置读取/持久化边界，兼容旧配置并剥离运行时及未知字段 |
| P0 gRPC framing | `0309aa2` | 1 MiB 帧上限、固定缓冲状态机、压缩拒绝、EOF 截断校验、单块帧数限制 |
| P1 SOCKS5 握手 | `4f1601b` | UTF-8 单字节字段限制、跨块精确读取、完整消费响应、隧道余量回灌与取消传播 |
| P1 DNS over TCP | `c4e0854` | 按两字节长度读取一条响应，不等待上游断开，并可靠关闭 socket |
| P2 HTTP/HTTPS CONNECT | `e1acd67` | 固定 8 KiB 响应头、严格 2xx 状态、跨块解析、隧道余量回灌与资源释放 |
| P2 地址/URL/代理参数 | `f33d092` | 安全百分号解码、统一 host/port、严格端口、IPv6、链式代理和 TXT 容错 |

最后一次完整验证（提交 `f33d092` 前）：

- `node --test test/address-parsing.test.js`：6 项通过。
- `npm test`：40 项通过，0 失败。
- `npm run build`：通过，生成约 180.2 KiB 的 `dist/worker.js`。
- 源码中的 `decodeURIComponent()` 只保留在 `安全解码URIComponent()` 包装内部。

已增加的专项测试：

- `test/config-schema.test.js`
- `test/grpc-framing.test.js`
- `test/socks5.test.js`
- `test/dns-over-tcp.test.js`
- `test/http-connect.test.js`
- `test/address-parsing.test.js`

## 下一步：P3 Shadowsocks AEAD

主要位置：`src/protocol/shadowsocks.js`，使用方需要从协议入口和出站流调用链继续查找。

当前实现自行维护以下密码学细节：

- EVP_BytesToKey 风格 MD5 主密钥派生。
- HKDF-SHA1 `ss-subkey` 会话密钥派生。
- AES-128-GCM 与 AES-256-GCM。
- 12 字节 nonce 小端递增。
- AEAD chunk 长度、tag、salt 和数据分片处理（部分逻辑可能位于调用方）。

推荐下一位 AI 的步骤：

1. 用搜索定位 `SSAEAD加密`、`SSAEAD解密`、`SS派生会话密钥` 的全部调用点及 Shadowsocks 入站/出站 framing。
2. 对照 Shadowsocks AEAD 规范和成熟实现，先建立可复现的测试向量，不先重写密码算法。
3. 覆盖 AES-128-GCM、AES-256-GCM、跨 chunk、错误 tag、截断 salt/length/payload、过大 chunk、nonce 递增和溢出边界。
4. 检查主密钥缓存是否有无界增长或敏感数据生命周期问题。
5. 评估是否能局部复用 Worker/WebCrypto 兼容库；不要直接引入依赖 Node.js `net`、`tls` 或 Buffer 假设的实现。
6. 实现最小修复后运行专项测试、`npm test`、`npm run build`，独立审查，再单独提交。

尚未确认的事项：当前只有 `src/protocol/shadowsocks.js` 的基础密码函数被快速检查过，完整 framing 和调用链尚未在本轮深入审查。不要假定它已经存在某个具体 bug，应先以规范测试向量建立基线。

## 后续：P3 Mini TLS client

主要位置：

- `src/tls/client.js`
- `src/tls/constants.js`
- `src/tls/crypto.js`
- `src/tls/handshake.js`
- `src/tls/record.js`

TLS 属于高风险、高复杂度范围。优先评估平台原生 TLS 是否能替代具体使用场景；若必须保留自研实现，应先明确支持的 TLS 版本、cipher suite 和扩展，再补握手失败、证书异常、Finished 校验、record 截断/篡改及 alert 测试。不要进行没有测试向量支撑的大规模重写。

## 常用命令

```bash
git status --short --branch
git log --oneline --decorate -10
node --test test/<专项测试>.test.js
npm test
npm run build
git diff --check
```

提交前确认：

- 工作区只有当前清单项相关文件。
- `dist/worker.js` 和 `dist/build-meta.json` 已由最新源码构建。
- 专项测试与全量测试都通过。
- 独立审查不存在未解决的高/中风险。
- 提交消息与现有风格一致，例如 `fix: harden shadowsocks aead framing`。

## 运行时与仓库约束

- 运行时为 Cloudflare Workers，使用 Web Streams、WebCrypto 和平台 `connect()`。
- 不要假定 Node.js `net`、`tls`、`http.Agent` 生态库可直接使用。
- 项目使用 ESM，测试运行器为 Node 内置 `node:test`。
- 依赖管理与命令见 `package.json`；当前新增直接依赖仅有 `zod`。
- 不要提交密钥、Worker 环境变量或真实代理凭据。
