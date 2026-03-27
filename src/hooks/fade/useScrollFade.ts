"use client";

import { useEffect } from "react";

type ScrollFadeOptions = {
  triggerFactor?: number;
  power?: number;
  start?: number;
};

export function useScrollFade(
  ref: React.RefObject<HTMLElement | null>,
  options?: ScrollFadeOptions
) {
  const triggerFactor = options?.triggerFactor ?? 0.99;
  const power = options?.power ?? 1.6;
  const start = options?.start ?? 75;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--fade-start", "0%");
      return;
    }

    let rafId: number | null = null;

    const updateFade = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const triggerRange = viewportHeight * triggerFactor;

      const progress = Math.min(
        Math.max(1 - rect.top / triggerRange, 0),
        1
      );

      const eased = Math.pow(progress, power);
      const value = Math.max(start - eased * start, 0);

      el.style.setProperty("--fade-start", `${value}%`);
      rafId = null;
    };

    const requestUpdate = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(updateFade);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [ref, power, start, triggerFactor]);
}
