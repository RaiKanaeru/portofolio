"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [revealClass, setRevealClass] = useState("");
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    const resetTimer = setTimeout(() => setRevealClass(""), 0);
    const loadTimer = setTimeout(() => setRevealClass("is-loaded"), 40);
    const doneTimer = setTimeout(() => setRevealClass("is-loaded reveal-complete"), 760);
    return () => {
      clearTimeout(resetTimer);
      clearTimeout(loadTimer);
      clearTimeout(doneTimer);
    };
  }, [pathname]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsTransitioning(true));
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 250);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname, children]);

  return (
    <div
      className={revealClass || undefined}
      style={{
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? "translateY(8px)" : "translateY(0)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}
    >
      {displayChildren}
    </div>
  );
}

