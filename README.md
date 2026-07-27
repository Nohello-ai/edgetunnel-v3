# edgetunnel-v3

跑在 **Cloudflare Workers** 上的边缘隧道代理（v3 模块化架构）。

客户端通过 Worker 建立 **VLESS / Trojan / Shadowsocks** 通道，再由 Worker 向目标站点发起 TCP/UDP 连接；同时提供管理面板、订阅生成、优选节点与伪装首页。

| 项 | 说明 |
|----|------|
| 运行时 | Cloudflare Workers（`nodejs_compat`） |
| 协议 | VLESS · Trojan · Shadowsocks |
| 传输 | WebSocket · gRPC · XHTTP |
| 出站 | 直连 · ProxyIP · SOCKS5 / HTTP(S) / TURN / SSTP |
| 配置存储 | Workers KV（`KV` 绑定） |
| 当前安全版本 | **v3.0.3**（`KEY` 必填，见下方环境变量） |

> 发版与粘贴部署见 [RELEASE.md](./RELEASE.md)。代码审查见 [CODE_REVIEW.md](./CODE_REVIEW.md)。

---

## 目录

1. [它是做什么的](#它是做什么的)
2. [快速上手](#快速上手)
3. [环境变量一览](#环境变量一览)
4. [运行流程](#运行流程)
5. [功能说明](#功能说明)
6. [源码结构](#源码结构)
7. [本地开发](#本地开发)
8. [版本与回滚](#版本与回滚)

---

## 它是做什么的

```
客户端 (v2ray / clash / sing-box …)
        │  VLESS / Trojan / SS
        │  经 WS / gRPC / XHTTP
        ▼
 Cloudflare Worker (edgetunnel-v3)
        │  解析协议头 → 建立出站连接
        ▼
 目标站点 / 反代节点 / SOCKS5 等
```

Worker 还负责：

- **身份与密钥**：由 `ADMIN` + `KEY`（及可选 `UUID`）派生用户 ID 与鉴权
- **订阅**：`/sub` 输出节点列表，并可走 Clash / Sing-box / Surge 转换
- **管理后台**：`/login` → `/admin`，配置写入 KV
- **伪装**：普通访问返回 nginx 页、动画页或反向代理到你指定的站点

---

## 快速上手

### 1. 准备 Cloudflare

1. 创建 Worker，粘贴 `dist/worker.js`（或 `wrangler deploy`）
2. 创建 **KV** 命名空间，绑定名必须为 **`KV`**
3. 在 Worker 设置环境变量（至少 `KEY` + 管理员密码类变量）

### 2. 最低可用配置

| 变量 | 要求 |
|------|------|
| **`KEY`** | **必填**（v3.0.3+）。随机字符串，**长度 ≥ 16**，不要用源码里的默认提示文案 |
| **`ADMIN`**（或见下方回退链） | 管理面板登录密码；也参与身份派生 |
| **`UUID`**（推荐） | 标准 UUID v4；不设则由密码+KEY 用哈希派生 |
| **KV 绑定** | 名称为 `KV`；无 KV 时部分能力会降级 |

未设置合法 `KEY` 时，Worker 对所有请求返回：

```json
{ "error": "KEY_REQUIRED", "message": "请设置环境变量 KEY：..." }
```

状态码 **503**。

### 3. 常用入口

| 路径 | 作用 |
|------|------|
| `/login` | 管理登录 |
| `/admin` | 管理面板（需 cookie） |
| `/sub?token=...` | 订阅 |
| `/{KEY}` | 快速跳转到带 token 的订阅（路径需与 KEY 完全一致） |
| WebSocket Upgrade | 代理隧道 |
| POST + gRPC / XHTTP | 代理隧道 |
| 其他 GET | 伪装页 |

---

## 环境变量一览

变量可在 **Cloudflare Dashboard → Worker → Settings → Variables** 配置，也可写在 `wrangler.toml` 的 `[vars]`（密钥建议用 Dashboard Secrets，不要提交仓库）。

### 身份与安全（核心）

| 变量 | 必填 | 说明 |
|------|------|------|
| **`KEY`** | **是** | 加密/鉴权主密钥。参与：userID 派生、登录 cookie、快速订阅路径。长度 ≥ 16；禁止使用旧默认中文提示串。 |
| **`ADMIN`** | 强烈建议 | 管理面板密码。也可用下列别名（按优先级取第一个有值的）：`admin` → `PASSWORD` → `password` → `pswd` → `TOKEN` → `KEY` → `UUID` → `uuid`。**注意**：若只设了 `KEY` 没设 `ADMIN`，`KEY` 会同时当管理密码，不推荐。 |
| **`UUID`** / `uuid` | 推荐 | 客户端使用的用户 UUID（v4 格式）。未设置时用 `MD5MD5(管理员密码 + KEY)` 拼成类 UUID。 |

### 节点与域名

| 变量 | 必填 | 说明 |
|------|------|------|
| **`HOST`** | 否 | 订阅里展示的节点域名/主机列表（可多条，逗号或换行）。不设则用当前请求的 hostname。 |
| **`PATH`** | 否 | 默认传输路径（也可在 KV `config.json` 中配置）。以 `/` 开头；不设则配置里默认 `/`。 |

### 出站与反代

| 变量 | 必填 | 说明 |
|------|------|------|
| **`PROXYIP`** | 否 | 默认反代落地地址列表（可多条，随机取一条）。不设时使用内置「机房.特征.域名」类默认兜底地址。 |
| **`GO2SOCKS5`** | 否 | 追加到 SOCKS5 域名白名单的主机列表（整理成数组后合并）。命中白名单的目标可走 SOCKS5 等代理出站。 |

出站类型还可由 **URL 查询参数 / 路径** 在单次连接上覆盖，例如：

- `?socks5=user:pass@host:port`、`?http=`、`?https=`、`?turn=`、`?sstp=`
- `?globalproxy`：代理全局生效
- 路径中的链式代理：`/video/{加密载荷}`（载荷用 userID 相关密钥编解码）

### 性能与拨号

| 变量 | 必填 | 说明 |
|------|------|------|
| **`TCP_CONCURRENT_DIAL`** | 否 | 直连 TCP 并发拨号数，默认实现侧 ≥1。未设置时若识别为移动（cmcc）会强制为 1。 |
| **`PROXY_CONCURRENT_DIAL`** | 否 | 反代并发拨号数。 |
| **`PRELOAD_RACE_DIAL`** | 否 | `1` / `true` 开启预加载竞速拨号。 |

### 订阅与日志

| 变量 | 必填 | 说明 |
|------|------|------|
| **`BEST_SUB`** | 否 | `1` / `true` 时，在特定 UA + 占位 host/uuid 条件下可作为「优选订阅生成器」模式。 |
| **`OFF_LOG`** | 否 | `1` / `true` 时关闭写入 KV 的访问日志（`log.json`）。 |
| **`DEBUG`** | 否 | `1` / `true` 打开调试日志。 |

### 伪装页

| 变量 | 必填 | 说明 |
|------|------|------|
| **`URL`** | 否 | 伪装页来源：`nginx`（默认，内置 nginx 风格页）、`1101`（内置动画/HTML 页）、或 `https://example.com`（反代该站并替换 Host）。 |

### 绑定（非 vars）

| 绑定名 | 类型 | 说明 |
|--------|------|------|
| **`KV`** | KV Namespace | 存储 `config.json`、`log.json`、`tg.json`、`cf.json`、`ADD.txt` 等。无 KV 且未设 `UUID` 时，管理相关能力会引导到 noKV 提示页。 |

### 环境变量关系简图

```
KEY  ──► 加密/cookie/快速订阅路径 / 参与 userID 派生
ADMIN ──► 登录密码 / 参与 userID 派生（及别名回退链）
UUID  ──► 若合法则固定为客户端 UUID，否则由 ADMIN+KEY 哈希派生
HOST  ──► 订阅节点域名
PROXYIP / GO2SOCKS5 / 查询参数 ──► 出站怎么走
URL   ──► 普通人打开网站看到什么
KV    ──► 面板里改的配置落在哪
```

---

## 运行流程

### 总览（每次 `fetch`）

```
请求进入 Worker
    │
    ├─ 1. 规范化 URL（处理异常编码的 ? 等）
    ├─ 2. 读取 env → 校验 KEY（失败则 503）
    ├─ 3. 解析管理员密码、派生/缓存 userID
    ├─ 4. 解析 HOST 列表、调试/拨号参数、默认 PROXYIP
    │
    ├─ 路径/方法分流 ──┬── /version          → 版本校验接口
    │                  ├── Upgrade: websocket → WS 隧道
    │                  ├── POST + gRPC/XHTTP  → gRPC / XHTTP 隧道
    │                  └── 其他 HTTP
    │                         ├── 强制 HTTPS
    │                         ├── 无管理员密码 → noADMIN 页
    │                         ├── 有 KV：
    │                         │     /{KEY} → 跳转 /sub?token=...
    │                         │     /login → 登录
    │                         │     /admin/* → 管理 API / 面板
    │                         │     /logout  → 清 cookie
    │                         │     /sub     → 订阅
    │                         │     …
    │                         └── 伪装页（URL / nginx / 1101）
```

### 隧道数据流（WS / gRPC / XHTTP）

```
客户端首包
    → transport 层收齐数据
    → protocol 层识别 VLESS / Trojan / SS，解析目标 host:port
    → connector 按反代上下文出站：
         · 直连 TCP
         · 或 PROXYIP / SOCKS5 / HTTP(S) / TURN / SSTP
    → stream 层双向转发（队列合包、grain 下行等）
    → 连接结束或失败时清理
```

### 订阅流（`/sub`）

```
校验 token（与 MD5MD5(host + userID) 等规则匹配）
    → 读 KV config + 优选 IP（本地随机 / ADD.txt / 外部 SUB）
    → 生成节点列表（协议 + 传输 + 路径 + UUID）
    → 按 UA / 参数做 Clash / Sing-box / Surge 热补丁或 base64 原始订阅
    → 返回
```

### 管理流

```
POST /login 校验 ADMIN
    → Set-Cookie: auth = hash(UA + KEY + ADMIN)
GET /admin*
    → 校验 cookie
    → 读写 KV 或返回静态管理页（Pages 托管的前端）
```

---

## 功能说明

### 1. 多协议代理

| 协议 | 模块 | 说明 |
|------|------|------|
| VLESS | `src/protocol/vless.js` | UUID 校验、地址类型解析 |
| Trojan | `src/protocol/trojan.js` | 密码哈希头 + SOCKS 目标 |
| Shadowsocks | `src/protocol/shadowsocks.js` | AEAD 等（含协议要求的 MD5 派生） |

### 2. 多传输

| 传输 | 模块 | 触发方式（概要） |
|------|------|------------------|
| WebSocket | `transport/ws.js` | `Upgrade: websocket` |
| gRPC | `transport/grpc.js` | POST + `Content-Type: application/grpc` |
| XHTTP | `transport/xhttp.js` | POST，或 Referer 带 `x_padding` 等特征 |

### 3. 出站连接器

| 类型 | 模块 |
|------|------|
| 工厂选择 | `connector/factory.js` |
| HTTP / HTTPS 代理 | `connector/http.js` · `https.js` |
| SOCKS5 | `connector/socks5.js` |
| TURN | `connector/turn.js` |
| SSTP | `connector/sstp.js` |

支持默认 `PROXYIP`、白名单走 SOCKS5、URL 参数临时指定代理、以及加密链式代理路径。

### 4. 订阅与客户端适配

- **`/sub`**：主订阅入口，token 鉴权  
- **`/{KEY}`**：快速入口，302 到带 token 的 `/sub`  
- **热补丁**：`subscription/clash.js` · `singbox.js` · `surge.js` 按客户端调整配置  
- **优选**：本地随机 IP 库、KV `ADD.txt`、外部优选 API / SUB（面板可配）

### 5. 管理面板与 KV

| KV 键 | 用途 |
|-------|------|
| `config.json` | 主配置（协议、传输、反代、订阅转换、TG/CF 等） |
| `log.json` | 访问/操作日志（可被 `OFF_LOG` 关闭） |
| `tg.json` | Telegram Bot 通知 |
| `cf.json` | Cloudflare 用量查询凭证 |
| `ADD.txt` | 自定义优选 IP 列表 |

主要管理路径：

| 路径 | 说明 |
|------|------|
| `/login` | 登录页 / POST 登录 |
| `/admin` | 管理 UI |
| `/admin/config.json` | GET/POST 配置 |
| `/admin/init` | 重置为默认配置 |
| `/admin/check` | 代理连通性检测 |
| `/admin/log.json` | 日志 |
| `/admin/ADD.txt` | 优选 IP |
| `/admin/cf.json` · `/admin/tg.json` | CF / TG 配置 |
| `/admin/getCloudflareUsage` | 查 CF 用量 |
| `/admin/getADDAPI` | 验证优选 API |
| `/logout` | 退出 |

### 6. 伪装与杂项

| 功能 | 说明 |
|------|------|
| 伪装页 | `URL=nginx` / `1101` / 反代真实站点 |
| `/version` | 带 UUID 校验的版本号接口 |
| `/robots.txt` | `Disallow: /` |
| 请求日志 | 可推 TG；可写 KV |
| DoH / 运营商识别 | `net/doh.js` · `net/operator.js`，影响拨号策略等 |

### 7. 安全相关（部署必读）

- **v3.0.3+ 必须设置 `KEY`**，否则全站 503  
- 登录 cookie 绑定 **User-Agent**，换浏览器/UA 需重新登录  
- 审查报告中仍有：登录无限速、MD5 用于鉴权派生、入口函数过大等，见 [CODE_REVIEW.md](./CODE_REVIEW.md)

---

## 源码结构

```
edgetunnel-v3/
├── README.md              ← 本页（项目首页说明）
├── RELEASE.md             ← 发版与粘贴部署
├── CODE_REVIEW.md         ← 代码审查
├── wrangler.toml          ← Worker 名、入口、KV、vars 注释
├── package.json
├── scripts/build.mjs      ← esbuild 打成单文件
├── dist/worker.js         ← 可粘贴部署的打包产物
└── src/
    ├── index.js           ← 入口路由
    ├── constants.js       ← 版本号、伪装页源、缓冲区参数
    ├── state.js           ← isolate 内缓存状态
    ├── config/            ← KV 配置加载、日志
    ├── protocol/          ← VLESS / Trojan / SS
    ├── transport/         ← WS / gRPC / XHTTP
    ├── connector/         ← 各类出站
    ├── stream/            ← 转发、队列、grain
    ├── net/               ← 反代参数、DoH、优选、运营商
    ├── subscription/      ← Clash / Sing-box / Surge
    ├── pages/             ← 内置伪装 HTML
    ├── routes/            ← 如 proxy-check
    ├── tls/               ← TLS 客户端相关
    └── utils/             ← 加密、base64、杂项
```

---

## 本地开发

```bash
npm install
npm run dev      # wrangler dev
npm run build    # → dist/worker.js
npm run deploy   # wrangler deploy
npm run tail     # 实时日志
```

部署前请在 `wrangler.toml` 填入真实 KV `id`，并配置 `KEY` / `ADMIN` 等。

---

## 版本与回滚

| 标签 | 说明 |
|------|------|
| `v3.0.2-pre-require-key` | 强制 KEY 之前的基线 |
| `v3.0.3` | 强制 KEY、拒绝默认密钥 |

```bash
# 回退到改 KEY 策略之前
git checkout v3.0.2-pre-require-key

# 使用当前强制 KEY 版本
git checkout v3.0.3
```

更细的发版步骤见 [RELEASE.md](./RELEASE.md)。

---

## 许可证与声明

本仓库用于在 **自有 Cloudflare 账号** 上部署边缘网络组件。请遵守当地法律法规与 Cloudflare 服务条款；勿用于未授权访问或攻击。

如有问题，优先检查：`KEY` 是否已设且 ≥16 位、KV 是否绑定为 `KV`、订阅 `token` 是否与 `MD5MD5(host+userID)` 一致、客户端协议/传输是否与面板配置一致。
