# 版本发布说明

每次发版会自动把 `src/` 模块打包成 **单个 `worker.js`**，方便复制粘贴到 Cloudflare Workers。

## 方式一：打 Tag 自动发版（推荐）

```bash
# 改完代码后
git tag v3.0.1
git push origin v3.0.1
```

GitHub Actions 会：

1. 用 esbuild 打包 `src/index.js` → `dist/worker.js`
2. 创建 GitHub Release
3. 上传可下载的 `worker.js` / `edgetunnel-v3-v3.0.1.js`

打开：  
https://github.com/Nohello-ai/edgetunnel-v3/releases

## 方式二：网页手动触发

1. 打开仓库 → **Actions** → **Release worker.js**
2. **Run workflow**
3. 填版本号，例如 `v3.0.1` → Run

## 推送到 main 时

每次改 `src/**` 并 push 到 `main`，会自动重建 `dist/worker.js` 并提交回仓库。  
你也可以直接在仓库里打开 `dist/worker.js` 复制。

## 粘贴部署

1. Cloudflare Dashboard → Workers → 你的脚本 → Edit code  
2. 下载 Release 里的 `worker.js`，全选复制粘贴  
3. Deploy  
4. 绑定 KV（名称 `KV`），**必须**设置 `KEY`（随机串，≥16 字符），以及 `ADMIN` / `UUID` 等  
   - 自 v3.0.3 起：未设置 `KEY`、KEY 过短、或仍使用旧默认提示文案时，Worker 返回 **503 KEY_REQUIRED**  

## 本地打包

```bash
npm install
npm run build
# 产物：dist/worker.js
```
