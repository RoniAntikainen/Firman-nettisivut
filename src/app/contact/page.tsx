"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import Button from "@/components/buttons/button";
import buttonStyles from "@/components/buttons/button.module.css";
import styles from "./page.module.css";
import { useScrollFade } from "@/hooks/fade/useScrollFade";

const CONTACT_CHECKLIST = [
  "What needs to work better?",
  "Who uses it today?",
  "What is the most painful part right now?",
] as const;

const CONTACT_STEPS = [
  {
    label: "01",
    title: "Send the rough version",
    text: "You do not need a polished brief to start the conversation.",
  },
  {
    label: "02",
    title: "We clarify the real bottleneck",
    text: "If there is a fit, we point to the clearest next step fast.",
  },
  {
    label: "03",
    title: "You get a clean direction",
    text: "Scope first, then a sensible next action instead of more noise.",
  },
] as const;

export default function ContactPage() {
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
      `What needs to work better: ${problem || "-"}`,
      `Who uses it today: ${users || "-"}`,
      `Preferred times: ${preferredTimes || "-"}`,
    ];

    const subject = encodeURIComponent("Project inquiry");
    const body = encodeURIComponent(lines.join("\n"));

    return `mailto:hello@weboryn.com?subject=${subject}&body=${body}`;
  }, [email, problem, users, preferredTimes]);

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
        setSubmitError("We could not send the form right now. Use the email fallback below.");
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
              <span className="cardEyebrow">Contact and next step</span>
              <h1>
                Tell us what feels
                <br />
                messy right now.
              </h1>

              <p className="pageHeroText">
                A rough description is enough.
              </p>

              <div className="cardPanel cardPanelSoft cardPanelGapMd cardPanelMeasureMd">
                <span className="cardEyebrow">What happens next</span>
                <p className="cardText">
                  We reply within 24 hours on weekdays.
                  <br />
                  If there is a fit, we suggest the clearest next step.
                </p>
              </div>

              <div className="pageActionRow">
                <Button href="#contact-form">Send inquiry</Button>
                <Button href="/book" className={buttonStyles.buttonGhost}>
                  Book 15 min call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={formRef} className="sectionSurfaceFade">
        <div className="pageContainer pageFlow">
          <div className="pageCheckpoint cardPanel cardPanelSoft cardPanelGapMd">
            <div className="pageCheckpointCopy">
              <span className="cardEyebrow">How this works</span>
              <p className="cardValue">This page is for starting the conversation, not writing a proposal.</p>
            </div>

            <div className={styles.contactSteps}>
              {CONTACT_STEPS.map((item) => (
                <article key={item.label} className={styles.contactStep}>
                  <span className="cardEyebrow">{item.label}</span>
                  <p className="cardText">{item.title}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="pageFlowIntro">
            <h2>
              What to send.
            </h2>

            <p className="pageText">
              Keep it short.
              <br />
              These three things are enough.
            </p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactGuide}>
              {CONTACT_STEPS.map((item) => (
                <article key={item.title} className="cardPanel cardPanelSoft cardPanelGapMd">
                  <span className="cardEyebrow">{item.label}</span>
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="cardText">{item.text}</p>
                </article>
              ))}
            </div>

            <form
              id="contact-form"
              className={`cardPanel cardPanelGradient cardPanelMeasureMd cardPanelGapLg ${styles.contactForm}`}
              onSubmit={handleSubmit}
            >
              <span className="cardEyebrow">Email</span>
              <p className="cardValue">hello@weboryn.com</p>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Your email</span>
                <input
                  className={styles.fieldInput}
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@company.com"
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>What needs to work better?</span>
                <textarea
                  className={`${styles.fieldInput} ${styles.fieldTextarea}`}
                  name="problem"
                  value={problem}
                  onChange={(event) => setProblem(event.target.value)}
                  placeholder={CONTACT_CHECKLIST[0]}
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Who uses it today?</span>
                <input
                  className={styles.fieldInput}
                  type="text"
                  name="users"
                  value={users}
                  onChange={(event) => setUsers(event.target.value)}
                  placeholder={CONTACT_CHECKLIST[1]}
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Preferred times for a 15 min call (optional)</span>
                <input
                  className={styles.fieldInput}
                  type="text"
                  name="preferred_times"
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

              <p className="cardText">
                We reply within 24 hours on weekdays.
              </p>

              <p className={styles.formNote}>
                We send this directly to our inbox. If the form service is unavailable, use the email fallback below.
              </p>

              {didSubmit ? (
                <p className={styles.formSuccess}>
                  Thanks. We received your inquiry and reply within 24 hours on weekdays.
                </p>
              ) : null}

              {submitError ? (
                <p className={styles.formError}>{submitError}</p>
              ) : null}

              <div className="pageActionRow">
                <Button type="submit">{isSubmitting ? "Sending..." : "Send inquiry"}</Button>
              </div>

              <a className={styles.inlineLink} href={mailtoHref}>
                Open email app instead
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
