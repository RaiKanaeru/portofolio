"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
}

export default function ScrollRevealText({ text, className = "", as: Tag = "p" }: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0;
          const interval = setInterval(() => {
            count++;
            setVisibleCount(count);
            if (count >= words.length) {
              clearInterval(interval);
            }
          }, 60);
          observer.unobserve(el);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [words.length]);

  return (
    <Tag ref={ref as any} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0px)" : "translateY(8px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
