"use client";

import { useRef } from "react";
import styles from "./page.module.css";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

const DELIVERABLES = [
  "Fully built pages (no templates)",
  "Editable components",
  "Clean structure (Next.js + React)",
  "Fast load times",
  "Mobile optimized",
] as const;

const FIT_CASES = [
  "You need a new page, portal or internal tool.",
  "The current flow works, but too slowly.",
  "The team needs something focused, not a huge system.",
] as const;

const SCOPE_RULES = [
  "We start with one core workflow.",
  "We cut extras before build starts.",
  "If scope grows, we split it into the next phase.",
] as const;

const PRICING_LOGIC = [
  {
    title: "Focused page or flow",
    text: "Good when one page or one booking flow needs a stronger structure.",
    range: "Typical range: 2k-6k EUR",
  },
  {
    title: "Portal or internal tool",
    text: "Good when files, status or repeated tasks need one clearer interface.",
    range: "Typical range: 6k-20k+ EUR",
  },
] as const;

const PRICING_DETAILS = [
  "Minimum project size: one focused workflow or one clearly defined page/feature.",
  "Included: scope, design direction, build, responsive implementation and handoff.",
  "Optional: additional pages, integrations, analytics setup and later phases.",
] as const;

const DURATION_DETAILS = [
  "Focused page or flow: usually 2-4 weeks.",
  "Portal or internal tool slice: usually 6-12 weeks.",
  "Price changes based on scope, complexity, content and integrations.",
] as const;

const EXAMPLES = [
  "Built pages: one landing page, service page or booking flow with real implementation.",
  "Reusable components: sections, cards, UI blocks and CTA patterns that can be edited later.",
  "Clean structure: clear Next.js + React files, handoff notes and agreed next steps.",
] as const;

const INCLUDED_EXCLUDED = [
  {
    title: "Included",
    text: "Scope, design direction, implementation, responsive build, reusable UI and handoff notes.",
  },
  {
    title: "Excluded unless agreed",
    text: "Ongoing operations, long-term support retainers, hosting management and unrelated extra phases.",
  },
] as const;

const MICRO_PROOFS = [
  "Booking path reduced from 6 clicks to 3.",
  "Client updates moved from 3 tools into 1 view.",
] as const;

const CASES = [
  {
    label: "Case study",
    title: "Booking path cleanup",
    result: "6 steps to 3",
    note: "Primary action moved into the first screen and the dead-end branch was removed.",
  },
  {
    label: "Case study",
    title: "Client update flow",
    result: "3 tools to 1 view",
    note: "Status, files and next action were brought into one portal instead of scattered messages.",
  },
] as const;

const SERVICE_CARDS = [
  {
    title: "Landing pages",
    action: "Clarifies one offer fast.",
    benefit: "User knows where to click in seconds.",
  },
  {
    title: "Client portals",
    action: "Puts files, status and actions in one place.",
    benefit: "Less back-and-forth for the team.",
  },
  {
    title: "Admin tools",
    action: "Turns repeated tasks into one usable view.",
    benefit: "Manual work drops immediately.",
  },
  {
    title: "Booking flows",
    action: "Removes extra steps and weak decisions.",
    benefit: "More completed actions with less friction.",
  },
  {
    title: "Dashboards",
    action: "Shows the next important signal first.",
    benefit: "Faster daily decisions.",
  },
] as const;

const PROOF_CARDS = [
  {
    label: "Before",
    value: "User opens three sections",
    note: "Important action is buried under secondary content.",
  },
  {
    label: "After",
    value: "User takes one clear path",
    note: "Primary action stays visible from the first screen.",
  },
] as const;

const OFFER_POINTS = [
  "Best when one workflow is costing time, attention or completed actions.",
  "We work from one owner, one measurable path and one clear first release.",
  "If the fit is wrong, we say that before build starts.",
] as const;

