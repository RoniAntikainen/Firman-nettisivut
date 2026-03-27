import type { MetadataRoute } from "next";
import {
  APP_ROUTES,
  LOCALE_BASE_URL,
  getLocalizedRoutePath,
} from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return APP_ROUTES.flatMap((route) =>
    (["en", "fi"] as const).map((locale) => {
      const localizedPath = getLocalizedRoutePath(route, locale);
      const routeWithoutLocale = route === "" ? "" : `/${route}`;

      return {
        url: `${LOCALE_BASE_URL[locale]}${routeWithoutLocale}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${LOCALE_BASE_URL.en}${routeWithoutLocale}`,
            fi: `${LOCALE_BASE_URL.fi}${routeWithoutLocale}`,
          },
        },
        ...(localizedPath ? {} : {}),
      };
    })
  );
}
