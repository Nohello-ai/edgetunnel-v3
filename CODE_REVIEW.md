# edgetunnel-v3 代码审查报告

> 审查日期：2026-07-27 | 审查范围：全部源码 | 基于 commit `fce7e95`

---

## 问题总览

| 严重程度 | 数量 | 分类 |
|----------|------|------|
| 🔴 严重 | 1 | 安全 |
| 🟠 高 | 4 | 安全 (3) + 代码质量 (1) |
| 🟡 中 | 6 | 代码质量 (3) + 性能 (1) + 可靠性 (2) |
| 🔵 低 | 4 | 代码质量 (2) + 可靠性 (2) |

---

## 🔴 严重

### 1. 默认加密密钥是硬编码的中文字符串

**文件：** `src/index.js` 第 49 行
```javascript
const 加密秘钥 = env.KEY || '勿动此默认密钥，有需求请自行通过添加变量KEY进行修改';
```

**问题：** 当环境变量 `KEY` 未设置时，系统使用一段可预测的中文文本作为加密密钥。所有加密操作包括 userID 的派生（`MD5MD5(管理员密码 + 加密秘钥)`）、base64SecretEncode/Decode 均依赖此密钥。如果恶意使用者知道仓库源码，可直接推导出加密密钥。

**修复建议：**
- 在 `wrangler.toml` 注释中强调 `KEY` 必须设置
- 启动时若 `KEY` 未设置，返回明确错误提示而非静默使用默认值
- 或随机生成并打印到日志，要求用户保存

---

## 🟠 高

### 2. Trojan 密码校验非恒定时间比较

**文件：** `src/protocol/trojan.js` 第 159-160 行
```javascript
for (let i = 0; i < crLfIndex; i++) {
    if (data[i] !== sha224Password.charCodeAt(i)) return { hasError: true, message: "invalid password" };
}
```

**问题：** 逐字节短路比较（遇到不匹配立刻返回），可能通过时序攻击推断密码信息。虽在 Workers 环境下利用难度高，但在安全敏感场景下不应依赖此假设。

**修复建议：** 使用 `crypto.subtle.timingSafeEqual` 或手动实现恒定时间比较。

### 3. 使用已被破解的 MD5 算法

**文件：** `src/utils/crypto.js`
```javascript
const 第一次哈希 = new Uint8Array(await crypto.subtle.digest('MD5', ...));
const 第二次哈希 = new Uint8Array(await crypto.subtle.digest('MD5', ...));
```

**问题：** MD5 已被广泛应用于选择前缀碰撞攻击，不应被用于任何安全相关场景。虽使用双重 MD5 + 取出中间片段（`slice(7, 27)`）增加了逆向难度，但这属于 "security by obscurity"。密码学基础应该是 SHA-256 而非 MD5。

**修复建议：** 将 `MD5MD5` 替换为 `SHA256`（单次 SHA-256 已足够）。

### 4. 登录接口无频率限制

**文件：** `src/index.js` 第 125-136 行
```javascript
} else if (访问路径 === 'login') {
    ...
    if (request.method === 'POST') {
        const formData = await request.text();
        const params = new URLSearchParams(formData);
        const 输入密码 = params.get('password');
        if (输入密码 === ...管理员密码...) {
            ...
        }
    }
}
```

**问题：** `/login` POST 接口没有速率限制，攻击者可无限制尝试密码。

**修复建议：**
- 在 KV 中记录失败尝试次数和时间戳
- 连续失败 5 次后锁定 15 分钟
- 或使用 Cloudflare 的 Rate Limiting 功能

### 5. fetch() 入口函数体量过大

**文件：** `src/index.js` 第 37-496 行

**问题：** 主入口函数包含 460 行的 if/else 链，涵盖：身份计算、路由分发（version / WS / gRPC / XHTTP / login / admin CRUD / sub / 伪装页）、登录验证、cookie 处理、订阅生成主题替换、伪装页面反代。逻辑高度嵌套，难以单元测试、理解、维护。

**修复建议：** 将路由拆分为独立函数或路由表：
```javascript
const routes = [
  { method: 'GET', path: /^\/version$/, handler: 处理版本查询 },
  { upgrade: 'websocket', handler: 处理WS请求 },
  { method: 'POST', path: /^\/admin\/config\.json$/, handler: 处理保存配置 },
  // ...
];
for (const route of routes) {
  const match = 匹配路由(route, request);
  if (match) return route.handler(request, env, ctx, match);
}
```

---

## 🟡 中

### 6. 无测试覆盖

**问题：** 整个项目零测试文件（无单元测试、无集成测试）。在高风险的协议解析（VLESS/Trojan 二进制头解析、SS AEAD 加密/解密）和流处理（上行队列合包、下行 Grain 发送器）区域，任何一次重构都可能引入隐蔽 bug。

**修复建议：**
- 优先添加协议解析单元测试（构造已知输入 → 验证解析出的 host:port）
- 添加 SS AEAD 加解密往返测试
- 添加上行队列合包逻辑测试

### 7. forRootataTCP 参数过多

**文件：** `src/stream/forward.js` 第 19 行
```javascript
export async function forwardataTCP(host, portNum, rawData, ws, respHeader,
    remoteConnWrapper, yourUUID, request = null, 反代上下文 = {}, 
    允许木马反代 = false, 木马反代首包数据 = null)
```

**问题：** 11 个参数，参数含义需查阅调用处才能理解。容易传错参数顺序。

