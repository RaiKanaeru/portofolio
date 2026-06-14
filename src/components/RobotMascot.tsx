import { useId, type CSSProperties } from "react";

type RobotMascotVariant = "intro" | "wave" | "idle";

type RobotMascotProps = {
  variant?: RobotMascotVariant;
  className?: string;
  style?: CSSProperties;
};

export default function RobotMascot({ variant = "idle", className = "", style }: RobotMascotProps) {
  const glowId = useId().replace(/:/g, "");
  const faceGlowId = `${glowId}-face`;
  const bodyGlowId = `${glowId}-body`;
  const isIdle = variant === "idle";

  return (
    <div aria-hidden="true" className={`robot-mascot robot-mascot--${variant} ${className}`} style={style}>
      <svg className="robot-mascot__svg" viewBox="0 0 200 250" focusable="false">
        <defs>
          <filter id={glowId} x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id={faceGlowId} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.18)" />
            <stop offset="60%" stopColor="rgba(34, 211, 238, 0.05)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </radialGradient>
          <linearGradient id={bodyGlowId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.09)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0.015)" />
          </linearGradient>
        </defs>

        <g filter={`url(#${glowId})`}>
          <ellipse className="robot-mascot__base" cx="100" cy="222" rx="43" ry="7" />
          <circle className="robot-mascot__face-glow" cx="100" cy="68" r="39" fill={`url(#${faceGlowId})`} />
          <circle className="robot-mascot__line" cx="100" cy="68" r="36" />
          <line className="robot-mascot__eye robot-mascot__eye--left" x1="83" y1="68" x2="92" y2="68" />
          <line className="robot-mascot__eye robot-mascot__eye--right" x1="108" y1="68" x2="117" y2="68" />
          <path className="robot-mascot__line robot-mascot__body" d="M70 120 L130 120 L154 206 L46 206 Z" fill={`url(#${bodyGlowId})`} />
          <line className="robot-mascot__detail" x1="73" y1="188" x2="127" y2="188" />
          <circle className="robot-mascot__core" cx="100" cy="148" r="8" />
          <circle className="robot-mascot__core-dot" cx="100" cy="148" r="2.5" />
          <path className="robot-mascot__detail" d="M64 130 Q50 146 50 168" />
          <circle className="robot-mascot__line" cx="50" cy="174" r="7" />
          {isIdle ? (
            <>
              <path className="robot-mascot__detail" d="M136 130 Q150 146 150 168" />
              <circle className="robot-mascot__line" cx="150" cy="174" r="7" />
            </>
          ) : (
            <g className="robot-mascot__wave-arm">
              <path className="robot-mascot__line" d="M136 130 Q156 111 156 89" />
              <circle className="robot-mascot__line" cx="156" cy="80" r="8" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
