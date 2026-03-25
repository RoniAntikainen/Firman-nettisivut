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
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      triggerFactor = 0.99,
      power = 1.6,
      start = 75,
    } = options || {};

    const onScroll = () => {
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
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, options]);
}
