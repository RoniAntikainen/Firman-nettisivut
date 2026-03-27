"use client";

import { useRef } from "react";
import Script from "next/script";
import styles from "./page.module.css";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";
import { useCurrentLocale } from "@/hooks/i18n/useCurrentLocale";

const DELIVERABLES = [
  "Fully built pages or flows, not templates",
  "Editable components you can reuse later",
  "Clean Next.js + React structure",
  "Fast load times and responsive behavior",
  "A handoff the next person can actually continue from",
] as const;
const DELIVERABLES_FI = [
  "Valmiiksi rakennetut sivut tai työnkulut, ei pelkkiä pohjia",
  "Muokattavat komponentit jatkoa varten",
  "Siisti Next.js + React -rakenne",
  "Nopea latautuminen ja toimiva responsiivisuus",
  "Selkeä luovutus, jota seuraava tekijä pystyy oikeasti jatkamaan",
] as const;

const FIT_CASES = [
  "One page, portal view or internal flow already stands out as the main problem.",
  "The current workflow works, but too slowly, too manually or with too much friction.",
  "The team needs a focused first release, not a huge system from day one.",
] as const;
const FIT_CASES_FI = [
  "Yksi sivu, portaali tai sisäinen virtaus erottuu jo nyt pääongelmaksi.",
  "Nykyinen työnkulku toimii, mutta liian hitaasti, liian manuaalisesti tai liian suurella kitkalla.",
  "Tiimi tarvitsee fokusoidun ensijulkaisun, ei valtavaa järjestelmää heti alussa.",
] as const;

const SCOPE_RULES = [
  "We start with one core workflow and one owner.",
  "We cut secondary ideas before build starts.",
  "If scope grows, we move it into the next phase instead of hiding it in the current one.",
] as const;
const SCOPE_RULES_FI = [
  "Aloitamme yhdestä ydintyönkulusta ja yhdestä omistajasta.",
  "Karsimme toissijaiset ideat ennen kuin toteutus alkaa.",
  "Jos laajuus kasvaa, siirrämme sen seuraavaan vaiheeseen emmekä piilota sitä nykyiseen.",
] as const;

const PRICING_LOGIC = [
  {
    title: "Focused page or flow",
    text: "Usually the right level when one page, one booking flow or one conversion path needs a clearer structure and working implementation.",
    range: "Typical range: 2k-6k EUR",
  },
  {
    title: "Portal or internal tool",
    text: "Usually the right level when files, status, repeated tasks or owner actions need one clearer interface and a more structured first release.",
    range: "Typical range: 6k-20k+ EUR",
  },
] as const;
const PRICING_LOGIC_FI = [
  {
    title: "Fokusoitu sivu tai virtaus",
    text: "Sopiva taso silloin kun yksi sivu, varauspolku tai konversioreitti tarvitsee selkeämmän rakenteen ja toimivan toteutuksen.",
    range: "Tyypillinen haarukka: 2k-6k EUR",
  },
  {
    title: "Portaali tai sisäinen työkalu",
    text: "Sopiva taso silloin, kun tiedostot, tilannekuva, toistuvat tehtävät tai omistajan toiminnot tarvitsevat yhden selkeämmän käyttöliittymän ja rajatun ensiversion.",
    range: "Tyypillinen haarukka: 6k-20k+ EUR",
  },
] as const;

const PRICING_DETAILS = [
  "Minimum project size: one focused workflow or one clearly defined page or feature.",
  "Included in the first phase: scope, design direction, build, responsive implementation and handoff.",
  "Optional after that: additional pages, integrations, analytics setup and later phases.",
] as const;
const PRICING_DETAILS_FI = [
  "Minimikoko: yksi fokusoitu työnkulku tai yksi selkeästi rajattu sivu, ominaisuus tai virtaus.",
  "Ensivaiheeseen kuuluu rajaus, suunta, toteutus, responsiivinen build ja luovutus.",
  "Myöhemmin voidaan lisätä lisää sivuja, integraatioita, analytiikkaa ja jatkovaiheita.",
] as const;

