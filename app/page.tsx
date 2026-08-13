import Link from "next/link";
import Image from "next/image";
import { Footer, Header } from "./site-components";

const basePath = process.env.PAGES_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const downloadUrl = "https://lockyapp.cn/#download";

const productLinks = [
  "限制打开",
  "自动保护",
  "安装与删除保护",
];

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

const floatingApps = [
  { src: "/icon-wechat.jpg", label: "微信", className: "hero-app-one" },
  { src: "/icon-momo.jpg", label: "陌陌", className: "hero-app-two" },
  { src: "/icon-tantan.jpg", label: "探探", className: "hero-app-three" },
  { src: "/icon-honor-of-kings.jpg", label: "王者荣耀", className: "hero-app-four" },
  { src: "/icon-soul.jpg", label: "Soul", className: "hero-app-five" },
];

const features = [
  {
    image: "/screen-protection-mode.png",
    eyebrow: "SELECT MODE",
    title: "选择 App，限制打开",
    description: "选择需要保护的 App，保留图标，并在打开时由系统限制。",
  },
  {
    image: "/screen-time-automation.png",
    eyebrow: "TIME RULES",
    title: "按时段，自动保护",
    description: "学习、工作、睡前时段自动执行，到点恢复，减少手动切换。",
  },
  {
    image: "/screen-location-automation.png",
    eyebrow: "LOCATION RULES",
    title: "到达地点，自动执行",
    description: "进入设定地点后自动开启保护，离开后按规则恢复。",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero product-hero">
          <div className="hero-copy">
            <div className="hero-brand-pill">
              <Image
                src={`${basePath}/app-icon.png`}
                alt=""
                width={30}
                height={30}
                unoptimized
              />
              <span>Locky</span>
            </div>
            <p className="kicker">PRIVATE APP SPACE</p>
            <h1>保护 App，<br />使用更可控。</h1>
            <p className="hero-description">
              把社交、游戏和不想被打扰的 App 交给 Locky 管理。限制打开、时间和地点规则都由你决定。
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#download">扫码下载</a>
              <a className="secondary-action" href="#features">查看功能</a>
            </div>
            <div className="hero-trust">
              {productLinks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Locky App 保护示意">
            <div className="hero-visual-card">
              <Image
                className="hero-drawer"
                src={`${basePath}/hero-locky-drawer-hero.png`}
                alt="Locky 管理受保护 App 的示意图"
                width={852}
                height={1246}
                priority
                unoptimized
              />
              <div className="drawer-app-tray" aria-label="已交给 Locky 管理的 App">
                {floatingApps.map((app) => (
                  <div className={`floating-app ${app.className}`} key={app.label}>
                    <Image
                      src={`${basePath}${app.src}`}
                      alt={app.label}
                      width={78}
                      height={78}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="privacy-strip" aria-label="Locky 产品原则">
          <div className="container privacy-strip-inner">
            <div>
              <span>01</span>
              <strong>本机优先</strong>
              <p>选择的 App、入口数字和规则保存在设备上。</p>
            </div>
            <div>
              <span>02</span>
              <strong>系统执行</strong>
              <p>App 保护使用 Apple 提供的系统能力完成。</p>
            </div>
            <div>
              <span>03</span>
              <strong>恢复可控</strong>
              <p>停止保护、恢复所选 App 不因会员状态被阻止。</p>
            </div>
          </div>
        </section>

        <section id="features" className="feature-section container" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="kicker">CORE FEATURES</p>
            <h2 id="features-title">常用场景，直接保护</h2>
            <p>不把功能堆成说明书，Locky 只围绕一个目标：让你选择的 App 在合适的时候受保护。</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div>
                  <p className="feature-eyebrow">{feature.eyebrow}</p>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="phone-shot">
                  <Image
                    src={`${basePath}${feature.image}`}
                    alt={`Locky ${feature.title}界面`}
                    width={1320}
                    height={2868}
                    unoptimized
                    priority={index === 0}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="download" className="download-section container" aria-labelledby="download-title">
          <div className="download-copy">
            <p className="kicker">DOWNLOAD</p>
            <h2 id="download-title">扫码打开 Locky 下载页</h2>
            <p>
              App Store 正式链接生成后，二维码会切换为直接下载地址。现在可先收藏官网，查看隐私、条款与支持信息。
            </p>
            <div className="download-actions">
              <a className="app-store-button" href={downloadUrl}>
                <span>App Store</span>
                <strong>上线后可下载</strong>
              </a>
              <Link className="secondary-action light" href="/support/">需要帮助</Link>
            </div>
          </div>
          <div className="download-card">
            <div className="qr-frame">
              <Image
                src={`${basePath}/app-download-qr.png`}
                alt="Locky App 下载二维码"
                width={434}
                height={434}
                unoptimized
              />
            </div>
            <span>扫描二维码</span>
            <strong>lockyapp.cn</strong>
          </div>
        </section>

        <section className="document-section container" aria-labelledby="documents-title">
          <div className="section-heading">
            <p className="kicker">LEGAL & SUPPORT</p>
            <h2 id="documents-title">重要信息，都放在这里</h2>
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
      </main>
      <Footer />
    </div>
  );
}