**修复建议：** 改为单 options 对象：
```javascript
forwardataTCP({
  host, port, rawData, ws, respHeader,
  remoteConnWrapper, uuid, request,
  proxyContext: {}, trojanFallback: false,
});
```

### 8. gRPC 流处理中频繁拷贝 Uint8Array

**文件：** `src/transport/grpc.js` 第 169-173 行
```javascript
const merged = new Uint8Array(pending.length + 当前块.length);
merged.set(pending, 0);
merged.set(当前块, pending.length);
pending = merged;
```

**问题：** 每收到一个新数据块都创建新 `Uint8Array` 合并旧数据。高吞吐场景下产生大量临时对象，导致 GC 抖动。

**修复建议：** 用环形缓冲区或限制 pending 最大大小后直接分片处理，避免拷贝。

### 9. DoH 缓存手动淘汰低效

**文件：** `src/net/doh.js` 第 149-156 行
```javascript
if (Object.keys(DoH缓存).length >= DoH缓存最大条目) {
    const 清理时间戳 = Date.now();
    for (const [缓存条目键, 缓存条目] of Object.entries(DoH缓存)) {
        if (清理时间戳 >= 缓存条目.过期时间) delete DoH缓存[缓存条目键];
    }
    if (Object.keys(DoH缓存).length >= DoH缓存最大条目) {
        delete DoH缓存[Object.keys(DoH缓存)[0]];
    }
}
```

**问题：** 每次超限时遍历所有条目 + 多次 `Object.keys()` 调用。使用 `Map` + LRU 策略更合适（Workers 平台 `Map` 可用）。

### 10. KV config.json 空值覆盖风险

**文件：** `src/config/loader.js` 第 114-121 行
```javascript
let configJSON = await env.KV.get('config.json');
if (!configJSON || 重置配置 == true) {
    await env.KV.put('config.json', JSON.stringify(默认配置JSON, null, 2));
    config_JSON = 默认配置JSON;
}
```

**问题：** 如果 KV 读取返回空字符串 `""`，`!""` 为 `true`，会导致已有配置被覆盖为默认值。KV 正常情况下不会返回空字符串，但发生异常时（如 KV namespace 未绑定）可能出现。

**修复建议：** 改为 `if (configJSON === null || 重置配置 === true)` 仅在明确 null 或手动重置时覆盖。

---

## 🔵 低

### 11. UUID 缓存满时全清而非淘汰

**文件：** `src/protocol/vless.js` 第 29 行
```javascript
if (UUID字节缓存.size >= 32) UUID字节缓存.clear();
```

**问题：** 缓存满 32 条时清空全部而非淘汰最旧的一条。虽然实际场景中一个 session 通常只有一个 UUID，不会触发此问题，但在多用户场景下可能导致缓存抖动。

**修复建议：** 改为 `Map` 并删除第一个条目（`keys().next().value`）。

### 12. 连接超时偏激进

**文件：** `src/stream/forward.js` 第 37 行
```javascript
const 连接超时毫秒 = 1000;
```

**问题：** 1 秒超时对国际链路（尤其是高延迟的亚太/拉美线路）可能频繁误判。同时竞速拨号中 `Promise.any` 会等待所有 promise settle（非 resolve），若所有连接都因超时失败，才会 reject。

**修复建议：** 提升到 3000-5000ms，或根据目标 IP 归属动态调整。

### 13. POST 配置接口未校验 Content-Type

**文件：** `src/index.js` 第 185-186 行
```javascript
} else if (request.method === 'POST') {
    ...
    const newConfig = await request.json();
```

**问题：** 对 `admin/config.json` 的 POST 未校验 Content-Type，直接调用 `request.json()`。非 JSON 请求会抛异常返回 500，应返回 400 并提示内容类型错误。

**修复建议：**
```javascript
const contentType = request.headers.get('Content-Type') || '';
if (!contentType.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'Content-Type 必须为 application/json' }), 
        { status: 400 });
}
```

### 14. 静默吞错误存在多处

**文件：** 多处 `.catch(() => {})` 或 `.catch((_) => {})`
- `src/stream/pipe.js` 第 42 行
- `src/transport/ws.js` 多处
- `src/connector/*.js` 多处

**问题：** 空 catch 块吞掉异常，导致连接状态不一致时无法排查根因。部分地方可能是故意的（如清理资源时），但个别地方（如 `pipe.js` 中 `retryFunc` 调用）如果抛异常会被静默吞掉。

**修复建议：** 关键路径的 catch 块至少应 `log()` 输出异常信息。

---

## 修复优先级建议

| 优先级 | 问题 | 工作量 | 影响 | 
|--------|------|--------|------|
| **P0** | #1 默认密钥硬编码 | 1h | 所有部署未设 KEY 的用户 |
| **P1** | #3 替换 MD5 为 SHA-256 | 2h | 密码学安全基线 |
| **P1** | #5 fetch() 函数拆分 | 4h | 可维护性 |
| **P2** | #4 登录频率限制 | 2h | 管理面板安全 |
| **P2** | #6 添加关键模块单元测试 | 8h | 代码质量 & 回归保护 |
| **P2** | #10 KV 空值覆盖 | 0.5h | 用户数据安全 |
| **P3** | #2 Trojan 恒定时间比较 | 1h | 安全加固 |
| **P3** | #7 #8 #9 #11 | 4h | 代码质量 & 性能 |
| **P4** | #12 #13 #14 | 2h | 健壮性 |
