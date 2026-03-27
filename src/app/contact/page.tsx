"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import ContactHeroVisual from "@/components/contact-hero-visual/ContactHeroVisual";
import styles from "./page.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";
import { useCurrentLocale } from "@/hooks/i18n/useCurrentLocale";

const CONTACT_CONTENT = {
  en: {
    checklist: ["What needs to work better?", "Who uses it today?", "What is the most painful part right now?"],
    market: {
      eyebrow: "Market focus",
      lead: "Based in Finland, working across Finland and internationally.",
      text: "The site is built for Finnish and international companies that need a clearer portal, internal tool or booking flow around one important workflow.",
    },
    signals: [
      { label: "01", title: "Describe the problem", text: "A rough explanation is enough. No polished brief needed." },
      { label: "02", title: "We review it fast", text: "You get a reply within 24 hours on weekdays." },
      { label: "03", title: "You get the clearest next step", text: "If there is a fit, we point to the most useful way forward." },
    ],
  },
  fi: {
    checklist: ["Mikä tarvitsisi toimia paremmin?", "Ketkä käyttävät tätä nyt?", "Missä kipu tuntuu juuri nyt eniten?"],
    market: {
      eyebrow: "Markkina-alue",
      lead: "Perusta Suomessa, työskentely Suomessa ja kansainvälisesti.",
      text: "Sivusto on rakennettu suomalaisille ja kansainvälisille yrityksille, jotka tarvitsevat selkeämmän portaalin, sisäisen työkalun tai varauspolun yhden tärkeän työnkulun ympärille.",
    },
    signals: [
      { label: "01", title: "Kuvaa tilanne", text: "Karkea selostus riittää. Valmista briiffiä ei tarvita." },
      { label: "02", title: "Käymme sen nopeasti läpi", text: "Saat vastauksen arkipäivisin 24 tunnin sisällä." },
      { label: "03", title: "Saat selkeimmän seuraavan askeleen", text: "Jos yhteistyössä on järkeä, osoitamme hyödyllisimmän etenemistavan." },
    ],
  },
} as const;

