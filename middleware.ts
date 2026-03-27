import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getLocaleFromHost,
  getLocaleFromPathname,
  isLocale,
  localizeHref,
} from "@/lib/i18n/config";

function isPublicAsset(pathname: string) {
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    isPublicAsset(pathname)
  ) {
    return NextResponse.next();
  }

  const normalizedLocale = getLocaleFromPathname(pathname);
  const hasLocalePrefix = pathname
    .split("/")
    .filter(Boolean)
    .some((segment, index) => index === 0 && isLocale(segment));

  if (!hasLocalePrefix) {
    const localeFromHost = getLocaleFromHost(request.headers.get("host"));
    const localizedPath = localizeHref(pathname, localeFromHost);
    const redirectUrl = new URL(`${localizedPath}${search}`, request.url);

    return NextResponse.redirect(redirectUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-weboryn-locale", normalizedLocale);
  requestHeaders.set("x-weboryn-has-locale-prefix", hasLocalePrefix ? "1" : "0");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
