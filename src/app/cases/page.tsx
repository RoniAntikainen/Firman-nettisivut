"use client";

import { useMemo, useRef, useState } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import styles from "./page.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";
import { useCurrentLocale } from "@/hooks/i18n/useCurrentLocale";

const CASES = [
  {
    type: "Booking",
    context: "Service business · Booking flow",
    client: "Anonymized client",
    scope: "Scope: booking entry point and booking path cleanup",
    before: "Competing sections, weak CTA priority, six clicks to booking",
    after: "Primary action on the first screen, cleaner route, three clicks to finish",
    problem: "The main action was buried behind competing sections, weak hierarchy and too many clicks.",
    change: "We reduced the path, moved the primary CTA into the first screen and removed the dead-end branch.",
    metric: "6 clicks to 3",
    effect: "The route to the core action became faster to notice and easier to finish.",
    impact: "Result: fewer weak decision points inside the booking flow.",
  },
  {
    type: "Portal",
    context: "Client services · Status and files portal",
    client: "Anonymized client",
    scope: "Scope: one owner-facing portal view for updates, files and next actions",
    before: "Updates scattered across email, files and multiple status checks",
    after: "One portal view with status, files and the next owner action in one place",
    problem: "Status updates, files and next actions were split across three tools, email threads and repeated checking.",
    change: "We combined the workflow into one portal view with one owner-facing next step and clearer status visibility.",
    metric: "3 tools to 1 view",
    effect: "The team spent less time checking scattered updates and more time moving the work forward.",
    impact: "Result: less context switching and clearer ownership in daily work.",
  },
  {
    type: "Dashboard",
    context: "Operations team · Daily dashboard",
    client: "Anonymized client",
    scope: "Scope: one decision-facing dashboard view for daily use",
    before: "Important signals buried under low-value reporting and repeated scanning",
    after: "Next important signal shown first, with one clearer path to action",
    problem: "Important signals were mixed with low-value reporting, so people scanned multiple views before acting.",
    change: "We reorganized the view around one owner, one decision path and the first action worth taking.",
    metric: "Fewer repeated checks",
    effect: "The next important signal appeared earlier instead of being buried inside passive reporting.",
    impact: "Result: less time lost scanning low-value information every day.",
  },
] as const;

const FILTERS = ["All", "Booking", "Portal", "Dashboard"] as const;
const FILTERS_FI = ["Kaikki", "Varaus", "Portaali", "Dashboard"] as const;

const TESTIMONIALS = [
  {
    sector: "Service operations",
    quote: "We finally had one place for status, files and the next step.",
  },
  {
    sector: "Booking flow",
    quote: "The main action became obvious and the page stopped fighting itself.",
  },
] as const;

const CASE_SUMMARY = [
  "6 clicks to 3",
  "3 tools to 1 view",
  "Fewer repeated checks",
] as const;

