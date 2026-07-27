import Link from "next/link";
import { Brand, Footer, Header } from "./site-components";

const documents = [
  {
    href: "/privacy/",
    eyebrow: "PRIVACY",
    title: "隐私政策",
    description: "了解 Locky 如何处理本机数据、保护权限、定位与购买信息。",
  },
  {
    href: "/terms/",
    eyebrow: "TERMS",
    title: "服务条款",
    description: "了解功能范围、系统限制、安全恢复和使用约定。",
  },
  {
    href: "/subscription/",
    eyebrow: "MEMBERSHIP",
    title: "订阅协议",
    description: "查看免费试用、自动续订、终身 VIP、取消与恢复购买说明。",
  },
  {
    href: "/support/",
    eyebrow: "SUPPORT",
    title: "技术支持",
    description: "查找常见问题的处理方式，或直接联系 Locky 支持。",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="kicker">LOCKY OFFICIAL SUPPORT</p>
            <h1>专注保护，<br />清楚说明。</h1>
            <p className="hero-description">
              Locky 使用 Apple 提供的设备管理能力，帮助你隐藏、限制和自动保护自己选择的 App。
              这里集中提供隐私、条款、订阅及支持信息。
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/support/">获得帮助</Link>
              <Link className="secondary-action" href="/privacy/">查看隐私政策</Link>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <Brand large />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
        </section>

        <section className="document-section container" aria-labelledby="documents-title">
          <div className="section-heading">
            <p className="kicker">DOCUMENTS & SUPPORT</p>
            <h2 id="documents-title">你需要的信息，都在这里</h2>
          </div>
          <div className="document-grid">
            {documents.map((document, index) => (
              <Link className="document-card" href={document.href} key={document.href}>
                <div className="card-topline">
                  <span>{document.eyebrow}</span>
                  <span className="card-number">0{index + 1}</span>
                </div>
                <h3>{document.title}</h3>
                <p>{document.description}</p>
                <span className="card-link">打开页面 <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="principles container" aria-label="Locky 隐私原则">
          <div>
            <span className="principle-index">01</span>
            <h3>本机优先</h3>
            <p>App 选择、入口数字和自动规则保存在设备上，不用于广告画像。</p>
          </div>
          <div>
            <span className="principle-index">02</span>
            <h3>权限透明</h3>
            <p>只有在使用对应功能时才申请保护权限、定位或身份验证。</p>
          </div>
          <div>
            <span className="principle-index">03</span>
            <h3>恢复始终可用</h3>
            <p>停止保护、恢复 App 和修复授权不会因会员到期而被阻止。</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
