"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Laravel", level: 83, color: "#ff2d20" },
  { name: "Next.js", level: 70, color: "#2563eb" },
  { name: "TypeScript", level: 68, color: "#3178c6" },
  { name: "Flutter", level: 75, color: "#027dfd" },
  { name: "Go", level: 55, color: "#00add8" },
  { name: "Firebase", level: 70, color: "#ffca28" },
  { name: "PostgreSQL", level: 55, color: "#336791" },
  { name: "REST API", level: 72, color: "#2563eb" },
  { name: "Git", level: 70, color: "#f05032" },
  { name: "ESP32/IoT", level: 45, color: "#e7352c" },
];

export default function SkillBars() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      {skills.map((skill, i) => (
        <div key={skill.name} className="group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ink)]">
              {skill.name}
            </span>
            <span className="text-[10px] font-bold text-[var(--dim)] tabular-nums">
              {animated ? skill.level : 0}%
            </span>
          </div>
          <div className="h-[6px] bg-[var(--line-subtle)] overflow-hidden">
            <div
              className="h-full transition-all duration-[1500ms] ease-out"
              style={{
                width: animated ? `${skill.level}%` : "0%",
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                boxShadow: animated ? `0 0 12px ${skill.color}66` : "none",
                transitionDelay: `${i * 100}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

