import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL } from "../site-components";

export const metadata: Metadata = {
  title: "服务条款",
  description: "Locky 服务范围、安全恢复、系统限制与使用约定。",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="TERMS OF SERVICE"
      title="服务条款"
      summary="这些条款说明 Locky 能做什么、不能做什么，以及你在使用时需要了解的边界。"
      updatedAt="更新日期：2026 年 7 月 21 日"
      sections={[
        {
          title: "接受条款",
          paragraphs: [
            <>下载、安装或使用 Locky，即表示你同意本服务条款和隐私政策。如果你不同意，请停止使用并删除本应用。</>,
          ],
        },
        {
          title: "服务范围",
          paragraphs: [
            <>Locky 使用 Apple Family Controls、Managed Settings、Device Activity 与 Core Location，在你授权并选择后管理本人设备上的 App。隐藏模式会让所选 App 图标暂时消失并停止启动；限制模式会保留图标，并由 iOS 显示系统限制界面。时间和地点规则跟随你选择的保护模式。</>,
            <>禁止安装 App 与禁止删除 App 是独立的设备级设置。停止普通保护不一定会清除这两项设置；你可在 Locky 的恢复入口中明确关闭或执行“恢复全部 App”。</>,
          ],
        },
        {
          title: "计算器与应用图标",
          paragraphs: [
            <>计算器是 Locky 自身的可选启动入口，不会覆盖或替换其他 App 的解锁界面。更换应用图标只改变 Locky 在主屏幕上的外观；可用性取决于 iOS 版本、设备能力和当前会员权益。</>,
          ],
        },
        {
          title: "系统限制与可用性",
          paragraphs: [
            <>Locky 的执行依赖 Apple 提供的系统框架、权限状态、设备设置、系统版本、后台调度和定位精度。系统更新、重启、低电量模式、权限变更或定位误差可能导致规则延迟、暂停或不可用。</>,
            <>Locky 不承诺任何设置绝对无法被绕过、删除或更改，也不应作为紧急情况、人身安全、医疗、财产保护或监护场景中的唯一控制手段。</>,
          ],
        },
        {
          title: "安全恢复",
          paragraphs: [
            <>停止保护、暂停规则、恢复所选 App、权限修复和“恢复全部 App”不会因为会员到期而被付费墙阻止。若系统授权异常，你仍可按照支持页面说明在 iOS 设置中撤销相关权限。</>,
          ],
        },
        {
          title: "会员与付款",
          paragraphs: [
            <>部分高级功能需要购买会员。实际商品、价格、试用资格、续订状态和退款结果以 App Store 购买确认页及 Apple 账户为准。自动续订和终身会员的具体约定见《订阅协议》。</>,
          ],
        },
        {
          title: "合理使用与责任",
          paragraphs: [
            <>你只能在自己有权管理的设备上使用 Locky，不得利用本应用侵害他人权益、规避法定监护、干扰他人设备或从事违法活动。因违反本条款或法律造成的后果由使用者承担。</>,
            <>在法律允许的最大范围内，Locky 按现状提供。对于由系统平台限制、用户操作、权限变化或不可抗力造成的规则失效、数据丢失或间接损失，我们不承担超出法律强制规定的责任。</>,
          ],
        },
        {
          title: "变更与联系",
          paragraphs: [
            <>我们可能因功能、平台规则或法律要求更新服务和条款。重要变化会在 App 更新说明或本页面中公布。对本条款有疑问，请联系 <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>。</>,
          ],
        },
      ]}
    />
  );
}
