"use client";

import { useRef } from "react";
import Button from "@/components/buttons/button";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

export default function AboutUsPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const whoItFitsRef = useRef<HTMLElement | null>(null);

  // 🔥 molemmat käyttää samaa hookia
  useScrollFade(heroRef);
  useScrollFade(whoItFitsRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <h2>
              We build systems that are designed to actually work in real use.
            </h2>
          </div>
        </div>
      </section>

      <section ref={heroRef} className="sectionSurfaceFade">
        <div className="pageContainer pageSplit">
          <div className="pageIntro">
            <h2>
              We build tools, systems and workflows that make work feel simpler.
            </h2>

            <p className="pageText pageTextNarrow">
              Our work is focused on helping teams move away from fragmented
              workflows, repetitive manual work and systems that slow everything
              down.
            </p>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              <article className="cardPanel cardPanelSoft cardPanelTinted">
                <h3 className="cardTitle">Internal tools</h3>
                <p className="cardText">
                  Dashboards, admin tools and workflows that replace manual work
                  with one clearer system.
                </p>
              </article>

              <article className="cardPanel cardPanelSoft cardPanelTinted">
                <h3 className="cardTitle">Website functionality</h3>
                <p className="cardText">
                  Useful features, flows and integrations that turn a website
                  into something more practical.
                </p>
              </article>

              <article className="cardPanel cardPanelSoft cardPanelTinted">
                <h3 className="cardTitle">System improvements</h3>
                <p className="cardText">
                  Reworking slow, messy or limiting setups so they support real
                  use better.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>
              Most systems are harder to use than they should be.
            </h2>

            <p className="pageText pageTextNarrow">
              Too often, digital tools are built around assumptions instead of
              real workflows. They become slow, unclear or overloaded with
              features that add little value.
            </p>
          </div>

          <div className="pageGrid3">
            <article className="cardPanel cardPanelSolid">
              <span className="cardNumber">01</span>
              <h3 className="cardTitle">Clarity over clutter</h3>
              <p className="cardText">
                We prefer simple structures, clear interfaces and focused flows
                over unnecessary complexity.
              </p>
            </article>

            <article className="cardPanel cardPanelSolid">
              <span className="cardNumber">02</span>
              <h3 className="cardTitle">Real use over theory</h3>
              <p className="cardText">
                A system should work in everyday use, not just look good in a
                presentation or planning document.
              </p>
            </article>

            <article className="cardPanel cardPanelSolid">
              <span className="cardNumber">03</span>
              <h3 className="cardTitle">Structure that scales</h3>
              <p className="cardText">
                Good systems are easier to maintain, improve and grow when the
                foundation is built properly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section ref={whoItFitsRef} className="sectionFadeDownTop">
        <div className="pageContainer pageSplit">
          <div className="pageIntro">
            <h2>
              We work best with teams that want better structure.
            </h2>

            <p className="pageText pageTextNarrow">
              The best fit is usually a team that has outgrown scattered tools
              and wants a system that feels more natural to use.
            </p>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              <article className="cardPanel cardPanelSoft cardPanelTinted">
                <h3 className="cardTitle">Too many manual steps</h3>
                <p className="cardText">
                  Repetitive work, copied data and unnecessary admin slow down
                  everyday progress.
                </p>
              </article>

              <article className="cardPanel cardPanelSoft cardPanelTinted">
                <h3 className="cardTitle">Outgrown spreadsheets</h3>
                <p className="cardText">
                  What worked earlier no longer supports the way the team
                  actually operates now.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionNoBg sectionCta">
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2>
              Ready to make your systems simpler?
            </h2>

            <p className="pageText pageTextNarrow">
              Let&apos;s take a look at what&apos;s slowing things down and what
              should be built instead.
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
