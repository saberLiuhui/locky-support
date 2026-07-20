import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL } from "../site-components";

export const metadata: Metadata = {
  title: "订阅协议",
  description: "Locky 会员免费试用、自动续订、终身会员、取消及恢复购买说明。",
};

export default function SubscriptionPage() {
  return (
    <LegalPage
      eyebrow="MEMBERSHIP AGREEMENT"
      title="订阅协议"
      summary="会员购买完全通过 App Store 完成。购买前，请以 Apple 确认页面显示的价格和周期为准。"
      updatedAt="更新日期：2026 年 7 月 21 日"
      sections={[
        {
          title: "会员商品",
          paragraphs: [
            <>Locky 计划提供周会员、年会员和终身会员。周会员与年会员为自动续订订阅；终身会员为一次性购买的非消耗型项目，不会自动续订。</>,
            <>中国大陆区计划价格为周会员 ¥28、年会员 ¥88、终身会员 ¥128。实际销售价格、币种、税费和可用商品以 App Store 购买确认页面为准，网页展示不构成价格保证。</>,
          ],
        },
        {
          title: "三天免费试用",
          paragraphs: [
            <>周会员计划提供三天免费试用，但仅在 App Store 判断当前 Apple 账户符合资格且购买确认页明确展示试用时有效。试用资格由 Apple 决定，我们无法手动赠送、恢复或重复开通试用。</>,
            <>试用结束后，周会员会按购买确认页显示的价格自动续订，除非你在试用结束前通过 Apple 订阅管理取消。删除 Locky 不会取消订阅。</>,
          ],
        },
        {
          title: "扣款与自动续订",
          paragraphs: [
            <>确认购买后，费用由 Apple 从当前 Apple 账户扣取。自动续订订阅会依照 App Store 显示的规则续订，直至你取消。续订日期、下一期价格、账单和价格变化通知以 Apple 提供的信息为准。</>,
          ],
        },
        {
          title: "取消与管理订阅",
          paragraphs: [
            <>你可以在 iPhone“设置”中进入 Apple 账户的“订阅”，或访问 <a href="https://apps.apple.com/account/subscriptions">Apple 订阅管理页面</a>取消自动续订。取消后，会员权益通常会持续到当前已付费周期结束。</>,
            <>Locky 无法代替你取消 Apple 订阅，也无法直接修改 Apple 的扣款日期。为了避免下一周期扣款，请按照 Apple 页面显示的截止时间提前取消。</>,
          ],
        },
        {
          title: "终身会员",
          paragraphs: [
            <>终身会员指对当前 Locky iOS 应用的一次性买断使用权，在应用持续提供且符合 Apple 平台规则期间解锁相应会员功能。它不等同于开发者其他应用、未来独立产品、安卓版本或第三方服务的永久权益。</>,
          ],
        },
        {
          title: "恢复购买与设备变更",
          paragraphs: [
            <>重新安装或更换设备后，可在 Locky 会员页面选择“恢复购买”。恢复依赖购买时使用的 Apple 账户及 Apple 返回的已验证权益；Locky 不要求注册自己的账号。</>,
            <>若切换到不同 Apple 账户，原账户购买的权益可能无法恢复。家庭共享是否可用，以具体商品在 App Store Connect 中的配置和 Apple 规则为准。</>,
          ],
        },
        {
          title: "退款与会员异常",
          paragraphs: [
            <>所有付款和退款由 Apple 处理。需要申请退款时，请访问 <a href="https://reportaproblem.apple.com/">Apple“报告问题”页面</a>。退款、撤销购买或账单争议可能导致对应会员权益终止。</>,
            <>若已购买但权益未显示，请确认网络与 Apple 账户后使用“恢复购买”。仍无法解决时，可发送购买时间、商品类型和问题截图至 <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>；请勿发送 Apple 账户密码或完整付款信息。</>,
          ],
        },
        {
          title: "其他条款",
          paragraphs: [
            <>本协议是《服务条款》的组成部分。Apple 标准最终用户许可协议同样适用于本应用：<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple Standard EULA</a>。</>,
          ],
        },
      ]}
    />
  );
}
