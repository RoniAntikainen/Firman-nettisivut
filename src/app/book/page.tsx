"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import styles from "./page.module.css";
import { useCurrentLocale } from "@/hooks/i18n/useCurrentLocale";

const SLOT_TEMPLATES = [
  { weekday: 2, hour: 10, minute: 0, timezoneLabel: "EET" },
  { weekday: 2, hour: 15, minute: 0, timezoneLabel: "CET" },
  { weekday: 3, hour: 9, minute: 0, timezoneLabel: "GMT" },
  { weekday: 4, hour: 14, minute: 0, timezoneLabel: "EET" },
  { weekday: 5, hour: 11, minute: 0, timezoneLabel: "CET" },
] as const;

const BOOK_SIGNALS = [
  {
    label: "01",
    title: "Pick a slot",
    text: "Choose the time that feels closest and we confirm it by email.",
  },
  {
    label: "02",
    title: "Bring one bottleneck",
    text: "One workflow, one unclear screen or one stuck path is enough.",
  },
  {
    label: "03",
    title: "Leave with a next step",
    text: "If there is a fit, the outcome should feel clearer than when the call started.",
  },
] as const;

const BOOK_SIGNALS_FI = [
  {
    label: "01",
    title: "Valitse sopiva aika",
    text: "Valitse lähin sopiva aika, niin vahvistamme sen sähköpostilla.",
  },
  {
    label: "02",
    title: "Tuo yksi pullonkaula",
    text: "Yksi työnkulku, epäselvä näkymä tai jumiin jäänyt reitti riittää hyvin.",
  },
  {
    label: "03",
    title: "Lähde seuraavan askeleen kanssa",
    text: "Jos yhteistyössä on järkeä, lopputuloksen pitää olla puhelun jälkeen selkeämpi kuin alussa.",
  },
] as const;

