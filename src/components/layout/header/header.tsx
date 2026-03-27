"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/layout/header/header.module.css";
import {
  type Locale,
  localizeHref,
  stripLocaleFromPathname,
  switchLocaleInPathname,
} from "@/lib/i18n/config";

const HEADER_COPY = {
  en: {
    brandAriaLabel: "Home",
    primaryNavItems: [
      { href: "/", label: "Home" },
      { href: "/process", label: "Process" },
      { href: "/contact", label: "Contact" },
    ],
    menuGroups: [
      {
        label: "Start",
        items: [
          { href: "/", label: "Home" },
          { href: "/about-us", label: "About" },
        ],
      },
      {
        label: "Work",
        items: [
          { href: "/service", label: "Services" },
          { href: "/cases", label: "Cases" },
        ],
      },
      {
        label: "Process",
        items: [
          { href: "/process", label: "Process" },
          { href: "/book", label: "Book a call" },
          { href: "/contact", label: "Contact" },
        ],
      },
    ],
    menuHighlights: [
      "See how the work is structured.",
      "Jump straight to the page you actually need.",
    ],
    mobileNavItems: [
      { href: "/", label: "Home" },
      { href: "/service", label: "Services" },
      { href: "/process", label: "Process" },
      { href: "/about-us", label: "About" },
      { href: "/cases", label: "Cases" },
      { href: "/book", label: "Book a call" },
      { href: "/contact", label: "Contact" },
    ],
    menuOpen: "Menu",
    menuClose: "Close",
    menuOpenMobile: "Open navigation",
    menuAriaLabel: "Additional links",
    menuSectionLabel: "Navigation",
    menuIntroText: "Everything in one place, with names that match where each page actually takes you.",
    directContact: "Direct contact",
    directContactLink: "Show us the bottleneck",
  },
  fi: {
    brandAriaLabel: "Etusivu",
    primaryNavItems: [
      { href: "/", label: "Etusivu" },
      { href: "/process", label: "Prosessi" },
      { href: "/contact", label: "Yhteys" },
    ],
    menuGroups: [
      {
        label: "Alku",
        items: [
          { href: "/", label: "Etusivu" },
          { href: "/about-us", label: "Meistä" },
        ],
      },
      {
        label: "Työ",
        items: [
          { href: "/service", label: "Palvelut" },
          { href: "/cases", label: "Caset" },
        ],
      },
      {
        label: "Prosessi",
        items: [
          { href: "/process", label: "Prosessi" },
          { href: "/book", label: "Varaa puhelu" },
          { href: "/contact", label: "Yhteys" },
        ],
      },
    ],
    menuHighlights: [
      "Katso miten työ on jäsennelty.",
      "Siirry suoraan juuri siihen sivuun mitä tarvitset.",
    ],
    mobileNavItems: [
      { href: "/", label: "Etusivu" },
      { href: "/service", label: "Palvelut" },
      { href: "/process", label: "Prosessi" },
      { href: "/about-us", label: "Meistä" },
      { href: "/cases", label: "Caset" },
      { href: "/book", label: "Varaa puhelu" },
      { href: "/contact", label: "Yhteys" },
    ],
    menuOpen: "Valikko",
    menuClose: "Sulje",
    menuOpenMobile: "Avaa navigaatio",
    menuAriaLabel: "Lisälinkit",
    menuSectionLabel: "Navigaatio",
    menuIntroText: "Kaikki yhdessä paikassa, nimillä jotka vastaavat siihen mihin sivu oikeasti vie.",
    directContact: "Suora yhteys",
    directContactLink: "Näytä pullonkaula",
  },
} as const;

