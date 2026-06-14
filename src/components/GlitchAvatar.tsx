"use client";

import { useEffect, useRef } from "react";

export default function GlitchAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = 280;
    const h = 320;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    let lastGlitch = 0;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      // Background frame
      ctx.strokeStyle = "rgba(34, 211, 238, 0.15)";
      ctx.lineWidth = 1;
      ctx.strokeRect(0.5, 0.5, w - 1, h - 1);

      // Inner gradient bg
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "rgba(34, 211, 238, 0.03)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(1, 1, w - 2, h - 2);

      // Scan lines
      for (let y = 0; y < h; y += 3) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        ctx.fillRect(0, y, w, 1);
      }

      // Avatar silhouette (abstract geometric head/shoulders)
      const cx = w / 2;
      const headY = 90;
      const headR = 45;

      // Head circle
      ctx.beginPath();
      ctx.arc(cx, headY, headR, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34, 211, 238, 0.08)";
      ctx.fill();
      ctx.strokeStyle = "rgba(34, 211, 238, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Eyes (two horizontal lines)
      const eyeY = headY - 5;
      ctx.beginPath();
      ctx.moveTo(cx - 18, eyeY);
      ctx.lineTo(cx - 8, eyeY);
      ctx.moveTo(cx + 8, eyeY);
      ctx.lineTo(cx + 18, eyeY);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Shoulders trapezoid
      ctx.beginPath();
      ctx.moveTo(cx - 30, headY + headR + 10);
      ctx.lineTo(cx - 80, h - 30);
      ctx.lineTo(cx + 80, h - 30);
      ctx.lineTo(cx + 30, headY + headR + 10);
      ctx.closePath();
      ctx.fillStyle = "rgba(34, 211, 238, 0.04)";
      ctx.fill();
      ctx.strokeStyle = "rgba(34, 211, 238, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // ID data overlay
      ctx.font = "bold 8px monospace";
      ctx.fillStyle = "rgba(34, 211, 238, 0.4)";
      ctx.textAlign = "left";
      ctx.fillText("ID: RA-001", 12, h - 60);
      ctx.fillText("STATUS: ACTIVE", 12, h - 48);
      ctx.fillText("CLEARANCE: DEV", 12, h - 36);

      // Timestamp
      const now = new Date();
      const ts = now.toISOString().slice(11, 19);
      ctx.textAlign = "right";
      ctx.fillStyle = "rgba(34, 211, 238, 0.25)";
      ctx.fillText(ts, w - 12, h - 12);

      // Glitch effect every ~2 seconds
      if (time - lastGlitch > 2000 + Math.random() * 3000) {
        lastGlitch = time;
      }

      if (time - lastGlitch < 150) {
        // Random horizontal slice displacement
        const sliceCount = 3 + Math.floor(Math.random() * 5);
        for (let i = 0; i < sliceCount; i++) {
          const sy = Math.random() * h;
          const sh = 2 + Math.random() * 8;
          const sx = (Math.random() - 0.5) * 20;
          const imageData = ctx.getImageData(0, sy * dpr, w * dpr, sh * dpr);
          ctx.putImageData(imageData, sx * dpr, sy * dpr);
        }

        // Red/cyan color shift lines
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = "rgba(255, 0, 0, 0.08)";
        ctx.fillRect(0, Math.random() * h, w, 2 + Math.random() * 4);
        ctx.fillStyle = "rgba(34, 211, 238, 0.08)";
        ctx.fillRect(0, Math.random() * h, w, 2 + Math.random() * 4);
        ctx.globalCompositeOperation = "source-over";
      }

      // Corner brackets
      const bLen = 15;
      ctx.strokeStyle = "rgba(34, 211, 238, 0.3)";
      ctx.lineWidth = 1;
      // Top-left
      ctx.beginPath();
      ctx.moveTo(0, bLen); ctx.lineTo(0, 0); ctx.lineTo(bLen, 0);
      ctx.stroke();
      // Top-right
      ctx.beginPath();
      ctx.moveTo(w - bLen, 0); ctx.lineTo(w, 0); ctx.lineTo(w, bLen);
      ctx.stroke();
      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(0, h - bLen); ctx.lineTo(0, h); ctx.lineTo(bLen, h);
      ctx.stroke();
      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(w - bLen, h); ctx.lineTo(w, h); ctx.lineTo(w, h - bLen);
      ctx.stroke();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative group">
      <canvas
        ref={canvasRef}
        style={{ width: 280, height: 320 }}
        className="transition-all duration-300"
      />
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--dim)]">
          SUBJECT_PROFILE
        </span>
      </div>
    </div>
  );
}
