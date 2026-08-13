# Locky 官网发布到 Cloudflare Pages

Locky 官网是静态导出站点，Cloudflare Pages 只需要构建后发布 `out/` 目录。

## 推荐方案：连接 GitHub 自动部署

1. 打开 Cloudflare Dashboard。
2. 进入 `Workers & Pages` → `Create application` → `Pages`。
3. 选择 `Connect to Git`。
4. 授权并选择仓库：`saberLiuhui/locky-support`。
5. 构建设置填写：
   - Project name：`locky-support`
   - Production branch：`main`
   - Framework preset：`Next.js`
   - Build command：`pnpm build:cloudflare`
   - Build output directory：`out`
   - Root directory：留空
6. 环境变量添加：
   - `NODE_VERSION` = `22.13.0`
7. 不要添加 `PAGES_BASE_PATH` 或 `NEXT_PUBLIC_BASE_PATH`。Cloudflare Pages 发布在根路径，不需要仓库名前缀。
8. 点击 `Save and Deploy`。

部署完成后，Cloudflare 会生成类似下面的地址。当前生产正式域名以阿里云为准：

```text
https://lockyapp.cn
```

最终以上线后台实际展示的地址为准。

## 备选方案：手动上传 out 目录

如果暂时不想连接 GitHub：

```bash
pnpm install
pnpm build:cloudflare
```

然后在 Cloudflare Pages 里选择 `Direct Upload`，上传 `out/` 目录内容。

## 上线后必须检查

用 Safari、微信内置浏览器和蜂窝网络分别打开：

- `/`
- `/privacy/`
- `/terms/`
- `/subscription/`
- `/support/`
- `/app/privacy/`
- `/app/terms/`
- `/app/subscription/`

确认全部无需登录、无 404、无证书警告后，再写入 App Store Connect 和 Locky 客户端。

## App Store Connect 填写建议

- 技术支持网址：`https://你的 Cloudflare Pages 域名/support/`
- 隐私政策网址：`https://你的 Cloudflare Pages 域名/privacy/`
- 服务条款：可在 App 描述或审核备注中提供 `https://你的 Cloudflare Pages 域名/terms/`
- 订阅协议：App 内会员页和设置页应指向 `https://你的 Cloudflare Pages 域名/subscription/`
