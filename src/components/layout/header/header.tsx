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
    label: "Service"
  }
] as const;

const MENU_NAV_ITEMS = [
  {
    href: "/services",
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

  // 🔥 SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8); // pieni threshold ettei flickeröi
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            Logo
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
              <span className={styles.menuButtonIcon} aria-hidden="true">
                <span className={styles.menuButtonLine} />
                <span className={styles.menuButtonLine} />
              </span>
            </button>

            <div
              id={menuId}
              className={styles.menuPanel}
              data-open={isMenuOpen}
              role="menu"
              aria-label="Lisälinkit"
            >
              <div className={styles.menuPanelInner}>
                <div className={styles.menuSection}>
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

                <div className={styles.menuDivider} />

                <div className={styles.menuSection}>
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