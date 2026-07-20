import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header, SUPPORT_EMAIL } from "../site-components";

export const metadata: Metadata = {
  title: "技术支持",
  description: "Locky 常见问题、故障恢复和联系支持。",
};

const faqs = [
  {
    question: "所选 App 没有被隐藏或限制？",
    answer: "先在 Locky 的权限页面确认屏幕使用时间授权仍然有效，再停止保护并重新选择 App。如果系统权限异常，可使用“修复授权”；紧急情况下可执行“恢复全部 App”。",
  },
  {
    question: "如何恢复已经隐藏的 App？",
    answer: "进入 Locky 的保护页面选择“恢复所选 App”。若无法进入或状态异常，请前往权限页面使用“恢复全部 App”。恢复功能不要求会员。",
  },
  {
    question: "卸载 Locky 会自动恢复所有 App 吗？",
    answer: "不保证。隐藏、限制以及禁止安装或删除由 iOS 系统执行，直接卸载 Locky 可能不会立即清除已生效的系统设置。卸载前请先在权限页面执行“恢复全部 App”，确认所选 App 已恢复后再卸载。",
  },
  {
    question: "开启禁止删除后，如何关闭？",
    answer: "前往 Locky 的保护页面关闭“禁止删除 App”。若状态异常，请在权限页面执行“恢复全部 App”。禁止删除功能关闭和恢复不要求会员。",
  },
  {
    question: "为什么地点规则没有准时触发？",
    answer: "检查定位权限、系统定位服务、后台刷新及低电量模式。地点触发由 iOS 调度，可能受信号和系统策略影响；建议选择较大的地点半径，并保留一个手动恢复方案。",
  },
  {
    question: "已购买会员但没有生效？",
    answer: "确认设备登录的是购买时使用的 Apple 账户，然后在会员页面选择“恢复购买”。如果 App Store 商品尚未载入，请检查网络后稍后重试。",
  },
  {
    question: "如何取消自动续订？",
    answer: "前往 iPhone“设置”→ Apple 账户 →“订阅”→ Locky，按照页面提示取消。删除 App 不会自动取消订阅。",
  },
];

export default function SupportPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="site-shell">
      <Header />
      <main className="support-main container">
        <section className="support-hero">
          <Link href="/" className="back-link"><span aria-hidden="true">←</span> 支持中心</Link>
          <p className="kicker">LOCKY SUPPORT</p>
          <h1>遇到问题，<br />从这里开始。</h1>
          <p>先查看常见处理方式；如仍未解决，可以通过微信客服或邮件联系我们。</p>
          <div className="hero-actions">
            <a className="primary-action" href="#wechat-support">微信客服</a>
            <a className="secondary-action" href={`mailto:${SUPPORT_EMAIL}?subject=Locky%20使用咨询`}>邮件支持</a>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="kicker">QUICK ANSWERS</p>
            <h2 id="faq-title">常见问题</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="detail-plus" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="wechat-support" className="wechat-support-panel" aria-labelledby="wechat-title">
          <div>
            <p className="kicker">WECHAT SUPPORT</p>
            <h2 id="wechat-title">微信客服</h2>
            <p>使用微信扫一扫添加客服；在手机上也可以长按二维码识别。</p>
            <p className="wechat-hours">人工服务时间：9:00–18:30，节假日可能调整</p>
          </div>
          <a
            className="wechat-qr"
            href="https://work.weixin.qq.com/u/vc9bce6b6e98ee6b67?src=wx&bb=1aaa095ff9"
            target="_blank"
            rel="noreferrer"
            aria-label="打开微信客服"
          >
            <Image
              src={`${basePath}/wechat-support-qr.png`}
              alt="Locky 微信客服二维码"
              width={630}
              height={630}
              unoptimized
            />
          </a>
        </section>

        <section className="contact-panel" aria-labelledby="contact-title">
          <div>
            <p className="kicker">CONTACT</p>
            <h2 id="contact-title">联系我们</h2>
            <p>请说明设备型号、iOS 版本、Locky 版本、发生问题的步骤，并尽量附上不包含敏感信息的截图。</p>
          </div>
          <div className="contact-details">
            <span>支持邮箱</span>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <span>预计回复</span>
            <strong>1–3 个工作日</strong>
          </div>
        </section>

        <p className="support-warning">安全提示：请勿发送入口数字、Apple 账号密码、支付密码或完整银行卡信息。</p>
      </main>
      <Footer />
    </div>
  );
}
