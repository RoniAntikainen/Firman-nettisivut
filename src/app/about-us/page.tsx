"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function AboutUsPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const whoItFitsRef = useRef<HTMLElement | null>(null);

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
      const value = Math.max(75 - eased * 75, 0);

      el.style.setProperty("--fade-start", `${value}%`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = whoItFitsRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startOffset = viewportHeight * 0.35;
      const triggerRange = viewportHeight * 1.15;

      const rawProgress =
        (viewportHeight - rect.top + startOffset) / triggerRange;

      const progress = Math.min(Math.max(rawProgress, 0), 1);
      const eased = Math.pow(progress, 1.35);

      const baseFade = 32;
      const maxFade = 100;
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
            <h1 className={styles.Title}>
              We build systems that are designed to actually work in real use.
            </h1>
          </div>

          <div className={styles.heroMedia}>
            <div className={styles.heroPanel}>
              <p className={styles.heroText}>
                We focus on clarity, structure and practical solutions that
                remove friction from everyday work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={heroRef}
        className={`${styles.section} ${styles.hero}`}
      >
        <div className={`${styles.conteiner} ${styles.servicesSection}`}>
          <div className={styles.servicesIntro}>

            <h2 className={styles.Title}>
              We build tools, systems and workflows that make work feel simpler.
            </h2>

            <p className={styles.description}>
              Our work is focused on helping teams move away from fragmented
              workflows, repetitive manual work and systems that slow everything
              down.
            </p>
          </div>

          <div className={styles.servicesVisual}>
            <div className={styles.featureStack}>
              <article className={styles.featurePanel}>
                <h3 className={styles.featureTitle}>Internal tools</h3>
                <p className={styles.featureText}>
                  Dashboards, admin tools and workflows that replace manual work
                  with one clearer system.
                </p>
              </article>

              <article className={styles.featurePanel}>
                <h3 className={styles.featureTitle}>Website functionality</h3>
                <p className={styles.featureText}>
                  Useful features, flows and integrations that turn a website
                  into something more practical.
                </p>
              </article>

              <article className={styles.featurePanel}>
                <h3 className={styles.featureTitle}>System improvements</h3>
                <p className={styles.featureText}>
                  Reworking slow, messy or limiting setups so they support real
                  use better.
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
              Most systems are harder to use than they should be.
            </h2>

            <p className={styles.description}>
              Too often, digital tools are built around assumptions instead of
              real workflows. They become slow, unclear or overloaded with
              features that add little value.
            </p>
          </div>

          <div className={styles.processGrid}>
            <article className={styles.processCard}>
              <span className={styles.processNumber}>01</span>
              <h3 className={styles.processTitle}>Clarity over clutter</h3>
              <p className={styles.processText}>
                We prefer simple structures, clear interfaces and focused flows
                over unnecessary complexity.
              </p>
            </article>

            <article className={styles.processCard}>
              <span className={styles.processNumber}>02</span>
              <h3 className={styles.processTitle}>Real use over theory</h3>
              <p className={styles.processText}>
                A system should work in everyday use, not just look good in a
                presentation or planning document.
              </p>
            </article>

            <article className={styles.processCard}>
              <span className={styles.processNumber}>03</span>
              <h3 className={styles.processTitle}>Structure that scales</h3>
              <p className={styles.processText}>
                Good systems are easier to maintain, improve and grow when the
                foundation is built properly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={whoItFitsRef}
        className={`${styles.section} ${styles.fadeDownTop} ${styles.hero}`}
      >
        <div className={`${styles.conteiner} ${styles.servicesSection}`}>
          <div className={styles.servicesIntro}>

            <h2 className={styles.Title}>
              We work best with teams that want better structure.
            </h2>

            <p className={styles.description}>
              The best fit is usually a team that has outgrown scattered tools
              and wants a system that feels more natural to use.
            </p>
          </div>

          <div className={styles.servicesVisual}>
            <div className={styles.featureStack}>
              <article className={styles.featurePanel}>
                <h3 className={styles.featureTitle}>Too many manual steps</h3>
                <p className={styles.featureText}>
                  Repetitive work, copied data and unnecessary admin slow down
                  everyday progress.
                </p>
              </article>

              <article className={styles.featurePanel}>
                <h3 className={styles.featureTitle}>Outgrown spreadsheets</h3>
                <p className={styles.featureText}>
                  What worked earlier no longer supports the way the team
                  actually operates now.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection} ${styles.noBg}`}>
        <div className={`${styles.conteiner} ${styles.cta}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.Title}>
              Ready to make your systems simpler?
            </h2>

            <p className={styles.description}>
              Let&apos;s take a look at what&apos;s slowing things down and what
              should be built instead.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaButton}>
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}