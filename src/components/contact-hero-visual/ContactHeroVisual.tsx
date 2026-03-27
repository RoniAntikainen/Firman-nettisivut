"use client";

import { useEffect, useState } from "react";
import styles from "./ContactHeroVisual.module.css";

export default function ContactHeroVisual() {
  const [showMotionSignals, setShowMotionSignals] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 560px)");

    const updateMotionSignals = () => {
      setShowMotionSignals(!reducedMotionQuery.matches && !mobileQuery.matches);
    };

    updateMotionSignals();
    reducedMotionQuery.addEventListener("change", updateMotionSignals);
    mobileQuery.addEventListener("change", updateMotionSignals);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateMotionSignals);
      mobileQuery.removeEventListener("change", updateMotionSignals);
    };
  }, []);

  return (
    <div className={styles.shell} aria-hidden="true">
      <div className={styles.topBar}>
        <span className={styles.eyebrow}>Contact signal</span>
        <span className={styles.statusPill}>24h reply</span>
      </div>

      <div className={styles.visualFrame}>
        <div className={styles.gridGlow} />
        <div className={styles.ambientGlow} />
        <div className={styles.focusBeam} />

        <div className={styles.mapLabels}>
          <div className={styles.mapLabel}>
            <span className={styles.mapLabelTitle}>Problem</span>
            <span className={styles.mapLabelText}>Scattered signals</span>
          </div>
          <div className={styles.mapLabel}>
            <span className={styles.mapLabelTitle}>We combine</span>
            <span className={styles.mapLabelText}>One clear view</span>
          </div>
          <div className={`${styles.mapLabel} ${styles.mapLabelActive}`}>
            <span className={styles.mapLabelTitle}>Working system</span>
            <span className={styles.mapLabelText}>One clear path</span>
          </div>
        </div>

        <svg
          className={styles.visual}
          viewBox="0 0 560 420"
          role="presentation"
          focusable="false"
        >
          <defs>
            <filter id="contact-soft-blur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          <g className={styles.noiseGroup}>
            <circle className={styles.noiseOrb} cx="72" cy="92" r="12" />
            <circle className={styles.noiseOrb} cx="92" cy="138" r="7" />
            <circle className={styles.noiseOrb} cx="64" cy="188" r="9" />
            <circle className={styles.noiseOrb} cx="90" cy="236" r="6" />
            <circle className={styles.noiseOrb} cx="78" cy="292" r="10" />
            <circle className={styles.noiseOrb} cx="128" cy="104" r="8" />
            <circle className={styles.noiseOrb} cx="144" cy="156" r="11" />
            <circle className={styles.noiseOrb} cx="126" cy="210" r="7" />
            <circle className={styles.noiseOrb} cx="150" cy="266" r="8" />
            <circle className={styles.noiseOrb} cx="186" cy="128" r="6" />
            <circle className={styles.noiseOrb} cx="192" cy="196" r="8" />
            <circle className={styles.noiseOrb} cx="182" cy="254" r="5" />

            <path className={styles.noiseTrace} d="M72 92C122 120 164 150 212 178" />
            <path className={styles.noiseTrace} d="M64 188C114 190 160 194 212 198" />
            <path className={styles.noiseTrace} d="M78 292C126 270 166 240 212 218" />
            <path className={styles.noiseTrace} d="M144 156C172 168 190 176 214 186" />
            <path className={styles.noiseTrace} d="M150 266C176 246 194 232 214 214" />
          </g>

          <g className={styles.structureGroup}>
            <path
              className={styles.mergeGuide}
              d="M212 178C228 190 236 198 244 210"
            />
            <path
              className={styles.mergeGuide}
              d="M212 198C228 202 236 206 244 210"
            />
            <path
              className={styles.mergeGuide}
              d="M212 218C228 214 236 212 244 210"
            />

            <path
              className={styles.routeBase}
              d="M244 210C292 210 326 210 356 210H406"
            />
            <path
              className={styles.routeBase}
              d="M244 210C286 210 316 188 340 166C360 148 380 142 406 142"
            />
            <path
              className={styles.routeBase}
              d="M244 210C286 210 316 232 340 254C360 272 380 278 406 278"
            />

            <path
              className={styles.routeFocus}
              pathLength="100"
              d="M244 210C292 210 326 210 356 210H406"
            />

            <circle className={styles.coreGlow} cx="244" cy="210" r="74" />
            <circle className={styles.coreRing} cx="244" cy="210" r="46" />
            <circle className={styles.coreRingInner} cx="244" cy="210" r="28" />
            <circle className={styles.coreCenter} cx="244" cy="210" r="18" />

            <circle className={styles.node} cx="212" cy="198" r="6" />
            <circle className={styles.node} cx="212" cy="218" r="6" />
            <circle className={styles.nodeStrong} cx="406" cy="210" r="9" />

            <rect className={styles.toolShell} x="406" y="122" width="108" height="176" rx="28" />
            <rect className={styles.toolPanel} x="424" y="144" width="72" height="22" rx="11" />
            <rect className={styles.toolLine} x="424" y="182" width="62" height="9" rx="4.5" />
            <rect className={styles.toolLineSoft} x="424" y="200" width="74" height="9" rx="4.5" />
            <rect className={styles.toolLineSoft} x="424" y="218" width="56" height="9" rx="4.5" />
            <rect className={styles.toolLineSoft} x="424" y="236" width="66" height="9" rx="4.5" />
            <circle className={styles.toolOrb} cx="438" cy="268" r="12" />
            <circle className={styles.toolOrbSoft} cx="468" cy="268" r="8" />
            <circle className={styles.toolOrbSoft} cx="492" cy="268" r="8" />

            <circle className={styles.pulse} cx="406" cy="210" r="30" />

            {showMotionSignals ? (
              <>
                <circle className={styles.signalDotPrimary} r="5">
                  <animateMotion
                    dur="10.8s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path="M72 92C122 120 164 150 212 178C228 190 236 198 244 210C292 210 326 210 356 210H406"
                  />
                </circle>

                <circle className={styles.signalDotSecondary} r="3.5">
                  <animateMotion
                    dur="13.2s"
                    repeatCount="indefinite"
                    begin="-4s"
                    rotate="auto"
                    path="M64 188C114 190 160 194 212 198C228 202 236 206 244 210C286 210 316 188 340 166C360 148 380 142 406 142"
                  />
                </circle>

                <circle className={styles.signalDotTertiary} r="3.5">
                  <animateMotion
                    dur="12.4s"
                    repeatCount="indefinite"
                    begin="-7s"
                    rotate="auto"
                    path="M78 292C126 270 166 240 212 218C228 214 236 212 244 210C286 210 316 232 340 254C360 272 380 278 406 278"
                  />
                </circle>
              </>
            ) : null}
          </g>
        </svg>

        <div className={styles.focusCard}>
          <span className={styles.focusLabel}>Working system</span>
          <p className={styles.focusTitle}>One clear path</p>
        </div>

        <div className={styles.stageRail}>
          <div className={styles.stage}>
            <span className={styles.stageLabel}>Problem</span>
          </div>
          <div className={styles.stage}>
            <span className={styles.stageLabel}>We combine</span>
          </div>
          <div className={styles.stage} data-active="true">
            <span className={styles.stageLabel}>Working system</span>
          </div>
        </div>
      </div>
    </div>
  );
}
