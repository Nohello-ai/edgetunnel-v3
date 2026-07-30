# edgetunnel-v3

edgetunnel-v3 是一个运行在 **Cloudflare Workers** 上的轻量边缘隧道 Worker。项目采用模块化源码开发、单文件产物交付的结构，把代理入口、协议解析、订阅生成、管理面板和伪装页面集中在一个可直接部署的 Worker 中。

当前版本：**v3.0.0.2**

版本规则采用四段式：`主版本.次版本.修订号.构建号`。例如 `3.0.0.2` 表示 3.0 系列的第 2 次构建级更新；后续大版本能力更新可进入 `3.1.0.x`。

---

## Highlights

| 能力 | 说明 |
|------|------|
| Workers 原生运行 | 只面向 Cloudflare Workers，使用平台 TCP/TLS 能力 |
| 单文件交付 | `src/**` 模块化开发，`dist/worker.js` 粘贴部署 |
| 多协议入口 | 支持 VLESS、Trojan、Shadowsocks |
| 多传输方式 | 支持 WebSocket、gRPC、XHTTP |
| 多出站策略 | 支持直连、ProxyIP、SOCKS5、HTTP(S)、TURN |
| 管理与订阅 | 提供 `/admin` 管理面板和 `/sub` 订阅输出 |
| 安全默认值 | 必填 `ADMIN` + `KEY`，拒绝旧默认弱配置 |
| 手动发布 | GitHub Actions 只保留手动构建与 Release 发布流程 |

---

## Quick Start

### 1. 准备 Cloudflare Worker

1. 创建 Worker。
2. 创建 Workers KV 命名空间，绑定名称设置为 `KV`。
3. 设置环境变量 `ADMIN` 和 `KEY`。
4. 复制 `dist/worker.js` 到 Cloudflare Workers 编辑器并部署。

### 2. 最低配置

| 变量 | 必填 | 说明 |
|------|------|------|
| `ADMIN` | 是 | 管理面板登录口令，参与 userID 派生 |
| `KEY` | 是 | 主密钥，长度至少 16 位，参与鉴权、Cookie、订阅入口 |
| `UUID` | 推荐 | 标准 UUID v4，未设置时由 `ADMIN + KEY` 派生 |
| `KV` | 推荐 | Workers KV 绑定名，用于存储配置和日志 |

缺少 `ADMIN` 或 `KEY` 时，Worker 会返回 `503`，避免以不安全配置启动。

### 3. 常用入口

| 路径或请求 | 作用 |
|------------|------|
| `/login` | 管理登录 |
| `/admin` | 管理面板 |
| `/sub?token=...` | 订阅入口 |
| `/{KEY}` | 快速跳转到带 token 的订阅入口 |
| `/version?uuid=...` | 版本检测接口 |
| WebSocket Upgrade | WS 隧道入口 |
| POST + gRPC | gRPC 隧道入口 |
| POST + XHTTP 特征 | XHTTP 隧道入口 |
| 其他 GET | 伪装页或反向代理页面 |

---

## What It Does

```text
客户端
  -> Cloudflare Worker
  -> 解析 VLESS / Trojan / Shadowsocks 首包
  -> 选择直连或代理出站
  -> 建立目标 TCP / DNS 转发链路
  -> 双向流式转发
```

edgetunnel-v3 主要负责五件事：

1. 接收客户端通过 WS、gRPC、XHTTP 发起的隧道请求。
2. 解析 VLESS、Trojan、Shadowsocks 协议头和目标地址。
3. 按配置选择直连、ProxyIP、SOCKS5、HTTP(S)、TURN 出站。
4. 生成 Clash、Sing-box、Surge 等客户端可用的订阅内容。
5. 提供管理面板、KV 配置存储、伪装页面和版本检测能力。

---

## Architecture

| 模块 | 路径 | 说明 |
|------|------|------|
| Worker 入口 | `src/index.js` | 请求分流、鉴权、管理、订阅、伪装页 |
| 协议解析 | `src/protocol/` | VLESS、Trojan、Shadowsocks |
| 传输层 | `src/transport/` | WebSocket、gRPC、XHTTP |
| 出站连接 | `src/connector/` | SOCKS5、HTTP(S)、TURN、连接工厂 |
| 流处理 | `src/stream/` | 上行队列、下行 grain、双向 pipe |
| 网络工具 | `src/net/` | 地址解析、DoH、运营商识别、代理参数 |
| 配置系统 | `src/config/` | KV 配置读取、schema 校验、日志 |
| 订阅适配 | `src/subscription/` | Clash、Sing-box、Surge 热补丁 |
| 页面 | `src/pages/` | 内置伪装页 |
| 构建脚本 | `scripts/build.mjs` | esbuild 打包为 `dist/worker.js` |

构建产物只有一个核心文件：`dist/worker.js`。

---

## Runtime Flow

```text
请求进入 Worker
  -> 规范化 URL
  -> 校验 ADMIN 和 KEY
  -> 派生或读取 UUID
  -> 解析 HOST、PROXYIP、代理参数和拨号参数
  -> 按路径、方法、Header 分流
```

分流规则：

| 条件 | 处理 |
|------|------|
| `/version` | 返回当前版本号 |
| WebSocket Upgrade | 进入 WS 隧道 |
| POST + `application/grpc` | 进入 gRPC 隧道 |
| POST + XHTTP 特征 | 进入 XHTTP 隧道 |
| `/login` | 管理登录 |
| `/admin/*` | 管理 API 或管理页面 |
| `/sub` | 订阅生成 |
| 普通 GET | 伪装页或反代页面 |

---

## Protocols

| 协议 | 说明 |
|------|------|
| VLESS | UUID 校验、版本校验、TCP / DNS UDP 支持 |
| Trojan | SHA-224 密码头、SOCKS 风格目标地址解析 |
| Shadowsocks | AEAD 入站解密、目标地址解析、nonce 递增校验 |

