"use client";

import { useEffect } from "react";

/**
 * Lightweight scroll-reveal hook.
 * - Toggles `data-reveal-state` on elements with [data-reveal] when they enter the viewport.
 * - CSS in globals.css keys off this attribute for fade/slide in & out.
 * - Optional `data-reveal-delay="ms"` and `data-reveal-axis="y|x|scale"` attrs per element.
 * - Single shared IntersectionObserver; no deps. Reduced-motion users skip animation.
 */
export default function ScrollRevealOnView() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal-state])");
    if (targets.length === 0) return;

    if (reduced) {
      targets.forEach((el) => {
        el.dataset.revealState = "visible";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.dataset.revealState = "visible";
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    // Secondary reveal-on-scroll path: listens to scroll, decoupled from IO.
    // Some headless/background tabs throttle IO callbacks; this stays simple.
    const onScroll = () => {
      const vh = window.innerHeight;
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.92 && rect.bottom > 0) {
          if (el.dataset.revealState !== "visible") {
            el.dataset.revealState = "visible";
            observer.unobserve(el);
          }
        } else if (rect.bottom < 0) {
          el.dataset.revealState = "hidden";
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Fallback: anything already in viewport at mount gets revealed immediately.
    // IO callbacks can be delayed (or skipped) in headless/background tabs.
    const fallback = (window.requestIdleCallback ?? window.setTimeout)(() => {
      for (const el of targets) {
        if (el.dataset.revealState !== "visible") {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.dataset.revealState = "visible";
            observer.unobserve(el);
          }
        }
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (window.cancelIdleCallback) window.cancelIdleCallback(fallback as number);
      else clearTimeout(fallback as number);
    };
  }, []);

  return null;
}
