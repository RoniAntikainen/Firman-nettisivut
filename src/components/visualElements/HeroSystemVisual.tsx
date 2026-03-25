"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSystemVisual.module.css";

type Phase =
  | "intro"
  | "request"
  | "scope"
  | "structure"
  | "build"
  | "polish"
  | "ready"
  | "handoff";

type ProcessItem = {
  requestLabel: string;
  requestStatus: string;
  requestType: string;
  area: string;
  goal: string;
  deliverable: string;
  file: string;
  componentName: string;
  title: string;
  cta: string;
  eyebrow: string;
  body: string;
  chips: [string, string];
};

const PROCESS_ITEMS: ProcessItem[] = [
  {
    requestLabel: "Website request",
    requestStatus: "Queued",
    requestType: "Website update",
    area: "Booking flow",
    goal: "Simplify steps and add one clear CTA.",
    deliverable: "Updated hero + booking section",
    file: "booking-hero.tsx",
    componentName: "BookingHero",
    title: "Book in one clear step.",
    cta: "Launch preview",
    eyebrow: "New booking flow",
    body: "Cleaner UX. Faster decisions. Less friction.",
    chips: ["1 clear CTA", "Less friction"],
  },
  {
    requestLabel: "Landing page request",
    requestStatus: "Planned",
    requestType: "Landing page update",
    area: "Pricing section",
    goal: "Make pricing easier to compare at a glance.",
    deliverable: "Refined pricing section",
    file: "pricing.tsx",
    componentName: "PricingSection",
    title: "Pricing made easier to compare.",
    cta: "Compare plans",
    eyebrow: "Updated pricing",
    body: "Less confusion. Better scanning. Faster choices.",
    chips: ["Clear tiers", "Better comparison"],
  },
  {
    requestLabel: "App request",
    requestStatus: "In progress",
    requestType: "App update",
    area: "Dashboard overview",
    goal: "Show what matters first, not everything at once.",
    deliverable: "New dashboard overview",
    file: "dashboard.tsx",
    componentName: "OperationsDashboard",
    title: "See the important things first.",
    cta: "Open dashboard",
    eyebrow: "Operations dashboard",
    body: "Focused signals. Cleaner hierarchy. Faster decisions.",
    chips: ["Priority first", "Cleaner overview"],
  },
  {
    requestLabel: "Flow request",
    requestStatus: "Queued",
    requestType: "Flow update",
    area: "Onboarding",
    goal: "Shorten the path and make it easier to finish.",
    deliverable: "Improved onboarding flow",
    file: "onboarding.tsx",
    componentName: "OnboardingFlow",
    title: "A shorter path to started.",
    cta: "Start onboarding",
    eyebrow: "New onboarding",
    body: "Less drop-off. Better flow. Clear next steps.",
    chips: ["Lower friction", "Guided steps"],
  },
  {
    requestLabel: "Portal request",
    requestStatus: "Approved",
    requestType: "Portal update",
    area: "Client overview",
    goal: "Create a cleaner structure and a more premium feel.",
    deliverable: "Refreshed client portal view",
    file: "client-portal.tsx",
    componentName: "ClientPortalHero",
    title: "A clearer client experience.",
    cta: "Open portal",
    eyebrow: "Client portal refresh",
    body: "Cleaner structure. Better trust. More premium feel.",
    chips: ["Premium UI", "Cleaner portal"],
  },
  {
    requestLabel: "Website request",
    requestStatus: "Queued",
    requestType: "Website update",
    area: "Contact flow",
    goal: "Make getting in touch feel faster and more intentional.",
    deliverable: "New contact section",
    file: "contact-flow.tsx",
    componentName: "ContactSection",
    title: "One clear way to get in touch.",
    cta: "Send message",
    eyebrow: "Contact flow",
    body: "Less noise. Better direction. Faster contact.",
    chips: ["Focused form", "Clear action"],
  },
  {
    requestLabel: "Internal tool request",
    requestStatus: "In review",
    requestType: "Internal tool",
    area: "Requests management",
    goal: "Replace fragmented intake with one structured system.",
    deliverable: "Requests board",
    file: "requests-board.tsx",
    componentName: "RequestsBoard",
    title: "Requests, structured properly.",
    cta: "Open board",
    eyebrow: "Internal requests board",
    body: "Less manual work. Better visibility. Clear ownership.",
    chips: ["Structured intake", "Less manual work"],
  },
  {
    requestLabel: "Landing page request",
    requestStatus: "Planned",
    requestType: "Landing page update",
    area: "Hero section",
    goal: "Clarify the value and make the action stronger.",
    deliverable: "Refined hero section",
    file: "hero.tsx",
    componentName: "MarketingHero",
    title: "Say the value clearly.",
    cta: "See how it works",
    eyebrow: "Hero refresh",
    body: "Stronger message. Clearer action. Better first impression.",
    chips: ["Sharper message", "Better CTA"],
  },
  {
    requestLabel: "Reporting request",
    requestStatus: "In progress",
    requestType: "Reporting update",
    area: "Weekly reports",
    goal: "Make the view cleaner and easier to scan.",
    deliverable: "Reports overview",
    file: "reports.tsx",
    componentName: "ReportsOverview",
    title: "Weekly reporting, cleaned up.",
    cta: "Open reports",
    eyebrow: "Reports overview",
    body: "Less clutter. Better scanning. Faster reading.",
    chips: ["Cleaner reports", "Faster reading"],
  },
  {
    requestLabel: "Service page request",
    requestStatus: "Approved",
    requestType: "Service page update",
    area: "Page structure",
    goal: "Make the page feel more polished and high-end.",
    deliverable: "Refined services page",
    file: "services.tsx",
    componentName: "ServicesPage",
    title: "A more premium service page.",
    cta: "View services",
    eyebrow: "Service page refresh",
    body: "Cleaner structure. Better rhythm. Stronger feel.",
    chips: ["Premium feel", "Cleaner layout"],
  },
];

