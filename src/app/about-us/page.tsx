"use client";

import { useRef } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";
import { useCurrentLocale } from "@/hooks/i18n/useCurrentLocale";
import styles from "./page.module.css";

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
    text: "Weboryn is a founder-led studio built for teams that do not need more layers. They need one workflow to become clearer and easier to run.",
  },
  {
    title: "Direct collaboration",
    text: "You work directly with the person shaping the scope, product direction and build instead of being passed between layers.",
  },
  {
    title: "Why that matters",
    text: "Less translation between decision and execution, fewer handoff gaps and a clearer line between the real problem and the thing being built.",
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
  "Small scope, direct communication and no unnecessary layers.",
  "Built for teams that need one workflow to work properly before anything larger gets added.",
] as const;

const DIFFERENTIATORS = [
  {
    title: "Smaller on purpose",
    text: "The studio stays intentionally small so decisions, scope and execution remain close to each other.",
  },
  {
    title: "Built around one workflow first",
    text: "We do not start by pretending the whole system needs redesigning. We start where the real bottleneck already is.",
  },
  {
    title: "Clearer than agency theatre",
    text: "No oversized process, no handoff maze and no selling complexity as if it were strategy.",
  },
] as const;

const ABOUT_CONTENT = {
  fi: {
    principles: [
      {
        title: "Miksi tämä on olemassa",
        lines: [
          "Emme pidä turhan monimutkaisista järjestelmistä.",
          "Usein työkalut rakennetaan liian raskaiksi.",
          "Siksi rakennamme tarkoituksella selkeämpää vastapainoa.",
        ],
      },
      {
        title: "Miten työ etenee",
        lines: [
          "Rajaus pidetään alussa pienenä.",
          "Toimiva versio saadaan näkyviin aikaisin.",
          "Luovutus tehdään niin, että sitä voi oikeasti jatkaa.",
        ],
      },
      {
        title: "Miksi tähän luotetaan",
        lines: [
          "Leikkaamme turhaa monimutkaisuutta.",
          "Näytämme edistymisen ajoissa.",
          "Emme piiloudu prosessiteatterin taakse.",
        ],
      },
    ],
    whatWeDoNotDo: [
      "käytä valmiita pohjia väärään paikkaan",
      "ylirakenna ominaisuuksia ennen tarvetta",
      "lisää turhia kerroksia ongelman ympärille",
    ],
    signals: [
      {
        label: "Mitä asiakkailla yleensä on nyt",
        value: "Liikaa työkaluja yhteen tehtävään",
        note: "Työ hajoaa välilehtiin, viesteihin ja käsin tehtäviin päivityksiin.",
      },
      {
        label: "Mitä he yleensä haluavat",
        value: "Yksi selkeämpi tapa hoitaa se",
        note: "Yksi työnkulku, yksi näkymä ja yksi järkevä seuraava askel.",
      },
    ],
    whoWeAre: [
      {
        title: "Founder-led studio",
        text: "Weboryn on founder-led studio tiimeille, jotka eivät tarvitse lisää välikäsiä. Ne tarvitsevat yhden työnkulun toimimaan selkeämmin ja helpommin.",
      },
      {
        title: "Suora yhteistyö",
        text: "Teet töitä suoraan sen henkilön kanssa, joka rajaa työn, ohjaa suuntaa ja rakentaa toteutuksen.",
      },
      {
        title: "Miksi sillä on väliä",
        text: "Vähemmän käännöstä päätösten ja toteutuksen välillä, vähemmän katkoksia luovutuksissa ja suorempi yhteys oikean ongelman ja rakennetun ratkaisun välillä.",
      },
    ],
    bestFit: [
      "Yksi omistaja pystyy kuvaamaan työnkulun selkeästi.",
      "Tiimi pystyy nimeämään yhden mitattavan ongelman ensin.",
      "Tavoitteena on selkeämpi järjestelmä, ei massiivinen uudelleenrakennus kerralla.",
    ],
    notForUs: [
      "tarvitset heti alussa valtavan monitiimisen alustan",
      "työnkulku on vielä liian epäselvä kunnolliseen rajaukseen",
      "haluat mahdollisimman paljon ominaisuuksia ennen ensimmäistä toimitusta",
    ],
    workingExpectations: [
      "Vastausrytmi: yleensä 24 tunnin sisällä arkipäivisin.",
      "Check-init: kevyt viikkorytmi tai välitarkistukset työn laajuuden mukaan.",
      "Päätökset: yksi omistaja pitää työnkulun ja rajauksen liikkeessä.",
      "Luovutus: lopullinen rakenne, muokattavat komponentit ja selkeä jatko-ohje.",
    ],
    teamCards: [
      {
        title: "Tuotesuunta",
        text: "Rajaus, rakenne ja ydintyönkulku kirkastetaan ennen kuin toteutus alkaa levitä sivuille.",
      },
      {
        title: "Frontend-toteutus",
        text: "Näkymät rakennetaan käytettäviksi, muokattaviksi ja siististi luovutettaviksi.",
      },
      {
        title: "Toimitustapa",
        text: "Pieni tiimi, suora viestintä ja vähemmän kerroksia päätösten ja toteutuksen välissä.",
      },
    ],
    studioNotes: [
      "Founder-led ensimmäisestä viestistä luovutukseen asti.",
      "Pieni rajaus, suora viestintä ja ei turhia välikerroksia.",
      "Rakennettu tiimeille, jotka tarvitsevat yhden työnkulun kuntoon ennen kuin mitään isompaa lisätään.",
    ],
    differentiators: [
      {
        title: "Tarkoituksella pieni",
        text: "Studio pidetään tietoisesti pienenä, jotta päätökset, rajaus ja toteutus pysyvät lähellä toisiaan.",
      },
      {
        title: "Yksi työnkulku ensin",
        text: "Emme aloita sillä oletuksella, että koko järjestelmä pitää suunnitella uusiksi. Aloitamme kohdasta, jossa todellinen pullonkaula jo näkyy.",
      },
      {
        title: "Selkeämpi kuin agency-teatteri",
        text: "Ei ylisuurta prosessia, ei luovutusten sokkeloa eikä monimutkaisuuden myymistä strategiana.",
      },
    ],
    founder: {
      eyebrow: "Founder-led",
      avatar: "W",
      visualTitle: "Pieni studio, suora yhteys",
      visualMeta: "Rajaus, suunta ja toteutus pysyvat samassa linjassa.",
      name: "Tyoskentelet suoraan rakentajan kanssa",
      role: "Scope, tuotesuunta ja build etenevat ilman valikerroksia.",
      note: "Yhteistyo pysyy founder-led ensimmaisesta viestista luovutukseen asti.",
    },
  },
} as const;