function isActivePath(pathname: string, href: string) {
  const normalizedPathname = stripLocaleFromPathname(pathname);

  if (href === "/") {
    return normalizedPathname === "/";
  }

  return normalizedPathname === href || normalizedPathname.startsWith(`${href}/`);
}

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const copy = HEADER_COPY[locale];
  const localeSwitchPath = stripLocaleFromPathname(pathname);

  const menuId = useId();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousPathnameRef = useRef(pathname);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  useEffect(() => {
    const SCROLLED_ON_THRESHOLD = 80;
    const SCROLLED_OFF_THRESHOLD = 12;

    let rafId: number | null = null;

    const updateScrolled = () => {
      const scrollY = window.scrollY;

      setIsScrolled((currentValue) => {
        if (!currentValue && scrollY >= SCROLLED_ON_THRESHOLD) {
          return true;
        }

        if (currentValue && scrollY <= SCROLLED_OFF_THRESHOLD) {
          return false;
        }

        return currentValue;
      });

      rafId = null;
    };

    const handleScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;

    const timeoutId = window.setTimeout(() => {
      setIsMenuOpen(false);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }

      closeMenu();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.headerScrolled : ""
      }`}
    >
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link
            href={localizeHref("/", locale)}
            className={styles.brandLink}
            aria-label={copy.brandAriaLabel}
          >
            Weboryn
          </Link>
        </div>

        <div className={styles.desktopArea}>
          <nav className={styles.navigation} aria-label="Päävalikko">
            <ul className={styles.navigationList}>
              {copy.primaryNavItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <li key={item.href} className={styles.navigationItem}>
                    <Link
                      href={localizeHref(item.href, locale)}
                      className={styles.navigationLink}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      data-active={isActive}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.menuGroup} ref={menuRef}>
            <button
              ref={menuButtonRef}
              type="button"
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              aria-haspopup="menu"
              data-open={isMenuOpen}
            >
              <span className={styles.menuButtonLabel}>
                {isMenuOpen ? copy.menuClose : copy.menuOpen}
              </span>
              <span className={styles.menuButtonLabelMobile}>{copy.menuOpenMobile}</span>
              <span className={styles.menuButtonIcon} aria-hidden="true">
                <span className={styles.menuButtonLine} />
                <span className={styles.menuButtonLine} />
              </span>
            </button>

            <div
              className={styles.menuBackdrop}
              data-open={isMenuOpen}
              aria-hidden="true"
              onClick={closeMenu}
            />

            <div
              id={menuId}
              className={styles.menuPanel}
              data-open={isMenuOpen}
              role="menu"
              aria-label={copy.menuAriaLabel}
            >
              <div className={styles.menuPanelInner}>
                <div className={styles.menuMobileShell}>
                  <ul className={`${styles.menuList} ${styles.menuListMobile}`}>
                    {copy.mobileNavItems.map((item) => {
                      const isActive = isActivePath(pathname, item.href);

                      return (
                        <li key={item.href} className={styles.menuItem}>
                          <Link
                            href={localizeHref(item.href, locale)}
                            className={`${styles.menuLink} ${styles.menuLinkMobile}`}
                            aria-current={isActive ? "page" : undefined}
                            data-active={isActive}
                            role="menuitem"
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className={`${styles.menuSection} ${styles.menuSectionDesktop}`}>
                  <div className={styles.menuIntro}>
                    <p className={styles.menuSectionLabel}>{copy.menuSectionLabel}</p>
                    <p className={styles.menuIntroText}>
                      {copy.menuIntroText}
                    </p>
                  </div>
                  <div className={styles.menuDesktopGrid}>
                    {copy.menuGroups.map((group) => (
                      <div key={group.label} className={styles.menuColumn}>
                        <p className={styles.menuColumnLabel}>{group.label}</p>
                        <ul className={styles.menuList}>
                          {group.items.map((item) => {
                            const isActive = isActivePath(pathname, item.href);

                            return (
                              <li key={item.href} className={styles.menuItem}>
                                <Link
                                  href={localizeHref(item.href, locale)}
                                  className={styles.menuLink}
                                  aria-current={isActive ? "page" : undefined}
                                  data-active={isActive}
                                  role="menuitem"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <ul className={styles.menuHighlights} aria-label="Menu highlights">
                    {copy.menuHighlights.map((item) => (
                      <li key={item} className={styles.menuHighlightItem}>
                        <span className={styles.menuHighlightMark} aria-hidden="true">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.localeSwitch} aria-label="Language switcher">
                    <Link
                      href={switchLocaleInPathname(localeSwitchPath, "fi")}
                      className={styles.localeLink}
                      data-active={locale === "fi"}
                    >
                      FI
                    </Link>
                    <Link
                      href={switchLocaleInPathname(localeSwitchPath, "en")}
                      className={styles.localeLink}
                      data-active={locale === "en"}
                    >
                      EN
                    </Link>
                  </div>

                  <div className={styles.menuMeta}>
                    <p className={styles.menuMetaLabel}>{copy.directContact}</p>
                    <Link
                      href={localizeHref("/contact", locale)}
                      className={styles.menuMetaLink}
                      aria-current={isActivePath(pathname, "/contact") ? "page" : undefined}
                    >
                      {copy.directContactLink}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
