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
              <h1>
                Modern apps and websites
                <br />
                for teams with portals,
                <br />
                internal tools and real workflows.
              </h1>

              <p className="pageHeroText">
                We cut complexity before build.
                <br />
                Then we make the core path easier to use.
              </p>

              <div className="pageActionRow">
                <Button href="/service">See what we build</Button>
                <Button href="/contact" className={buttonStyles.buttonGhost}>
                  Tell us what you need
                </Button>
              </div>
            </div>
          </div>

          <HeroSystemVisual />
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
          <div className="pageFlowIntro">
            <h2>
              Pick the next view
              <br />
              based on what you need.
            </h2>

            <p className="pageText">
              Need the deliverables?
              <br />
              Go to Services.
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
        </div>
      </section>
    </main>
  );
}