const DURATION_DETAILS = [
  "Focused page or flow: usually 2-4 weeks.",
  "Portal or internal tool slice: usually 6-12 weeks.",
  "Timing changes based on scope clarity, content, integrations and feedback speed.",
] as const;

const EXAMPLES = [
  "Built pages: one landing page, service page or booking flow with real implementation instead of static mockups.",
  "Reusable components: sections, cards, UI blocks and CTA patterns that can be edited later without rebuilding everything.",
  "Clean structure: clear Next.js + React files, handoff notes and agreed next steps so the work stays usable after delivery.",
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

const DURATION_SUPPORT = [
  "We do not estimate the whole future at once.",
  "We scope one useful release first.",
  "That keeps timing more realistic and easier to control.",
] as const;

const CASES = [
  {
    label: "Case study",
    title: "Booking path cleanup",
    result: "6 steps to 3",
    note: "The primary action moved into the first screen, the dead-end branch was removed and the path became easier to finish.",
  },
  {
    label: "Case study",
    title: "Client update flow",
    result: "3 tools to 1 view",
    note: "Status, files and the next owner action were brought into one portal view instead of scattered messages and repeated checking.",
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

const HERO_SIGNALS = [
  "One workflow first",
  "Built in code",
  "Clean handoff",
] as const;
const HERO_SIGNALS_FI = [
  "Yksi työnkulku ensin",
  "Rakennetaan oikeasti",
  "Selkeä luovutus",
] as const;

const FAQS = [
  {
    question: "What does client portal development usually mean?",
    answer:
      "It usually means designing and building one clear portal where clients can see status, files, updates and the next action without jumping between email threads and separate tools.",
  },
  {
    question: "When does a company need an internal tool?",
    answer:
      "A company usually needs an internal tool when repeated work, status checks or owner actions are still handled manually across spreadsheets, messages and disconnected admin views.",
  },
  {
    question: "When is a custom solution better than an off-the-shelf platform?",
    answer:
      "A custom solution is usually the better choice when one important workflow is specific to your business and forcing it into a generic platform creates extra steps, confusion or duplicated work.",
  },
  {
    question: "What does a client portal or internal tool usually cost?",
    answer:
      "A focused first release often starts around a few thousand euros for a single page or flow, while a clearer first portal or internal tool slice usually starts higher depending on scope, logic and integrations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused page or booking flow often takes around two to four weeks, while a first useful portal or internal tool release often takes around six to twelve weeks when the scope is kept tight.",
  },
  {
    question: "What is included in the first phase?",
    answer:
      "The first phase usually includes scope, design direction, implementation, responsive build, review, handoff and a clearly defined first release instead of a vague long roadmap.",
  },
  {
    question: "When is this not the right solution?",
    answer:
      "This is usually not the right fit when the team expects a huge all-in-one platform immediately, cannot point to one important workflow yet or needs long-term operations support instead of a focused build.",
  },
] as const;

const FAQS_FI = [
  {
    question: "Mitä asiakasportaalin kehitys yleensä tarkoittaa?",
    answer:
      "Se tarkoittaa yleensä yhden selkeän portaalin suunnittelua ja toteutusta niin, että asiakas näkee tilan, tiedostot, päivitykset ja seuraavan askeleen ilman hyppimistä sähköpostin ja eri työkalujen välillä.",
  },
  {
    question: "Milloin yritys tarvitsee sisäisen työkalun?",
    answer:
      "Yritys tarvitsee sisäisen työkalun usein silloin, kun toistuva työ, tilannekuvan tarkistaminen tai omistajan toiminnot pyörivät yhä käsin taulukoissa, viesteissä ja irrallisissa hallintanäkymissä.",
  },
  {
    question: "Milloin räätälöity ratkaisu on parempi kuin valmis alusta?",
    answer:
      "Räätälöity ratkaisu on usein parempi silloin, kun yksi tärkeä työnkulku on liiketoiminnalle niin oma, että valmis alusta pakottaa siihen ylimääräisiä vaiheita, epäselvyyttä tai päällekkäistä työtä.",
  },
  {
    question: "Mitä asiakasportaali tai sisäinen työkalu yleensä maksaa?",
    answer:
      "Rajattu ensimmäinen julkaisu alkaa usein muutamasta tuhannesta eurosta, kun kyse on yhdestä sivusta tai virtauksesta. Ensimmäinen hyödyllinen portaali- tai työkalukokonaisuus alkaa yleensä korkeammalta riippuen rajauksesta, logiikasta ja integraatioista.",
  },
  {
    question: "Kuinka kauan tällainen projekti yleensä kestää?",
    answer:
      "Fokusoitu sivu tai varauspolku valmistuu usein noin kahdessa neljässä viikossa. Ensimmäinen hyödyllinen portaali- tai sisäisen työkalun julkaisu vie usein noin kuudesta kahteentoista viikkoa, kun rajaus pysyy tiukkana.",
  },
  {
    question: "Mitä ensimmäiseen vaiheeseen kuuluu?",
    answer:
      "Ensimmäiseen vaiheeseen kuuluu yleensä rajaus, suunta, toteutus, responsiivinen build, arviointi, luovutus ja selkeä ensimmäinen julkaisu mieluummin kuin epämääräinen pitkä tiekartta.",
  },
  {
    question: "Milloin tämä ei ole oikea ratkaisu?",
    answer:
      "Tämä ei yleensä ole oikea ratkaisu silloin, kun odotuksena on valtava kaikki kerralla -järjestelmä heti alussa, tärkeää työnkulkua ei vielä pystytä nimeämään tai tarve on enemmän jatkuvalle ylläpidolle kuin rajatulle toteutukselle.",
  },
] as const;

const AI_SUMMARY = {
  en: [
    {
      title: "What Weboryn does",
      text: "Weboryn designs and builds client portals, internal tools and booking flows for teams that need one important workflow to become clearer and easier to run.",
    },
    {
      title: "Who this is for",
      text: "This fits companies that can already point to one broken workflow, one repeated bottleneck or one portal view that should work much more clearly.",
    },
    {
      title: "What happens first",
      text: "The first step is not a huge platform plan. It is one scoped release with one owner, one workflow and one useful result.",
    },
  ],
  fi: [
    {
      title: "Mitä Weboryn tekee",
      text: "Weboryn suunnittelee ja rakentaa asiakasportaaleja, sisäisiä työkaluja ja varauspolkuja tiimeille, jotka tarvitsevat yhden tärkeän työnkulun toimimaan selkeämmin.",
    },
    {
      title: "Kenelle tämä sopii",
      text: "Tämä sopii yrityksille, jotka pystyvät jo nimeämään yhden rikkinäisen työnkulun, toistuvan pullonkaulan tai portaalinäkymän, jonka pitäisi toimia paljon selkeämmin.",
    },
    {
      title: "Miten työ alkaa",
      text: "Ensimmäinen askel ei ole valtava alustasuunnitelma vaan rajattu ensimmäinen julkaisu: yksi omistaja, yksi työnkulku ja yksi hyödyllinen lopputulos.",
    },
  ],
} as const;

export default function ServicePage() {
  const deliverablesHeadingId = "service-deliverables-heading";
  const summaryHeadingId = "service-summary-heading";
  const outputsHeadingId = "service-outputs-heading";
  const fitHeadingId = "service-fit-heading";
  const pricingHeadingId = "service-pricing-heading";
  const faqHeadingId = "service-faq-heading";
  const proofHeadingId = "service-proof-heading";
  const includedHeadingId = "service-included-heading";
  const timingHeadingId = "service-timing-heading";
  const ctaHeadingId = "service-cta-heading";
  const locale = useCurrentLocale();
  const deliverables = locale === "fi" ? DELIVERABLES_FI : DELIVERABLES;
  const fitCases = locale === "fi" ? FIT_CASES_FI : FIT_CASES;
  const scopeRules = locale === "fi" ? SCOPE_RULES_FI : SCOPE_RULES;
  const pricingLogic = locale === "fi" ? PRICING_LOGIC_FI : PRICING_LOGIC;
  const pricingDetails = locale === "fi" ? PRICING_DETAILS_FI : PRICING_DETAILS;
  const heroSignals = locale === "fi" ? HERO_SIGNALS_FI : HERO_SIGNALS;
  const faqs = locale === "fi" ? FAQS_FI : FAQS;
  const aiSummary = AI_SUMMARY[locale];
  const deliverablesRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLElement | null>(null);

  useScrollFade(deliverablesRef);
  useScrollFade(cardsRef);

  return (
    <main>
      <Script
        id={`service-faq-schema-${locale}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroGridWide">
          <div className="pageHeroContent">
            <div className={`pageIntro ${styles.heroIntro}`}>
              <span className="cardEyebrow">{locale === "fi" ? "Palvelut" : "Services"}</span>
              <h1>{locale === "fi" ? <>Asiakasportaalit ja sisäiset työkalut<br />yhden tärkeän työnkulun ympärille.</> : <>Client portals and internal tools<br />for one clear workflow.</>}</h1>

              <p className="pageHeroText">{locale === "fi" ? <>Suunnittelemme ja rakennamme asiakasportaaleja, sisäisiä työkaluja ja varauspolkuja<br />tiimeille, jotka tarvitsevat yhden tärkeän prosessin toimimaan selkeämmin.</> : <>We design and build client portals, internal tools and booking flows<br />for teams that need one important workflow to work more clearly.</>}</p>

              <div className="pageActionRow">
                <Button href="/contact">{locale === "fi" ? "Pyydä rajattu suositus" : "Get a scoped recommendation"}</Button>
                <Button href="/cases" className={buttonStyles.buttonGhost}>
                  {locale === "fi" ? "Katso asiakasportaali- ja varauspolkunäytöt" : "See portal and booking proof"}
                </Button>
              </div>
            </div>
          </div>

          <div className="pageHeroMedia pageHeroMediaColumn pageHeroMediaAlignStart">
            <article className={`cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd ${styles.heroPanel}`}>
              <span className="cardEyebrow">{locale === "fi" ? "Mitä tämä yleensä tarkoittaa" : "What this usually means"}</span>
              <p className={styles.heroPanelLead}>{locale === "fi" ? "Prosessi on olemassa, mutta se on liian hidas, sekava tai raskas käyttää." : "The workflow exists, but it is too slow, messy or hard to use."}</p>
              <div className={styles.heroSignalList}>
                {heroSignals.map((item) => (
                  <span key={item} className={styles.heroSignal}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={deliverablesRef}
        className="sectionSurfaceFade"
        aria-labelledby={deliverablesHeadingId}
      >
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2 id={deliverablesHeadingId}>{locale === "fi" ? <>Rajaus, lopputulos<br />ja siisti luovutus.</> : <>Scope, output<br />and a clean handoff.</>}</h2>

            <p className="pageText">{locale === "fi" ? <>Tässä päätetään<br />mitä rakennetaan, mitä jätetään pois ja mitä lopulta saat.</> : <>This is where we decide<br />what gets built, what stays out and what you will receive.</>}</p>
          </div>

          <div className="cardPanel cardPanelSoft cardPanelGapMd">
            <p className="cardValue">{locale === "fi" ? "Mitä oikeasti saat" : "What you actually get"}</p>
            <ul className="cardList">
              {deliverables.map((item) => (
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

      <section className="sectionNoBg" aria-labelledby={summaryHeadingId}>
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2 id={summaryHeadingId}>
              {locale === "fi" ? (
                <>
                  Palvelu tiivistettynä
                  <br />
                  yhdelle näkymälle.
                </>
              ) : (
                <>
                  The service
                  <br />
                  in one view.
                </>
              )}
            </h2>

            <p className="pageText">
              {locale === "fi"
                ? "Tämä osio sanoo suoraan mitä teemme, kenelle tämä sopii ja miten työ yleensä alkaa."
                : "This section states clearly what we do, who this fits and how the work usually starts."}
            </p>
          </div>

          <div className="pageGrid3">
            {aiSummary.map((item) => (
              <article key={item.title} className="cardPanel cardPanelSoft">
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={cardsRef}
        className="sectionFadeDownTop"
        aria-labelledby={outputsHeadingId}
      >
        <div className="pageContainer pageFlow">
          <div className={`pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd ${styles.checkpointCard}`}>
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
                {locale === "fi" ? "Katso miten toimitus etenee" : "See how delivery runs"}
              </Button>
            </div>
          </div>

          <div className="pageFlowIntro">
            <h2 id={outputsHeadingId}>
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

      <section className="sectionNoBg" aria-labelledby={fitHeadingId}>
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2 id={fitHeadingId}>
              When this works best.
            </h2>

            <p className="pageText">
              This work fits best when the team can point to one workflow
              <br />
              that already needs to be clearer, faster or easier to finish.
            </p>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <span className="cardEyebrow">Usually a good fit</span>
              <ul className="cardList">
                {fitCases.map((item) => (
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
              <span className="cardEyebrow">How we keep it focused</span>
              <p className="cardValue">The first version stays smaller than the temptation.</p>
              <ul className="cardList">
                {scopeRules.map((item) => (
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

      <section className="sectionSurfaceFade" aria-labelledby={pricingHeadingId}>
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2 id={pricingHeadingId}>
              Scope and pricing.
            </h2>

            <p className="pageText">
              No giant retainer first.
              <br />
              The price follows the size of the first useful release.
            </p>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <span className="cardEyebrow">How pricing works</span>
              <ul className="cardList">
                {pricingDetails.map((item) => (
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
              {pricingLogic.map((item) => (
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

      <section className="sectionNoBg" aria-labelledby={faqHeadingId}>
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2 id={faqHeadingId}>
              {locale === "fi" ? (
                <>
                  Kysymyksiä, joita
                  <br />
                  ennen päätöstä yleensä kysytään.
                </>
              ) : (
                <>
                  Questions people usually ask
                  <br />
                  before they decide.
                </>
              )}
            </h2>

            <p className="pageText">
              {locale === "fi" ? (
                <>
                  Tämä osio vastaa suoraan niihin asioihin,
                  <br />
                  jotka ratkaisevat eteneekö keskustelu vai ei.
                </>
              ) : (
                <>
                  This section answers the things
                  <br />
                  that usually decide whether the conversation moves forward.
                </>
              )}
            </p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((item) => (
              <article key={item.question} className={`cardPanel cardPanelSoft cardPanelGapMd ${styles.faqCard}`}>
                <span className="cardEyebrow">{locale === "fi" ? "Kysymys" : "Question"}</span>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className="cardText">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionFadeDownTop" aria-labelledby={proofHeadingId}>
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2 id={proofHeadingId}>
              A few proof points.
            </h2>

            <p className="pageText">
              These are simple examples of what changes
              <br />
              when one workflow gets scoped and cleaned up properly.
            </p>
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

      <section className="sectionNoBg" aria-labelledby={includedHeadingId}>
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2 id={includedHeadingId}>
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

      <section className="sectionSurfaceFade" aria-labelledby={timingHeadingId}>
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2 id={timingHeadingId}>
              Typical timing.
            </h2>

            <p className="pageText">
              Most work moves faster when the scope is clear early.
              <br />
              The timeline depends on how focused the first release stays.
            </p>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <span className="cardEyebrow">Typical duration</span>
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
              <span className="cardEyebrow">Why timing stays clearer</span>
              <p className="cardValue">One useful release first.</p>
              {DURATION_SUPPORT.map((item) => (
                <p key={item} className="cardText">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="sectionFadeDownTop sectionCta"
        aria-labelledby={ctaHeadingId}
      >
        <div className="pageContainer pageCta">
          <div className="pageCtaContent">
            <h2 id={ctaHeadingId}>
              If one workflow is
              <br />
              clearly the problem, start there.
            </h2>

            <p className="pageText">
              You do not need the whole project figured out first.
              <br />
              One real bottleneck is enough to scope the next useful step.
            </p>
          </div>

          <div className="pageCtaActions">
            <div className="pageActionRow">
              <Button href="/contact">Show us the workflow</Button>
              <Button href="/about-us" className={buttonStyles.buttonGhost}>
                See how we work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
