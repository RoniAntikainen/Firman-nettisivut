"use client";

import { useRef } from "react";
import HeroSystemVisual from "@/components/hero-system-visual/HeroSystemVisual";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import styles from "./page.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

const STEPS = [
  {
    number: "01",
    title: "Request comes in",
    text: "One problem. One goal. One owner.",
  },
  {
    number: "02",
    title: "Scope gets cut",
    text: "We remove the extra layers before build starts.",
  },
  {
    number: "03",
    title: "Structure is mapped",
    text: "Pages, components and actions get a clear order.",
  },
  {
    number: "04",
    title: "Working version is built",
    text: "The main path works before polish starts.",
  },
  {
    number: "05",
    title: "Preview gets checked",
    text: "We test what the user sees first.",
  },
  {
    number: "06",
    title: "System is handed off",
    text: "Clean structure. Editable parts. Ready to continue.",
  },
] as const;

const DELIVERY_NOTES = [
  {
    title: "What you get early",
    text: "A first working direction before everything is polished.",
  },
  {
    title: "What reduces risk",
    text: "The scope gets cut before build grows in the wrong direction.",
  },
  {
    title: "What happens if things change",
    text: "New ideas become the next phase, not surprise scope inside the current one.",
  },
] as const;

const PHASE_OUTPUTS = [
  "Request: owner, goal and success metric agreed.",
  "Scope: what is in, what is out and what gets cut.",
  "Structure: page or workflow direction with clear order.",
  "Build: working implementation in code, not just a static concept.",
  "Preview: reviewable version with concrete decisions.",
  "Handoff: repo, components, notes and acceptance criteria.",
] as const;

const DONE_DEFINITION = [
  "The main workflow is clear.",
  "The owner can review against an agreed success metric.",
  "The deliverable is ready to hand off or continue in the next phase.",
] as const;

export default function ProcessPage() {
  const timelineRef = useRef<HTMLElement | null>(null);

  useScrollFade(timelineRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroGridWide">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <h1>
                From request
                <br />
                to working system.
              </h1>

              <p className="pageHeroText">
                This page is about
                <br />
                risk reduction.
              </p>

              <div className="pageActionRow">
                <Button href="/service">See deliverables</Button>
                <Button href="/contact" className={buttonStyles.buttonGhost}>
                  Tell us what you need
                </Button>
              </div>
            </div>
          </div>

          <HeroSystemVisual />
        </div>
      </section>

      <section ref={timelineRef} className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              What happens, in order.
            </h2>

            <p className="pageText">
              This is how the work stays calm, scoped and understandable.
            </p>
          </div>

          <div className={styles.timeline}>
            {STEPS.map((step) => (
              <article key={step.number} className={`cardPanel cardPanelSolid ${styles.timelineItem}`}>
                <span className="cardNumber">{step.number}</span>
                <h3 className="cardTitle">{step.title}</h3>
                <p className="cardText">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionFadeDownTop">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              What this gives the client.
            </h2>
          </div>

          <div className={styles.timeline}>
            {DELIVERY_NOTES.map((item) => (
              <article key={item.title} className={`cardPanel cardPanelSoft ${styles.timelineItem}`}>
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionNoBg">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              Outputs per phase.
            </h2>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <ul className="cardList">
                {PHASE_OUTPUTS.map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      /
                    </span>
                    <span className="cardText">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <span className="cardEyebrow">Done definition</span>
              <ul className="cardList">
                {DONE_DEFINITION.map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      /
                    </span>
                    <span className="cardText">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionNoBg sectionCta">
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2>
              If the main worry is
              <br />
              how the work will run,
              <br />
              start here.
            </h2>
          </div>

          <div className="pageCtaActions">
            <div className="pageActionRow">
              <Button href="/contact">Tell us what you need</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