支持的传输方式：

| 传输 | 说明 |
|------|------|
| WebSocket | 浏览器兼容度高，常规代理入口 |
| gRPC | 适合 gRPC 客户端配置 |
| XHTTP | 适合 XHTTP 流式请求入口 |

支持的出站方式：

| 出站 | 说明 |
|------|------|
| 直连 | Worker 平台 TCP 连接 |
| ProxyIP | 使用反代地址池出站 |
| SOCKS5 | 支持用户名密码认证 |
| HTTP(S) | 支持 CONNECT，HTTPS 代理使用平台 TLS |
| TURN | 支持 TURN CONNECT 出站链路 |

---

## Subscription

`/sub` 用于生成客户端订阅。订阅 token 与当前 host、userID 相关，避免公开路径直接泄露节点配置。

支持内容：

| 类型 | 说明 |
|------|------|
| Mixed | 原始混合订阅 |
| Clash / Mihomo | YAML 订阅热补丁 |
| Sing-box | JSON 配置迁移和 TLS/ECH 补丁 |
| Surge | WebSocket 参数热补丁 |
| QuanX / Loon | 通过订阅转换参数适配 |

优选来源：

| 来源 | 说明 |
|------|------|
| 本地随机 IP | 根据配置随机生成 |
| `ADD.txt` | KV 中维护的自定义优选列表 |
| 外部 SUB/API | 从外部订阅或优选 API 拉取 |

---

## Admin Panel

管理入口：`/login` -> `/admin`

登录成功后会设置 `auth` Cookie。Cookie 与 `User-Agent`、`ADMIN`、`KEY` 相关，换浏览器或 UA 后需要重新登录。

主要管理路径：

| 路径 | 说明 |
|------|------|
| `/admin/config.json` | 读取或保存主配置 |
| `/admin/init` | 重置配置 |
| `/admin/check` | 检测代理连通性 |
| `/admin/log.json` | 查看日志 |
| `/admin/ADD.txt` | 管理优选 IP 列表 |
| `/admin/cf.json` | Cloudflare 用量配置 |
| `/admin/tg.json` | Telegram 通知配置 |
| `/logout` | 退出登录 |

---

## Environment Variables

| 变量 | 说明 |
|------|------|
| `ADMIN` / `PASSWORD` / `TOKEN` | 管理登录口令，优先使用 `ADMIN` |
| `KEY` | 主密钥，长度至少 16 位 |
| `UUID` | 客户端 UUID，推荐固定设置 |
| `HOST` | 订阅中展示的域名列表 |
| `PATH` | 默认传输路径 |
| `PROXYIP` | 默认反代地址列表 |
| `GO2SOCKS5` | SOCKS5 白名单追加项 |
| `TCP_CONCURRENT_DIAL` | 直连并发拨号数 |
| `PROXY_CONCURRENT_DIAL` | 反代并发拨号数 |
| `PRELOAD_RACE_DIAL` | 开启预加载 DNS 竞速拨号 |
| `BEST_SUB` | 开启优选订阅生成器模式 |
| `OFF_LOG` | 关闭 KV 日志写入 |
| `DEBUG` | 打开调试日志 |
| `URL` | 伪装页来源，支持 `nginx`、`1101` 或站点 URL |

KV 绑定名固定为 `KV`。

---

## Build And Release

本项目保留一个手动 GitHub Actions 工作流：`.github/workflows/build.yml`。

手动触发后会执行：

```text
npm install
  -> npm run build
  -> 提交 dist/worker.js 和 dist/build-meta.json
  -> 创建 v3.0.0.2 形式的 Git tag
  -> 创建 GitHub Release
  -> 上传 worker.js
```

本地构建：

```bash
# 安装依赖
npm install

# 运行测试
npm test

# 构建单文件 Worker
npm run build
```

构建完成后，复制 `dist/worker.js` 到 Cloudflare Workers Dashboard 即可部署。

---

## Versioning

版本采用四段式格式：

```text
主版本.次版本.修订号.构建号
```

示例：

| 版本 | 说明 |
|------|------|
| `3.0.0.0` | 3.0 系列初始构建 |
| `3.0.0.2` | 3.0 系列第 2 次构建级更新 |
| `3.0.1.0` | 3.0 系列修订更新 |
| `3.1.0.0` | 3.1 系列能力更新 |

代码中的版本源：

| 文件 | 说明 |
|------|------|
| `package.json` | npm 与 Release 使用的版本 |
| `src/constants.js` | Worker `/version` 接口使用的版本 |
| `dist/build-meta.json` | 构建产物元数据 |

---

## Security Notes

部署前请确认：

1. `ADMIN` 已设置。
2. `KEY` 已设置且长度至少 16 位。
3. KV 绑定名为 `KV`。
4. `UUID` 使用标准 UUID v4。
5. `dist/worker.js` 来自当前源码构建。

本仓库用于在自有 Cloudflare 账号中部署边缘网络组件。请遵守服务条款和当地法律法规。

---

## Troubleshooting

| 现象 | 检查项 |
|------|--------|
| 返回 `ADMIN_REQUIRED` | 检查 `ADMIN` 或密码类变量 |
| 返回 `KEY_REQUIRED` | 检查 `KEY` 是否存在且长度达标 |
| 管理面板无法保存 | 检查 KV 是否绑定为 `KV` |
| 订阅为空 | 检查 token、HOST、UUID、KV 配置 |
| 客户端无法连接 | 检查协议、传输路径、SNI、Host、反代参数 |
| 版本不一致 | 检查 `package.json`、`src/constants.js` 和构建产物 |

---

## License

本项目以仓库内许可证为准。
