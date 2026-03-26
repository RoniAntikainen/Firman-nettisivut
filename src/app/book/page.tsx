"use client";

import { FormEvent, useMemo, useState } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import styles from "./page.module.css";

const TIME_SLOTS = [
  "Tue 10:00 EET",
  "Tue 15:00 CET",
  "Wed 09:00 GMT",
  "Thu 14:00 EET",
  "Fri 11:00 CET",
] as const;

type TimeSlot = (typeof TIME_SLOTS)[number];

export default function BookPage() {
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState<TimeSlot>(TIME_SLOTS[0]);
  const [note, setNote] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("15 minute call");
    const body = encodeURIComponent(
      `Email: ${email || "-"}\nPreferred slot: ${slot}\nNotes: ${note || "-"}`
    );

    return `mailto:hello@weboryn.com?subject=${subject}&body=${body}`;
  }, [email, slot, note]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDidSubmit(true);
    window.location.href = mailtoHref;
  };

  return (
    <main>
      <section className="sectionNoBg sectionHero">
        <div className="pageContainer pageHeroGrid pageHeroStart">
          <div className="pageHeroContent">
            <div className="pageIntro">
              <h1>
                Book a short call
                <br />
                about the workflow.
              </h1>

              <p className="pageHeroText">
                Pick a time that works.
                <br />
                We confirm by email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionSurfaceFade">
        <div className="pageContainer pageSplit pageSplitCenter">
          <div className="pageIntro">
            <h2>
              15 minutes.
            </h2>

            <p className="pageText">
              Enough to see if the fit is real.
              <br />
              No deck needed.
            </p>
          </div>

          <div className="pageVisual">
            <form className={`cardPanel cardPanelGradient cardPanelMeasureMd cardPanelGapLg ${styles.bookingForm}`} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Your email</span>
                <input
                  className={styles.fieldInput}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@company.com"
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Pick a preferred time</span>
                <select
                  className={styles.fieldInput}
                  value={slot}
                  onChange={(event) => setSlot(event.target.value as TimeSlot)}
                >
                  {TIME_SLOTS.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>What should we look at? (optional)</span>
                <textarea
                  className={`${styles.fieldInput} ${styles.fieldTextarea}`}
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Booking flow, client portal, internal tool, dashboard..."
                />
              </label>

              <p className={styles.note}>
                We confirm the time by email within 24 hours on weekdays.
              </p>

              {didSubmit ? (
                <p className={styles.success}>
                  Thanks. If your email app did not open, send the same details to hello@weboryn.com.
                </p>
              ) : null}

              <div className="pageActionRow">
                <Button type="submit">Request call</Button>
                <Button href="/contact" className={buttonStyles.buttonGhost}>
                  Send inquiry instead
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
