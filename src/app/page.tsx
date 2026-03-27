"use client";

import { useRef } from "react";
import HeroSystemVisual from "@/components/hero-system-visual/HeroSystemVisual";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";
import { useCurrentLocale } from "@/hooks/i18n/useCurrentLocale";
import styles from "./home.module.css";

const HOME_CONTENT = {
  en: {
    logos: ["Service operations", "Client portals", "Booking flows", "Internal tools"],
    offer: [
      "One focused workflow defined before the build starts.",
      "A working version early, not weeks of abstract planning.",
      "A clean handoff with reusable components and clear next steps.",
    ],
    numbers: [
      { label: "Proof", value: "6 to 3", note: "Booking path reduced from six clicks to three." },
      { label: "Proof", value: "3 to 1", note: "Client updates moved from three tools into one portal view." },
      { label: "Risk", value: "24h", note: "Reply on weekdays, with scope and next step clarified early." },
    ],
  },
  fi: {
    logos: ["Palveluprosessit", "Asiakasportaalit", "Varauspolut", "Sisäiset työkalut"],
    offer: [
      "Yksi olennainen työnkulku rajataan ennen kuin toteutus kasvaa sivuun.",
      "Toimiva versio saadaan näkyviin aikaisin, ei viikkojen epämääräisen suunnittelun jälkeen.",
      "Lopputulos luovutetaan siististi, jatkokehityksen kannalta käytettävässä muodossa.",
    ],
    numbers: [
      { label: "Näyttö", value: "6 -> 3", note: "Varauspolku lyheni kuudesta klikkauksesta kolmeen." },
      { label: "Näyttö", value: "3 -> 1", note: "Asiakastilanteen päivitykset koottiin kolmesta työkalusta yhteen näkymään." },
      { label: "Rytmi", value: "24h", note: "Vastaus arkipäivisin, ja seuraava askel selkiytyy nopeasti." },
    ],
  },
} as const;

