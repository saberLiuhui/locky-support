import Link from "next/link";
import Image from "next/image";

export const SUPPORT_EMAIL = "129324607@qq.com";

export function Brand({ large = false }: { large?: boolean }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <span className={`brand ${large ? "brand-large" : ""}`}>
      <Image
        src={`${basePath}/app-icon.png`}
        alt={large ? "Locky" : ""}
        width={large ? 190 : 38}
        height={large ? 190 : 38}
        priority={large}
        unoptimized
      />
      {!large && <span>Locky</span>}
    </span>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label="返回 Locky 支持中心首页">
          <Brand />
        </Link>
        <nav aria-label="主要导航">
          <Link href="/privacy/">隐私</Link>
          <Link href="/terms/">条款</Link>
          <Link href="/subscription/">订阅</Link>
          <Link href="/support/">支持</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Brand />
          <p>隐藏应用与应用锁</p>
        </div>
        <div className="footer-links">
          <Link href="/privacy/">隐私政策</Link>
          <Link href="/terms/">服务条款</Link>
          <Link href="/subscription/">订阅协议</Link>
          <Link href="/support/">技术支持</Link>
        </div>
        <p className="copyright">© 2026 Locky. 保留所有权利。</p>
      </div>
    </footer>
  );
}

export type LegalSection = {
  title: string;
  paragraphs: React.ReactNode[];
};

export function LegalPage({
  eyebrow,
  title,
  summary,
  updatedAt,
  sections,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <div className="site-shell">
      <Header />
      <main className="legal-main container">
        <aside className="legal-aside">
          <Link href="/" className="back-link"><span aria-hidden="true">←</span> 支持中心</Link>
          <p className="legal-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-summary">{summary}</p>
          <p className="updated-at">{updatedAt}</p>
        </aside>
        <article className="legal-content">
          {sections.map((section, index) => (
            <section key={section.title}>
              <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}
