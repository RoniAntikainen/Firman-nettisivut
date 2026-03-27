import { headers } from "next/headers";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";

export async function getRequestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-weboryn-locale");

  if (locale && isLocale(locale)) {
    return locale;
  }

  return DEFAULT_LOCALE;
}
