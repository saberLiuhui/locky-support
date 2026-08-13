import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.PAGES_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "Locky - App 保护与应用锁",
    template: "%s · Locky",
  },
  description: "Locky 帮助你限制和自动保护自己选择的 App，支持时间规则、地点规则、恢复购买与安全恢复。",
  icons: {
    icon: `${basePath}/app-icon.png`,
    apple: `${basePath}/app-icon.png`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
