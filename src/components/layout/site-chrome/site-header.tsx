"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header/header";
import { getLocaleFromPathname } from "@/lib/i18n/config";

export default function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return <Header locale={locale} />;
}
