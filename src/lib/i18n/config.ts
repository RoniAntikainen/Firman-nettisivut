export const LOCALES = ["en", "fi"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_BASE_URL: Record<Locale, string> = {
  en: "https://weboryn.com",
  fi: "https://weboryn.fi",
};

export const APP_ROUTES = [
  "",
  "about-us",
  "service",
  "process",
  "cases",
  "book",
  "contact",
  "privacy",
  "terms",
] as const;

export type AppRoute = (typeof APP_ROUTES)[number];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getLocaleFromHost(host: string | null | undefined): Locale {
  const normalizedHost = (host ?? "").split(":")[0].toLowerCase();

  if (
    normalizedHost === "weboryn.fi" ||
    normalizedHost === "www.weboryn.fi" ||
    normalizedHost.endsWith(".fi")
  ) {
    return "fi";
  }

  return DEFAULT_LOCALE;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [maybeLocale] = pathname.split("/").filter(Boolean);

  if (maybeLocale && isLocale(maybeLocale)) {
    return maybeLocale;
  }

  return DEFAULT_LOCALE;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const [maybeLocale, ...rest] = segments;

  if (maybeLocale && isLocale(maybeLocale)) {
    if (rest.length === 0) {
      return "/";
    }

    return `/${rest.join("/")}`;
  }

  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale): string {
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  if (!href.startsWith("/")) {
    return href;
  }

  const segments = href.split("/").filter(Boolean);
  const [maybeLocale] = segments;

  if (maybeLocale && isLocale(maybeLocale)) {
    return href;
  }

  return `/${locale}${href}`;
}

export function switchLocaleInPathname(pathname: string, locale: Locale): string {
  const normalizedPath = stripLocaleFromPathname(pathname);
  return localizeHref(normalizedPath, locale);
}

export function getLocalizedRoutePath(route: AppRoute, locale: Locale): string {
  if (route === "") {
    return `/${locale}`;
  }

  return `/${locale}/${route}`;
}
