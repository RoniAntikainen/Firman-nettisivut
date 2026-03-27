"use client";

import { useEffect, useState } from "react";
import styles from "./ProcessFlowVisual.module.css";

const FLOW_STEPS = [
  "Broken",
  "Cut",
  "Shape",
  "Build",
  "See",
  "Own",
] as const;

const STEP_DETAILS = [
  "The real bottleneck gets named before the project turns vague.",
  "This is where most bad projects drift. Extra work gets removed here.",
  "The route gets arranged before code starts multiplying decisions.",
  "Only what matters gets built first.",
  "You see the path while it is still easy to correct.",
  "The result feels owned, not merely delivered.",
] as const;

const STEP_SIGNALS = [
  {
    status: "Broken flow identified",
  },
  {
    status: "Wrong work removed",
  },
  {
    status: "Route set in order",
  },
  {
    status: "Core path built",
  },
  {
    status: "Path reviewed early",
  },
  {
    status: "Ready to own",
  },
] as const;

export default function ProcessFlowVisual() {
  const [activeStep, setActiveStep] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const nextStep = (activeStep + 1) % FLOW_STEPS.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      setIsDocumentVisible(!document.hidden);
    };

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (!isDocumentVisible) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveStep((currentStep) => (currentStep + 1) % FLOW_STEPS.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [isDocumentVisible, prefersReducedMotion]);

  return (
    <div className={styles.shell} aria-hidden="true">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Process signal</span>
        <p className={styles.title}>How the wrong build becomes the right one.</p>
      </div>

      <div className={styles.statusPanel}>
        <div className={styles.statusTop}>
          <span className={styles.statusLabel}>Current stage</span>
          <span className={styles.statusPill}>{STEP_SIGNALS[activeStep].status}</span>
        </div>

        <p className={styles.statusTitle}>
          {String(activeStep + 1).padStart(2, "0")} {FLOW_STEPS[activeStep]}
        </p>
        <p className={styles.statusText}>{STEP_DETAILS[activeStep]}</p>

        <div className={styles.statusMeta}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Next</span>
            <p className={styles.metaText}>
              {String(nextStep + 1).padStart(2, "0")} {FLOW_STEPS[nextStep]}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.track}>
        <span
          className={styles.progress}
          style={{
            transform: `scaleY(${(activeStep + 1) / FLOW_STEPS.length})`,
          }}
        />

        <div className={styles.steps}>
          {FLOW_STEPS.map((step, index) => {
            const isActive = index === activeStep;
            const isComplete = index < activeStep;

            return (
              <div
                key={step}
                className={styles.step}
                data-active={isActive}
                data-complete={isComplete}
              >
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.copy}>
                  <span className={styles.stepLabel}>{step}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
