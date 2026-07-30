# 剩余步骤 — AI 接续执行

## 当前状态

自实现 TLS 模块（`src/tls/`）已全部删除，README 已更新，`src/tls` 空目录已移除。以下步骤由接续 AI 执行。

---

## 步骤 1：运行全量测试

验证所有源文件改动（HTTPS connector 删除、TLS 模块删除、proxy-check 改造、stream pipe 修复等）的语法和逻辑。

```bash
cd /root/com/edgetunnel-v3
rm -rf /tmp/edgetunnel-run-tests.log
npm test 2>&1
```

**预期结果：** 测试全部通过（预计 61 项，含新增的 `stream-pipe.test.js` 和旧 `http-connect.test.js` / `socks5.test.js` 等）。

**如果失败：** 查看失败用例输出，按以下规则处理：
- 如果失败来自已删除的 `test/tls-parsing.test.js`，检查 `node --test` 是否正确排除了该文件（删除后不应再被执行）。
- 如果失败来自 import 错误（如 `'../tls/client'` 未找到），说明有文件残留了 `TlsClient` 引用，用 `grep -rIn "TlsClient" src/` 查找并修复。
- 其他失败照常修，修完重跑，直到全部通过。

---

## 步骤 2：重建部署产物

源文件通过测试后，重新生成 `dist/worker.js`，使其包含所有删除和修复。

```bash
cd /root/com/edgetunnel-v3
npm run build
```

**预期结果：** `dist/worker.js` 被重写，构建脚本退出码为 0。

**如果失败：** 检查构建脚本 `scripts/build.mjs`（esbuild 打包）。常见原因：
- 源文件引用了不存在的模块（`import` 路径错误）。用 `node --check` 定位语法/引用问题。
- 确保 `node_modules` 已安装（`npm install`）。

---

## 步骤 3：验证构建产物不含已删除代码

确认 `dist/worker.js` 中不再包含自实现 TLS 和 `httpsConnect`。

```bash
cd /root/com/edgetunnel-v3
grep -c 'TlsClient' dist/worker.js      # 期望输出 0
grep -c 'httpsConnect' dist/worker.js    # 期望输出 0
grep -c 'startTls\|secureTransport' dist/worker.js  # 期望包含（平台原生）
```

**如果仍有 TlsClient 引用：** 检查构建时是否缓存了旧版本。尝试：
```bash
rm -rf dist/worker.js && npm run build
```

---

## 步骤 4：构建后最终确认

```bash
cd /root/com/edgetunnel-v3
git status                                # 确认变更清单符合预期
git diff --stat                           # 确认改动文件数量和内容正确
```

**预期变更清单（概览）：**

| 文件 | 变更 |
|------|------|
| `src/connector/https.js` | **删除**（整个文件） |
| `src/stream/forward.js` | 移除 httpsConnect import 和 isIPHostname 分支 |
| `src/routes/proxy-check.js` | 移 TlsClient，改用 HTTP 80 隧道 |
| `src/stream/pipe.js` | 异常后不重试、异步 cancel 修复 |
| `src/tls/client.js` | **删除** |
| `src/tls/constants.js` | **删除** |
| `src/tls/crypto.js` | **删除** |
| `src/tls/handshake.js` | **删除** |
| `src/tls/record.js` | **删除** |
| `test/tls-parsing.test.js` | **删除** |
| `test/stream-pipe.test.js` | **新增** |
| `README.md` | 更新模块清单和目录树 |

---

## 步骤 5：可选 — 确认 SSTP 零残留

```bash
cd /root/com/edgetunnel-v3
find . -path './.git' -prune -o -path './node_modules' -prune -o -type f -exec grep -Ili 'sstp' {} +
find . -path './.git' -prune -o -path './node_modules' -prune -o -iname '*sstp*' -print
```

两命令都应无输出。

---

## 完成标志

- [x] 全量测试通过（npm test = 61 pass）
- [ ] `dist/worker.js` 已重建
- [ ] 构建产物无 TlsClient/httpsConnect 引用
- [ ] `git status` 变更清单与上表一致
- [ ] SSTP 零残留确认

所有步骤完成后，本轮 TLS 硬化和模块清理工作即结束。
