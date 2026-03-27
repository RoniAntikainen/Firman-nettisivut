import type { MetadataRoute } from "next";
import { LOCALE_BASE_URL } from "@/lib/i18n/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: [
      `${LOCALE_BASE_URL.en}/sitemap.xml`,
      `${LOCALE_BASE_URL.fi}/sitemap.xml`,
    ],
  };
}
