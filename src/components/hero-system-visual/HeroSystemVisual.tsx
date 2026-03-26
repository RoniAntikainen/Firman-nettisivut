"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HeroSystemVisual.module.css";
import { PROCESS_ITEMS } from "./data/processItems";
import { createLayoutSequence, getRandomLayoutStartIndex } from "./lib/layouts";

import type { Layout, Phase } from "./types";

type CardSlotKey = keyof Layout;

type CardSlotOrder = {
  request: CardSlotKey;
  editor: CardSlotKey;
  preview: CardSlotKey;
};



function getRandomCardSlotOrder(): CardSlotOrder {
  const slots: CardSlotKey[] = ["request", "editor", "preview"];

  for (let index = slots.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const current = slots[index];
    slots[index] = slots[swapIndex];
    slots[swapIndex] = current;
  }

  return {
    request: slots[0],
    editor: slots[1],
    preview: slots[2],
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}


const CARD_EDGE_INSET_PX = 16;
const PREVIEW_READY_SCALE = 1.03;

function clampCardLeft(left: number, rootWidth: number, measuredCardWidth: number, scale = 1) {
  const safeCardWidth = measuredCardWidth * scale;
  const maxLeft = Math.max(CARD_EDGE_INSET_PX, rootWidth - safeCardWidth - CARD_EDGE_INSET_PX);

  return clamp(left, CARD_EDGE_INSET_PX, maxLeft);
}

const READY_CURSOR_SYNC_DURATION_MS = 520;

export default function HeroSystemVisual() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const previewViewportRef = useRef<HTMLDivElement | null>(null);
  const previewButtonRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const requestCardRef = useRef<HTMLDivElement | null>(null);
  const editorCardRef = useRef<HTMLDivElement | null>(null);
  const previewCardRef = useRef<HTMLDivElement | null>(null);

  const [measuredCardWidths, setMeasuredCardWidths] = useState({
    request: 304,
    editor: 344,
    preview: 464,
  });

  const [phase, setPhase] = useState<Phase>("intro");
  const [itemIndex, setItemIndex] = useState(0);
  const [visibleRequestRows, setVisibleRequestRows] = useState(0);
  const [visibleCodeLines, setVisibleCodeLines] = useState(0);
  const [activeBuildStep, setActiveBuildStep] = useState(0);
  const [layoutSequence, setLayoutSequence] = useState<Layout[]>([]);
  const [activeLayoutIndex, setActiveLayoutIndex] = useState(0);
  const [cardSlotOrder, setCardSlotOrder] = useState<CardSlotOrder>(() => getRandomCardSlotOrder());

  const current = PROCESS_ITEMS[itemIndex];
  const currentLayout = layoutSequence[activeLayoutIndex] ?? null;
  const requestPosition = currentLayout ? currentLayout[cardSlotOrder.request] : null;
  const editorPosition = currentLayout ? currentLayout[cardSlotOrder.editor] : null;
  const previewPosition = currentLayout ? currentLayout[cardSlotOrder.preview] : null;
  const rootWidth = sceneRef.current?.clientWidth ?? rootRef.current?.clientWidth ?? 0;
  const requestMeasuredWidth = measuredCardWidths.request;
  const editorMeasuredWidth = measuredCardWidths.editor;
  const previewMeasuredWidth = measuredCardWidths.preview;

  const requestLeft = requestPosition
    ? clampCardLeft(requestPosition.left, rootWidth, requestMeasuredWidth)
    : 0;
  const editorLeft = editorPosition
    ? clampCardLeft(editorPosition.left, rootWidth, editorMeasuredWidth)
    : 0;
  const previewLeft = previewPosition
    ? clampCardLeft(
        previewPosition.left,
        rootWidth,
        previewMeasuredWidth,
        phase === "ready" ? PREVIEW_READY_SCALE : 1
      )
    : 0;

  const editorStatusLabel =
    phase === "ready" || phase === "handoff"
      ? "Ready"
      : phase === "polish"
        ? "Polishing"
        : "Building";

  const previewPillLabel =
    phase === "polish" ? "Final preview" : "Ready to launch";

  const refreshLayoutSequence = useCallback((pickRandomStart: boolean) => {
    const root = rootRef.current;
    if (!root) return;

    const nextSequence = createLayoutSequence(root.clientWidth, root.clientHeight);
    setLayoutSequence(nextSequence);

    setActiveLayoutIndex((currentIndex) => {
      if (nextSequence.length === 0) return 0;
      if (pickRandomStart) return getRandomLayoutStartIndex(nextSequence.length);
      return currentIndex % nextSequence.length;
    });
  }, []);

  const syncCursorTarget = useCallback(() => {
    const viewport = previewViewportRef.current;
    const button = previewButtonRef.current;
    const cursor = cursorRef.current;

    if (!viewport || !button || !cursor) return;

    const viewportRect = viewport.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const buttonCenterX = buttonRect.left - viewportRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top - viewportRect.top + buttonRect.height / 2;

    const cursorVisualHotspotOffsetX = 10;
    const cursorVisualHotspotOffsetY = 12;

    const targetX = clamp(
      buttonCenterX - cursorVisualHotspotOffsetX,
      8,
      Math.max(8, viewportRect.width - 8)
    );

    const targetY = clamp(
      buttonCenterY - cursorVisualHotspotOffsetY,
      8,
      Math.max(8, viewportRect.height - 8)
    );

    const startX = clamp(targetX + 92, 10, Math.max(10, viewportRect.width - 10));
    const startY = clamp(targetY - 108, 8, Math.max(8, viewportRect.height - 8));

    const mid1X = clamp(targetX + 38, 8, Math.max(8, viewportRect.width - 8));
    const mid1Y = clamp(targetY - 56, 8, Math.max(8, viewportRect.height - 8));

    const mid2X = clamp(targetX + 12, 8, Math.max(8, viewportRect.width - 8));
    const mid2Y = clamp(targetY - 18, 8, Math.max(8, viewportRect.height - 8));

    cursor.style.setProperty("--cursor-start-x", `${startX}px`);
    cursor.style.setProperty("--cursor-start-y", `${startY}px`);
    cursor.style.setProperty("--cursor-mid-1-x", `${mid1X}px`);
    cursor.style.setProperty("--cursor-mid-1-y", `${mid1Y}px`);
    cursor.style.setProperty("--cursor-mid-2-x", `${mid2X}px`);
    cursor.style.setProperty("--cursor-mid-2-y", `${mid2Y}px`);
    cursor.style.setProperty("--cursor-target-x", `${targetX}px`);
    cursor.style.setProperty("--cursor-target-y", `${targetY}px`);
  }, []);

  useEffect(() => {
    refreshLayoutSequence(true);
    setCardSlotOrder(getRandomCardSlotOrder());

    const onResize = () => {
      refreshLayoutSequence(false);
      syncCursorTarget();

      const nextRequestWidth = requestCardRef.current?.offsetWidth ?? 304;
      const nextEditorWidth = editorCardRef.current?.offsetWidth ?? 344;
      const nextPreviewWidth = previewCardRef.current?.offsetWidth ?? 464;

      setMeasuredCardWidths((currentWidths) => {
        if (
          currentWidths.request === nextRequestWidth &&
          currentWidths.editor === nextEditorWidth &&
          currentWidths.preview === nextPreviewWidth
        ) {
          return currentWidths;
        }

        return {
          request: nextRequestWidth,
          editor: nextEditorWidth,
          preview: nextPreviewWidth,
        };
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [refreshLayoutSequence]);

  useEffect(() => {
    syncCursorTarget();
  }, [syncCursorTarget, currentLayout, itemIndex, phase]);

  useEffect(() => {
    const updateMeasuredWidths = () => {
      const nextRequestWidth = requestCardRef.current?.offsetWidth ?? 304;
      const nextEditorWidth = editorCardRef.current?.offsetWidth ?? 344;
      const nextPreviewWidth = previewCardRef.current?.offsetWidth ?? 464;

      setMeasuredCardWidths((currentWidths) => {
        if (
          currentWidths.request === nextRequestWidth &&
          currentWidths.editor === nextEditorWidth &&
          currentWidths.preview === nextPreviewWidth
        ) {
          return currentWidths;
        }

        return {
          request: nextRequestWidth,
          editor: nextEditorWidth,
          preview: nextPreviewWidth,
        };
      });
    };

    updateMeasuredWidths();

    const frameId = window.requestAnimationFrame(updateMeasuredWidths);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [currentLayout, cardSlotOrder, itemIndex, phase]);

  useEffect(() => {
    if (phase !== "ready") return;

    let frameId = 0;
    let isActive = true;
    const startedAt = performance.now();

    const update = (now: number) => {
      if (!isActive) return;

      syncCursorTarget();

      if (now - startedAt < READY_CURSOR_SYNC_DURATION_MS) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    frameId = window.requestAnimationFrame(update);

    return () => {
      isActive = false;
      window.cancelAnimationFrame(frameId);
    };
  }, [phase, syncCursorTarget]);

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
      setActiveLayoutIndex((currentIndex) => {
        if (layoutSequence.length === 0) return 0;
        if (layoutSequence.length === 1) return 0;

        let nextIndex = currentIndex;

        while (nextIndex === currentIndex) {
          nextIndex = Math.floor(Math.random() * layoutSequence.length);
        }

        return nextIndex;
      });
      setCardSlotOrder(getRandomCardSlotOrder());

      setItemIndex((currentItemIndex) => (currentItemIndex + 1) % PROCESS_ITEMS.length);
      setVisibleRequestRows(0);
      setVisibleCodeLines(0);
      setActiveBuildStep(0);
      setPhase("request");
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [phase, layoutSequence.length]);

  return (
    <div
      ref={rootRef}
      className={styles.video}
      data-phase={phase}
      aria-hidden="true"
    >
      <div ref={sceneRef} className={styles.scene}>
        {currentLayout ? (
          <>
            <div
              className={styles.requestCard}
              ref={requestCardRef}
              style={{
                top: `${requestPosition?.top ?? 0}px`,
                left: `${requestLeft}px`,
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
              ref={editorCardRef}
              style={{
                top: `${editorPosition?.top ?? 0}px`,
                left: `${editorLeft}px`,
              }}
            >
              <div className={styles.editorHeader}>
                <div className={styles.windowDots}>
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                </div>

                <span className={styles.fileName}>{current.file}</span>
                <span className={styles.editorStatus}>{editorStatusLabel}</span>
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
              ref={previewCardRef}
              style={{
                top: `${previewPosition?.top ?? 0}px`,
                left: `${previewLeft}px`,
              }}
            >
              <div className={styles.previewChrome}>
                <span className={styles.previewPill}>{previewPillLabel}</span>
              </div>

              <div className={styles.previewSurface}>
                <div ref={previewViewportRef} className={styles.previewViewport}>
                  <div className={styles.previewScrollContent}>
                    <span className={styles.previewEyebrow}>{current.eyebrow}</span>

                    <h3 className={styles.previewTitle}>{current.title}</h3>

                    <p className={styles.previewBody}>{current.body}</p>

                    <div className={styles.previewMetaRow}>
                      <span className={styles.previewMetaPill}>{current.chips[0]}</span>
                      <span className={styles.previewMetaPill}>{current.chips[1]}</span>
                    </div>

                    <div className={styles.previewActions}>
                      <span ref={previewButtonRef} className={styles.previewButton}>
                        {current.cta}
                      </span>
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

                  <div ref={cursorRef} className={styles.cursor}>
                    <span className={styles.cursorClick} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}