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

## 国内访问发布方案

如果目标用户在国内，GitHub Pages 可能访问不稳定。可以把同一份静态站发布到 Gitee Pages、对象存储静态网站或自有域名。

### Gitee Pages

建议仓库名仍使用 `locky-support`，并保持公开仓库。发布前先构建带仓库路径的静态文件：

```bash
PAGES_BASE_PATH=/locky-support NEXT_PUBLIC_BASE_PATH=/locky-support pnpm build:pages
```

静态文件会输出到 `out/`。把 `out/` 目录内容发布到 Gitee Pages 对应分支后，最终 URL 以 Gitee 页面后台展示为准。

注意：Gitee 用户名如果包含下划线，例如 `liuhuisaber_admin`，生成的 Pages 子域名可能不如纯字母数字用户名稳定。上线前必须在 Safari、微信内置浏览器和蜂窝网络下分别打开以下页面确认无需登录、无证书警告、无 404：

- `/`
- `/privacy/`
- `/terms/`
- `/subscription/`
- `/support/`
- `/app/privacy/`
- `/app/terms/`
- `/app/subscription/`

确认后，再把最终 URL 写入 App Store Connect 和 Locky 客户端。

## 上架前检查

1. 确认 `app/site-components.tsx` 中的公开支持邮箱。
2. 发布后检查首页及四个子页面均可匿名访问。
3. 将最终 URL 填入 App Store Connect 的“技术支持网址”和“隐私政策网址”。
4. 将同样的网址写入 Locky 客户端设置页，避免应用内与商店信息不一致。