const CASES_FI = [
  {
    type: "Varaus",
    context: "Palveluliiketoiminta · Varauspolku",
    client: "Anonymisoitu asiakas",
    scope: "Rajaus: varauksen aloitusnäkymä ja varauspolun siistiminen",
    before: "Keskenään kilpailevat osiot, heikko CTA-hierarkia ja kuusi klikkausta varaukseen",
    after: "Päätoiminto heti ensimmäisessä näkymässä, selkeämpi reitti ja kolme klikkausta maaliin",
    problem: "Päätoiminto jäi kilpailevien osioiden, heikon hierarkian ja liian monen klikkauksen alle.",
    change: "Lyhensimme reittiä, nostimme pää-CTA:n heti ensimmäiseen näkymään ja poistimme umpikujan.",
    metric: "6 klikkausta -> 3",
    effect: "Reitti tärkeimpään toimintaan löytyi nopeammin ja oli helpompi viedä loppuun asti.",
    impact: "Tulos: vähemmän heikkoja päätöskohtia varauspolun sisällä.",
  },
  {
    type: "Portaali",
    context: "Asiakaspalvelu · Tilanne- ja tiedostoportaali",
    client: "Anonymisoitu asiakas",
    scope: "Rajaus: yksi omistajalle suunnattu portaalinäkymä päivityksille, tiedostoille ja seuraaville toimille",
    before: "Päivitykset hajallaan sähköpostissa, tiedostoissa ja useissa tarkistuspaikoissa",
    after: "Yksi portaalinäkymä, jossa tila, tiedostot ja seuraava omistajan toimi näkyvät yhdessä paikassa",
    problem: "Tilannepäivitykset, tiedostot ja seuraavat toimet olivat hajallaan kolmessa työkalussa, sähköpostiketjuissa ja toistuvassa tarkistelussa.",
    change: "Yhdistimme työnkulun yhdeksi portaalinäkymäksi, jossa seuraava askel ja tilannekuva näkyvät selkeästi.",
    metric: "3 työkalua -> 1 näkymä",
    effect: "Tiimiltä kului vähemmän aikaa hajallaan olevan tiedon tarkisteluun ja enemmän itse työn viemiseen eteenpäin.",
    impact: "Tulos: vähemmän kontekstin vaihtoa ja selkeämpi omistajuus arjen työssä.",
  },
  {
    type: "Dashboard",
    context: "Operatiivinen tiimi · Päivittäinen dashboard",
    client: "Anonymisoitu asiakas",
    scope: "Rajaus: yksi päätöksentekoa tukeva dashboard-näkymä päivittäiseen käyttöön",
    before: "Tärkeät signaalit hautautuivat matalan arvon raportoinnin ja toistuvan skannauksen alle",
    after: "Seuraava tärkeä signaali näkyi ensin, ja siihen johti yksi selkeämpi toimintareitti",
    problem: "Tärkeät signaalit sekoittuivat vähäarvoiseen raportointiin, joten ihmiset joutuivat selaamaan useita näkymiä ennen toimintaa.",
    change: "Järjestimme näkymän yhden omistajan, yhden päätöksentekoreitin ja ensimmäisen oikeasti tärkeän toiminnon ympärille.",
    metric: "Vähemmän turhaa tarkistelua",
    effect: "Seuraava tärkeä signaali nousi näkyviin aiemmin sen sijaan, että se hautautui passiivisen raportoinnin alle.",
    impact: "Tulos: vähemmän aikaa hukkaan vähäarvoisen tiedon läpikäyntiin joka päivä.",
  },
] as const;

const TESTIMONIALS_FI = [
  {
    sector: "Palveluprosessi",
    quote: "Saimme vihdoin yhden paikan tilalle, tiedostoille ja seuraavalle askeleelle.",
  },
  {
    sector: "Varauspolku",
    quote: "Päätoiminto tuli heti näkyviin eikä sivu enää taistellut itseään vastaan.",
  },
] as const;

const FEATURED_CASE = {
  en: {
    eyebrow: "Featured pattern",
    title: "A clearer client portal or booking flow usually starts with one broken route.",
    text: "The useful pattern is rarely “more features”. It is usually one workflow cleaned up enough that the next action becomes obvious, the owner can follow it and the team stops compensating manually around it.",
    points: [
      "Specific workflow first, not a giant redesign story.",
      "Before / after shown in practical terms.",
      "Result tied to daily work, not vague brand language.",
    ],
  },
  fi: {
    eyebrow: "Esimerkin lukutapa",
    title: "Selkeämpi asiakasportaali tai varauspolku alkaa yleensä yhdestä rikkinäisestä reitistä.",
    text: "Hyödyllinen muutos ei useimmiten ole “lisää ominaisuuksia”. Se on yksi työnkulku, joka siistitään niin selkeäksi, että seuraava askel näkyy, omistaja pystyy seuraamaan sitä ja tiimi lopettaa käsin paikkaamisen sen ympärillä.",
    points: [
      "Yksi tarkka työnkulku ensin, ei valtava redesign-tarina.",
      "Ennen / jälkeen näytetään käytännön tasolla.",
      "Tulos sidotaan arkeen, ei epämääräiseen brändipuheeseen.",
    ],
  },
} as const;

