"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n/config";

export function useCurrentLocale() {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname);
}
