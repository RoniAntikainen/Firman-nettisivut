import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/site-chrome/site-header";
import SiteFooter from "@/components/layout/site-chrome/site-footer";
import { LOCALE_BASE_URL } from "@/lib/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(LOCALE_BASE_URL.en),
  applicationName: "Weboryn",
  authors: [{ name: "Weboryn" }],
  creator: "Weboryn",
  publisher: "Weboryn",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <Script
          id="weboryn-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Weboryn",
              url: LOCALE_BASE_URL.en,
              email: "hello@weboryn.com",
              areaServed: [
                {
                  "@type": "Country",
                  name: "Finland",
                },
                {
                  "@type": "Place",
                  name: "Europe",
                },
                "Worldwide",
              ],
              availableLanguage: ["English", "Finnish"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: "hello@weboryn.com",
                  areaServed: "FI",
                  availableLanguage: ["English", "Finnish"],
                },
              ],
              knowsAbout: [
                "Client portals",
                "Internal tools",
                "Booking flows",
                "Next.js development",
                "Web design",
              ],
            }),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
