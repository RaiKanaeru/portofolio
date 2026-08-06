"use client";

import dynamic from "next/dynamic";

const PongGame = dynamic(() => import("@/components/PongGame"), {
  loading: () => (
    <div
      className="terminal-card mx-auto flex w-full max-w-[800px] items-center justify-center"
      style={{ aspectRatio: "800/500" }}
    >
      <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--dim)]">Loading_Game...</p>
    </div>
  ),
});

export default PongGame;