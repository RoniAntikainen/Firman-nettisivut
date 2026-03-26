import Link from "next/link";
import styles from "@/components/layout/footer/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>Weboryn</span>
            <p className={styles.footerTagline}>
              We design and build systems that actually work — from internal tools to full web platforms.
            </p>
          </div>

          <div className={styles.footerMenu}>
            {/* Navigation */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerHeading}>Navigation</h3>

              <nav
                className={styles.footerNav}
                aria-label="Footer navigation"
              >
                <Link href="/">Home</Link>
                <Link href="/about-us">About</Link>
                <Link href="/service">Services</Link>
                <Link href="/process">Process</Link>
                <Link href="/cases">Cases</Link>
                <Link href="/book">Book call</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>

            {/* Contact */}
            <div className={styles.footerContacts}>
              <h3 className={styles.footerHeading}>Contact</h3>

              <div className={styles.footerContactItem}>
                <span className={styles.footerLabel}>Email</span>
                <a href="mailto:hello@weboryn.com">
                  hello@weboryn.com
                </a>
              </div>

              <div className={styles.footerContactItem}>
                <span className={styles.footerLabel}>Location</span>
                <span>Helsinki, Finland</span>
              </div>

              {/* Optional future: phone / social */}
              {/* 
              <div className={styles.footerContactItem}>
                <span className={styles.footerLabel}>Phone</span>
                <a href="tel:+358401234567">+358 40 123 4567</a>
              </div>
              */}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Weboryn. All rights reserved.</span>

          <div className={styles.footerMeta}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