export default function CasesPage() {
  const locale = useCurrentLocale();
  const filters = locale === "fi" ? FILTERS_FI : FILTERS;
  const cases = locale === "fi" ? CASES_FI : CASES;
  const testimonials = locale === "fi" ? TESTIMONIALS_FI : TESTIMONIALS;
  const featured = FEATURED_CASE[locale];
  const casesRef = useRef<HTMLElement | null>(null);
  const trustRef = useRef<HTMLElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>(locale === "fi" ? "Kaikki" : "All");

  useScrollFade(casesRef);
  useScrollFade(trustRef);

  const visibleCases = useMemo(() => {
    if (activeFilter === "All" || activeFilter === "Kaikki") return cases;
    const normalizedFilter =
      activeFilter === "Varaus" ? "Booking" : activeFilter === "Portaali" ? "Portal" : activeFilter;
    return cases.filter((item) => item.type === normalizedFilter || item.type === activeFilter);
  }, [activeFilter, cases]);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className={`pageIntro ${styles.heroIntro}`}>
              <span className="cardEyebrow">{locale === "fi" ? "Konkreettiset tulokset" : "Concrete results"}</span>
              <h1>{locale === "fi" ? <>Mitä muuttui,<br />ja miksi sillä oli väliä.</> : <>What changed,<br />and why it mattered.</>}</h1>

              <p className="pageHeroText">{locale === "fi" ? <>Tiiviitä case-esimerkkejä siitä, mitä parani,<br />kun yksi työnkulku tehtiin selkeämmäksi.</> : <>Focused case examples showing what improved<br />when one workflow became clearer.</>}</p>

              <div className="pageActionRow">
                <Button href="/contact">{locale === "fi" ? "Kerro mitä tarvitset" : "Tell us what you need"}</Button>
                <Button href="/service" className={buttonStyles.buttonGhost}>
                  {locale === "fi" ? "Katso asiakasportaalit ja työkalut" : "See client portals and tools"}
                </Button>
              </div>
            </div>
          </div>

          <div className={`pageHeroMedia pageHeroMediaColumn pageHeroMediaAlignStart ${styles.heroAside}`}>
            <article className={`cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd ${styles.heroPanel}`}>
              <span className="cardEyebrow">{locale === "fi" ? "Yhdellä silmäyksellä" : "At a glance"}</span>
              <p className={styles.heroLead}>{locale === "fi" ? "Yksi selkeämpi reitti voi muuttaa koko lopputuloksen." : "One clearer route can change the whole result."}</p>
              <div className={styles.heroStats}>
                {CASE_SUMMARY.map((item) => (
                  <span key={item} className={styles.heroStat}>{item}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section ref={casesRef} className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>{locale === "fi" ? "Case-esimerkit käyttötapauksen mukaan." : "Case studies by use case."}</h2>

            <p className="pageText">{locale === "fi" ? <>Jokainen case on tarkoituksella tiivistetty.<br />Tarkoitus on näyttää asiakasportaalin, varauspolun tai sisäisen työkalun muutos selkeästi.</> : <>Each case is simplified on purpose.<br />The point is to show the client portal, booking flow or internal tool change clearly.</>}</p>
          </div>

          <div className={`cardPanel cardPanelSoft cardPanelGapMd ${styles.featuredCase}`}>
            <div className={styles.featuredCopy}>
              <span className="cardEyebrow">{featured.eyebrow}</span>
              <p className={styles.featuredTitle}>{featured.title}</p>
              <p className="cardText">{featured.text}</p>
            </div>

            <ul className={`cardList ${styles.featuredList}`}>
              {featured.points.map((item) => (
                <li key={item} className="cardListItem">
                  <span className="cardMark" aria-hidden="true">
                    •
                  </span>
                  <span className="cardText">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.filterRow}>
            {filters.map((filter) => (
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
                  <span className="cardEyebrow">{item.type} · {item.context}</span>
                  <h3 className="cardTitle">{item.metric}</h3>
                  <p className="cardText">{item.effect}</p>
                  <p className={styles.caseContext}>{item.scope}</p>
                </div>

                <div className={styles.caseDetails}>
                  <p className={styles.caseClient}>{locale === "fi" ? `Asiakas: ${item.client}` : `Client: ${item.client}`}</p>
                  <p className="cardText"><strong>{locale === "fi" ? "Ongelma:" : "Problem:"}</strong> {item.problem}</p>
                  <p className="cardText"><strong>{locale === "fi" ? "Muutos:" : "Change:"}</strong> {item.change}</p>
                  <p className="cardText"><strong>{item.impact}</strong></p>

                  <div className={styles.resultStrip}>
                    <span className={styles.resultMetric}>{item.metric}</span>
                    <span className={styles.resultLabel}>{locale === "fi" ? "Havaittu muutos" : "Observed shift"}</span>
                  </div>

                  <div className={`cardPanel cardPanelSoft ${styles.flowSketch}`}>
                    <span className="cardEyebrow">{locale === "fi" ? "Ennen / jälkeen" : "Before / after"}</span>
                    <div className={styles.beforeAfterGrid}>
                      <div className={styles.beforeAfterBlock}>
                        <span className={styles.beforeAfterLabel}>{locale === "fi" ? "Ennen" : "Before"}</span>
                        <p className="cardText">{item.before}</p>
                      </div>
                      <div className={styles.beforeAfterBlock}>
                        <span className={styles.beforeAfterLabel}>{locale === "fi" ? "Jälkeen" : "After"}</span>
                        <p className="cardText">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={trustRef} className="sectionFadeDownTop">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>{locale === "fi" ? "Mitä ihmiset yleensä huomaavat ensimmäisenä." : "What people usually notice first."}</h2>

            <p className="pageText">{locale === "fi" ? <>Ensimmäinen muutos ei juuri koskaan ole &quot;enemmän ominaisuuksia&quot;.<br />Yleensä se on enemmän selkeyttä, vähemmän tarkistelua ja selvempi seuraava askel.</> : <>The first change is rarely “more features”.<br />It is usually more clarity, fewer checks and a clearer next step.</>}</p>
          </div>

          <div className="pageGrid3">
            {testimonials.map((item) => (
              <article key={item.quote} className="cardPanel cardPanelSoft cardPanelGapMd">
                <span className="cardEyebrow">{item.sector}</span>
                <p className="cardValue">&quot;{item.quote}&quot;</p>
              </article>
            ))}
          </div>

          <div className="pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd">
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">{locale === "fi" ? "Seuraava askel" : "Next step"}</span>
              <p className="cardValue">{locale === "fi" ? "Jos casejen logiikka tuntuu oikealta, seuraava sivu on palveluiden rajaus." : "If the case logic feels right, the next page is the service scope."}</p>
              <p className="cardText">{locale === "fi" ? "Sieltä näet mitä asiakasportaaliin, sisäiseen työkaluun tai varauspolkuun yleensä kuuluu." : "There you can see what is usually included in a client portal, internal tool or booking flow project."}</p>
            </div>

            <div className="pageActionRow">
              <Button href="/service">{locale === "fi" ? "Katso asiakasportaalit ja työkalut" : "See client portals and tools"}</Button>
              <Button href="/contact" className={buttonStyles.buttonGhost}>
                {locale === "fi" ? "Kerro oma työnkulku" : "Tell us your workflow"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
