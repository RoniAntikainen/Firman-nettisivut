import type { ComponentType } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import HomePage from "@/app/page";
import AboutUsPage from "@/app/about-us/page";
import BookPage from "@/app/book/page";
import CasesPage from "@/app/cases/page";
import ContactPage from "@/app/contact/page";
import PrivacyPage from "@/app/privacy/page";
import ProcessPage from "@/app/process/page";
import ServicePage from "@/app/service/page";
import TermsPage from "@/app/terms/page";
import {
  APP_ROUTES,
  type AppRoute,
  type Locale,
  getLocalizedRoutePath,
  isLocale,
  LOCALE_BASE_URL,
} from "@/lib/i18n/config";

type PageComponent = ComponentType;

const PAGE_COMPONENTS: Record<AppRoute, PageComponent> = {
  "": HomePage,
  "about-us": AboutUsPage,
  service: ServicePage,
  process: ProcessPage,
  cases: CasesPage,
  book: BookPage,
  contact: ContactPage,
  privacy: PrivacyPage,
  terms: TermsPage,
};

const PAGE_SCHEMA: Partial<Record<AppRoute, object>> = {
  cases: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Weboryn Cases",
    about: ["Booking flows", "Client portals", "Internal tools"],
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Weboryn",
      url: LOCALE_BASE_URL.en,
    },
    serviceType: "Client portal development, internal tools and booking flow design",
    areaServed: ["FI", "Worldwide"],
  },
};

const PAGE_METADATA: Record<
  AppRoute,
  Record<Locale, { title: string; description: string }>
> = {
  "": {
    en: {
      title: "Client Portals, Internal Tools and Clearer Workflows | Weboryn",
      description:
        "Weboryn designs and builds client portals, internal tools and clearer booking flows for teams that need one important workflow to work properly.",
    },
    fi: {
      title: "Asiakasportaalit, sisäiset työkalut ja selkeämmät työnkulut | Weboryn",
      description:
        "Weboryn suunnittelee ja rakentaa asiakasportaaleja, sisäisiä työkaluja ja selkeämpiä varauspolkuja tiimeille, jotka tarvitsevat yhden tärkeän työnkulun toimimaan kunnolla.",
    },
  },
  "about-us": {
    en: {
      title: "About Us | Weboryn",
      description:
        "Learn how Weboryn works, what we do not do and why our approach is built around cleaner scope and better delivery.",
    },
    fi: {
      title: "Meistä | Weboryn",
      description:
        "Tutustu siihen, miten Weboryn toimii, mitä emme tee ja miksi tapamme rakentaa perustuu selkeämpään rajaukseen ja parempaan toimitukseen.",
    },
  },
  book: {
    en: {
      title: "Book a Call | Weboryn",
      description:
        "Request a short discovery call with Weboryn about a portal, internal tool, booking flow or clearer digital workflow.",
    },
    fi: {
      title: "Varaa puhelu | Weboryn",
      description:
        "Varaa lyhyt puhelu Weborynin kanssa portaalista, sisäisestä työkalusta, varauspolusta tai selkeämmästä digitaalisesta työnkulusta.",
    },
  },
  cases: {
    en: {
      title: "Client Portal, Internal Tool and Booking Flow Case Studies | Weboryn",
      description:
        "See case studies across client portals, internal tools and booking flows with the starting problem, the change made and the visible result explained clearly.",
    },
    fi: {
      title: "Asiakasportaali-, sisäinen työkalu- ja varauspolku-caset | Weboryn",
      description:
        "Katso case-esimerkkejä asiakasportaaleista, sisäisistä työkaluista ja varauspoluista niin, että lähtötilanne, muutos ja näkyvä tulos on avattu selkeästi.",
    },
  },
  contact: {
    en: {
      title: "Contact | Weboryn",
      description:
        "Contact Weboryn about a page, portal, internal tool or workflow that needs a clearer system.",
    },
    fi: {
      title: "Yhteydenotto | Weboryn",
      description:
        "Ota yhteyttä Weboryniin sivusta, portaalista, sisäisestä työkalusta tai työnkulusta, joka tarvitsee selkeämmän ratkaisun.",
    },
  },
  privacy: {
    en: {
      title: "Privacy | Weboryn",
      description:
        "Read how Weboryn handles personal data, contact requests and basic privacy rights.",
    },
    fi: {
      title: "Tietosuoja | Weboryn",
      description:
        "Lue, miten Weboryn käsittelee henkilötietoja, yhteydenottoja ja perustason tietosuojaoikeuksia.",
    },
  },
  process: {
    en: {
      title: "Process | Weboryn",
      description:
        "See how Weboryn runs projects from request to delivery with calmer scope, earlier progress and lower risk.",
    },
    fi: {
      title: "Prosessi | Weboryn",
      description:
        "Katso, miten Weboryn vie projektit pyynnöstä toimitukseen rauhallisemmalla rajauksella, aikaisemmalla näkyvyydellä ja pienemmällä riskillä.",
    },
  },
  service: {
    en: {
      title: "Client Portal Development and Internal Tools for Real Workflows | Weboryn",
      description:
        "Weboryn designs and builds client portals, internal tools and booking flows with clear scope, working implementation, early visibility and a clean handoff.",
    },
    fi: {
      title: "Asiakasportaalit ja sisäiset työkalut oikeisiin työnkulkuihin | Weboryn",
      description:
        "Weboryn suunnittelee ja rakentaa asiakasportaaleja, sisäisiä työkaluja ja varauspolkuja selkeällä rajauksella, aikaisella näkyvyydellä ja siistillä luovutuksella.",
    },
  },
  terms: {
    en: {
      title: "Terms | Weboryn",
      description:
        "Read Weboryn's basic project terms, scope approach and delivery expectations.",
    },
    fi: {
      title: "Ehdot | Weboryn",
      description:
        "Lue Weborynin projektien perusehdot, rajausajattelu ja toimitukseen liittyvät odotukset.",
    },
  },
};

