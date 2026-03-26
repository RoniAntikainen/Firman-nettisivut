"use client";

import { useRef } from "react";
import HeroSystemVisual from "@/components/hero-system-visual/HeroSystemVisual";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

const HOME_TRUST = [
  {
    label: "Sector",
    value: "SaaS / Service Ops",
  },
  {
    label: "Sector",
    value: "Booking / Client Portals",
  },
  {
    label: "Quote",
    value: "We finally had one clear route to the main action.",
  },
] as const;

const HOME_LOGOS = [
  "Service operations",
  "Client portals",
  "Booking flows",
  "Internal tools",
] as const;

const HOME_OFFER = [
  "One focused workflow scoped before build starts.",
  "Working version early, not weeks of abstract planning.",
  "Clean handoff with reusable components and clear next steps.",
] as const;

const HOME_NUMBERS = [
  {
    label: "Proof",
    value: "6 -> 3",
    note: "Booking path reduced from six clicks to three.",
  },
  {
    label: "Proof",
    value: "3 -> 1",
    note: "Client updates moved from three tools into one portal view.",
  },
  {
    label: "Risk",
    value: "24h",
    note: "Reply on weekdays, with scope and next step clarified early.",
  },
] as const;

const HERO_VISUAL_POINTS = [
  "Scope first",
  "Working version early",
  "Clean handoff",
] as const;

