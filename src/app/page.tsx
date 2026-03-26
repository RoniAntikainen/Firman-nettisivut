"use client";

import { useRef } from "react";
import HeroSystemVisual from "@/components/hero-system-visual/HeroSystemVisual";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

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
    value: "6 to 3",
    note: "Booking path reduced from six clicks to three.",
  },
  {
    label: "Proof",
    value: "3 to 1",
    note: "Client updates moved from three tools into one portal view.",
  },
  {
    label: "Risk",
    value: "24h",
    note: "Reply on weekdays, with scope and next step clarified early.",
  },
] as const;

export default function Home() {
  const proofRef = useRef<HTMLElement | null>(null);
  const detailRef = useRef<HTMLElement | null>(null);

  useScrollFade(proofRef);
  useScrollFade(detailRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid desktop-align-start">
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

              <div className="pageActionRow">
                <Button href="/contact">Get your focused plan</Button>
                <Button href="/service" className={buttonStyles.buttonGhost}>
                  See deliverables
                </Button>
              </div>
            </div>
          </div>

          <div className="pageHeroAnchor">
            <HeroSystemVisual />
          </div>
        </div>
      </section>

      <section ref={proofRef} className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageSplit pageSplitCenter">
            <div className="pageIntro">
              <h2>
                One clearer path
                <br />
                changes the whole system.
              </h2>

              <p className="pageText">
                This is where structure starts paying back.
              </p>

              <p className="pageText">
                We remove noise before build starts.
                <br />
                Then the main action becomes easier to find and finish.
              </p>
            </div>

            <div className="pageVisual">
              <article className="cardPanel cardPanelSoft cardPanelGapLg pageStoryCard">
                <div className="pageStoryCardTop">
                  <span className="cardEyebrow">Before and after</span>
                  <p className="cardValue">One path is easier to notice, trust and finish.</p>
                </div>

                <div className="pageStoryCompare">
                  <div className="pageStoryColumn">
                    <span className="cardEyebrow">Before</span>
                    <p className="cardValue">Too many equal choices</p>
                    <p className="cardText">Four competing actions on the same screen.</p>
                    <p className="cardText">Six clicks before the user reaches booking.</p>
                  </div>

                  <div className="pageStoryColumn">
                    <span className="cardEyebrow">After</span>
                    <p className="cardValue">Single primary path</p>
                    <p className="cardText">Main action visible immediately.</p>
                    <p className="cardText">Three clicks to complete the action.</p>
                  </div>
                </div>

                <div className="pageStoryDivider" aria-hidden="true" />

                <div className="pageStoryMeta">
                  <span className="cardEyebrow">Why it works</span>
                  <p className="cardValue">The path gets defined before the build starts.</p>
                  <p className="cardText">
                    {HOME_OFFER[0]}
                  </p>
                </div>
              </article>
            </div>
          </div>

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
        </div>
      </section>

      <section ref={detailRef} className="sectionFadeDownTop">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro pageFlowIntroWide">
            <h2>
              Choose the next view
              <br />
              based on what you need.
            </h2>

            <p className="pageText">
              Home is the overview.
              <br />
              The next step depends on what you need to confirm next.
            </p>

            <div className="pageActionRow">
              <Button href="/service">See services</Button>
              <Button href="/process" className={buttonStyles.buttonGhost}>
                See the process
              </Button>
            </div>
          </div>

          <div className="pageFlow pageFlowTight">
            <article className="pageCheckpoint pageCheckpointInline cardPanel cardPanelSoft cardPanelGapMd">
              <div className="pageCheckpointCopy">
                <span className="cardEyebrow">01 · Services</span>
                <p className="cardValue">Go here if you need scope, deliverables and pricing.</p>
                <p className="cardText">
                  This is the practical page.
                  <br />
                  It shows what gets built, what is included and what it typically costs.
                </p>
                <div className="pageActionRow">
                  <Button href="/service">See services</Button>
                </div>
              </div>
            </article>

            <article className="pageCheckpoint pageCheckpointInline cardPanel cardPanelSoft cardPanelGapMd">
              <div className="pageCheckpointCopy">
                <span className="cardEyebrow">02 · Cases</span>
                <p className="cardValue">Go here if you need proof and concrete outcomes.</p>
                <p className="cardText">
                  This is the evidence page.
                  <br />
                  It shows what changed, why it mattered and what improved.
                </p>
                <div className="pageActionRow">
                  <Button href="/cases" className={buttonStyles.buttonGhost}>
                    See proof
                  </Button>
                </div>
              </div>
            </article>

            <article className="pageCheckpoint pageCheckpointInline cardPanel cardPanelSoft cardPanelGapMd">
              <div className="pageCheckpointCopy">
                <span className="cardEyebrow">03 · About</span>
                <p className="cardValue">Go here if you need trust, fit and working style.</p>
                <p className="cardText">
                  This is the studio page.
                  <br />
                  It shows who builds this, how the work runs and when the fit is right.
                </p>
                <div className="pageActionRow">
                  <Button href="/about-us" className={buttonStyles.buttonGhost}>
                    See about
                  </Button>
                </div>
              </div>
            </article>
          </div>

          <div className="pageFlowIntro pageSectionBreak">
            <h2>
              What usually improves
              <br />
              first.
            </h2>

            <p className="pageText">
              These are the earliest signs that the structure is getting better.
            </p>
          </div>

          <div className="pageStatRow">
            {HOME_NUMBERS.map((item) => (
              <article key={item.note} className="pageStatItem cardPanel cardPanelSoft cardPanelGapMd">
                <span className="cardEyebrow">{item.label}</span>
                <p className="cardValue">{item.value}</p>
                <p className="cardText">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionNoBg sectionCta">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              If the fit is real,
              <br />
              keep it simple.
            </h2>

            <p className="pageText">
              You do not need a full brief.
              <br />
              One workflow is enough to start the conversation.
            </p>
          </div>

          <div className="pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd">
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">Where this fits</span>
              <p className="cardValue">Best for service operations, booking flows, client portals and internal tools.</p>
              <p className="cardText">
                If one workflow is slowing the team down,
                <br />
                this is probably worth fixing now.
              </p>
            </div>

            <div className="pageActionRow">
              {HOME_LOGOS.map((item) => (
                <span key={item} className="cardText">{item}</span>
              ))}
            </div>
          </div>

          <div className="pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd">
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">Decision</span>
              <p className="cardValue">If the problem is real, the next step is a focused plan.</p>
              <p className="cardText">
                Show us the workflow.
                <br />
                We will point to the clearest next step.
              </p>
            </div>

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
