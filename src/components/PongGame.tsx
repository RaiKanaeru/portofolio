"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Difficulty = "EASY" | "MEDIUM" | "HARD";

interface GameState {
  ballX: number;
  ballY: number;
  ballVX: number;
  ballVY: number;
  playerY: number;
  aiY: number;
  playerScore: number;
  aiScore: number;
  particles: Particle[];
  ballTrail: { x: number; y: number; alpha: number }[];
  lastHitTime: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const CANVAS_W = 800;
const CANVAS_H = 500;
const PADDLE_W = 12;
const PADDLE_H = 80;
const BALL_SIZE = 8;
const BALL_SPEED = 5;
const MAX_SCORE = 7;

const AI_CONFIG: Record<Difficulty, { speed: number; inaccuracy: number; speedMult: number; maxSpeed: number }> = {
  EASY: { speed: 2.8, inaccuracy: 45, speedMult: 1.02, maxSpeed: 8 },
  MEDIUM: { speed: 4.8, inaccuracy: 15, speedMult: 1.05, maxSpeed: 12 },
  HARD: { speed: 9.0, inaccuracy: 0, speedMult: 1.08, maxSpeed: 16 },
};

function spawnParticles(x: number, y: number, count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4 + 1;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      maxLife: Math.random() * 30 + 15,
      size: Math.random() * 3 + 1,
    });
  }
  return particles;
}