export default function HeroSystemVisual() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [itemIndex, setItemIndex] = useState(0);
  const [visibleRequestRows, setVisibleRequestRows] = useState(0);
  const [visibleCodeLines, setVisibleCodeLines] = useState(0);
  const [activeBuildStep, setActiveBuildStep] = useState(0);

  const current = PROCESS_ITEMS[itemIndex];

  useEffect(() => {
    if (phase !== "intro") return;

    const timeout = window.setTimeout(() => {
      setPhase("request");
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "request") return;

    setVisibleRequestRows(0);
    setVisibleCodeLines(0);
    setActiveBuildStep(1);

    const timers = [
      window.setTimeout(() => setVisibleRequestRows(1), 220),
      window.setTimeout(() => setVisibleRequestRows(2), 620),
      window.setTimeout(() => setVisibleRequestRows(3), 1020),
      window.setTimeout(() => setVisibleRequestRows(4), 1420),
      window.setTimeout(() => setPhase("scope"), 2650),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [phase, itemIndex]);

  useEffect(() => {
    if (phase !== "scope") return;

    setActiveBuildStep(2);

    const timeout = window.setTimeout(() => {
      setPhase("structure");
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "structure") return;

    setActiveBuildStep(3);
    setVisibleCodeLines(1);

    const timeout = window.setTimeout(() => {
      setPhase("build");
    }, 1100);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "build") return;

    setActiveBuildStep(4);

    const timers = [
      window.setTimeout(() => setVisibleCodeLines(2), 700),
      window.setTimeout(() => setVisibleCodeLines(3), 1700),
      window.setTimeout(() => setVisibleCodeLines(4), 2500),
      window.setTimeout(() => setPhase("polish"), 3600),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [phase, itemIndex]);

  useEffect(() => {
    if (phase !== "polish") return;

    setActiveBuildStep(5);

    const timeout = window.setTimeout(() => {
      setPhase("ready");
    }, 1600);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "ready") return;

    setActiveBuildStep(6);

    const timeout = window.setTimeout(() => {
      setPhase("handoff");
    }, 2800);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "handoff") return;

    const timeout = window.setTimeout(() => {
      setItemIndex((currentItemIndex) => (currentItemIndex + 1) % PROCESS_ITEMS.length);
      setVisibleRequestRows(0);
      setVisibleCodeLines(0);
      setActiveBuildStep(0);
      setPhase("request");
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  return (
    <div className={styles.video} data-phase={phase} aria-hidden="true">
      <div className={styles.introLayer}>
        <div className={styles.introStack}>
          <div className={styles.logo}>Weboryn</div>
        </div>
      </div>

      <div className={styles.scene}>
        <div className={styles.requestCard}>
          <div className={styles.requestTop}>
            <span className={styles.requestPill}>{current.requestLabel}</span>
            <span className={styles.requestStatus}>{current.requestStatus}</span>
          </div>

          <div className={styles.requestRows}>
            <div
              className={`${styles.requestRow} ${
                visibleRequestRows >= 1 ? styles.requestRowVisible : ""
              }`}
            >
              <span className={styles.requestKey}>Type</span>
              <span className={styles.requestValue}>{current.requestType}</span>
            </div>

            <div
              className={`${styles.requestRow} ${
                visibleRequestRows >= 2 ? styles.requestRowVisible : ""
              }`}
            >
              <span className={styles.requestKey}>Area</span>
              <span className={styles.requestValue}>{current.area}</span>
            </div>

            <div
              className={`${styles.requestRow} ${
                visibleRequestRows >= 3 ? styles.requestRowVisible : ""
              }`}
            >
              <span className={styles.requestKey}>Goal</span>
              <span className={styles.requestValue}>{current.goal}</span>
            </div>

            <div
              className={`${styles.requestRow} ${
                visibleRequestRows >= 4 ? styles.requestRowVisible : ""
              }`}
            >
              <span className={styles.requestKey}>Deliverable</span>
              <span className={styles.requestValue}>{current.deliverable}</span>
            </div>
          </div>
        </div>

        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.windowDots}>
              <span className={styles.windowDot} />
              <span className={styles.windowDot} />
              <span className={styles.windowDot} />
            </div>

            <span className={styles.fileName}>{current.file}</span>
            <span className={styles.editorStatus}>Building</span>
          </div>

          <div className={styles.buildSteps}>
            <span
              className={`${styles.buildStep} ${
                activeBuildStep >= 1 ? styles.buildStepActive : ""
              }`}
            >
              Intake
            </span>
            <span
              className={`${styles.buildStep} ${
                activeBuildStep >= 2 ? styles.buildStepActive : ""
              }`}
            >
              Scope
            </span>
            <span
              className={`${styles.buildStep} ${
                activeBuildStep >= 3 ? styles.buildStepActive : ""
              }`}
            >
              Structure
            </span>
            <span
              className={`${styles.buildStep} ${
                activeBuildStep >= 4 ? styles.buildStepActive : ""
              }`}
            >
              Build
            </span>
            <span
              className={`${styles.buildStep} ${
                activeBuildStep >= 5 ? styles.buildStepActive : ""
              }`}
            >
              Polish
            </span>
            <span
              className={`${styles.buildStep} ${
                activeBuildStep >= 6 ? styles.buildStepActive : ""
              }`}
            >
              Ship
            </span>
          </div>

          <div className={styles.buildMeter}>
            <span className={styles.buildMeterFill} />
          </div>

          <div className={styles.codeBlock}>
            <div
              className={`${styles.codeLine} ${
                visibleCodeLines >= 1 ? styles.codeLineVisible : ""
              }`}
            >
              <span className={styles.codeKeyword}>const</span>
              <span className={styles.codePlain}> title = </span>
              <span className={styles.codeString}>&quot;{current.title}&quot;</span>
            </div>

            <div
              className={`${styles.codeLine} ${
                visibleCodeLines >= 2 ? styles.codeLineVisible : ""
              }`}
            >
              <span className={styles.codeKeyword}>const</span>
              <span className={styles.codePlain}> cta = </span>
              <span className={styles.codeString}>&quot;{current.cta}&quot;</span>
            </div>

            <div
              className={`${styles.codeLine} ${
                visibleCodeLines >= 3 ? styles.codeLineVisible : ""
              }`}
            >
              <span className={styles.codeKeyword}>const</span>
              <span className={styles.codePlain}> section = </span>
              <span className={styles.codeString}>&quot;{current.eyebrow}&quot;</span>
            </div>

            <div
              className={`${styles.codeLine} ${
                visibleCodeLines >= 4 ? styles.codeLineVisible : ""
              }`}
            >
              <span className={styles.codeTag}>&lt;{current.componentName}</span>
              <span className={styles.codePlain}> title=</span>
              <span className={styles.codeString}>{"{title}"}</span>
              <span className={styles.codePlain}> cta=</span>
              <span className={styles.codeString}>{"{cta}"}</span>
              <span className={styles.codeTag}> /&gt;</span>
            </div>
          </div>
        </div>

        <div className={styles.previewCard}>
          <div className={styles.previewChrome}>
            <span className={styles.previewPill}>Ready to launch</span>
          </div>

          <div className={styles.previewSurface}>
            <div className={styles.previewViewport}>
              <div className={styles.previewScrollContent}>
                <span className={styles.previewEyebrow}>{current.eyebrow}</span>

                <h3 className={styles.previewTitle}>{current.title}</h3>

                <p className={styles.previewBody}>{current.body}</p>

                <div className={styles.previewMetaRow}>
                  <span className={styles.previewMetaPill}>{current.chips[0]}</span>
                  <span className={styles.previewMetaPill}>{current.chips[1]}</span>
                </div>

                <div className={styles.previewActions}>
                  <span className={styles.previewButton}>{current.cta}</span>
                </div>

                <div className={styles.previewSectionGrid}>
                  <div className={styles.previewInfoCard}>
                    <span className={styles.previewInfoLabel}>Flow</span>
                    <span className={styles.previewInfoValue}>Cleaner</span>
                  </div>

                  <div className={styles.previewInfoCard}>
                    <span className={styles.previewInfoLabel}>Action</span>
                    <span className={styles.previewInfoValue}>Clearer</span>
                  </div>
                </div>

                <div className={styles.previewList}>
                  <div className={styles.previewListRow}>
                    <span className={styles.previewListDot} />
                    <span className={styles.previewListText}>
                      Fewer steps to complete the core action
                    </span>
                  </div>

                  <div className={styles.previewListRow}>
                    <span className={styles.previewListDot} />
                    <span className={styles.previewListText}>
                      Better hierarchy for faster decisions
                    </span>
                  </div>

                  <div className={styles.previewListRow}>
                    <span className={styles.previewListDot} />
                    <span className={styles.previewListText}>
                      Cleaner structure for real-world use
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.cursor}>
                <span className={styles.cursorClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}