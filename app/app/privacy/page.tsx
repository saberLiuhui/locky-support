import type { Metadata } from "next";
import { InAppLegalPage } from "../../site-components";
import { privacyDocument } from "../../privacy/page";

export const metadata: Metadata = {
  title: "隐私政策",
  robots: { index: false, follow: false },
};

export default function AppPrivacyPage() {
  return <InAppLegalPage {...privacyDocument} />;
}
