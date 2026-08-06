"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export default function CyberEffects() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasMouse, setHasMouse] = useState(false);

  const pathname = usePathname();

  // Scroll-reveal: re-run on every route change, with a safety fallback so
  // content can never get stuck invisible if the observer misses elements.
  useEffect(() => {
    const revealAll = () => {
      document
        .querySelectorAll(".cyber-reveal:not(.cyber-visible)")
        .forEach((el) => el.classList.add("cyber-visible"));
    };

    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cyber-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const raf = requestAnimationFrame(() => {
      document.querySelectorAll(".cyber-reveal").forEach((el) => observer.observe(el));
    });
    // If the observer hasn't revealed everything shortly after paint, force it.
    const fallback = window.setTimeout(revealAll, 1200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    // Mouse tracking for custom cursor and spotlight cards
    const handleMouseMove = (e: MouseEvent) => {
      setHasMouse(true);
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, .cursor-target") !== null;
      
      setIsHovering(isClickable);

      const cards = document.querySelectorAll(".spotlight-card") as NodeListOf<HTMLElement>;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Check if device supports hover before adding custom cursor class
    if (window.matchMedia("(hover: hover)").matches) {
      document.body.classList.add("custom-cursor-active");
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div className="crt-noise" />
      {hasMouse && (
        <>
          <div
            className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 mix-blend-screen"
            style={{
              background: `radial-gradient(800px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 255, 255, 0.03), transparent 40%)`
            }}
          />
          <div
            className={`cyber-cursor ${isHovering ? "hovering" : ""}`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          />
        </>
      )}
    </>
  );
}