export default function Home() {
  const proofRef = useRef<HTMLElement | null>(null);
  const detailRef = useRef<HTMLElement | null>(null);

  useScrollFade(proofRef);
  useScrollFade(detailRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">Focused digital systems</span>
              <h1>
                We turn messy workflows
                <br />
                into one clear path.
              </h1>

              <p className="pageHeroText">
                For teams with portals, internal tools
                <br />
                and customer flows that should be easier to use.
              </p>

              <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
                <span className="cardEyebrow">Promise</span>
                {HOME_OFFER.map((item) => (
                  <p key={item} className="cardText">{item}</p>
                ))}
              </div>

              <div className="pageActionRow">
                <Button href="/contact">Get your focused plan</Button>
                <Button href="/service" className={buttonStyles.buttonGhost}>
                  See deliverables
                </Button>
              </div>
            </div>
          </div>

          <div className="pageHeroAnchor">
            <div className="pageHeroAnchorTop">
              <span className="cardEyebrow">Visual anchor</span>
              <div className="pageHeroAnchorMarks">
                {HERO_VISUAL_POINTS.map((item) => (
                  <span key={item} className="pageHeroAnchorMark">{item}</span>
                ))}
              </div>
            </div>

            <HeroSystemVisual />

            <div className="pageHeroAnchorBottom cardPanel cardPanelSoft">
              <span className="cardEyebrow">Why us</span>
              <p className="cardValue">We cut before we build.</p>
              <p className="cardText">
                Most teams already have enough moving parts.
                <br />
                The value is making one path obvious and usable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={proofRef} className="sectionSurfaceFade">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              One clearer path
              <br />
              changes the whole page.
            </h2>

            <p className="pageText">
              This is where design turns into measurable change.
            </p>

            <p className="pageText">
              Fewer choices. Faster action. Less hesitation.
            </p>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <span className="cardEyebrow">Why this is lower risk</span>
              <p className="cardText">
                We scope one measurable workflow first.
                <br />
                That cuts wasted build time before it starts.
              </p>
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              <article className="cardPanel cardPanelSoft">
                <span className="cardEyebrow">Proof</span>
                <h3 className="cardTitle">Before</h3>
                <p className="cardText">
                  Four competing actions.
                  <br />
                  Six clicks to reach booking.
                </p>
              </article>

              <article className="cardPanel cardPanelSoft">
                <span className="cardEyebrow">After</span>
                <h3 className="cardTitle">Single primary path</h3>
                <p className="cardText">
                  Main CTA visible immediately.
                  <br />
                  Three clicks to complete the action.
                </p>
              </article>

              <article className="cardPanel cardPanelSoft">
                <span className="cardEyebrow">System map</span>
                <p className="cardText">
                  Request -&gt; Scope -&gt; Build -&gt; Preview
                  <br />
                  One owner. One measurable workflow.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section ref={detailRef} className="sectionFadeDownTop">
        <div className="pageContainer pageFlow">
          <div className="pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd">
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">Checkpoint</span>
              <p className="cardValue">If the flow is already costing attention, this is the moment to fix it.</p>
              <p className="cardText">
                You do not need the full project figured out.
                <br />
                One messy workflow is enough to start.
              </p>
            </div>

            <div className="pageActionRow">
              <Button href="/contact">Get a focused plan</Button>
              <Button href="/cases" className={buttonStyles.buttonGhost}>
                See proof first
              </Button>
            </div>
          </div>

          <div className="pageFlowIntro">
            <h2>
              Start here,
              <br />
              then go deeper.
            </h2>

            <p className="pageText">
              Home is the overview.
              <br />
              The next page depends on what you need to confirm.
            </p>

            <div className="pageActionRow">
              <Button href="/service">See services</Button>
              <Button href="/process" className={buttonStyles.buttonGhost}>
                See the process
              </Button>
            </div>
          </div>

          <div className="pageGrid3">
            <article className="cardPanel cardPanelSoft cardPanelGapMd">
              <span className="cardEyebrow">Services</span>
              <h3 className="cardTitle">What you get and what it costs.</h3>
              <p className="cardText">
                Use this when you need deliverables, ranges and fit.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft cardPanelGapMd">
              <span className="cardEyebrow">Cases</span>
              <h3 className="cardTitle">What changed and why it matters.</h3>
              <p className="cardText">
                Use this when you need proof, examples and outcomes.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft cardPanelGapMd">
              <span className="cardEyebrow">About</span>
              <h3 className="cardTitle">Who builds this and how they work.</h3>
              <p className="cardText">
                Use this when you need trust, fit and working style.
              </p>
            </article>
          </div>

          <div className="pageGrid3">
            {HOME_NUMBERS.map((item) => (
              <article key={item.note} className="cardPanel cardPanelSoft cardPanelGapMd">
                <span className="cardEyebrow">{item.label}</span>
                <p className="cardValue">{item.value}</p>
                <p className="cardText">{item.note}</p>
              </article>
            ))}
          </div>

          <div className="pageGrid3">
            <article className="cardPanel cardPanelSoft cardPanelGapMd">
              <span className="cardEyebrow">Landing page</span>
              <h3 className="cardTitle">One offer. One action.</h3>
              <p className="cardText">
                Best when the page needs one clear decision.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft cardPanelGapMd">
              <span className="cardEyebrow">Dashboard</span>
              <h3 className="cardTitle">Important signals first.</h3>
              <p className="cardText">
                Best when a team needs fewer repeated checks.
              </p>
            </article>

            <article className="cardPanel cardPanelSoft cardPanelGapMd">
              <span className="cardEyebrow">Client portal</span>
              <h3 className="cardTitle">Status, files and next step.</h3>
              <p className="cardText">
                Best when updates and handoff happen too manually.
              </p>
            </article>
          </div>

          <div className="pageGrid3">
            {HOME_TRUST.map((item) => (
              <article key={item.value} className="cardPanel cardPanelSoft cardPanelGapMd">
                <span className="cardEyebrow">{item.label}</span>
                <p className="cardValue">{item.value}</p>
              </article>
            ))}
          </div>

          <div className="cardPanel cardPanelSoft cardPanelGapMd">
            <span className="cardEyebrow">Where this already fits</span>
            <div className="pageActionRow">
              {HOME_LOGOS.map((item) => (
                <span key={item} className="cardText">{item}</span>
              ))}
            </div>
          </div>

          <div className="cardPanel cardPanelSoft cardPanelGapMd">
            <span className="cardEyebrow">Decision</span>
            <p className="cardValue">If one workflow is slowing the team down, this is worth fixing now.</p>
            <div className="pageActionRow">
              <Button href="/contact">Tell us what is not working</Button>
              <Button href="/cases" className={buttonStyles.buttonGhost}>
                See proof first
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
