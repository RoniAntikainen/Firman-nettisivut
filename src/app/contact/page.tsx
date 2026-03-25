"use client";

import { useRef } from "react";
import Button from "@/components/buttons/button";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

const CONTACT_OPTIONS = [
  {
    label: "Email",
    value: "hello@yourcompany.com",
    href: "mailto:hello@yourcompany.com",
    note: "The easiest way to start a conversation about your project or workflow.",
  },
  {
    label: "Location",
    value: "Helsinki, Finland",
    href: undefined,
    note: "Remote-friendly work with room for more focused collaboration when needed.",
  },
] as const;

const START_POINTS = [
  "What is currently slowing the team down?",
  "Which tasks still depend on manual work or workarounds?",
  "What kind of system, tool or functionality would help most right now?",
] as const;

const EXPECTATIONS = [
  {
    title: "A practical first conversation",
    text: "We start by understanding the current setup, what is not working and where the biggest friction actually is.",
  },
  {
    title: "Clear next steps",
    text: "If there is a good fit, the next step is to define what should be improved, built or simplified first.",
  },
  {
    title: "Focused scope",
    text: "The aim is to avoid vague project sprawl and move toward one useful direction with a clear purpose.",
  },
] as const;

export default function ContactPage() {
  const optionsRef = useRef<HTMLElement | null>(null);
  const expectationsRef = useRef<HTMLElement | null>(null);

  useScrollFade(optionsRef);
  useScrollFade(expectationsRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid">
          <div className="pageHeroContent">
            <h2>
              Let&apos;s talk about what&apos;s not working and what should be
              built instead.
            </h2>
          </div>
        </div>
      </section>

      <section
        ref={optionsRef}
        className="sectionSurfaceFade"
      >
        <div className="pageContainer pageSplit">
          <div className="pageIntro">
            <h2>Contact details and a clear way to start.</h2>

            <p className="pageText">
              You do not need a polished plan before reaching out. A short
              message about the problem, the team and the current setup is
              enough to get the conversation moving.
            </p>
          </div>

          <div className="cardStack">
            {CONTACT_OPTIONS.map((item) => (
              <article key={item.label} className="cardPanel cardPanelSoft">
                <span className="cardEyebrow">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="cardValue">
                    {item.value}
                  </a>
                ) : (
                  <p className="cardValue">{item.value}</p>
                )}
                <p className="cardText">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={expectationsRef}
        className="sectionFadeDownTop"
      >
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>What happens after you get in touch.</h2>

            <p className="pageText">
              The first step is usually a straightforward discussion about the
              current situation, the friction points and the most useful next
              move.
            </p>
          </div>

          <div className="pageGrid3">
            {EXPECTATIONS.map((item, index) => (
              <article key={item.title} className="cardPanel cardPanelSolid">
                <span className="cardNumber">
                  0{index + 1}
                </span>
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionNoBg sectionCta">
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2>Want to review the services first?</h2>

            <p className="pageText">
              If you want a clearer picture of what we build before reaching
              out, you can look through the service page first.
            </p>
          </div>

          <div className="pageCtaActions">
            <Button href="/service">See services</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
