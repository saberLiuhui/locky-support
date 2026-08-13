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
    question: "所选 App 没有被限制？",
    answer: "先在 Locky 的“设置与支持”中检查保护权限，再回到“保护”页恢复当前保护并重新开启。如果状态异常，可执行“恢复所有保护”。",
  },
  {
    question: "限制 App 后会发生什么？",
    answer: "限制 App 会保留图标，打开时显示系统限制页面。该能力由系统执行，Locky 无法读取其他 App 的内容。",
  },
  {
    question: "如何恢复已经保护的 App？",
    answer: "进入 Locky 的“保护”页选择“恢复所选 App”。如果只想调整已选清单，先停止当前保护，再进入“选择 App”移出不再保护的 App。若无法进入或不确定哪些保护仍在生效，请到“设置与支持”顶部执行“恢复所有保护”。",
  },
  {
    question: "能查看已经选择了哪些 App 吗？",
    answer: "可以。在“保护”页进入“选择 App”，即可查看已选 App 列表。保护生效中可以查看；如需添加或移出 App，需要先停止当前限制。",
  },
  {
    question: "卸载 Locky 会自动恢复保护吗？",
    answer: "不保证。限制以及禁止安装或删除由系统执行，直接卸载 Locky 可能不会立即清除已生效的保护设置。卸载前请先执行“恢复所有保护”，确认所选 App 已恢复后再卸载。",
  },
  {
    question: "禁止安装和禁止删除怎么关闭？",
    answer: "前往 Locky 的“保护”页，在“安装与删除保护”中关闭对应开关。禁止删除 App 免费；禁止安装 App 需要会员。无论会员状态如何，关闭和恢复操作都不会被拦住。",
  },
  {
    question: "为什么地点规则没有准时触发？",
    answer: "检查定位权限、定位服务和低电量模式。地点触发可能受信号、环境和系统策略影响；地点规则和坐标只保存在本机，建议选择较大的地点半径，并保留一个手动恢复方案。",
  },
  {
    question: "计算器入口会影响其他 App 吗？",
    answer: "不会。计算器入口只是 Locky 自身的可选打开方式，不是其他 App 的解锁页面。更换图标也只会改变 Locky 在桌面上的外观。",
  },
  {
    question: "已购买会员但没有生效？",
    answer: "确认设备登录的是购买时使用的 Apple 账户，然后在会员页面选择“恢复购买”。如果 App Store 商品尚未载入，请检查网络后稍后重试。Locky 支持最多选择 50 个 App、自动保护、禁止安装和多款应用图标等会员能力。",
  },
  {
    question: "如何取消自动续订？",
    answer: "前往 iPhone“设置”→ Apple 账户 →“订阅”→ Locky，按照页面提示取消。删除 App 不会自动取消订阅。",
  },
  {
    question: "周 VIP、年 VIP 可以互相切换吗？",
    answer: "周 VIP 和年 VIP 属于同一订阅组，切换、降级或取消以 Apple 订阅管理页面为准。已开通周或年 VIP 时，Locky 内可能只展示终身 VIP 买断入口。",
  },
];

export default function SupportPage() {
  const basePath = process.env.PAGES_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="site-shell">
      <Header />
      <main className="support-main container">
        <section className="support-hero">
          <Link href="/" className="back-link"><span aria-hidden="true">←</span> 支持中心</Link>
          <p className="kicker">LOCKY SUPPORT</p>
          <h1>遇到问题，<br />从这里开始。</h1>
          <p>先按下面的恢复方式排查；如仍未解决，可以通过微信客服或邮件联系我们。</p>
          <div className="hero-actions">
            <a className="primary-action" href="#wechat-support">查看客服二维码</a>
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
            aria-label="查看微信客服二维码"
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
            <p>请说明设备型号、系统版本、Locky 版本、发生问题的步骤，并尽量附上不包含敏感信息的截图。</p>
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
