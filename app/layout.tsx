import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.PAGES_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "Locky 官方支持",
    template: "%s · Locky",
  },
  description: "Locky - 隐藏应用与应用锁的官方支持、隐私政策、服务条款和订阅说明。",
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