function formatSlot(date: Date, timezoneLabel: string) {
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${weekday} ${day} ${month} ${hours}:${minutes} ${timezoneLabel}`;
}

function getNextSlotDate(
  weekday: number,
  hour: number,
  minute: number,
  fromDate: Date
) {
  const next = new Date(fromDate);
  next.setSeconds(0, 0);

  const currentWeekday = next.getDay();
  const dayOffset = (weekday - currentWeekday + 7) % 7;

  next.setDate(next.getDate() + dayOffset);
  next.setHours(hour, minute, 0, 0);

  if (next <= fromDate) {
    next.setDate(next.getDate() + 7);
  }

  return next;
}

function buildTimeSlots(fromDate: Date) {
  return SLOT_TEMPLATES.map((template) => {
    const date = getNextSlotDate(
      template.weekday,
      template.hour,
      template.minute,
      fromDate
    );

    return {
      label: formatSlot(date, template.timezoneLabel),
      date,
    };
  })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map((item) => item.label);
}

export default function BookPage() {
  const locale = useCurrentLocale();
  const signals = locale === "fi" ? BOOK_SIGNALS_FI : BOOK_SIGNALS;
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState("");
  const [note, setNote] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const nextSlots = buildTimeSlots(new Date());
    setTimeSlots(nextSlots);
    setSlot(nextSlots[0] ?? "");
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(locale === "fi" ? "15 minuutin puhelu" : "15 minute call");
    const body = encodeURIComponent(
      `Email: ${email || "-"}\nPreferred slot: ${slot}\nNotes: ${note || "-"}`
    );

    return `mailto:hello@weboryn.com?subject=${subject}&body=${body}`;
  }, [email, slot, note, locale]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    void (async () => {
      try {
        const response = await fetch("/api/book", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            slot,
            note,
          }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setDidSubmit(true);
        setEmail("");
        setSlot(timeSlots[0] ?? "");
        setNote("");
      } catch {
        setSubmitError(locale === "fi" ? "Puhelupyyntöä ei voitu lähettää juuri nyt. Käytä alla olevaa sähköpostivaihtoehtoa." : "We could not send the call request right now. Use the email fallback below.");
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <span className="cardEyebrow">{locale === "fi" ? "Lyhyt puhelu" : "Short call"}</span>
              <h1>{locale === "fi" ? <>Varaa lyhyt puhelu<br />työnkulusta.</> : <>Book a short call<br />about the workflow.</>}</h1>

              <p className="pageHeroText">{locale === "fi" ? <>Valitse aika joka sopii.<br />Vahvistamme sen sähköpostilla ja pidämme puhelun tiiviinä.</> : <>Pick a time that works.<br />We confirm by email and keep it focused.</>}</p>

              <p className="pageText">{locale === "fi" ? <>Tämä on tiimeille, jotka tarvitsevat nopean tuntuman siihen onko yhteistyössä järkeä,<br />eivät pitkää esittelypuhelua slaideilla.</> : <>This is for teams that need a fast sense of fit,<br />not a long intro call full of slides.</>}</p>

              <div className={styles.heroSignals}>
                {signals.map((item) => (
                  <article key={item.title} className={styles.heroSignal}>
                    <span className={styles.heroSignalIndex}>{item.label}</span>
                    <div className={styles.heroSignalCopy}>
                      <h3 className={styles.heroSignalTitle}>{item.title}</h3>
                      <p className={styles.heroSignalText}>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionSurfaceFade">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>{locale === "fi" ? "15 minuuttia." : "15 minutes."}</h2>

            <p className="pageText">{locale === "fi" ? <>Riittävän pitkä siihen, että näkee onko yhteistyössä järkeä.<br />Esitysmateriaalia ei tarvita.</> : <>Enough to see if the fit is real.<br />No deck needed.</>}</p>
          </div>

          <div className="pageVisual">
            <form
              className={`cardPanel cardPanelGradient cardPanelMeasureMd cardPanelGapLg ${styles.bookingForm}`}
              onSubmit={handleSubmit}
              aria-describedby="booking-form-note"
            >
              <span className="cardEyebrow">{locale === "fi" ? "Varaa puhelu" : "Book a call"}</span>
              <p className="cardValue">{locale === "fi" ? "15 minuuttia siihen, että yhteensopivuus selkiytyy." : "15 minutes to see if the fit is real."}</p>

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
                <span className={styles.fieldLabel}>{locale === "fi" ? "Valitse sopivin aika" : "Pick a preferred time"}</span>
                <select
                  className={styles.fieldInput}
                  name="preferred_slot"
                  value={slot}
                  onChange={(event) => setSlot(event.target.value)}
                  disabled={timeSlots.length === 0}
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>{locale === "fi" ? "Mitä kannattaa katsoa? (valinnainen)" : "What should we look at? (optional)"}</span>
                <textarea
                  className={`${styles.fieldInput} ${styles.fieldTextarea}`}
                  name="note"
                  autoComplete="off"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder={locale === "fi" ? "Varauspolku, asiakasportaali, sisäinen työkalu, dashboard..." : "Booking flow, client portal, internal tool, dashboard..."}
                />
              </label>

              <p className={styles.note} id="booking-form-note">
                {locale === "fi" ? "Vahvistamme lähimmän sopivan ajan sähköpostilla arkipäivisin 24 tunnin sisällä." : "We confirm the closest matching time by email within 24 hours on weekdays."}
              </p>

              {didSubmit ? (
                <div className={styles.success} role="status" aria-live="polite">
                  <p className={styles.feedbackTitle}>{locale === "fi" ? "Puhelupyyntö vastaanotettu" : "Call request received"}</p>
                  <p className={styles.feedbackText}>{locale === "fi" ? "Kiitos. Saimme pyyntösi ja vahvistamme ajan sähköpostilla arkipäivisin 24 tunnin sisällä." : "Thanks. We received your call request and confirm by email within 24 hours on weekdays."}</p>
                </div>
              ) : null}

              {submitError ? (
                <div className={styles.error} role="alert">
                  <p className={styles.feedbackTitle}>{locale === "fi" ? "Lähetys ei onnistunut juuri nyt" : "Could not send right now"}</p>
                  <p className={styles.feedbackText}>{submitError}</p>
                </div>
              ) : null}

              <div className="pageActionRow">
                <Button type="submit">{isSubmitting ? (locale === "fi" ? "Lähetetään..." : "Sending...") : (locale === "fi" ? "Lähetä pyyntö" : "Request call")}</Button>
                <Button href="/contact" className={buttonStyles.buttonGhost}>
                  {locale === "fi" ? "Lähetä viesti sen sijaan" : "Send inquiry instead"}
                </Button>
              </div>

              <a className={styles.inlineLink} href={mailtoHref}>
                {locale === "fi" ? "Avaa sähköposti sen sijaan" : "Open email app instead"}
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
