"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Decorative animated code snippet — animejs-style "flavor" between sections.
 * Purely decorative: `aria-hidden`.
 */
const SNIPPET = [
  "// boot_sequence() — home_page",
  "await scramble('.hero-identity', { resolve: 30 })",
  "animate('.hero-terminal-wrap', { opacity: 1, y: 0, ease: 'inOutExpo' })",
  "console.log('[ok] dossier —', query('.dossier-card').length, 'case files live')",
];

export default function CodeFlavor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-live");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-live");
        observer.disconnect();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="code-flavor spotlight-card" aria-hidden="true">
      <div className="code-flavor__bar">
        <span className="code-flavor__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>raihan@portfolio: ~/src/app/page.tsx</span>
        <span className="code-flavor__tag">DECORATIVE_SNIPPET</span>
      </div>
      <pre className="code-flavor__body">
        {SNIPPET.map((line, i) => (
          <span
            key={line}
            className="code-flavor__line"
            style={{ "--cf-i": i } as CSSProperties}
          >
            {line}
            {i === SNIPPET.length - 1 && <span className="code-flavor__cursor" />}
          </span>
        ))}
      </pre>
    </div>
  );
}
