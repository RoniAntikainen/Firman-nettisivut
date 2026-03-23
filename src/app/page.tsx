"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const nextRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const triggerRange = viewportHeight * 0.99;

      const progress = Math.min(
        Math.max(1 - rect.top / triggerRange, 0),
        1
      );

      const eased = Math.pow(progress, 1.6);

      // 75% -> 0%
      const value = Math.max(75 - eased * 75, 0);

      el.style.setProperty("--fade-start", `${value}%`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = nextRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // alkaa jo selvästi ennen kuin section tulee kunnolla näkyviin
      const startOffset = viewportHeight * 0.35;
      const triggerRange = viewportHeight * 1.15;

      const rawProgress =
        (viewportHeight - rect.top + startOffset) / triggerRange;

      const progress = Math.min(Math.max(rawProgress, 0), 1);
      const eased = Math.pow(progress, 1.35);

      // pieni perusfade heti alusta, ettei koskaan näy täysin 0-tilassa
      const baseFade = 24;
      const maxFade = 80;
      const value = Math.min(baseFade + eased * (maxFade - baseFade), maxFade);

      el.style.setProperty("--fade-top", `${value}px`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <section className={`${styles.section} ${styles.noBg}`}>
        <div className={`${styles.HeroConteiner} ${styles.conteiner}`}>
          <div className={styles.content}>
            <h2 className={styles.Title}>
              We build apps around what you need.
            </h2>
          </div>

          <div className={styles.heroMedia}>
            <Image
              src="/media/HeroImg.png"
              alt="Hero-kuva"
              width={500}
              height={333}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      <section ref={heroRef} className={`${styles.section} ${styles.hero}`}>
        <div className={`${styles.conteiner} ${styles.servicesSection}`}>
          <div className={styles.servicesIntro}>
            <h2 className={styles.Title}>
              Fixing what’s not working.
              <br />
              Building what’s missing.
            </h2>

            <p className={styles.description}>
              So your systems finally work the way they should.
            </p>
          </div>

          <div className={styles.servicesVisual}>
            <div className={styles.featureStack}>
              <article className={styles.featurePanel}>
                <h3 className={styles.featureTitle}>
                  Internal tools that replace manual work
                </h3>
                <p className={styles.featureText}>
                  Replace spreadsheets and fragmented workflows with one
                  structured system.
                </p>
              </article>

              <article className={styles.featurePanel}>
                <h3 className={styles.featureTitle}>
                  Website functionality that actually adds value
                </h3>
                <p className={styles.featureText}>
                  Add dashboards, flows, integrations and other features
                  directly into your site.
                </p>
              </article>

              <article className={styles.featurePanel}>
                <h3 className={styles.featureTitle}>
                  Fixes for systems that are slow, messy or limiting
                </h3>
                <p className={styles.featureText}>
                  When the current setup is in the way, we improve it or
                  rebuild it properly.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.howWeWorkSection}`}>
        <div className={`${styles.conteiner} ${styles.howWeWork}`}>
          <div className={styles.howWeWorkIntro}>
            <h2 className={styles.Title}>
              A clear process.
              <br />
              Built around what actually matters.
            </h2>

            <p className={styles.description}>
              We keep projects focused by understanding the problem first,
              designing only what is needed, and building solutions that work
              properly in real use.
            </p>
          </div>

          <div className={styles.processGrid}>
            <article className={styles.processCard}>
              <span className={styles.processNumber}>01</span>
              <h3 className={styles.processTitle}>Understand the problem</h3>
              <p className={styles.processText}>
                We look at what is slowing things down, where work gets repeated
                and what should be simplified before anything gets built.
              </p>
            </article>

            <article className={styles.processCard}>
              <span className={styles.processNumber}>02</span>
              <h3 className={styles.processTitle}>Design the right solution</h3>
              <p className={styles.processText}>
                We define the structure, flows and features with clarity, so the
                solution stays useful, focused and free from unnecessary
                complexity.
              </p>
            </article>

            <article className={styles.processCard}>
              <span className={styles.processNumber}>03</span>
              <h3 className={styles.processTitle}>Build and improve</h3>
              <p className={styles.processText}>
                We implement the system properly, refine the details and make
                sure it works smoothly in practice, not just in theory.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={nextRef}
        className={`${styles.section} ${styles.fadeDownTop} ${styles.ctaSection}`}
      >
        <div className={`${styles.conteiner} ${styles.cta}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.Title}>
              Ready to make your systems simpler?
            </h2>

            <p className={styles.description}>
              Let’s take a look at what’s slowing things down and what should be built
              instead.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a href="/contact" className={styles.ctaButton}>
              Let&apos;s talk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}