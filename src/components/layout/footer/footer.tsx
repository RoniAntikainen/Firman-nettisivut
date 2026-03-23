import styles from "@/components/layout/footer/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>Company</span>
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
                <a href="/">Home</a>
                <a href="/about-us">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>

            {/* Contact */}
            <div className={styles.footerContacts}>
              <h3 className={styles.footerHeading}>Contact</h3>

              <div className={styles.footerContactItem}>
                <span className={styles.footerLabel}>Email</span>
                <a href="mailto:hello@yourcompany.com">
                  hello@yourcompany.com
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
          <span>© {new Date().getFullYear()} Company. All rights reserved.</span>

          <div className={styles.footerMeta}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}