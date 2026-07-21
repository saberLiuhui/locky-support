import type { Metadata } from "next";
import { InAppLegalPage } from "../../site-components";
import { termsDocument } from "../../terms/page";

export const metadata: Metadata = {
  title: "服务条款",
  robots: { index: false, follow: false },
};

export default function AppTermsPage() {
  return <InAppLegalPage {...termsDocument} />;
}