function getRouteFromSlug(slug: string[] | undefined): AppRoute | null {
  if (!slug || slug.length === 0) {
    return "";
  }

  if (slug.length !== 1) {
    return null;
  }

  const [route] = slug;

  if (APP_ROUTES.includes(route as AppRoute)) {
    return route as AppRoute;
  }

  return null;
}

export function generateStaticParams() {
  return APP_ROUTES.flatMap((route) => [
    { locale: "en", slug: route ? [route] : [] },
    { locale: "fi", slug: route ? [route] : [] },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const route = getRouteFromSlug(slug);

  if (route === null) {
    return {};
  }

  const metadata = PAGE_METADATA[route][locale];
  const pathname = getLocalizedRoutePath(route, locale);
  const canonicalBase = LOCALE_BASE_URL[locale];
  const canonicalUrl = `${canonicalBase}${pathname === `/${locale}` ? "" : pathname.replace(`/${locale}`, "")}`;

  const routeWithoutLocale = route === "" ? "" : `/${route}`;

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(canonicalBase),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${LOCALE_BASE_URL.en}${routeWithoutLocale}`,
        fi: `${LOCALE_BASE_URL.fi}${routeWithoutLocale}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: canonicalUrl,
      siteName: "Weboryn",
      locale: locale === "fi" ? "fi_FI" : "en_US",
      alternateLocale: locale === "fi" ? "en_US" : "fi_FI",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Weboryn",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: ["/twitter-image"],
    },
  };
}

export default async function LocalizedCatchAllPage({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const route = getRouteFromSlug(slug);

  if (route === null) {
    notFound();
  }

  const PageComponent = PAGE_COMPONENTS[route];
  const pageSchema = PAGE_SCHEMA[route];

  return (
    <>
      {pageSchema ? (
        <Script
          id={`schema-${route || "home"}-${locale}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              route === "service" && locale === "fi"
                ? {
                    ...pageSchema,
                    serviceType:
                      "Asiakasportaalien, sisäisten työkalujen ja varauspolkujen suunnittelu ja toteutus",
                  }
                : pageSchema
            ),
          }}
        />
      ) : null}
      <PageComponent />
    </>
  );
}
