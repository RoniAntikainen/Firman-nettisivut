"use client";

import { useRef } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import ProcessFlowVisual from "@/components/process-flow-visual/ProcessFlowVisual";
import styles from "./page.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";
import { useCurrentLocale } from "@/hooks/i18n/useCurrentLocale";

const PROCESS_CONTENT = {
  en: {
    turningPoints: [
      { label: "Before build", title: "The expensive mistake is usually made here.", text: "If the owner, bottleneck and success metric are still vague, build only makes the wrong decision harder to reverse." },
      { label: "During build", title: "The work stays smaller than the temptation.", text: "Only the core route gets built first. That keeps extra features, polish and edge cases from taking over too early." },
      { label: "Before handoff", title: "You see the route while it is still fixable.", text: "Review happens before the structure hardens, so the result feels clear and owned instead of merely delivered." },
    ],
    changeStages: [
      { label: "Early", title: "The project stops feeling vague.", text: "A working direction appears before the wrong build has time to harden." },
      { label: "Middle", title: "Less time disappears into the wrong work.", text: "Time and budget stop leaking into layers that should never have been built." },
      { label: "Later", title: "New ideas stop weakening the current scope.", text: "They become the next phase instead of hidden scope inside the build already in motion." },
    ],
    phaseOutputs: [
      "Broken: bottleneck, owner and success metric agreed.",
      "Cut: what stays, what goes and what waits is made explicit.",
      "Shape: page or workflow direction with one clear route.",
      "Build: working implementation in code, not just a static concept.",
      "See: reviewable version before the wrong structure hardens.",
      "Own: repo, components, notes and acceptance criteria handed over cleanly.",
    ],
    doneDefinition: [
      "The main workflow is clear.",
      "The owner can review against an agreed success metric.",
      "The deliverable is ready to own, hand off or continue in the next phase.",
    ],
    promise: [
      "Most projects fail before build is even pointed at the right path.",
      "You do not need more code first. You need the right route first.",
      "The work stays small until the main flow is proven.",
    ],
  },
  fi: {
    turningPoints: [
      { label: "Ennen toteutusta", title: "Kallein virhe tehdään yleensä tässä vaiheessa.", text: "Jos omistaja, pullonkaula ja onnistumisen mittari ovat vielä sumuisia, toteutus tekee väärään ratkaisuun sitoutumisesta vain vaikeampaa purkaa." },
      { label: "Toteutuksen aikana", title: "Työ pysyy pienempänä kuin houkutus kasvattaa sitä.", text: "Ensin rakennetaan vain ydinsuunta. Silloin lisätoiminnot, viimeistely ja reunatapaukset eivät niele kokonaisuutta liian aikaisin." },
      { label: "Ennen luovutusta", title: "Reitti näkyy vielä silloin kun sitä voi korjata.", text: "Arviointi tehdään ennen kuin rakenne kovettuu, joten lopputulos tuntuu selkeältä ja omistetulta eikä vain luovutetulta." },
    ],
    changeStages: [
      { label: "Alku", title: "Projekti lakkaa tuntumasta epämääräiseltä.", text: "Toimiva suunta ilmestyy näkyviin ennen kuin väärä toteutus ehtii kovettua." },
      { label: "Keskivaihe", title: "Väärään työhön katoaa vähemmän aikaa.", text: "Aika ja budjetti eivät enää valu kerroksiin, joita ei olisi koskaan pitänyt rakentaa." },
      { label: "Myöhemmin", title: "Uudet ideat eivät heikennä nykyistä kokonaisuutta.", text: "Niistä tulee seuraava vaihe sen sijaan, että ne piilotettaisiin kesken olevaan toteutukseen." },
    ],
    phaseOutputs: [
      "Rajaus: pullonkaula, omistaja ja onnistumisen mittari sovitaan.",
      "Karsinta: mitä tehdään nyt, mitä ei ja mitä siirtyy myöhemmin, tehdään näkyväksi.",
      "Muoto: sivun tai työnkulun suunta jäsennetään yhden selkeän reitin ympäri.",
      "Toteutus: toimiva versio rakennetaan koodiin, ei vain staattiseksi ajatukseksi.",
      "Arviointi: versio nähdään ennen kuin väärä rakenne ehtii jämähtää.",
      "Luovutus: repo, komponentit, muistiinpanot ja hyväksymiskriteerit luovutetaan siististi.",
    ],
    doneDefinition: [
      "Päätyönkulku on selkeä.",
      "Omistaja pystyy arvioimaan tulosta sovittua mittaria vasten.",
      "Lopputulos on valmis omistettavaksi, luovutettavaksi tai jatkettavaksi seuraavassa vaiheessa.",
    ],
    promise: [
      "Useimmat projektit menevät vinoon jo ennen kuin toteutus osoittaa oikeaan suuntaan.",
      "Et tarvitse ensin lisää koodia. Tarvitset ensin oikean reitin.",
      "Työ pysyy pienenä, kunnes päävirta on osoitettu toimivaksi.",
    ],
  },
} as const;

