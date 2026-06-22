"use client";

import { useEffect, useState, useCallback } from "react";
import RobotMascot from "@/components/RobotMascot";

type Phase = "boot" | "system" | "entering" | "waving" | "ready";

const INTRO_SEEN_KEY = "ra_intro_seen";
const FAILSAFE_TIMEOUT_MS = 5200;
const DISMISS_TRANSITION_MS = 620;
const READY_HOLD_MS = 1050;

function markIntroSeen() {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    // abaikan bila sessionStorage tidak tersedia
  }
}

export default function LoadingScreen() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING_CORE_SYSTEMS...");
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);
  const [skipIntro, setSkipIntro] = useState(false);

  // Tampilkan intro hanya sekali per sesi browser. Mencegah robot + wave
  // muncul ulang tiap reload halaman (mis. saat ganti bahasa).
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        if (sessionStorage.getItem(INTRO_SEEN_KEY) === "1") {
          setSkipIntro(true);
          setVisible(false);
          setMounted(false);
        }
      } catch {
        // sessionStorage tidak tersedia: tetap tampilkan intro
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);


  const dismissIntro = useCallback(() => {
    setPhase("ready");
    setVisible(false);
    markIntroSeen();
    window.setTimeout(() => setMounted(false), DISMISS_TRANSITION_MS);
  }, []);

  useEffect(() => {
    if (skipIntro) return;
    const timers = [
      window.setTimeout(() => setPhase("system"), 420),
      window.setTimeout(() => setPhase("entering"), 1900),
      window.setTimeout(() => setPhase("waving"), 2550),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, [skipIntro]);

  const updateStatus = useCallback((p: number) => {
    if (p < 20) setStatusText("INITIALIZING_CORE_SYSTEMS...");
    else if (p < 40) setStatusText("LOADING_CYBER_SHELL...");
    else if (p < 60) setStatusText("COMPILING_DESIGN_TOKENS...");
    else if (p < 80) setStatusText("ESTABLISHING_NEURAL_LINK...");
    else if (p < 95) setStatusText("SYNCING_PORTFOLIO_DATA...");
    else setStatusText("SYSTEM_READY");
  }, []);

  useEffect(() => {
    if (skipIntro) return;

    const failsafe = window.setTimeout(() => {
      setProgress(100);
      updateStatus(100);
      dismissIntro();
    }, FAILSAFE_TIMEOUT_MS);

    return () => window.clearTimeout(failsafe);
  }, [dismissIntro, skipIntro, updateStatus]);

  useEffect(() => {
    if (skipIntro) return;
    let frame: number;
    let start: number | null = null;
    let currentProgress = 0;

    const finishLoading = () => {
      cancelAnimationFrame(frame);
      let finishStart: number | null = null;
      const finishFrom = currentProgress;

      const animateFinish = (ts: number) => {
        if (!finishStart) finishStart = ts;
        const elapsed = ts - finishStart;
        const p = Math.min(finishFrom + Math.floor((elapsed / 300) * (100 - finishFrom)), 100);
        currentProgress = p;
        setProgress(p);
        updateStatus(p);

        if (p < 100) {
          frame = requestAnimationFrame(animateFinish);
        } else {
          window.setTimeout(dismissIntro, READY_HOLD_MS);
        }
      };
      frame = requestAnimationFrame(animateFinish);
    };

    const checkReady = () => {
      if (document.readyState === "complete") {
        finishLoading();
      } else {
        window.addEventListener("load", finishLoading, { once: true });
        let crawlStart: number | null = null;
        const crawl = (ts: number) => {
          if (!crawlStart) crawlStart = ts;
          const elapsed = ts - crawlStart;
          const p = Math.min(80 + Math.floor((elapsed / 4000) * 15), 95);
          if (p > currentProgress) {
            currentProgress = p;
            setProgress(p);
            updateStatus(p);
          }
          if (currentProgress < 95) {
            frame = requestAnimationFrame(crawl);
          }
        };
        frame = requestAnimationFrame(crawl);
      }
    };

    const animatePhase1 = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const p = Math.min(Math.floor((elapsed / 1600) * 80), 80);
      currentProgress = p;
      setProgress(p);
      updateStatus(p);

      if (p < 80) {
        frame = requestAnimationFrame(animatePhase1);
      } else {
        checkReady();
      }
    };

    frame = requestAnimationFrame(animatePhase1);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", finishLoading);
    };
  }, [dismissIntro, updateStatus, skipIntro]);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#050505",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "var(--font-jetbrains), monospace",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="loading-frame">
        <div className="loading-frame__mark">+</div>
        <div className="loading-frame__meta">
          ID: RA-001<br />
          STATUS: {phase === "ready" ? "ACTIVE" : "ENTERING"}<br />
          CLEARANCE: DEV
        </div>

        <div className={`robot-stage robot-stage--${phase}`}>
          <div className="robot-stage__scan-ring" aria-hidden="true" />
          <div className="motion-lines" aria-hidden="true"><span /><span /><span /></div>
          <RobotMascot variant={phase === "waving" ? "wave" : "intro"} />
        </div>

        <div className={`system-panel system-panel--${phase}`}>
          <div className="system-panel__label">Enter_System</div>
          <div className="system-panel__progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="system-panel__status">
            <span>{progress}%</span>
            <span>{statusText}</span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
        }}
      />

      <div style={{ position: "absolute", top: "24px", left: "24px", width: "20px", height: "20px", borderTop: "1px solid #2a2a2e", borderLeft: "1px solid #2a2a2e" }} />
      <div style={{ position: "absolute", top: "24px", right: "24px", width: "20px", height: "20px", borderTop: "1px solid #2a2a2e", borderRight: "1px solid #2a2a2e" }} />
      <div style={{ position: "absolute", bottom: "24px", left: "24px", width: "20px", height: "20px", borderBottom: "1px solid #2a2a2e", borderLeft: "1px solid #2a2a2e" }} />
      <div style={{ position: "absolute", bottom: "24px", right: "24px", width: "20px", height: "20px", borderBottom: "1px solid #2a2a2e", borderRight: "1px solid #2a2a2e" }} />

      <style>{`
        .loading-frame {
          position: relative;
          width: min(620px, 82vw);
          height: min(520px, 74vh);
          border: 1px solid rgba(255, 255, 255, 0.32);
          background: rgba(5, 5, 5, 0.62);
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.08), inset 0 0 48px rgba(255, 255, 255, 0.025);
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .loading-frame__mark {
          position: absolute;
          top: 20px;
          left: 20px;
          color: rgba(240, 240, 240, 0.72);
          font-size: 34px;
          line-height: 1;
        }

        .loading-frame__meta {
          position: absolute;
          left: 28px;
          bottom: 42px;
          font-size: 11px;
          line-height: 1.65;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.58);
        }

        .robot-stage {
          position: absolute;
          width: clamp(190px, 27vw, 250px);
          filter: drop-shadow(0 0 14px rgba(255, 255, 255, 0.46));
          transition: opacity 520ms ease, transform 680ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .robot-stage__scan-ring {
          position: absolute;
          inset: 8%;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 520ms ease, transform 680ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .robot-stage--entering .robot-stage__scan-ring,
        .robot-stage--waving .robot-stage__scan-ring {
          opacity: 1;
          transform: scale(1);
        }

        .robot-stage .robot-mascot,
        .robot-stage .robot-mascot__svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .robot-stage .robot-mascot__base,
        .robot-stage .robot-mascot__line {
          stroke: #2563eb;
          stroke-width: 2.2;
          fill: rgba(255, 255, 255, 0.035);
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .robot-stage .robot-mascot__eye {
          stroke: #7dd3fc;
          stroke-width: 3;
          stroke-linecap: round;
        }

        .robot-stage .robot-mascot__detail {
          stroke: rgba(125, 211, 252, 0.75);
          stroke-width: 1.4;
          fill: none;
          stroke-linecap: round;
        }

        .robot-stage .robot-mascot__core {
          stroke: rgba(125, 211, 252, 0.78);
          stroke-width: 1.4;
          fill: none;
        }

        .robot-stage .robot-mascot__core-dot {
          fill: rgba(240, 240, 240, 0.82);
        }

        .robot-stage .robot-mascot__wave-arm {
          transform-box: fill-box;
          transform-origin: 6px 92%;
        }

        .robot-stage--boot,
        .robot-stage--system {
          opacity: 0.86;
          transform: translateX(0) scale(0.82);
        }

        .robot-stage--entering {
          opacity: 1;
          transform: translateX(22vw) scale(0.95);
          animation: robot-enter 720ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .robot-stage--waving,
        .robot-stage--ready {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .robot-stage--waving .robot-mascot__wave-arm {
          animation: robot-wave 1400ms ease-in-out 2 both;
        }

        .system-panel {
          position: absolute;
          top: calc(50% + 122px);
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          transition: opacity 420ms ease, transform 420ms ease;
        }

        .system-panel--boot,
        .system-panel--entering,
        .system-panel--waving,
        .system-panel--ready {
          opacity: 0;
          transform: translateX(-50%) translateY(-8px);
        }

        .system-panel--system {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .system-panel__label {
          padding: 14px 34px;
          border-left: 1px solid rgba(255, 255, 255, 0.75);
          border-right: 1px solid rgba(255, 255, 255, 0.75);
          color: #2563eb;
          font-size: clamp(15px, 2vw, 22px);
          letter-spacing: 0.06em;
          text-shadow: 0 0 16px rgba(255, 255, 255, 0.5);
        }

        .system-panel__progress {
          width: 220px;
          height: 2px;
          margin: 16px auto 0;
          background: #16161a;
          overflow: hidden;
        }

        .system-panel__progress span {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #2563eb, #f0f0f0);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.65);
          transition: width 150ms linear;
        }

        .system-panel__status {
          display: grid;
          gap: 4px;
          margin-top: 10px;
          font-size: 9px;
          letter-spacing: 0.15em;
          color: #a8b1c2;
          text-transform: uppercase;
        }

        .system-panel__status span:first-child {
          color: #c0c8d6;
          letter-spacing: 0.4em;
        }

        .motion-lines {
          position: absolute;
          right: -28%;
          top: 42%;
          width: 180px;
          height: 120px;
          opacity: 0;
          pointer-events: none;
        }

        .robot-stage--entering .motion-lines {
          opacity: 0.7;
        }

        .motion-lines span {
          position: absolute;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75));
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        }

        .motion-lines span:nth-child(1) { top: 22px; width: 150px; }
        .motion-lines span:nth-child(2) { top: 60px; width: 90px; opacity: 0.8; }
        .motion-lines span:nth-child(3) { top: 98px; width: 128px; opacity: 0.6; }

        @keyframes robot-enter {
          from { transform: translateX(56vw) scale(0.9); opacity: 0; }
          to { transform: translateX(0) scale(1); opacity: 1; }
        }

        @keyframes robot-wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(26deg); }
          35% { transform: rotate(-20deg); }
          55% { transform: rotate(24deg); }
          75% { transform: rotate(-16deg); }
          90% { transform: rotate(12deg); }
          100% { transform: rotate(0deg); }
        }

        @media (max-width: 768px) {
          .loading-frame { width: 86vw; height: 64vh; }
          .loading-frame__meta { font-size: 9px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .robot-stage,
          .system-panel,
          .system-panel__progress span {
            transition: none;
          }

          .robot-stage--entering,
          .robot-stage--waving .robot-mascot__wave-arm {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}





