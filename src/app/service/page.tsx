"use client";

import { useRef } from "react";
import styles from "./page.module.css";
import Button from "@/components/buttons/button";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

const SERVICE_AREAS = [
  {
    title: "Internal tools",
    text: "Dashboards, admin views and custom workflows that replace repetitive manual work with one clearer system.",
  },
  {
    title: "Website functionality",
    text: "Practical features, portals, forms and integrations that make a site useful beyond just marketing.",
  },
  {
    title: "System cleanup",
    text: "Fixing slow, fragmented or awkward setups so everyday work becomes easier to manage.",
  },
] as const;

const DELIVERY_STEPS = [
  {
    number: "01",
    title: "We map the real workflow",
    text: "We start by understanding what people actually do day to day, where work gets repeated and where systems are getting in the way.",
  },
  {
    number: "02",
    title: "We define the right scope",
    text: "Instead of adding random features, we narrow the work into the smallest useful system that solves the real problem.",
  },
  {
    number: "03",
    title: "We build for practical use",
    text: "The end result should feel clear, stable and usable in normal work, not only in a polished demo.",
  },
] as const;

const FIT_SIGNALS = [
  "Too much work still depends on copying, checking and updating things by hand.",
  "The team uses several tools, but the workflow between them feels messy or unclear.",
  "The website needs practical functionality instead of only static content.",
  "The current setup technically works, but it slows down real daily work.",
] as const;

export default function ServicePage() {
  const servicesRef = useRef<HTMLElement | null>(null);
  const fitRef = useRef<HTMLElement | null>(null);

  useScrollFade(servicesRef);
  useScrollFade(fitRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroGridWide">
          <div className="pageHeroContent">
            <h1>
              We build digital tools that make everyday work simpler.
            </h1>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="sectionSurfaceFade">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageFlowIntro">
            <h2>
              Services built around the work that actually needs to happen.
            </h2>

            <p className="pageText">
              The goal is not to add technology for its own sake. We build the
              parts that reduce friction, remove repetition and make processes
              feel more natural to use.
            </p>
          </div>

          <div className="cardStack">
            {SERVICE_AREAS.map((service) => (
              <article key={service.title} className="cardPanel cardPanelSoft">
                <h3 className="cardTitle">{service.title}</h3>
                <p className="cardText">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              A service process that stays grounded in real use.
            </h2>

            <p className="pageText">
              We keep the work focused by understanding the problem clearly,
              defining the right scope and building only what improves the
              workflow in practice.
            </p>
          </div>

          <div className="pageGrid3">
            {DELIVERY_STEPS.map((step) => (
              <article key={step.number} className="cardPanel cardPanelSolid">
                <span className="cardNumber">{step.number}</span>
                <h3 className="cardTitle">{step.title}</h3>
                <p className="cardText">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={fitRef} className={`sectionFadeDownTop ${styles.fitSection}`}>
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageFlowIntro">
            <h2>
              This service works best when the team has outgrown the current
              setup.
            </h2>

            <p className="pageText">
              Usually the problem is not that nothing exists. It is that the
              current combination of tools, manual steps and workarounds no
              longer supports the way the team actually works.
            </p>
          </div>

          <div className="cardPanel cardPanelSoft cardPanelGapMd">
            <ul className="cardList">
              {FIT_SIGNALS.map((signal) => (
                <li key={signal} className="cardListItem">
                  <span className="cardMark" aria-hidden="true">
                    /
                  </span>
                  <span className="cardText">{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sectionNoBg sectionCta">
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2>
              Need a clearer system, a better workflow or useful website
              functionality?
            </h2>

            <p className="pageText">
              We can look at the current setup, identify what is causing
              friction and define what should be built instead.
            </p>
          </div>

          <div className="pageCtaActions">
            <Button href="/contact">Let&apos;s talk</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
