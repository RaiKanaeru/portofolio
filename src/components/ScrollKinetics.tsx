"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-driven effects: parallax on hero title,
 * progressive section reveals with proportional transforms.
 * Uses IntersectionObserver + rAF, no scroll listeners.
 */
export default function ScrollKinetics() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Parallax: hero title moves up at 0.3x scroll speed
    const heroTitle = document.querySelector<HTMLElement>(".hero-title");
    // Section beam activation on scroll
    const beams = document.querySelectorAll<HTMLElement>(".section-beam");

    let lastScroll = 0;
    let ticking = false;

    const onScroll = () => {
      lastScroll = window.scrollY;
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          // Parallax
          if (heroTitle && lastScroll < window.innerHeight) {
            heroTitle.style.transform = `translateY(${lastScroll * 0.15}px)`;
          }

          // Beams: scale up when near viewport
          beams.forEach((beam) => {
            const rect = beam.getBoundingClientRect();
            const vh = window.innerHeight;
            if (rect.top < vh && rect.bottom > 0) {
              beam.style.opacity = "1";
            }
          });

          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return null; // ponytail: render-nothing component, pure side-effect
}
