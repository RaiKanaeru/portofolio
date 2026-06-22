"use client";

import { useEffect, useRef } from "react";

const words = [
  "FULLSTACK", "DEVELOPER", "BACKEND", "MOBILE", "IoT",
  "NEXT.JS", "LARAVEL", "FLUTTER", "GO", "REACT",
  "TYPESCRIPT", "FIREBASE", "DOCKER", "REST_API", "MQTT",
];

export default function OrbitingIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 380;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;

    const draw = (time: number) => {
      try {
      ctx.clearRect(0, 0, size, size);

      // Draw orbits
      const orbits = [85, 130, 170];
      orbits.forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Orbiting words
      words.forEach((word, i) => {
        const orbitIndex = i % orbits.length;
        const radius = orbits[orbitIndex];
        const speed = 0.0003 + orbitIndex * 0.0001;
        const offset = (i / words.length) * Math.PI * 2;
        const angle = time * speed * (i % 2 === 0 ? 1 : -1) + offset;

        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;

        // Glow dot
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();

        // Connection line to center (very faint)
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Text label
        ctx.save();
        ctx.font = "bold 8px monospace";
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(word, x, y - 10);
        ctx.restore();
      });

      } catch (e) {
        console.error("Orbit animation error:", e);
      }
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      
      
    >
      <canvas
        ref={canvasRef}
        className="opacity-60 hover:opacity-100 transition-opacity duration-500"
        style={{ width: 380, height: 380 }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--dim)]">
          TECH_ORBIT
        </span>
      </div>
    </div>
  );
}

