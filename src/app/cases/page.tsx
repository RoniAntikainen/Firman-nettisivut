"use client";

import { useMemo, useRef, useState } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import styles from "./page.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

const CASES = [
  {
    type: "Booking",
    client: "Anonymized booking business",
    problem: "The main action was hidden behind competing sections and too many clicks.",
    change: "We reduced the path, moved the primary CTA higher and removed the dead-end branch.",
    metric: "Booking path: 6 clicks to 3 clicks",
    effect: "Less hesitation and a faster route to the core action.",
    impact: "Impact: fewer abandoned decision points during the booking flow.",
  },
  {
    type: "Portal",
    client: "Anonymized client service team",
    problem: "Status updates, files and next actions were split across three tools and messages.",
    change: "We combined the workflow into one portal view with one owner-facing next step.",
    metric: "Operational view: 3 tools to 1 portal",
    effect: "Fewer repeated checks and faster daily decisions.",
    impact: "Impact: less context switching and clearer ownership in daily work.",
  },
  {
    type: "Dashboard",
    client: "Anonymized operations team",
    problem: "Important signals were mixed with low-value reporting and people checked multiple views every day.",
    change: "We reordered the view around one owner, one decision path and the first action worth taking.",
    metric: "Repeated checks reduced across the daily workflow",
    effect: "The team saw the next important signal first instead of scanning everything.",
    impact: "Impact: less time lost scanning low-value information.",
  },
] as const;

const FILTERS = ["All", "Booking", "Portal", "Dashboard"] as const;

const TESTIMONIALS = [
  {
    sector: "Sector · Service Ops",
    quote: "We finally had one place for status, files and the next step.",
  },
  {
    sector: "Sector · Booking",
    quote: "The main action became obvious and the page stopped fighting itself.",
  },
] as const;

const CASE_SUMMARY = [
  "Booking flow: 6 clicks to 3 clicks",
  "Client workflow: 3 tools to 1 portal",
  "Dashboard use: fewer repeated checks across the day",
] as const;

export default function CasesPage() {
  const casesRef = useRef<HTMLElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All");

  useScrollFade(casesRef);

  const visibleCases = useMemo(() => {
    if (activeFilter === "All") return CASES;
    return CASES.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">Concrete results</span>
              <h1>
                A few focused cases
                <br />
                and what changed.
              </h1>

              <p className="pageHeroText">
                Problem.
                <br />
                Change.
                <br />
                Metric.
              </p>

              <div className="pageActionRow">
                <Button href="/contact">Tell us what you need</Button>
                <Button href="/service" className={buttonStyles.buttonGhost}>
                  See services
                </Button>
              </div>

              <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
                <span className="cardEyebrow">At a glance</span>
                {CASE_SUMMARY.map((item) => (
                  <p key={item} className="cardText">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={casesRef} className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              Results by use case.
            </h2>
          </div>

          <div className={styles.filterRow}>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={styles.filterButton}
                data-active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.casesList}>
            {visibleCases.map((item) => (
              <article key={item.client} className={`cardPanel cardPanelSoft ${styles.caseCard}`}>
                <div className={styles.caseMeta}>
                  <span className="cardEyebrow">{item.type} · {item.client}</span>
                  <h3 className="cardTitle">{item.metric}</h3>
                  <p className="cardText">{item.effect}</p>
                </div>

                <div className={styles.caseDetails}>
                  <p className="cardText">Problem: {item.problem}</p>
                  <p className="cardText">Change: {item.change}</p>
                  <p className="cardText">{item.impact}</p>

                  <div className="cardPanel cardPanelSoft">
                    <span className="cardEyebrow">Flow sketch</span>
                    <p className="cardText">
                      Before: scattered steps
                      <br />
                      After: one route, one owner, one next action
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionNoBg">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              A little more trust.
            </h2>
          </div>

          <div className="pageGrid3">
            {TESTIMONIALS.map((item) => (
              <article key={item.quote} className="cardPanel cardPanelSoft cardPanelGapMd">
                <span className="cardEyebrow">{item.sector}</span>
                <p className="cardValue">&quot;{item.quote}&quot;</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