export default function Home() {
  const locale = useCurrentLocale();
  const copy = HOME_CONTENT[locale];
  const proofHeadingId = "home-proof-heading";
  const nextViewHeadingId = "home-next-view-heading";
  const improvementHeadingId = "home-improvement-heading";
  const ctaHeadingId = "home-cta-heading";
  const proofRef = useRef<HTMLElement | null>(null);
  const detailRef = useRef<HTMLElement | null>(null);

  useScrollFade(proofRef);
  useScrollFade(detailRef);

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid desktop-align-start">
          <div className="pageHeroContent">
            <div className={`pageIntro ${styles.heroIntro}`}>
              <span className="cardEyebrow">{locale === "fi" ? "Selkeät digitaaliset järjestelmät" : "Focused digital systems"}</span>
              <h1>{locale === "fi" ? <>Selkeytämme sekavat työnkulut<br />toimiviksi digipoluiksi.</> : <>We turn messy workflows<br />into clear digital paths.</>}</h1>

              <p className="pageHeroText">{locale === "fi" ? <>Tiimeille, joiden portaali, varauspolku<br />tai sisäinen työkalu on muuttunut turhan vaikeaksi käyttää.</> : <>For teams whose portal, booking flow<br />or internal tool has become harder to use than it needs to be.</>}</p>

              <div className="pageActionRow">
                <Button href="/contact">{locale === "fi" ? "Pyydä fokusoitu suunnitelma" : "Get your focused plan"}</Button>
                <Button href="/service" className={buttonStyles.buttonGhost}>
                  {locale === "fi" ? "Katso asiakasportaalit ja työkalut" : "See client portals and tools"}
                </Button>
              </div>
            </div>
          </div>

          <div className={`pageHeroAnchor ${styles.heroVisual}`}>
            <HeroSystemVisual />
          </div>
        </div>
      </section>

      <section
        ref={proofRef}
        className="sectionSurfaceFade"
        aria-labelledby={proofHeadingId}
      >
        <div className="pageContainer pageFlow">
          <div className="pageSplit pageSplitCenter">
            <div className="pageIntro">
              <h2 id={proofHeadingId}>{locale === "fi" ? <>Yksi selkeä polku<br />voi muuttaa kaiken.</> : <>One clear path<br />can change the whole system.</>}</h2>

              <p className={`pageText ${styles.sectionLead}`}>{locale === "fi" ? "Tässä kohtaa parempi rakenne alkaa maksaa itseään takaisin." : "This is where clearer structure starts paying back."}</p>

              <p className={`pageText ${styles.sectionLead}`}>{locale === "fi" ? <>Karsimme kohinan ennen kuin toteutus alkaa.<br />Sen jälkeen päätoiminto on helpompi havaita, ymmärtää ja viedä maaliin.</> : <>We remove noise before the build starts.<br />Then the main action becomes easier to see, trust and complete.</>}</p>
            </div>

            <div className="pageVisual">
              <article className={`cardPanel cardPanelSoft cardPanelGapLg pageStoryCard ${styles.storyCard}`}>
                <div className="pageStoryCardTop">
                  <span className="cardEyebrow">{locale === "fi" ? "Ennen ja jälkeen" : "Before and after"}</span>
                  <p className="cardValue">{locale === "fi" ? "Selkeämpi polku huomataan nopeammin ja viedään useammin loppuun." : "A clearer path gets noticed faster and completed more often."}</p>
                </div>

                <div className={`pageStoryCompare ${styles.storyCompare}`}>
                  <div className="pageStoryColumn">
                    <span className="cardEyebrow">{locale === "fi" ? "Ennen" : "Before"}</span>
                    <p className="cardValue">{locale === "fi" ? "Liikaa vaihtoehtoja kerralla" : "Too many choices compete at once"}</p>
                    <p className="cardText">{locale === "fi" ? "Samalla näkymällä neljä toimintoa kilpailee huomiosta." : "Four actions fight for attention on the same screen."}</p>
                    <p className="cardText">{locale === "fi" ? "Kuusi klikkausta ennen kuin varaukseen pääsee edes sisään." : "Six clicks before the user even reaches booking."}</p>
                  </div>

                  <div className="pageStoryColumn">
                    <span className="cardEyebrow">{locale === "fi" ? "Jälkeen" : "After"}</span>
                    <p className="cardValue">{locale === "fi" ? "Yksi ensisijainen reitti" : "Single primary path"}</p>
                    <p className="cardText">{locale === "fi" ? "Päätoiminto näkyy heti." : "The main action is visible immediately."}</p>
                    <p className="cardText">{locale === "fi" ? "Kolme klikkausta valmiiseen toimintaan." : "Three clicks to complete the action."}</p>
                  </div>
                </div>

                <div className="pageStoryDivider" aria-hidden="true" />

                <div className="pageStoryMeta">
                  <span className="cardEyebrow">{locale === "fi" ? "Miksi tämä toimii" : "Why it works"}</span>
                  <p className="cardValue">{locale === "fi" ? "Reitti päätetään ennen kuin toteutus alkaa levitä." : "The route is defined before the build starts growing."}</p>
                  <p className="cardText">
                    {copy.offer[0]}
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className={`pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd ${styles.checkpointCard}`}>
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">{locale === "fi" ? "Checkpoint" : "Checkpoint"}</span>
              <p className="cardValue">{locale === "fi" ? "Jos virtaus syö jo huomiota, luottamusta tai valmiita toimintoja, tämä on oikea hetki korjata se." : "If the flow is already costing attention, trust or completed actions, this is the moment to fix it."}</p>
              <p className="cardText">{locale === "fi" ? <>Koko projektin ei tarvitse olla valmiiksi mietitty.<br />Yksi sekava työnkulku riittää aloitukseen.</> : <>You do not need the whole project figured out.<br />One messy workflow is enough to start.</>}</p>
            </div>

            <div className="pageActionRow">
              <Button href="/contact">{locale === "fi" ? "Pyydä fokusoitu suunnitelma" : "Get a focused plan"}</Button>
              <Button href="/cases" className={buttonStyles.buttonGhost}>
                {locale === "fi" ? "Katso näytöt ensin" : "See proof first"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={detailRef}
        className="sectionFadeDownTop"
        aria-labelledby={nextViewHeadingId}
      >
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro pageFlowIntroWide">
            <h2 id={nextViewHeadingId}>{locale === "fi" ? <>Valitse seuraava sivu<br />sen mukaan, mitä haluat selvittää ensin.</> : <>Choose the next view<br />based on what you need next.</>}</h2>

            <p className="pageText">{locale === "fi" ? <>Tämä sivu on kokonaiskuva.<br />Seuraava askel riippuu siitä, mitä sinun pitää varmistaa seuraavaksi.</> : <>This page is the overview.<br />The next step depends on what you need to confirm next.</>}</p>

            <div className="pageActionRow">
              <Button href="/service">{locale === "fi" ? "Katso asiakasportaalit ja työkalut" : "See client portals and tools"}</Button>
              <Button href="/process" className={buttonStyles.buttonGhost}>
                {locale === "fi" ? "Katso prosessi" : "See the process"}
              </Button>
            </div>
          </div>

          <div className={`pageFlow pageFlowTight ${styles.navCards}`}>
            <article className="pageCheckpoint pageCheckpointInline cardPanel cardPanelSoft cardPanelGapMd">
              <div className="pageCheckpointCopy">
                <span className="cardEyebrow">{locale === "fi" ? "01 · Palvelut" : "01 · Services"}</span>
                <p className="cardValue">{locale === "fi" ? "Mene tänne, jos haluat ensin rajauksen, toimitussisällön ja hintatason." : "Go here if you need scope, deliverables and pricing first."}</p>
                <p className="cardText">{locale === "fi" ? <>Tämä on käytännön sivu.<br />Se kertoo mitä rakennetaan, mitä kuuluu mukaan ja mitä tämän tasoinen työ yleensä maksaa.</> : <>This is the practical page.<br />It shows what gets built, what is included and what this usually costs.</>}</p>
                <div className="pageActionRow">
                  <Button href="/service">{locale === "fi" ? "Katso asiakasportaalit ja työkalut" : "See client portals and tools"}</Button>
                </div>
              </div>
            </article>

            <article className="pageCheckpoint pageCheckpointInline cardPanel cardPanelSoft cardPanelGapMd">
              <div className="pageCheckpointCopy">
                <span className="cardEyebrow">{locale === "fi" ? "02 · Caset" : "02 · Cases"}</span>
                <p className="cardValue">{locale === "fi" ? "Mene tänne, jos haluat nähdä esimerkit, näytöt ja konkreettiset muutokset." : "Go here if you need proof, examples and concrete outcomes."}</p>
                <p className="cardText">{locale === "fi" ? <>Tämä on näyttösivu.<br />Se avaa mitä muuttui, miksi muutos oli merkityksellinen ja mitä sen jälkeen parani.</> : <>This is the evidence page.<br />It shows what changed, why it mattered and what improved after the work.</>}</p>
                <div className="pageActionRow">
                  <Button href="/cases" className={buttonStyles.buttonGhost}>
                    {locale === "fi" ? "Katso näytöt" : "See proof"}
                  </Button>
                </div>
              </div>
            </article>

            <article className="pageCheckpoint pageCheckpointInline cardPanel cardPanelSoft cardPanelGapMd">
              <div className="pageCheckpointCopy">
                <span className="cardEyebrow">{locale === "fi" ? "03 · Meistä" : "03 · About"}</span>
                <p className="cardValue">{locale === "fi" ? "Mene tänne, jos haluat varmuutta siitä miten työ tehdään ja kuka tämän rakentaa." : "Go here if you need trust, fit and a clearer sense of how we work."}</p>
                <p className="cardText">{locale === "fi" ? <>Tämä on studiosivu.<br />Se kertoo kuka tämän rakentaa, miten työ etenee ja milloin yhteistyö sopii hyvin yhteen.</> : <>This is the studio page.<br />It shows who builds this, how the work runs and when the fit is right.</>}</p>
                <div className="pageActionRow">
                  <Button href="/about-us" className={buttonStyles.buttonGhost}>
                    {locale === "fi" ? "Katso meistä" : "See about"}
                  </Button>
                </div>
              </div>
            </article>
          </div>

          <div className="pageFlowIntro pageSectionBreak">
            <h2 id={improvementHeadingId}>{locale === "fi" ? <>Mikä yleensä paranee<br />ensimmäisenä.</> : <>What usually improves<br />first.</>}</h2>

            <p className="pageText">{locale === "fi" ? "Nämä ovat usein ensimmäisiä merkkejä siitä, että rakenne menee oikeaan suuntaan." : "These are often the first signs that the structure is improving."}</p>
          </div>

          <div className={`pageStatRow ${styles.statRow}`}>
            {copy.numbers.map((item) => (
              <article key={item.note} className="pageStatItem cardPanel cardPanelSoft cardPanelGapMd">
                <span className="cardEyebrow">{item.label}</span>
                <p className="cardValue">{item.value}</p>
                <p className="cardText">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="sectionNoBg sectionCta"
        aria-labelledby={ctaHeadingId}
      >
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2 id={ctaHeadingId}>{locale === "fi" ? <>Jos yhteensopivuus on olemassa,<br />pidetään aloitus yksinkertaisena.</> : <>If the fit is real,<br />keep it simple.</>}</h2>

            <p className="pageText">{locale === "fi" ? <>Et tarvitse valmista briiffiä.<br />Yksi työnkulku riittää keskustelun avaamiseen.</> : <>You do not need a full brief.<br />One workflow is enough to start the conversation.</>}</p>
          </div>

          <div className={`pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd ${styles.checkpointCard}`}>
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">{locale === "fi" ? "Missä tämä toimii" : "Where this fits"}</span>
              <p className="cardValue">{locale === "fi" ? "Toimii erityisen hyvin palveluprosesseissa, varauspoluissa, asiakasportaaleissa ja sisäisissä työkaluissa." : "Best for service operations, booking flows, client portals and internal tools."}</p>
              <p className="cardText">{locale === "fi" ? <>Jos yksi työnkulku hidastaa tiimiä,<br />hämmentää käyttäjää tai aiheuttaa turhaa toistoa, se kannattaa todennäköisesti korjata nyt.</> : <>If one workflow is slowing the team down,<br />confusing users or creating repeat work, it is probably worth fixing now.</>}</p>
            </div>

            <div className={`pageActionRow ${styles.fitRow}`}>
              {copy.logos.map((item) => (
                <span key={item} className="cardText">{item}</span>
              ))}
            </div>
          </div>

          <div className={`pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd ${styles.checkpointCard}`}>
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">{locale === "fi" ? "Päätös" : "Decision"}</span>
              <p className="cardValue">{locale === "fi" ? "Jos ongelma on todellinen, seuraava askel on fokusoitu suunnitelma." : "If the problem is real, the next step is a focused plan."}</p>
              <p className="cardText">{locale === "fi" ? <>Näytä meille työnkulku joka ei toimi.<br />Sen pohjalta osoitamme selvimmän seuraavan askeleen.</> : <>Show us the workflow that is not working.<br />We will point to the clearest next step from there.</>}</p>
            </div>

            <div className="pageActionRow">
              <Button href="/contact">{locale === "fi" ? "Kerro mikä ei toimi" : "Tell us what is not working"}</Button>
              <Button href="/cases" className={buttonStyles.buttonGhost}>
                {locale === "fi" ? "Katso näytöt ensin" : "See proof first"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
