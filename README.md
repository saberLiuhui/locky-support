# Locky 官方支持网站

这是 `Locky - 隐藏应用与应用锁` 的公开支持与法律信息网站，包含：

- 隐私政策：`/privacy/`
- 服务条款：`/terms/`
- 订阅协议：`/subscription/`
- 技术支持：`/support/`

## 本地开发

需要 Node.js 22 和 pnpm。

```bash
pnpm install
pnpm dev
```

默认访问 `http://localhost:3000`。

## 构建 GitHub Pages 静态网站

```bash
pnpm build:pages
```

静态文件输出到 `out/`。仓库中的 `.github/workflows/pages.yml` 会在 `main` 分支推送后自动构建并发布 GitHub Pages。

首次发布前，请在 GitHub 仓库的 `Settings → Pages → Build and deployment` 中将 Source 设为 `GitHub Actions`。

## 上架前检查

1. 确认 `app/site-components.tsx` 中的公开支持邮箱。
2. 发布后检查首页及四个子页面均可匿名访问。
3. 将最终 URL 填入 App Store Connect 的“技术支持网址”和“隐私政策网址”。
4. 将同样的网址写入 Locky 客户端设置页，避免应用内与商店信息不一致。

