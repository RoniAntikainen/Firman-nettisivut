"use client";

import Link from "next/link";
import styles from "@/components/layout/footer/footer.module.css";
import {
  type Locale,
  localizeHref,
  switchLocaleInPathname,
} from "@/lib/i18n/config";

const FOOTER_COPY = {
  en: {
    tagline: "Clearer systems.\nLess wrong work.",
    goTo: "Go to",
    process: "Process",
    contact: "Contact",
    contactHeading: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
  },
  fi: {
    tagline: "Selkeämmät järjestelmät.\nVähemmän väärää työtä.",
    goTo: "Siirry",
    process: "Prosessi",
    contact: "Yhteys",
    contactHeading: "Yhteys",
    rights: "Kaikki oikeudet pidätetään.",
    privacy: "Tietosuoja",
    terms: "Ehdot",
  },
} as const;

export default function Footer({ locale }: { locale: Locale }) {
  const copy = FOOTER_COPY[locale];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>Weboryn</span>
            <p className={styles.footerTagline}>
              {copy.tagline.split("\n")[0]}
              <br />
              {copy.tagline.split("\n")[1]}
            </p>
          </div>

          <div className={styles.footerAside}>
            <div className={styles.footerSection}>
              <h3 className={styles.footerHeading}>{copy.goTo}</h3>

              <nav
                className={styles.footerNav}
                aria-label="Footer navigation"
              >
                <Link href={localizeHref("/process", locale)}>{copy.process}</Link>
                <Link href={localizeHref("/contact", locale)}>{copy.contact}</Link>
              </nav>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.footerHeading}>{copy.contactHeading}</h3>

              <div className={styles.footerContactItem}>
                <span className={styles.footerLabel}>Email</span>
                <a href="mailto:hello@weboryn.com">
                  hello@weboryn.com
                </a>
              </div>

              <div className={styles.footerLocaleSwitch}>
                <Link
                  href={switchLocaleInPathname("/", "fi")}
                  className={styles.footerLocaleLink}
                  data-active={locale === "fi"}
                >
                  FI
                </Link>
                <Link
                  href={switchLocaleInPathname("/", "en")}
                  className={styles.footerLocaleLink}
                  data-active={locale === "en"}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Weboryn. {copy.rights}</span>

          <div className={styles.footerMeta}>
            <Link href={localizeHref("/privacy", locale)}>{copy.privacy}</Link>
            <Link href={localizeHref("/terms", locale)}>{copy.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
