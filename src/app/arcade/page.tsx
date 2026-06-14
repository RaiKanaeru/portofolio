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
      <div className="cyber-reveal stack-header text-center">
        <p className="section-num"><ScrambleText text="// CYBER_ARCADE" /></p>
        <h1 className="h1-display mt-4 cyber-glitch" data-text="PONG_GAME">
          PONG_GAME
        </h1>
        <p className="lead-text mt-4 mx-auto">
          Challenge the AI in a game of Pong. Choose your difficulty and prove your reflexes.
        </p>
      </div>

      {/* Game */}
      <div className="cyber-reveal">
        <PongGame />
      </div>

      {/* Info Box */}
      <div className="cyber-reveal mt-12 terminal-card p-6 max-w-xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)] mb-4">// GAME_INFO</p>
        <div className="font-mono text-[12px] text-[var(--muted)] space-y-2">
          <p><span className="text-[var(--ink)]">EASY</span> — AI reacts slowly, leaves big gaps.</p>
          <p><span className="text-[var(--ink)]">MEDIUM</span> — AI tracks the ball with realistic delay.</p>
          <p><span className="text-[#ff0050]">HARD</span> — AI is nearly perfect. Good luck.</p>
        </div>
      </div>
    </div>
  );
}