export default function ServicePage() {
  const deliverablesRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLElement | null>(null);

  useScrollFade(deliverablesRef);
  useScrollFade(cardsRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroGridWide">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">Deep service view</span>
              <h1>What you actually get.</h1>

              <p className="pageHeroText">
                Built pages.
                <br />
                Working components.
              </p>

              <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
                <span className="cardEyebrow">Offer</span>
                {OFFER_POINTS.map((item) => (
                  <p key={item} className="cardText">{item}</p>
                ))}
              </div>

              <div className="pageActionRow">
                <Button href="/contact">Get a scoped recommendation</Button>
                <Button href="/cases" className={buttonStyles.buttonGhost}>
                  See proof
                </Button>
              </div>
            </div>
          </div>

          <div className="pageHeroMedia pageHeroMediaColumn pageHeroMediaAlignStart">
            <div className="cardStack cardStackMeasure">
              {PROOF_CARDS.map((item) => (
                <article key={item.label} className="cardPanel cardPanelSoft">
                  <span className="cardEyebrow">{item.label}</span>
                  <p className="cardValue">{item.value}</p>
                  <p className="cardText">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={deliverablesRef} className="sectionSurfaceFade">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              Scope, output and handoff.
            </h2>

            <p className="pageText">
              This is the page for deciding
              <br />
              what gets built and what stays out.
            </p>
          </div>

          <div className="cardPanel cardPanelSoft cardPanelGapMd">
            <p className="cardValue">You get:</p>
            <ul className="cardList">
              {DELIVERABLES.map((item) => (
                <li key={item} className="cardListItem">
                  <span className="cardMark" aria-hidden="true">
                    •
                  </span>
                  <span className="cardText">{item}</span>
                </li>
              ))}
            </ul>

            {EXAMPLES.map((item) => (
              <p key={item} className="cardText">{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section ref={cardsRef} className="sectionFadeDownTop">
        <div className="pageContainer pageFlow">
          <div className="pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd">
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">Checkpoint</span>
              <p className="cardValue">If one of these outputs matches the real need, the next step is scope.</p>
              <p className="cardText">
                Not a long proposal.
                <br />
                Just one workflow, one owner and one clear first release.
              </p>
            </div>

            <div className="pageActionRow">
              <Button href="/contact">Get a scoped recommendation</Button>
              <Button href="/process" className={buttonStyles.buttonGhost}>
                See how it runs
              </Button>
            </div>
          </div>

          <div className="pageFlowIntro">
            <h2>
              Built for specific jobs.
            </h2>

            <p className="pageText">
              These are the kinds of things we scope and ship.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {SERVICE_CARDS.map((item, index) => (
              <article
                key={item.title}
                className={`cardPanel cardPanelSolid ${index === 0 ? styles.serviceCardLarge : ""}`}
              >
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.action}</p>
                <p className="cardText">{item.benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionNoBg">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              Good fit.
            </h2>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <ul className="cardList">
                {FIT_CASES.map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      •
                    </span>
                    <span className="cardText">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
              <span className="cardEyebrow">How projects stay clean</span>
              <p className="cardValue">Scope first</p>
              <ul className="cardList">
                {SCOPE_RULES.map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      •
                    </span>
                    <span className="cardText">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionSurfaceFade">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              Scope and pricing.
            </h2>

            <p className="pageText">
              No giant retainer first.
              <br />
              Scope decides the size.
            </p>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <ul className="cardList">
                {PRICING_DETAILS.map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      •
                    </span>
                    <span className="cardText">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              {PRICING_LOGIC.map((item) => (
                <article key={item.title} className="cardPanel cardPanelSoft">
                  <span className="cardEyebrow">{item.range}</span>
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="cardText">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sectionFadeDownTop">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              A couple of proof points.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            {CASES.map((item) => (
              <article key={item.title} className="cardPanel cardPanelSolid">
                <span className="cardEyebrow">{item.label}</span>
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardValue">{item.result}</p>
                <p className="cardText">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionNoBg">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              Included and excluded.
            </h2>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              {INCLUDED_EXCLUDED.map((item) => (
                <article key={item.title} className="cardPanel cardPanelSoft">
                  <span className="cardEyebrow">{item.title}</span>
                  <p className="cardText">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sectionSurfaceFade">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              Typical duration.
            </h2>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <ul className="cardList">
                {DURATION_DETAILS.map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      •
                    </span>
                    <span className="cardText">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
              <span className="cardEyebrow">Micro-proof</span>
              {MICRO_PROOFS.map((item) => (
                <p key={item} className="cardText">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sectionFadeDownTop sectionCta">
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2>
              If one of these matches,
              <br />
              show us the workflow.
            </h2>
          </div>

          <div className="pageCtaActions">
            <div className="pageActionRow">
              <Button href="/contact">Tell us what you need</Button>
              <Button href="/about-us" className={buttonStyles.buttonGhost}>
                See how we think
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
