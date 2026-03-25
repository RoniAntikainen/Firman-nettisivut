"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/layout/header/header.module.css";

const PRIMARY_NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about-us",
    label: "About us",
  },
  {
    href: "/service",
    label: "Services",
  },
] as const;

const MENU_NAV_ITEMS = [
  {
    href: "/service",
    label: "Services",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/process",
    label: "How we work",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const;

const ACTION_ITEMS = [
  {
    href: "/login",
    label: "Kirjaudu",
  },
] as const;

const MOBILE_NAV_ITEMS = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/service",
    label: "Services",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/process",
    label: "How we work",
  },
  {
    href: "/about-us",
    label: "About us",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuId = useId();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

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
          <Link href="/" className={styles.brandLink} aria-label="Etusivu">
            Weboryn
          </Link>
        </div>

        <div className={styles.desktopArea}>
          <nav className={styles.navigation} aria-label="Päävalikko">
            <ul className={styles.navigationList}>
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <li key={item.href} className={styles.navigationItem}>
                    <Link
                      href={item.href}
                      className={styles.navigationLink}
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
              <span className={styles.menuButtonLabel}>Menu</span>
              <span className={styles.menuButtonLabelMobile}>Open navigation</span>
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
              aria-label="Lisälinkit"
            >
              <div className={styles.menuPanelInner}>
                <div className={styles.menuMobileShell}>
                  <ul className={`${styles.menuList} ${styles.menuListMobile}`}>
                    {MOBILE_NAV_ITEMS.map((item) => {
                      const isActive = isActivePath(pathname, item.href);

                      return (
                        <li key={item.href} className={styles.menuItem}>
                          <Link
                            href={item.href}
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

                  <div className={styles.menuMobileAction}>
                    {ACTION_ITEMS.map((item) => {
                      const isActive = isActivePath(pathname, item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={styles.menuActionLink}
                          aria-current={isActive ? "page" : undefined}
                          data-active={isActive}
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className={`${styles.menuSection} ${styles.menuSectionDesktop}`}>
                  <p className={styles.menuSectionLabel}>Menu</p>
                  <ul className={styles.menuList}>
                    {MENU_NAV_ITEMS.map((item) => {
                      const isActive = isActivePath(pathname, item.href);

                      return (
                        <li key={item.href} className={styles.menuItem}>
                          <Link
                            href={item.href}
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

                <div className={`${styles.menuDivider} ${styles.menuSectionDesktop}`} />

                <div className={`${styles.menuSection} ${styles.menuSectionDesktop}`}>
                  <p className={styles.menuSectionLabel}>Actions</p>
                  <ul className={styles.menuList}>
                    {ACTION_ITEMS.map((item) => {
                      const isActive = isActivePath(pathname, item.href);

                      return (
                        <li key={item.href} className={styles.menuItem}>
                          <Link
                            href={item.href}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