export default function ProcessPage() {
  const locale = useCurrentLocale();
  const copy = PROCESS_CONTENT[locale];
  const driftHeadingId = "process-drift-heading";
  const changeHeadingId = "process-change-heading";
  const handoffHeadingId = "process-handoff-heading";
  const ctaHeadingId = "process-cta-heading";
  const timelineRef = useRef<HTMLElement | null>(null);
  const changeRef = useRef<HTMLElement | null>(null);
  const ownershipRef = useRef<HTMLElement | null>(null);

  useScrollFade(timelineRef);
  useScrollFade(changeRef, { triggerFactor: 0.92, power: 1.4, start: 68 });
  useScrollFade(ownershipRef, { triggerFactor: 0.92, power: 1.4, start: 68 });

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className={`pageContainer pageHeroGrid pageHeroGridWide ${styles.heroGrid}`}>
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">{locale === "fi" ? "Toimitus ja riski" : "Delivery and risk"}</span>
              <h1>{locale === "fi" ? <>Useimmat projektit<br />menevät vinoon ennen oikeaa suuntaa.</> : <>Most projects fail<br />before build is pointed correctly.</>}</h1>

              <p className="pageHeroText">{locale === "fi" ? <>Tällä tavalla leikkaamme riskiä<br />ennen kuin koodi kasvaa väärän päätöksen ympärille.</> : <>This is how we cut risk<br />before code grows around the wrong decision.</>}</p>

              <p className="pageText">{locale === "fi" ? <>Nopeus ilman suuntaa<br />rikkoo projektin ensimmäisenä.</> : <>Speed without direction<br />is what breaks most projects first.</>}</p>

              <div className="pageActionRow">
                <Button href="/contact">{locale === "fi" ? "Näytä nykyinen pullonkaula" : "Show your current bottleneck"}</Button>
                <Button href="/service" className={buttonStyles.buttonGhost}>
                  {locale === "fi" ? "Katso asiakasportaalit ja työkalut" : "See client portals and tools"}
                </Button>
              </div>
            </div>
          </div>

          <div className={`pageVisual ${styles.heroVisual}`}>
            <ProcessFlowVisual />
          </div>
        </div>
      </section>

      <section
        ref={timelineRef}
        className="sectionSurfaceFade"
        aria-labelledby={driftHeadingId}
      >
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2 id={driftHeadingId}>{locale === "fi" ? "Missä projektit yleensä karkaavat raiteilta." : "Where projects usually go wrong."}</h2>

            <p className="pageText">{locale === "fi" ? <>Useimmat tiimit siirtyvät toteutukseen liian aikaisin.<br />Siinä kohtaa kallis virhe yleensä alkaa.</> : <>Most teams move into build too early.<br />That is usually where the expensive mistake begins.</>}</p>
          </div>

          <div className={`${styles.promiseStrip} ${styles.revealBlock}`}>
            <span className="cardEyebrow">{locale === "fi" ? "Prosessilupaus" : "Process promise"}</span>
            <p className={styles.promiseLead}>{locale === "fi" ? "Hidastamme juuri siinä kohdassa, jossa hosuminen tavallisesti rikkoo kokonaisuuden." : "We slow the project down exactly where rushing usually breaks it."}</p>
            <p className="pageText">{locale === "fi" ? "Tällä tavalla toteutus osoittaa oikeaan suuntaan." : "This is how the build gets pointed in the right direction."}</p>
            <div className={styles.promiseGrid}>
              {copy.promise.map((item) => (
                <p key={item} className="cardText">{item}</p>
              ))}
            </div>
          </div>

          <div className={styles.turningPoints}>
            {copy.turningPoints.map((point) => (
              <article key={point.title} className={`cardPanel cardPanelSoft ${styles.turningPoint}`}>
                <span className="cardEyebrow">{point.label}</span>
                <h3 className="cardTitle">{point.title}</h3>
                <p className="cardText">{point.text}</p>
              </article>
            ))}
          </div>

          <div className="pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd">
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">{locale === "fi" ? "Checkpoint" : "Checkpoint"}</span>
              <p className="cardValue">{locale === "fi" ? "Jos yksikin vaihe tuntuu puuttuvan, siinä on yleensä todellinen aloituspiste." : "If one step already feels missing, that is usually the real starting point."}</p>
              <p className="cardText">{locale === "fi" ? <>Koko scopea ei tarvitse kirjoittaa ensin auki.<br />Yksi rikkinainen työnkulku riittää selkeään kartoitukseen.</> : <>You do not need the whole scope written down first.<br />One broken workflow is enough to map clearly.</>}</p>
            </div>

            <div className="pageActionRow">
              <Button href="/contact">{locale === "fi" ? "Näytä nykyinen pullonkaula" : "Show your current bottleneck"}</Button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={changeRef}
        className="sectionFadeDownTop"
        aria-labelledby={changeHeadingId}
      >
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2 id={changeHeadingId}>{locale === "fi" ? <>Miten projekti alkaa<br />toimia eri tavalla.</> : <>What the project<br />starts doing differently.</>}</h2>

            <p className="pageText">{locale === "fi" ? <>Kokonaisuus pienenee, selkeytyy ja on helpompi pitää hallinnassa<br />ennen kuin väärään suuntaan ehtii kasautua lisää työtä.</> : <>It gets smaller, clearer and easier to control<br />before more work piles onto the wrong route.</>}</p>
          </div>

          <div className={`${styles.changeSurface} ${styles.revealBlock}`}>
            <div className={`${styles.notesLead} ${styles.revealItem}`}>
              <span className="cardEyebrow">{locale === "fi" ? "Kun reitti on oikea" : "Once the route is right"}</span>
              <p className="cardValue">{locale === "fi" ? "Projekti lakkaa tuntumasta itse ongelmaa suuremmalta." : "The project stops feeling bigger than the real problem."}</p>
              <p className="cardText">
                {locale === "fi" ? "Kun reitti on selkeä, eteneminen tuntuu mitattavalta eikä vain epämääräiseltä." : "Once the route is clear, progress starts feeling measurable instead of vague."}
              </p>
            </div>

            <div className={styles.changeGrid}>
              {copy.changeStages.map((item) => (
                <article key={item.title} className={`${styles.changeStage} ${styles.revealItem}`}>
                  <span className="cardEyebrow">{item.label}</span>
                  <h3 className={styles.changeTitle}>{item.title}</h3>
                  <p className="cardText">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ownershipRef}
        className="sectionNoBg"
        aria-labelledby={handoffHeadingId}
      >
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2 id={handoffHeadingId}>{locale === "fi" ? <>Miltä luovutuksen<br />pitäisi oikeasti tuntua.</> : <>What the handoff<br />should actually feel like.</>}</h2>

            <p className="pageText">{locale === "fi" ? <>Ei vain tiedostoina luovutettuna.<br />Vaan järjestelmänä jota voi arvioida, ymmärtää ja jatkaa ilman arvailua.</> : <>Not just files delivered.<br />A system you can review, understand and continue without guesswork.</>}</p>
          </div>

          <div className={`${styles.ownershipSurface} ${styles.revealBlock}`}>
            <div className={`${styles.ownershipLead} ${styles.revealItem}`}>
              <span className="cardEyebrow">{locale === "fi" ? "Lopussa" : "At the end"}</span>
              <p className="cardValue">{locale === "fi" ? "Lopputuloksen pitäisi tuntua omistetulta, ei vain valmiiksi tehdyltä." : "The result should feel owned, not merely finished."}</p>
              <p className="cardText">
                {locale === "fi" ? "Reitti on selkeä, päätökset ovat näkyvissä ja seuraava vaihe ei riipu siitä muistetaanko toteutuksen yksityiskohdat ulkoa." : "The route is clear, the decisions are visible and the next phase does not depend on remembering what happened during the build."}
              </p>
            </div>

            <div className={styles.ownershipGrid}>
              <div className={`${styles.ownershipCopy} ${styles.revealItem}`}>
                  <span className="cardEyebrow">{locale === "fi" ? "Mitä saat" : "What you receive"}</span>
                <ul className="cardList">
                  {copy.phaseOutputs.map((item) => (
                    <li key={item} className="cardListItem">
                      <span className="cardMark" aria-hidden="true">
                        •
                      </span>
                      <span className="cardText">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.ownershipAside} ${styles.revealItem}`}>
                <div className={`cardPanel cardPanelSoft cardPanelGapMd ${styles.doneCard}`}>
                  <span className="cardEyebrow">{locale === "fi" ? "Mistä tiedät että tämä on valmis" : "How you know it is done"}</span>
                  <ul className="cardList">
                    {copy.doneDefinition.map((item) => (
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
          </div>
        </div>
      </section>

      <section
        className="sectionNoBg sectionCta"
        aria-labelledby={ctaHeadingId}
      >
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2 id={ctaHeadingId}>{locale === "fi" ? <>Jos toteutus ajelehtii sivuun,<br />aloita pullonkaulasta.</> : <>If the build keeps drifting,<br />start with the bottleneck.</>}</h2>

            <p className="pageText">{locale === "fi" ? <>Yksi rikkinäinen reitti riittää kartoitukseen.<br />Siitä todellinen projekti yleensä alkaa.</> : <>One broken route is enough to map.<br />That is usually where the real project starts.</>}</p>
          </div>

          <div className="pageCtaActions">
            <div className="pageActionRow">
              <Button href="/contact">{locale === "fi" ? "Näytä nykyinen pullonkaula" : "Show your current bottleneck"}</Button>
              <Button href="/service" className={buttonStyles.buttonGhost}>
                {locale === "fi" ? "Katso palvelun rajaus" : "See service scope"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