// Simple synth beep generator
function playBeep(type: "hit" | "score", audioCtx: AudioContext | null) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === "hit") {
      osc.type = "square";
      osc.frequency.setValueAtTime(400, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.1);
    } else {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.3);
    }
  } catch {
    // Ignore audio errors if blocked
  }
}

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  
  const stateRef = useRef<GameState>({
    ballX: CANVAS_W / 2,
    ballY: CANVAS_H / 2,
    ballVX: BALL_SPEED,
    ballVY: BALL_SPEED * 0.6,
    playerY: CANVAS_H / 2 - PADDLE_H / 2,
    aiY: CANVAS_H / 2 - PADDLE_H / 2,
    playerScore: 0,
    aiScore: 0,
    particles: [],
    ballTrail: [],
    lastHitTime: 0,
  });

  const [difficulty, setDifficulty] = useState<Difficulty>("EASY");
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [isPaused, setIsPaused] = useState(true);
  const mouseYRef = useRef(CANVAS_H / 2);
  const animIdRef = useRef<number>(0);

  const bgmIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) audioCtxRef.current = new AudioContextClass();
    }
    if (audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const startBGM = useCallback(() => {
    if (bgmIntervalRef.current) return;
    let step = 0;
    bgmIntervalRef.current = setInterval(() => {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state !== "running") return;
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = "square";
        // Simple cyberpunk-ish bassline
        const freq = step % 8 === 0 ? 55 : (step % 8 === 4 ? 65.41 : 55);
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
        step++;
      } catch {}
    }, 300); // ~100 BPM
  }, []);

  const stopBGM = useCallback(() => {
    if (bgmIntervalRef.current) {
      clearInterval(bgmIntervalRef.current);
      bgmIntervalRef.current = null;
    }
  }, []);

  const resetBall = useCallback(() => {
    const s = stateRef.current;
    s.ballX = CANVAS_W / 2;
    s.ballY = CANVAS_H / 2;
    const dir = Math.random() > 0.5 ? 1 : -1;
    const angle = (Math.random() - 0.5) * 0.8;
    s.ballVX = BALL_SPEED * dir;
    s.ballVY = BALL_SPEED * angle;
    s.ballTrail = [];
  }, []);

  const resetGame = useCallback(() => {
    const s = stateRef.current;
    s.playerScore = 0;
    s.aiScore = 0;
    s.playerY = CANVAS_H / 2 - PADDLE_H / 2;
    s.aiY = CANVAS_H / 2 - PADDLE_H / 2;
    s.particles = [];
    setPlayerScore(0);
    setAiScore(0);
    setGameOver(false);
    setWinner("");
    resetBall();
    setIsPaused(false);
    initAudio();
  }, [resetBall]);

  useEffect(() => {
    if (!isPaused && !gameOver) {
      startBGM();
    } else {
      stopBGM();
    }
    return () => stopBGM();
  }, [isPaused, gameOver, startBGM, stopBGM]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleY = CANVAS_H / rect.height;
      mouseYRef.current = (e.clientY - rect.top) * scaleY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const scaleY = CANVAS_H / rect.height;
      mouseYRef.current = (e.touches[0].clientY - rect.top) * scaleY;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

    const draw = () => {
      const s = stateRef.current;
      const config = AI_CONFIG[difficulty];
      const now = performance.now();

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < CANVAS_W; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, CANVAS_H);
        ctx.stroke();
      }
      for (let y = 0; y < CANVAS_H; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(CANVAS_W, y);
        ctx.stroke();
      }

      // Center line
      ctx.setLineDash([6, 8]);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(CANVAS_W / 2, 0);
      ctx.lineTo(CANVAS_W / 2, CANVAS_H);
      ctx.stroke();
      ctx.setLineDash([]);

      if (!isPaused && !gameOver) {
        // Player paddle
        const targetY = mouseYRef.current - PADDLE_H / 2;
        s.playerY += (targetY - s.playerY) * 0.2; // Smooth tracking
        s.playerY = Math.max(0, Math.min(CANVAS_H - PADDLE_H, s.playerY));

        // AI paddle (smoother motion)
        // Introduce an oscillating offset to simulate human imperfection in lower difficulties
        const timeOffset = Math.sin(now / 400) * config.inaccuracy;
        const aiTarget = s.ballY - PADDLE_H / 2 + timeOffset;
        
        // Move towards target at a fixed max speed
        const diff = aiTarget - s.aiY;
        s.aiY += Math.sign(diff) * Math.min(Math.abs(diff), config.speed);
        s.aiY = Math.max(0, Math.min(CANVAS_H - PADDLE_H, s.aiY));

        // Ball Trail
        s.ballTrail.unshift({ x: s.ballX, y: s.ballY, alpha: 1 });
        if (s.ballTrail.length > 8) s.ballTrail.pop();

        // Ball movement
        s.ballX += s.ballVX;
        s.ballY += s.ballVY;

        // Wall bounce
        if (s.ballY <= BALL_SIZE || s.ballY >= CANVAS_H - BALL_SIZE) {
          s.ballVY *= -1;
          s.ballY = Math.max(BALL_SIZE, Math.min(CANVAS_H - BALL_SIZE, s.ballY));
          s.particles.push(...spawnParticles(s.ballX, s.ballY, 5));
          playBeep("hit", audioCtxRef.current);
        }

        // Player paddle collision
        if (
          s.ballX - BALL_SIZE <= 30 + PADDLE_W &&
          s.ballX + BALL_SIZE >= 30 &&
          s.ballY >= s.playerY &&
          s.ballY <= s.playerY + PADDLE_H &&
          s.ballVX < 0
        ) {
          const relativeY = (s.ballY - s.playerY) / PADDLE_H - 0.5;
          s.ballVX = Math.abs(s.ballVX) * config.speedMult;
          s.ballVY = relativeY * 10;
          s.ballX = 30 + PADDLE_W + BALL_SIZE;
          s.particles.push(...spawnParticles(s.ballX, s.ballY, 15));
          s.lastHitTime = now;
          playBeep("hit", audioCtxRef.current);
        }

        // AI paddle collision
        if (
          s.ballX + BALL_SIZE >= CANVAS_W - 30 - PADDLE_W &&
          s.ballX - BALL_SIZE <= CANVAS_W - 30 &&
          s.ballY >= s.aiY &&
          s.ballY <= s.aiY + PADDLE_H &&
          s.ballVX > 0
        ) {
          const relativeY = (s.ballY - s.aiY) / PADDLE_H - 0.5;
          s.ballVX = -Math.abs(s.ballVX) * config.speedMult;
          s.ballVY = relativeY * 10;
          s.ballX = CANVAS_W - 30 - PADDLE_W - BALL_SIZE;
          s.particles.push(...spawnParticles(s.ballX, s.ballY, 15));
          s.lastHitTime = now;
          playBeep("hit", audioCtxRef.current);
        }

        // Speed cap
        s.ballVX = Math.sign(s.ballVX) * Math.min(Math.abs(s.ballVX), config.maxSpeed);
        s.ballVY = Math.sign(s.ballVY) * Math.min(Math.abs(s.ballVY), config.maxSpeed);

        // Scoring
        if (s.ballX < -20) {
          s.aiScore++;
          setAiScore(s.aiScore);
          playBeep("score", audioCtxRef.current);
          if (s.aiScore >= MAX_SCORE) {
            setGameOver(true);
            setWinner("AI");
          } else {
            resetBall();
          }
        }
        if (s.ballX > CANVAS_W + 20) {
          s.playerScore++;
          setPlayerScore(s.playerScore);
          playBeep("score", audioCtxRef.current);
          if (s.playerScore >= MAX_SCORE) {
            setGameOver(true);
            setWinner("YOU");
          } else {
            resetBall();
          }
        }
      }

      const isHitFlash = now - s.lastHitTime < 100;

      // Draw paddles
      ctx.shadowColor = isHitFlash ? "#fff" : "#2563eb";
      ctx.shadowBlur = isHitFlash ? 20 : 12;
      ctx.fillStyle = isHitFlash ? "#fff" : "#2563eb";
      ctx.fillRect(30, s.playerY, PADDLE_W, PADDLE_H);

      ctx.shadowColor = isHitFlash ? "#fff" : "#a8550a";
      ctx.shadowBlur = isHitFlash ? 20 : 12;
      ctx.fillStyle = isHitFlash ? "#fff" : "#a8550a";
      ctx.fillRect(CANVAS_W - 30 - PADDLE_W, s.aiY, PADDLE_W, PADDLE_H);
      ctx.shadowBlur = 0;

      // Draw ball trail
      s.ballTrail.forEach((trail, i) => {
        trail.alpha -= 0.12;
        if (trail.alpha > 0) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${trail.alpha})`;
          ctx.arc(trail.x, trail.y, BALL_SIZE * (1 - i * 0.1), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw ball
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 15;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.ballX, s.ballY, BALL_SIZE, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw particles
      s.particles = s.particles.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1 / p.maxLife;
        if (p.life <= 0) return false;

        ctx.globalAlpha = p.life;
        ctx.fillStyle = "#fff"; // Make particles flash white
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.globalAlpha = 1;
        return true;
      });

      // Score display
      ctx.font = "bold 48px monospace";
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fillText(String(s.playerScore), CANVAS_W / 2 - 80, 60);
      ctx.fillStyle = "rgba(255, 0, 80, 0.3)";
      ctx.fillText(String(s.aiScore), CANVAS_W / 2 + 80, 60);

      // Pause / Game Over overlay
      if (isPaused && !gameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
        ctx.fillStyle = "#2563eb";
        ctx.font = "bold 28px monospace";
        ctx.textAlign = "center";
        ctx.fillText("CLICK TO START", CANVAS_W / 2, CANVAS_H / 2 - 10);
        ctx.fillStyle = "#71717a";
        ctx.font = "bold 14px monospace";
        ctx.fillText("Move mouse or touch to control paddle", CANVAS_W / 2, CANVAS_H / 2 + 25);
      }

      if (gameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
        ctx.fillStyle = winner === "YOU" ? "#2563eb" : "#a8550a";
        ctx.font = "bold 36px monospace";
        ctx.textAlign = "center";
        ctx.fillText(winner === "YOU" ? "YOU WIN!" : "AI WINS!", CANVAS_W / 2, CANVAS_H / 2 - 20);
        ctx.fillStyle = "#71717a";
        ctx.font = "bold 14px monospace";
        ctx.fillText(`${s.playerScore} - ${s.aiScore}`, CANVAS_W / 2, CANVAS_H / 2 + 15);
      }

      animIdRef.current = requestAnimationFrame(draw);
    };

    animIdRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animIdRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [difficulty, isPaused, gameOver, winner, resetBall]);

  const handleCanvasClick = () => {
    initAudio();
    if (gameOver) {
      resetGame();
    } else if (isPaused) {
      setIsPaused(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Difficulty Selector */}
        <div className="flex items-center border border-[var(--line)] bg-[var(--surface)] p-1">
          {(["EASY", "MEDIUM", "HARD"] as Difficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => { setDifficulty(d); resetGame(); }}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-all ${
                difficulty === d
                  ? d === "HARD"
                    ? "bg-[var(--accent-gold)] text-[var(--surface)] shadow-[0_10px_24px_rgba(168,85,10,0.24)]"
                    : "bg-[var(--ink)] text-[var(--surface)] shadow-[0_12px_28px_rgba(31,41,55,0.14)]"
                  : "text-[var(--dim)] hover:text-[var(--ink)]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Restart */}
        <button
          onClick={resetGame}
          className="cyber-btn-secondary !py-2 !px-5 !text-[10px]"
        >
          RESTART
        </button>
      </div>

      {/* Score Bar */}
      <div className="flex items-center gap-6 text-center">
        <div>
          <p className="text-[10px] font-bold text-[var(--accent-cyan)] tracking-[0.14em]">YOU</p>
          <p className="heading-font text-3xl font-bold text-[var(--accent-cyan)]">{playerScore}</p>
        </div>
        <span className="text-[var(--dim)] heading-font text-xl">VS</span>
        <div>
          <p className="text-[10px] font-bold text-[var(--accent-gold)] tracking-[0.14em]">AI [{difficulty}]</p>
          <p className="heading-font text-3xl font-bold text-[var(--accent-gold)]">{aiScore}</p>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative border border-[var(--line)] shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          onClick={handleCanvasClick}
          className="block max-w-full cursor-none touch-none"
          style={{ aspectRatio: `${CANVAS_W}/${CANVAS_H}` }}
        />
      </div>

      {/* Instructions */}
      <p className="text-[10px] font-bold text-[var(--dim)] tracking-[0.14em] uppercase">
        First to {MAX_SCORE} wins • Move mouse/touch to control
      </p>
    </div>
  );
}



