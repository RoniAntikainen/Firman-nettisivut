"use client";

import { useEffect, useRef, useState } from "react";
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

type CardKey = "request" | "editor" | "preview";

type CardSize = {
  width: number;
  height: number;
};

type CardPosition = {
  top: number;
  left: number;
};

type Layout = Record<CardKey, CardPosition>;

type Rect = {
  left: number;
  top: number;
  right: number;
  bottom: number;
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

const CARD_SIZES: Record<CardKey, CardSize> = {
  request: { width: 312, height: 190 },
  editor: { width: 352, height: 248 },
  preview: { width: 392, height: 312 },
};

const DEFAULT_LAYOUT: Layout = {
  request: { top: 20, left: 20 },
  editor: { top: 120, left: 280 },
  preview: { top: 110, left: 520 },
};

const SCENE_PADDING = 20;
const CARD_GAP = 18;
const MAX_LAYOUT_ATTEMPTS = 120;
const LAYOUT_CANDIDATE_COUNT = 40;

function randomBetween(min: number, max: number) {
  if (max <= min) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRect(position: CardPosition, size: CardSize): Rect {
  return {
    left: position.left,
    top: position.top,
    right: position.left + size.width,
    bottom: position.top + size.height,
  };
}

function rectsOverlap(a: Rect, b: Rect, gap: number) {
  return !(
    a.right + gap <= b.left ||
    b.right + gap <= a.left ||
    a.bottom + gap <= b.top ||
    b.bottom + gap <= a.top
  );
}

function getRandomPosition(
  containerWidth: number,
  containerHeight: number,
  size: CardSize
): CardPosition {
  const maxLeft = Math.max(
    SCENE_PADDING,
    containerWidth - size.width - SCENE_PADDING
  );
  const maxTop = Math.max(
    SCENE_PADDING,
    containerHeight - size.height - SCENE_PADDING
  );

  return {
    left: randomBetween(SCENE_PADDING, maxLeft),
    top: randomBetween(SCENE_PADDING, maxTop),
  };
}

function getRectCenter(rect: Rect) {
  return {
    x: (rect.left + rect.right) / 2,
    y: (rect.top + rect.bottom) / 2,
  };
}

function getDistanceBetweenRects(a: Rect, b: Rect) {
  const aCenter = getRectCenter(a);
  const bCenter = getRectCenter(b);

  const dx = aCenter.x - bCenter.x;
  const dy = aCenter.y - bCenter.y;

  return Math.sqrt(dx * dx + dy * dy);
}

function getSpreadScore(candidateRect: Rect, placedRects: Rect[]) {
  if (placedRects.length === 0) {
    return Number.MAX_SAFE_INTEGER;
  }

  let minDistance = Infinity;

  for (const rect of placedRects) {
    const distance = getDistanceBetweenRects(candidateRect, rect);
    if (distance < minDistance) {
      minDistance = distance;
    }
  }

  return minDistance;
}

function pickBestPosition(
  containerWidth: number,
  containerHeight: number,
  size: CardSize,
  placedRects: Rect[]
): CardPosition | null {
  let bestPosition: CardPosition | null = null;
  let bestScore = -Infinity;

  for (let attempt = 0; attempt < MAX_LAYOUT_ATTEMPTS; attempt += 1) {
    const candidate = getRandomPosition(containerWidth, containerHeight, size);
    const candidateRect = createRect(candidate, size);

    const collides = placedRects.some((rect) =>
      rectsOverlap(candidateRect, rect, CARD_GAP)
    );

    if (collides) continue;

    const score = getSpreadScore(candidateRect, placedRects);

    if (score > bestScore) {
      bestScore = score;
      bestPosition = candidate;
    }
  }

  return bestPosition;
}

function generateRandomLayout(containerWidth: number, containerHeight: number): Layout {
  const keys: CardKey[] = ["preview", "editor", "request"];
  let bestLayout: Layout | null = null;
  let bestLayoutScore = -Infinity;

  for (let layoutAttempt = 0; layoutAttempt < LAYOUT_CANDIDATE_COUNT; layoutAttempt += 1) {
    const placed: Partial<Layout> = {};
    const placedRects: Rect[] = [];
    let failed = false;

    for (const key of keys) {
      const size = CARD_SIZES[key];
      const chosen = pickBestPosition(
        containerWidth,
        containerHeight,
        size,
        placedRects
      );

      if (!chosen) {
        failed = true;
        break;
      }

      placed[key] = chosen;
      placedRects.push(createRect(chosen, size));
    }

    if (failed) continue;

    let layoutScore = Infinity;

    for (let i = 0; i < placedRects.length; i += 1) {
      for (let j = i + 1; j < placedRects.length; j += 1) {
        const distance = getDistanceBetweenRects(placedRects[i], placedRects[j]);
        if (distance < layoutScore) {
          layoutScore = distance;
        }
      }
    }

    if (layoutScore > bestLayoutScore) {
      bestLayoutScore = layoutScore;
      bestLayout = placed as Layout;
    }
  }

  return bestLayout ?? DEFAULT_LAYOUT;
}

export default function HeroSystemVisual() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const [phase, setPhase] = useState<Phase>("intro");
  const [itemIndex, setItemIndex] = useState(0);
  const [visibleRequestRows, setVisibleRequestRows] = useState(0);
  const [visibleCodeLines, setVisibleCodeLines] = useState(0);
  const [activeBuildStep, setActiveBuildStep] = useState(0);
  const [layout, setLayout] = useState<Layout>(DEFAULT_LAYOUT);

  const current = PROCESS_ITEMS[itemIndex];

  const randomizeLayout = () => {
    const root = rootRef.current;
    if (!root) return;

    const nextLayout = generateRandomLayout(root.clientWidth, root.clientHeight);
    setLayout(nextLayout);
  };

  useEffect(() => {
    randomizeLayout();

    const onResize = () => {
      randomizeLayout();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
      randomizeLayout();
      setItemIndex((currentItemIndex) => (currentItemIndex + 1) % PROCESS_ITEMS.length);
      setVisibleRequestRows(0);
      setVisibleCodeLines(0);
      setActiveBuildStep(0);
      setPhase("request");
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  return (
    <div
      ref={rootRef}
      className={styles.video}
      data-phase={phase}
      aria-hidden="true"
    >
      <div className={styles.scene}>
        <div
          className={styles.requestCard}
          style={{
            top: `${layout.request.top}px`,
            left: `${layout.request.left}px`,
          }}
        >
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

        <div
          className={styles.editorCard}
          style={{
            top: `${layout.editor.top}px`,
            left: `${layout.editor.left}px`,
          }}
        >
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

        <div
          className={styles.previewCard}
          style={{
            top: `${layout.preview.top}px`,
            left: `${layout.preview.left}px`,
          }}
        >
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