export default function AboutUsPage() {
  const locale = useCurrentLocale();
  const fiCopy = ABOUT_CONTENT.fi;
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
              <span className="cardEyebrow">{locale === "fi" ? "Studio ja luottamus" : "Studio and trust"}</span>
              <h1>{locale === "fi" ? <>Pieni studio,<br />selkeä tapa tehdä.</> : <>A small studio<br />with a clear way of working.</>}</h1>

              <p className="pageHeroText">{locale === "fi" ? <>Tämä kertoo keitä olemme,<br />miten teemme työtä ja milloin yhteistyö sopii hyvin yhteen.</> : <>This is about who we are,<br />how we work and when the fit is real.</>}</p>

              <p className="pageText">{locale === "fi" ? <>Studio on olemassa tiimeille, jotka haluavat selkeämpää tekemistä,<br />eivät lisää kerroksia ongelman ympärille, jonka pitäisi olla yksinkertaisempi.</> : <>The studio exists for teams that want clearer delivery,<br />not more layers around a problem that should be simple.</>}</p>

              <div className="pageActionRow">
                <Button href="/service">{locale === "fi" ? "Katso asiakasportaalit ja työkalut" : "See client portals and tools"}</Button>
                <Button href="/contact" className={buttonStyles.buttonGhost}>
                  {locale === "fi" ? "Kerro mikä ei toimi" : "Tell us what is not working"}
                </Button>
              </div>
            </div>
          </div>

          <div className={`pageHeroMedia pageHeroMediaColumn pageHeroMediaAlignStart ${styles.heroFounder}`}>
            <article className={`cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd ${styles.founderCard}`}>
              <span className="cardEyebrow">{locale === "fi" ? fiCopy.founder.eyebrow : "Founder-led"}</span>
              <div className={styles.founderMedia}>
                <div className={styles.founderPlaceholder} aria-hidden="true">
                  <div className={styles.founderPlaceholderInner}>
                    <div className={styles.founderPlaceholderAvatar}>{locale === "fi" ? fiCopy.founder.avatar : "W"}</div>
                    <div className={styles.founderPlaceholderText}>
                      <p className={styles.founderPlaceholderName}>{locale === "fi" ? fiCopy.founder.visualTitle : "Small studio, direct line"}</p>
                      <p className={styles.founderPlaceholderMeta}>{locale === "fi" ? fiCopy.founder.visualMeta : "Scope, direction and build stay close to each other."}</p>
                    </div>
                  </div>
                </div>

                <p className="cardValue">{locale === "fi" ? fiCopy.founder.name : "You work directly with the builder"}</p>
                <p className="cardText">{locale === "fi" ? fiCopy.founder.role : "Scope, product direction and build move without extra layers."}</p>
                <p className={styles.founderNote}>
                  {locale === "fi" ? fiCopy.founder.note : "The collaboration stays founder-led from the first message to handoff."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section ref={principlesRef} className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>{locale === "fi" ? "Miksi studio toimii juuri näin." : "Why the studio works this way."}</h2>

            <p className="pageText">{locale === "fi" ? <>Tarkoitus ei ole näyttää suuremmalta kuin olemme.<br />Tarkoitus on pitää rajaus, kommunikointi ja toimitus selkeinä alusta asti.</> : <>The point is not to look bigger than we are.<br />It is to keep scope, communication and delivery clear from the start.</>}</p>
          </div>

          <div className="pageGrid3">
            {(locale === "fi" ? fiCopy.principles : PRINCIPLES).map((item) => (
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

          <div className="pageGrid3">
            {(locale === "fi" ? fiCopy.differentiators : DIFFERENTIATORS).map((item) => (
              <article key={item.title} className="cardPanel cardPanelSoft">
                <span className="cardEyebrow">{locale === "fi" ? "Miksi tämä on erilainen" : "Why this is different"}</span>
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
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
              {(locale === "fi" ? fiCopy.whatWeDoNotDo : WHAT_WE_DO_NOT_DO).map((item) => (
                <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      •
                    </span>
                    <span className="cardText">{locale === "fi" ? item : `We don't ${item}.`}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              {(locale === "fi" ? fiCopy.signals : SIGNALS).map((item) => (
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
            <h2>{locale === "fi" ? "Kuka tämän rakentaa." : "Who builds this."}</h2>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
              <span className="cardEyebrow">{locale === "fi" ? "Studion huomio" : "Studio note"}</span>
              {(locale === "fi" ? fiCopy.studioNotes : STUDIO_NOTES).map((item) => (
                <p key={item} className="cardText">{item}</p>
              ))}
            </div>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              {(locale === "fi" ? fiCopy.whoWeAre : WHO_WE_ARE).map((item) => (
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
            <h2>{locale === "fi" ? "Tiimin muoto." : "Team shape."}</h2>

            <p className="pageText">{locale === "fi" ? <>Tässä on kyse siitä miten studio toimii,<br />ei siitä montako ihmistä voidaan laittaa yhdelle slidelle.</> : <>This is about how the studio works,<br />not how many people can be put on a slide.</>}</p>
          </div>

          <div className="pageVisual">
            <div className="cardStack cardStackMeasure">
              {(locale === "fi" ? fiCopy.teamCards : TEAM_CARDS).map((item) => (
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
            <h2>{locale === "fi" ? "Paras yhteensopivuus." : "Best fit."}</h2>

            <p className="pageText">{locale === "fi" ? <>Yhteensopivuus on vahvimmillaan silloin, kun yhdellä omistajalla on valta viedä työtä eteenpäin<br />ja yksi todellinen ongelma on riittävän selkeä rajattavaksi kunnolla.</> : <>The fit is usually strongest when one owner can move the work<br />and one real problem is clear enough to scope properly.</>}</p>

            <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureSm">
              <ul className="cardList">
                {(locale === "fi" ? fiCopy.bestFit : BEST_FIT).map((item) => (
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
              <span className="cardEyebrow">{locale === "fi" ? "Milloin meitä ei kannata palkata" : "When not to hire us"}</span>
              <ul className="cardList">
                {(locale === "fi" ? fiCopy.notForUs : NOT_FOR_US).map((item) => (
                  <li key={item} className="cardListItem">
                    <span className="cardMark" aria-hidden="true">
                      •
                    </span>
                    <span className="cardText">{locale === "fi" ? item : `Not a fit if ${item}.`}</span>
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
            <h2>{locale === "fi" ? "Mitä yhteistyöltä voi odottaa." : "What to expect working with us."}</h2>

            <p className="pageText">{locale === "fi" ? <>Tapa tehdä on tarkoituksella kevyt.<br />Selkeitä päätöksiä, näkyvää etenemistä eikä ylimääräistä teatteria työn ympärille.</> : <>The working style is intentionally light.<br />Clear decisions, visible progress and no extra theatre around the work.</>}</p>
          </div>

          <div className="pageGrid3">
            {(locale === "fi" ? fiCopy.workingExpectations : WORKING_EXPECTATIONS).map((item) => (
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
            <h2>{locale === "fi" ? <>Luottamus alkaa yleensä<br />yhdestä oikeasta ongelmasta.</> : <>Trust usually starts<br />with one real problem.</>}</h2>

            <p className="pageText">{locale === "fi" ? <>Jos työnkulku on oikea, näemme yleensä nopeasti<br />onko seuraavassa askeleessa järkeä.</> : <>If the workflow is real, we can usually tell quickly<br />whether there is a sensible next step.</>}</p>
          </div>

          <div className="pageCtaActions">
            <div className="pageActionRow">
              <Button href="/contact">{locale === "fi" ? "Kerro mikä ei toimi" : "Tell us what is not working"}</Button>
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
