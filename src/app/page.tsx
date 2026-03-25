"use client";

import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/buttons/button";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const nextRef = useRef<HTMLElement | null>(null);

  // ✅ unified fade logic
  useScrollFade(heroRef);
  useScrollFade(nextRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid">
          <div className="pageHeroContent">
            <h2>
              We build apps around what you need.
            </h2>
          </div>
        </div>
      </section>

      <section ref={heroRef} className="sectionSurfaceFade">
        <div className="pageContainer pageSplit">
          <div className="pageIntro">
            <h2>
              Fixing what’s not working.
              <br />
              Building what’s missing.
            </h2>

            <p className="pageText">
              So your systems finally work the way they should.
            </p>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              <article className="cardPanel cardPanelSoft cardPanelTinted">
                <h3 className="cardTitle">
                  Internal tools that replace manual work
                </h3>
                <p className="cardText">
                  Replace spreadsheets and fragmented workflows with one
                  structured system.
                </p>
              </article>

              <article className="cardPanel cardPanelSoft cardPanelTinted">
                <h3 className="cardTitle">
                  Website functionality that actually adds value
                </h3>
                <p className="cardText">
                  Add dashboards, flows, integrations and other features
                  directly into your site.
                </p>
              </article>

              <article className="cardPanel cardPanelSoft cardPanelTinted">
                <h3 className="cardTitle">
                  Fixes for systems that are slow, messy or limiting
                </h3>
                <p className="cardText">
                  When the current setup is in the way, we improve it or
                  rebuild it properly.
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
              A clear process.
              <br />
              Built around what actually matters.
            </h2>

            <p className="pageText">
              We keep projects focused by understanding the problem first,
              designing only what is needed, and building solutions that work
              properly in real use.
            </p>
          </div>

          <div className="pageGrid3">
            <article className="cardPanel cardPanelSolid">
              <span className="cardNumber">01</span>
              <h3 className="cardTitle">Understand the problem</h3>
              <p className="cardText">
                We look at what is slowing things down, where work gets repeated
                and what should be simplified before anything gets built.
              </p>
            </article>

            <article className="cardPanel cardPanelSolid">
              <span className="cardNumber">02</span>
              <h3 className="cardTitle">Design the right solution</h3>
              <p className="cardText">
                We define the structure, flows and features with clarity, so the
                solution stays useful, focused and free from unnecessary
                complexity.
              </p>
            </article>

            <article className="cardPanel cardPanelSolid">
              <span className="cardNumber">03</span>
              <h3 className="cardTitle">Build and improve</h3>
              <p className="cardText">
                We implement the system properly, refine the details and make
                sure it works smoothly in practice, not just in theory.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section ref={nextRef} className="sectionFadeDownTop sectionCta">
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2>
              Ready to make your systems simpler?
            </h2>

            <p className="pageText">
              Let’s take a look at what’s slowing things down and what should be built
              instead.
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
