"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.round(eased * target);
            setCount(start);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="border-r border-[var(--line)] p-6 last:border-r-0">
      <p className="heading-font text-4xl font-bold text-[var(--ink)]">
        {String(count).padStart(2, "0")}
      </p>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--dim)]">{label}</p>
    </div>
  );
}

