"use client";

import { usePathname } from "next/navigation";
import RobotMascot from "@/components/RobotMascot";

export default function HomeRobotMascot() {
  const pathname = usePathname();

  // Only show the floating assistant on the home page. Other pages
  // (e.g. About) have their own robot/avatar, which would otherwise double up.
  if (pathname !== "/") return null;

  return (
    <aside className="home-robot-dock" aria-hidden="true">
      <div className="home-robot-dock__header">
        <span>RA_ASSISTANT</span>
        <span className="home-robot-dock__status"><i />ACTIVE</span>
      </div>
      <div className="home-robot-dock__stage">
        <div className="home-robot-dock__aura" />
        <RobotMascot variant="idle" />
      </div>
      <div className="home-robot-dock__footer">
        <span>ID: RA-001</span>
        <span>SYSTEM_IDLE</span>
      </div>
      <style jsx>{`
        .home-robot-dock {
          position: fixed;
          right: clamp(22px, 3.2vw, 64px);
          bottom: clamp(76px, 7vw, 118px);
          z-index: 3;
          width: clamp(158px, 11vw, 188px);
          pointer-events: none;
          border: 1px solid rgba(34, 211, 238, 0.34);
          background:
            linear-gradient(135deg, rgba(34, 211, 238, 0.08), transparent 42%),
            rgba(5, 5, 5, 0.58);
          box-shadow:
            0 0 28px rgba(34, 211, 238, 0.08),
            inset 0 0 24px rgba(34, 211, 238, 0.035);
          backdrop-filter: blur(4px);
          opacity: 0.9;
          overflow: hidden;
        }

        .home-robot-dock::before,
        .home-robot-dock::after {
          content: "";
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: rgba(34, 211, 238, 0.72);
          pointer-events: none;
        }

        .home-robot-dock::before {
          top: 7px;
          left: 7px;
          border-top: 1px solid;
          border-left: 1px solid;
        }

        .home-robot-dock::after {
          right: 7px;
          bottom: 7px;
          border-right: 1px solid;
          border-bottom: 1px solid;
        }

        .home-robot-dock__header,
        .home-robot-dock__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 9px 11px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: rgba(240, 240, 240, 0.62);
        }

        .home-robot-dock__header {
          border-bottom: 1px solid rgba(42, 42, 46, 0.9);
        }

        .home-robot-dock__footer {
          border-top: 1px solid rgba(42, 42, 46, 0.9);
          color: rgba(34, 211, 238, 0.62);
        }

        .home-robot-dock__status {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: rgba(34, 211, 238, 0.82);
        }

        .home-robot-dock__status i {
          width: 5px;
          height: 5px;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.86);
          animation: dock-status-pulse 2.8s ease-in-out infinite;
        }

        .home-robot-dock__stage {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 174px;
          padding: 12px 14px 8px;
        }

        .home-robot-dock__stage::before {
          content: "";
          position: absolute;
          inset: 12px;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(34, 211, 238, 0.035) 7px, rgba(34, 211, 238, 0.035) 8px),
            linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.08), transparent);
          opacity: 0.55;
        }

        .home-robot-dock__aura {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.14), transparent 68%);
          filter: blur(2px);
        }

        .home-robot-dock :global(.robot-mascot) {
          position: relative;
          width: 118px;
          animation: dock-robot-idle 4.4s ease-in-out infinite;
        }

        .home-robot-dock :global(.robot-mascot__svg) {
          width: 100%;
          height: auto;
          display: block;
        }

        .home-robot-dock :global(.robot-mascot__line),
        .home-robot-dock :global(.robot-mascot__base) {
          stroke: var(--accent-cyan);
          stroke-width: 2.2;
          fill: rgba(34, 211, 238, 0.035);
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .home-robot-dock :global(.robot-mascot__eye) {
          stroke: #7dd3fc;
          stroke-width: 3;
          stroke-linecap: round;
          animation: dock-eye-blink 5.6s ease-in-out infinite;
        }

        .home-robot-dock :global(.robot-mascot__detail),
        .home-robot-dock :global(.robot-mascot__core) {
          stroke: rgba(125, 211, 252, 0.76);
          stroke-width: 1.4;
          fill: none;
          stroke-linecap: round;
        }

        .home-robot-dock :global(.robot-mascot__core-dot) {
          fill: rgba(240, 240, 240, 0.82);
        }

        @keyframes dock-robot-idle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(0.45deg); }
        }

        @keyframes dock-eye-blink {
          0%, 92%, 100% { opacity: 1; transform: scaleY(1); }
          95% { opacity: 0.35; transform: scaleY(0.2); }
        }

        @keyframes dock-status-pulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }

        @media (max-width: 768px) {
          .home-robot-dock {
            width: 138px;
            right: 16px;
            bottom: 92px;
            opacity: 0.72;
          }

          .home-robot-dock__stage {
            min-height: 136px;
          }

          .home-robot-dock :global(.robot-mascot) {
            width: 92px;
          }
        }

        @media (max-width: 520px) {
          .home-robot-dock {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-robot-dock,
          .home-robot-dock *,
          .home-robot-dock :global(*) {
            animation: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
