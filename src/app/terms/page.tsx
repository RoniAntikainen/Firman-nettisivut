import { getRequestLocale } from "@/lib/i18n/server";

const TERMS_CARDS = {
  en: [
    ["Service provider details", "The legal business name, invoicing details and agreement-specific commercial information are confirmed before client work begins."],
    ["Scope", "Each project starts from a defined scope. New items are handled as a separate phase or scope update."],
    ["Delivery", "Delivery structure, files and timelines are agreed before implementation begins."],
    ["Questions", "For project terms or commercial questions, contact hello@weboryn.com."],
    ["Payment terms", "Payment schedule, milestones and invoicing cadence are agreed before work begins."],
    ["IP ownership", "Final deliverables and ownership terms are defined in the project agreement for each scope."],
    ["Liability and termination", "Liability limits, cancellation terms and project termination conditions are agreed contractually before implementation."],
    ["Governing law", "Unless agreed otherwise, project agreements are governed by the laws of Finland."],
    ["Final agreement", "This page provides general commercial terms only. The binding scope, delivery, ownership, payment schedule and liability terms are always confirmed in the project-specific agreement."],
  ],
  fi: [
    ["Palveluntarjoajan tiedot", "Virallinen toiminimi, laskutustiedot ja projektikohtaiset kaupalliset tiedot vahvistetaan ennen asiakastyön aloitusta."],
    ["Rajaus", "Jokainen projekti alkaa määritellystä rajauksesta. Uudet asiat käsitellään erillisenä vaiheena tai rajausmuutoksena."],
    ["Toimitus", "Toimituksen rakenne, tiedostot ja aikataulu sovitaan ennen kuin toteutus alkaa."],
    ["Kysymykset", "Projektiehtoihin tai kaupallisiin kysymyksiin liittyen voit ottaa yhteyttä osoitteeseen hello@weboryn.com."],
    ["Maksuehdot", "Maksuerät, välitavoitteet ja laskutusrytmi sovitaan ennen työn aloitusta."],
    ["Omistajuus", "Lopullinen omistajuus ja luovutettavat tuotokset määritellään projektikohtaisessa sopimuksessa."],
    ["Vastuu ja päättäminen", "Vastuunrajaukset, peruutusehdot ja projektin päättämisen ehdot sovitaan sopimuksella ennen toteutusta."],
    ["Sovellettava laki", "Ellei toisin sovita, projektisopimuksiin sovelletaan Suomen lakia."],
    ["Lopullinen sopimus", "Tämä sivu kuvaa vain yleistä kaupallista runkoa. Sitova rajaus, toimitus, omistajuus, maksuaikataulu ja vastuut vahvistetaan aina projektikohtaisessa sopimuksessa."],
  ],
} as const;

export default async function TermsPage() {
  const locale = await getRequestLocale();
  const cards = TERMS_CARDS[locale];
  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">{locale === "fi" ? "Ehdot" : "Terms"}</span>
              <h1>{locale === "fi" ? <>Ehdot,<br />selkeästi ennen aloitusta.</> : <>Terms,<br />kept clear before work starts.</>}</h1>
              <p className="pageHeroText">{locale === "fi" ? <>Projektin ehdot sovitaan<br />ennen kuin toteutus alkaa.</> : <>Project terms are agreed<br />before implementation begins.</>}</p>
            </div>
          </div>

          <div className="pageHeroMedia pageHeroMediaColumn pageHeroMediaAlignStart">
            <article className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
              <span className="cardEyebrow">{locale === "fi" ? "Tiivistetysti" : "In short"}</span>
              <p className="cardValue">{locale === "fi" ? "Ensin scope, sopimus ennen toteutusta." : "Scope first, agreement before build."}</p>
              <p className="cardText">{locale === "fi" ? "Tämä sivu kuvaa yleisen kaupallisen rungon ennen projektikohtaisten ehtojen vahvistamista." : "This page outlines the general commercial structure before project-specific terms are confirmed."}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>{locale === "fi" ? "Projektien yleiset ehdot." : "General project terms."}</h2>

            <p className="pageText">{locale === "fi" ? <>Tarkoitus on pitää laajuus, toimitus ja omistajuus selkeinä<br />ennen työn alkua, ei piilottaa päätöksiä epämääräiseen tekstiin.</> : <>The point is to keep scope, delivery and ownership clear<br />before work begins, not to hide key decisions in vague wording.</>}</p>
          </div>

          <div className="pageGrid3">
            {cards.map(([title, text]) => (
              <article key={title} className="cardPanel cardPanelSoft">
                <h3 className="cardTitle">{title}</h3>
                <p className="cardText">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
