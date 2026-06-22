"use client";

import { useState } from "react";

type Rotation = { x: number; y: number };

const DEFAULT_ROTATION: Rotation = { x: -8, y: 12 };
const POINTER_ROTATION_RANGE = { x: 10, y: 14 } as const;

const sceneNodes = ["NEXT", "API", "UI", "IOT", "DATA", "MOBILE"];
const sceneRings = ["FRONTEND", "BACKEND", "RPL"];

function getPointerRotation(rect: DOMRect, clientX: number, clientY: number): Rotation {
  const pointerX = (clientX - rect.left) / rect.width - 0.5;
  const pointerY = (clientY - rect.top) / rect.height - 0.5;

  return {
    x: DEFAULT_ROTATION.x - pointerY * POINTER_ROTATION_RANGE.x,
    y: DEFAULT_ROTATION.y + pointerX * POINTER_ROTATION_RANGE.y,
  };
}

export default function Hero3DScene() {
  const [rotation, setRotation] = useState(DEFAULT_ROTATION);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setRotation(getPointerRotation(rect, event.clientX, event.clientY));
  }

  function handlePointerLeave() {
    setRotation(DEFAULT_ROTATION);
  }

  return (
    <div
      className="hero-3d-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Interactive 3D portfolio system map"
      role="img"
    >
      <div
        className="hero-3d-world"
        style={{
          "--hero-rotate-x": `${rotation.x}deg`,
          "--hero-rotate-y": `${rotation.y}deg`,
        } as React.CSSProperties}
      >
        <div className="hero-3d-grid hero-3d-grid--back" />
        <div className="hero-3d-grid hero-3d-grid--floor" />

        <div className="hero-3d-core">
          <span className="hero-3d-core__eyebrow">PORTO_OS</span>
          <strong>RA</strong>
          <span>BUILD MODE</span>
        </div>

        {sceneRings.map((ring, index) => (
          <div key={ring} className={`hero-3d-ring hero-3d-ring--${index + 1}`}>
            <span>{ring}</span>
          </div>
        ))}

        {sceneNodes.map((node, index) => (
          <span key={node} className={`hero-3d-node hero-3d-node--${index + 1}`}>
            {node}
          </span>
        ))}

        <div className="hero-3d-beam hero-3d-beam--one" />
        <div className="hero-3d-beam hero-3d-beam--two" />
        <div className="hero-3d-beam hero-3d-beam--three" />
      </div>
    </div>
  );
}