export default function ContactPage() {
  const locale = useCurrentLocale();
  const copy = CONTACT_CONTENT[locale];
  const formRef = useRef<HTMLElement | null>(null);
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [users, setUsers] = useState("");
  const [preferredTimes, setPreferredTimes] = useState("");
  const [company, setCompany] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useScrollFade(formRef);

  const mailtoHref = useMemo(() => {
    const lines = [
      `Email: ${email || "-"}`,
      `${locale === "fi" ? "Mikä tarvitsisi toimia paremmin" : "What needs to work better"}: ${problem || "-"}`,
      `${locale === "fi" ? "Ketkä käyttävät tätä nyt" : "Who uses it today"}: ${users || "-"}`,
      `${locale === "fi" ? "Toivotut ajat" : "Preferred times"}: ${preferredTimes || "-"}`,
    ];

    const subject = encodeURIComponent(locale === "fi" ? "Projektikysely" : "Project inquiry");
    const body = encodeURIComponent(lines.join("\n"));

    return `mailto:hello@weboryn.com?subject=${subject}&body=${body}`;
  }, [email, problem, users, preferredTimes, locale]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (company.trim()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    void (async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            problem,
            users,
            preferredTimes,
            company,
          }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setDidSubmit(true);
        setEmail("");
        setProblem("");
        setUsers("");
        setPreferredTimes("");
        setCompany("");
      } catch {
        setSubmitError(locale === "fi" ? "Lomaketta ei voitu lähettää juuri nyt. Käytä alla olevaa sähköpostivaihtoehtoa." : "We could not send the form right now. Use the email fallback below.");
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className={`pageContainer pageHeroGrid pageHeroGridWide pageHeroStart ${styles.heroGrid}`}>
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">{locale === "fi" ? "Suora yhteys" : "Direct contact"}</span>
              <h1>{locale === "fi" ? <>Korjataan se,<br />mikä ei toimi.</> : <>Fix what is<br />not working.</>}</h1>

              <p className="pageHeroText">{locale === "fi" ? <>Rikkinäinen työkalu, sekava virtaus, sotkuinen järjestelmä.<br />Autamme löytämään todellisen pullonkaulan ensin.</> : <>Broken tools, unclear flows, messy systems.<br />We help you find the real bottleneck first.</>}</p>

              <div className={styles.heroActions}>
                <Button href="#contact-form">{locale === "fi" ? "Lähetä karkea versio" : "Send the rough version"}</Button>
                <Button href="/book" className={`${buttonStyles.buttonGhost} ${styles.heroSecondaryAction}`}>
                  {locale === "fi" ? "Varaa 15 min puhelu" : "Book 15 min call"}
                </Button>
              </div>

              <p className={styles.heroMicro}>{locale === "fi" ? "Yksi pullonkaula riittää alkuun." : "One bottleneck is enough to start."}</p>
            </div>
          </div>

          <div className={`pageVisual ${styles.heroVisual}`}>
            <ContactHeroVisual />
          </div>
        </div>
      </section>

      <section ref={formRef} className={`sectionSurfaceFade ${styles.contactSection}`}>
        <div className="pageContainer pageFlow">
          <div className="pageFlowIntro">
            <h2>{locale === "fi" ? "Aloita oikeasta ongelmasta." : "Start with the real problem."}</h2>

            <p className="pageText">{locale === "fi" ? <>Ei tarjousta. Ei pitkaa briiffia.<br />Kerro vain mikä ei toimi, missä se hidastaa ja mikä tuntuu epäselvältä.</> : <>No proposal. No long brief.<br />Tell us what is not working, where it slows things down and what feels unclear.</>}</p>
          </div>

          <div className={`cardPanel cardPanelSoft ${styles.contactIntroPanel}`}>
            <div className={styles.contactSummary}>
              <span className="cardEyebrow">{locale === "fi" ? "Mitä seuraavaksi tapahtuu" : "What happens next"}</span>
              <p className={styles.contactSummaryLead}>
                {locale === "fi" ? "Luemme tilanteen nopeasti ja kerromme, onko seuraava askel selkeä." : "We read the situation fast and tell you if there is a clear next step."}
              </p>
              <p className={styles.contactSummaryText}>
                {locale === "fi" ? "Yksi todellinen pullonkaula riittää alkuun." : "One real bottleneck is enough to start."}
              </p>
            </div>

            <div className={styles.contactSignals}>
              {copy.signals.map((item) => (
                <article key={item.title} className={styles.contactSignal}>
                  <span className={styles.signalIndex}>{item.label}</span>
                  <div className={styles.signalCopy}>
                    <h3 className={styles.signalTitle}>{item.title}</h3>
                    <p className={styles.signalText}>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pageGrid3">
            <article className="cardPanel cardPanelSoft cardPanelGapMd">
              <span className="cardEyebrow">{copy.market.eyebrow}</span>
              <p className="cardValue">{copy.market.lead}</p>
              <p className="cardText">{copy.market.text}</p>
            </article>
          </div>

          <div className={styles.contactGrid}>
            <form
              id="contact-form"
              className={`cardPanel cardPanelGradient cardPanelMeasureMd cardPanelGapLg ${styles.contactForm}`}
              onSubmit={handleSubmit}
              aria-describedby="contact-form-note"
            >
              <span className="cardEyebrow">Email</span>
              <p className="cardValue">hello@weboryn.com</p>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>{locale === "fi" ? "Sähköpostisi" : "Your email"}</span>
                <input
                  className={styles.fieldInput}
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@company.com"
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>{locale === "fi" ? "Mikä tarvitsee toimia paremmin?" : "What needs to work better?"}</span>
                <textarea
                  className={`${styles.fieldInput} ${styles.fieldTextarea}`}
                  name="problem"
                  autoComplete="off"
                  value={problem}
                  onChange={(event) => setProblem(event.target.value)}
                  placeholder={copy.checklist[0]}
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>{locale === "fi" ? "Ketkä käyttävät tätä nyt?" : "Who uses it today?"}</span>
                <input
                  className={styles.fieldInput}
                  type="text"
                  name="users"
                  autoComplete="organization"
                  value={users}
                  onChange={(event) => setUsers(event.target.value)}
                  placeholder={copy.checklist[1]}
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>{locale === "fi" ? "Sopivat ajat 15 min puhelulle (valinnainen)" : "Preferred times for a 15 min call (optional)"}</span>
                <input
                  className={styles.fieldInput}
                  type="text"
                  name="preferred_times"
                  autoComplete="off"
                  value={preferredTimes}
                  onChange={(event) => setPreferredTimes(event.target.value)}
                  placeholder="Tue 10:00 EET, Thu 14:00 CET, Fri 09:00 GMT"
                />
              </label>

              <label className={styles.honeypot} aria-hidden="true">
                <span>Company</span>
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </label>

              <p className="cardText" id="contact-form-note">
                {locale === "fi" ? "Vastaamme arkipäivisin 24 tunnin sisällä." : "We reply within 24 hours on weekdays."}
              </p>

              <p className={styles.formNote}>
                {locale === "fi" ? "Tämä menee suoraan inboxiimme. Jos lomake ei toimi, käytä alla olevaa sähköpostivaihtoehtoa." : "We send this directly to our inbox. If the form service is unavailable, use the email fallback below."}
              </p>

              {didSubmit ? (
                <div className={styles.formSuccess} role="status" aria-live="polite">
                  <p className={styles.feedbackTitle}>{locale === "fi" ? "Viesti vastaanotettu" : "Inquiry received"}</p>
                  <p className={styles.feedbackText}>{locale === "fi" ? "Kiitos. Saimme viestisi ja vastaamme arkipäivisin 24 tunnin sisällä." : "Thanks. We received your inquiry and reply within 24 hours on weekdays."}</p>
                </div>
              ) : null}

              {submitError ? (
                <div className={styles.formError} role="alert">
                  <p className={styles.feedbackTitle}>{locale === "fi" ? "Lähetys ei onnistunut juuri nyt" : "Could not send right now"}</p>
                  <p className={styles.feedbackText}>{submitError}</p>
                </div>
              ) : null}

              <div className="pageActionRow">
                <Button type="submit">{isSubmitting ? (locale === "fi" ? "Lähetetään..." : "Sending...") : (locale === "fi" ? "Lähetä viesti" : "Send inquiry")}</Button>
              </div>

              <a className={styles.inlineLink} href={mailtoHref}>
                {locale === "fi" ? "Avaa sähköposti sen sijaan" : "Open email app instead"}
              </a>
            </form>

            <div className={styles.contactAside}>
              <div className="cardPanel cardPanelSoft cardPanelGapMd">
                <span className="cardEyebrow">{locale === "fi" ? "Mita mukaan viestiin" : "What to include"}</span>
                <ul className="cardList">
                  {copy.checklist.map((item) => (
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
      </section>
    </main>
  );
}
