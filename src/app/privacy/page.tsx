import { getRequestLocale } from "@/lib/i18n/server";

const PRIVACY_CARDS = {
  en: [
    ["Controller details", "The legal controller details for the site operator are confirmed before launch or provided directly in the applicable client-facing privacy notice."],
    ["What we collect", "If you contact us, we may receive your name, email address and the project details you send."],
    ["Why we collect it", "We use it to reply, understand the request and continue the conversation if there is a fit."],
    ["Legal basis", "We process contact requests based on legitimate interest and, where needed, consent."],
    ["Retention", "We keep inquiries only as long as the conversation, project evaluation or legal need requires, typically up to 12 months unless a project agreement starts."],
    ["Your rights", "You can ask for access, correction or deletion of the personal data you have shared with us."],
    ["Processing details", "We only process contact details, project information and communication needed to assess or deliver work."],
    ["Recipients and storage", "Inquiry data may be stored in email and project communication systems used to reply and continue the conversation. If transactional email delivery is used, the message may pass through that provider to reach our inbox."],
    ["Transfers outside the EU/EEA", "If any service provider processes personal data outside the EU/EEA, this should be stated here together with the transfer safeguard used."],
    ["Cookies and analytics", "If analytics or cookies are used, they should be described separately with their purpose and legal basis."],
    ["Privacy contact and complaints", "Contact hello@weboryn.com for privacy questions or data requests. Individuals also have the right to lodge a complaint with the competent supervisory authority. For Finland, that is the Office of the Data Protection Ombudsman."],
  ],
  fi: [
    ["Rekisterinpitäjän tiedot", "Sivuston ylläpitäjän viralliset rekisterinpitäjätiedot vahvistetaan ennen julkaisua tai esitetään lopullisessa asiakasnäkymän tietosuojaselosteessa."],
    ["Mitä keräämme", "Jos otat meihin yhteyttä, voimme saada nimesi, sähköpostiosoitteesi ja ne projektitiedot, jotka lähetät viestissäsi."],
    ["Miksi keräämme niitä", "Käytämme tietoja vastataksemme, ymmärtääksemme pyynnön ja jatkaaksemme keskustelua silloin, kun yhteistyölle on peruste."],
    ["Käsittelyn peruste", "Käsittelemme yhteydenottoja oikeutetun edun perusteella ja tarvittaessa suostumuksen nojalla."],
    ["Säilytysaika", "Säilytämme yhteydenottoja vain niin kauan kuin keskustelu, projektin arviointi tai lakisääteinen tarve sitä vaatii, tyypillisesti enintään 12 kuukautta, ellei projektisopimus ala."],
    ["Oikeutesi", "Voit pyytää pääsyä tietoihisi, niiden oikaisua tai poistamista siltä osin kuin laki sen sallii."],
    ["Käsiteltävät tiedot", "Käsittelemme vain yhteystietoja, projektikuvausta ja muuta viestintää, jota tarvitaan työn arviointiin tai toteutukseen."],
    ["Vastaanottajat ja säilytys", "Yhteydenottotietoja voidaan säilyttää sähköpostissa ja viestintäjärjestelmissä, joita käytämme vastaamiseen ja keskustelun jatkamiseen. Jos käytössä on transaktionaalinen sähköpostipalvelu, viesti voi kulkea myös sen kautta inboxiimme."],
    ["Siirrot EU:n tai ETA:n ulkopuolelle", "Jos jokin palveluntarjoaja käsittelee henkilötietoja EU:n tai ETA:n ulkopuolella, se tulee kertoa tässä yhdessä käytetyn siirtoperusteen kanssa."],
    ["Evästeet ja analytiikka", "Jos sivustolla käytetään analytiikkaa tai evästeitä, ne tulee kuvata erikseen sekä tarkoituksen että käsittelyperusteen osalta."],
    ["Tietosuojayhteys ja valitukset", "Tietosuojaan liittyvissä kysymyksissä voit ottaa yhteyttä osoitteeseen hello@weboryn.com. Rekisteröidyllä on myös oikeus tehdä valitus toimivaltaiselle valvontaviranomaiselle. Suomessa se on Tietosuojavaltuutetun toimisto."],
  ],
} as const;

export default async function PrivacyPage() {
  const locale = await getRequestLocale();
  const cards = PRIVACY_CARDS[locale];
  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">{locale === "fi" ? "Tietosuoja" : "Privacy"}</span>
              <h1>{locale === "fi" ? <>Tietosuoja,<br />selkeästi kerrottuna.</> : <>Privacy,<br />kept straightforward.</>}</h1>
              <p className="pageHeroText">{locale === "fi" ? <>Keräämme vain sen mikä on tarpeen<br />vastataksemme ja jatkaaksemme keskustelua tarvittaessa.</> : <>We only collect what is needed<br />to reply and continue the conversation when needed.</>}</p>
            </div>
          </div>

          <div className="pageHeroMedia pageHeroMediaColumn pageHeroMediaAlignStart">
            <article className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
              <span className="cardEyebrow">{locale === "fi" ? "Tiivistetysti" : "In short"}</span>
              <p className="cardValue">{locale === "fi" ? "Yhteystiedot sisään, selkeä käyttötarkoitus ulos." : "Contact data in, clear purpose out."}</p>
              <p className="cardText">{locale === "fi" ? "Tämä sivu kertoo mitä tietoja voidaan käsitellä, miksi niitä käsitellään ja miten voit kysyä niistä." : "This page explains what may be processed, why it is processed and how to ask about it."}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>{locale === "fi" ? "Tietosuoja selkokielellä." : "Privacy in plain language."}</h2>

            <p className="pageText">{locale === "fi" ? <>Tavoite on yksinkertainen: kerätä vain se mitä tarvitaan vastaamiseen,<br />yhteensopivuuden arviointiin ja keskustelun jatkamiseen silloin kun sille on tarve.</> : <>The goal is simple: collect only what is needed to reply,<br />assess fit and continue the conversation when relevant.</>}</p>
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
