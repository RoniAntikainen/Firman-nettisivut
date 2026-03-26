"use client";

import { useRef } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

const PRINCIPLES = [
  {
    title: "Why this exists",
    lines: [
      "We don't like complex systems.",
      "Most tools are overbuilt.",
      "We build the opposite.",
    ],
  },
  {
    title: "How we work",
    lines: [
      "Small scope first.",
      "Working version early.",
      "Clean handoff at the end.",
    ],
  },
  {
    title: "Why people trust us",
    lines: [
      "We cut complexity.",
      "We show progress early.",
      "We do not hide behind process theatre.",
    ],
  },
] as const;

const WHAT_WE_DO_NOT_DO = [
  "use templates",
  "overbuild features",
  "add unnecessary layers",
] as const;

const SIGNALS = [
  {
    label: "What clients usually have",
    value: "Too many tools for one job",
    note: "Work gets split across tabs, messages and manual updates.",
  },
  {
    label: "What they usually want",
    value: "One cleaner way to do it",
    note: "One workflow, one view and one next step that makes sense.",
  },
] as const;

const WHO_WE_ARE = [
  {
    title: "Founder-led studio",
    text: "Weboryn is a new studio built around one idea: fewer moving parts, clearer workflows and calmer delivery.",
  },
  {
    title: "How we work",
    text: "You work directly with the person shaping the scope, the product direction and the build.",
  },
  {
    title: "What we build",
    text: "Mostly React, Next.js and focused interfaces for portals, internal tools and key customer flows.",
  },
] as const;

const BEST_FIT = [
  "One owner can define the workflow clearly.",
  "The team can point to one measurable problem first.",
  "The goal is a cleaner system, not a giant rebuild.",
] as const;

const NOT_FOR_US = [
  "you need a huge multi-team platform from day one",
  "the workflow is still too unclear to scope",
  "you want maximum feature count before first delivery",
] as const;

const WORKING_EXPECTATIONS = [
  "Response rhythm: usually within 24 hours on weekdays.",
  "Check-ins: lightweight weekly updates or milestone reviews depending on scope.",
  "Decisions: one owner keeps the workflow and scope moving.",
  "Handoff: final structure, editable components and next-step guidance.",
] as const;

const TEAM_CARDS = [
  {
    title: "Product direction",
    text: "Scope, structure and the core workflow are shaped before build expands.",
  },
  {
    title: "Frontend build",
    text: "Interfaces are built to be usable, editable and ready to hand off cleanly.",
  },
  {
    title: "Delivery style",
    text: "Small team, direct communication and fewer layers between decision and execution.",
  },
] as const;

const STUDIO_NOTES = [
  "Founder-led from first message to handoff.",
  "Small scope, direct communication, no unnecessary layers.",
  "Built for teams that need one workflow to work properly.",
] as const;

export default function AboutUsPage() {
  const principlesRef = useRef<HTMLElement | null>(null);
  const fitRef = useRef<HTMLElement | null>(null);

  useScrollFade(principlesRef);
  useScrollFade(fitRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">Studio and trust</span>
              <h1>
                We build the opposite
                <br />
                of overbuilt software.
              </h1>

              <p className="pageHeroText">
                This page is about who we are,
                <br />
                how we work and when we are the right fit.
              </p>

              <div className="pageActionRow">
                <Button href="/service">See what we build</Button>
                <Button href="/contact" className={buttonStyles.buttonGhost}>
                  Tell us what is not working
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={principlesRef} className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>Why the studio works this way.</h2>
          </div>

          <div className="pageGrid3">
            {PRINCIPLES.map((item) => (
              <article key={item.title} className="cardPanel cardPanelSolid">
                <h3 className="cardTitle">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="cardText">
                    {line}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={fitRef}>
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              What we do not do.
            </h2>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <ul className="cardList">
                {WHAT_WE_DO_NOT_DO.map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      •
                    </span>
                    <span className="cardText">We don&apos;t {item}.</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              {SIGNALS.map((item) => (
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

      <section className="sectionFadeDownTop">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              Who builds this.
            </h2>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
              <span className="cardEyebrow">Studio note</span>
              {STUDIO_NOTES.map((item) => (
                <p key={item} className="cardText">{item}</p>
              ))}
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              {WHO_WE_ARE.map((item) => (
                <article key={item.title} className="cardPanel cardPanelSoft">
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="cardText">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sectionNoBg">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageFlowIntro">
            <h2>
              Team shape.
            </h2>

            <p className="pageText">
              This page is about how the studio works,
              <br />
              not what the final deliverable costs.
            </p>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              {TEAM_CARDS.map((item) => (
                <article key={item.title} className="cardPanel cardPanelSoft">
                  <h3 className="cardTitle">{item.title}</h3>
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
              Best fit.
            </h2>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <ul className="cardList">
                {BEST_FIT.map((item) => (
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
            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <span className="cardEyebrow">When not to hire us</span>
              <ul className="cardList">
                {NOT_FOR_US.map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      •
                    </span>
                    <span className="cardText">Not a fit if {item}.</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionFadeDownTop">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              What to expect working with us.
            </h2>
          </div>

          <div className="pageGrid3">
            {WORKING_EXPECTATIONS.map((item) => (
              <article key={item} className="cardPanel cardPanelSoft">
                <p className="cardText">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionFadeDownTop sectionCta">
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2>
              Trust usually starts
              <br />
              with one real problem.
            </h2>
          </div>

          <div className="pageCtaActions">
            <div className="pageActionRow">
              <Button href="/contact">Tell us what is not working</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
