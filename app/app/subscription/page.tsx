import type { Metadata } from "next";
import { InAppLegalPage } from "../../site-components";
import { subscriptionDocument } from "../../subscription/page";

export const metadata: Metadata = {
  title: "订阅协议",
  robots: { index: false, follow: false },
};

export default function AppSubscriptionPage() {
  return <InAppLegalPage {...subscriptionDocument} />;
}
