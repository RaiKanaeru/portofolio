"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>{}[]|";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  /**
   * When the scramble runs:
   * - "hover": on hover (legacy behavior, resets on leave)
   * - "view": decode once when scrolled into view, then settle
   * - "both": hover keeps working, plus a one-shot decode on first view
   */
  trigger?: "hover" | "view" | "both";
}

/** Runs one decode pass: random chars resolve into `text` left-to-right. */
function scrambleTick(text: string, setDisplayText: (value: string) => void) {
  let iteration = 0;
  const interval = setInterval(() => {
    setDisplayText(
      text
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("")
    );

    if (iteration >= text.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3; // Determines speed of resolution
  }, 30);
  return interval;
}

export default function ScrambleText({ text, className = "", as: Component = "span", trigger = "hover" }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  const doScramble = useCallback(() => scrambleTick(text, setDisplayText), [text]);

  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hover behavior (legacy default): scramble while hovered; the leave
  // handler settles the text back. Skipped for reduced-motion users.
  useEffect(() => {
    if (!trigger.includes("hover") || !isHovered || reducedMotion()) return;
    const interval = doScramble();
    return () => clearInterval(interval);
  }, [isHovered, trigger, doScramble]);

  // Scroll-into-view behavior: decode once, then leave the text settled.
  useEffect(() => {
    if (!trigger.includes("view")) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasViewed(true);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, text]);

  useEffect(() => {
    if (!hasViewed || !trigger.includes("view") || reducedMotion()) return;
    const interval = doScramble();
    return () => clearInterval(interval);
  }, [hasViewed, trigger, doScramble]);

  return (
    <Component
      ref={ref}
      className={className}
      onMouseEnter={trigger.includes("hover") ? () => setIsHovered(true) : undefined}
      onMouseLeave={
        trigger.includes("hover")
          ? () => {
              setIsHovered(false);
              setDisplayText(text);
            }
          : undefined
      }
    >
      {displayText}
    </Component>
  );
}
