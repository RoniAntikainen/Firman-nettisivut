"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/footer/footer";
import { getLocaleFromPathname } from "@/lib/i18n/config";

export default function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return <Footer locale={locale} />;
}
