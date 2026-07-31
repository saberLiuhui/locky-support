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

## 构建静态网站

```bash
pnpm build:pages
```

静态文件输出到 `out/`。

## 当前生产发布：阿里云轻量应用服务器

当前中国大陆生产域名：

- 官网：`https://lockyapp.cn/`
- 隐私政策：`https://lockyapp.cn/privacy/`
- 技术支持：`https://lockyapp.cn/support/`
- App 内法律页：`https://lockyapp.cn/app/privacy/`

部署到阿里云：

```bash
scripts/deploy-aliyun.sh
```

脚本会重新构建 `out/`，并通过 `admin@47.98.151.172` 同步到 `/var/www/lockyapp/current`，然后 reload Nginx。默认 SSH key 为 `~/.ssh/lockyapp_deploy`。

## 备用发布方案：Cloudflare Pages

Locky 官网仍可发布到 Cloudflare Pages。Cloudflare Pages 可以连接 GitHub 仓库自动部署，也可以手动上传 `out/` 目录。

Cloudflare Pages 构建参数：

- Framework preset：`Next.js`
- Build command：`pnpm build:cloudflare`
- Build output directory：`out`
- Environment variable：`NODE_VERSION=22.13.0`
- 不要设置 `PAGES_BASE_PATH` 或 `NEXT_PUBLIC_BASE_PATH`

详细步骤见 [`CLOUDFLARE_PAGES.md`](./CLOUDFLARE_PAGES.md)。

## 上线后检查

- `/`
- `/privacy/`
- `/terms/`
- `/subscription/`
- `/support/`
- `/app/privacy/`
- `/app/terms/`
- `/app/subscription/`

确认全部无需登录、无证书警告、无 404 后，再把最终 URL 写入 App Store Connect 和 Locky 客户端。

## 上架前检查

1. 确认 `app/site-components.tsx` 中的公开支持邮箱。
2. 发布后检查首页及所有法律、支持页面均可匿名访问。
3. 将最终 URL 填入 App Store Connect 的“技术支持网址”和“隐私政策网址”。
4. 将同样的网址写入 Locky 客户端设置页，避免应用内与商店信息不一致。
