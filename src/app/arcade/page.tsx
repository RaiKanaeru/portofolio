import type { Metadata } from "next";
import PongGame from "@/components/PongGame";
import ScrambleText from "@/components/ScrambleText";

export const metadata: Metadata = {
  title: "Arcade",
  description: "Play cyber Pong against AI — test your reflexes in this retro arcade game.",
};

export default function ArcadePage() {
  return (
    <div className="container-page section-tight">
      {/* Header */}
      <div className="cyber-reveal route-hero stack-header text-center">
        <p className="meta-chip mx-auto w-fit" data-tone="mono"><ScrambleText text="// CONTROLLED_ARCADE" /></p>
        <h1 className="h1-display mt-5">PONG_GAME</h1>
        <p className="lead-text mt-5 mx-auto">
          A contained retro interaction inside the portfolio system — playful, but still part of the technical case-file experience.
        </p>
      </div>

      {/* Game */}
      <div className="cyber-reveal">
        <PongGame />
      </div>

      {/* Info Box */}
      <div className="cyber-reveal mt-12 terminal-card p-6 max-w-xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)] mb-4">{"// GAME_INFO"}</p>
        <div className="font-mono text-[12px] text-[var(--muted)] space-y-2">
          <p><span className="text-[var(--ink)]">EASY</span> — AI reacts slowly, leaves big gaps.</p>
          <p><span className="text-[var(--ink)]">MEDIUM</span> — AI tracks the ball with realistic delay.</p>
          <p><span className="text-[var(--accent-gold)]">HARD</span> — AI is nearly perfect. Good luck.</p>
        </div>
      </div>
    </div>
  );
}
