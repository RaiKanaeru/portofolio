"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Uptime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
      const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
      const s = String(elapsed % 60).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time || "00:00:00"}</span>;
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line-subtle)]">
      {/* Top section */}
      <div className="mx-auto max-w-[1296px] px-5 py-10 md:px-10 xl:px-0 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="heading-font text-lg font-bold text-[var(--ink)] tracking-[0.15em]">RA_</p>
          <p className="mt-3 text-[11px] leading-6 text-[var(--muted)] max-w-[280px]">
            Fullstack Developer &amp; Fresh Graduate Software Engineer. Building systems that matter.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--dim)] mb-4">NAVIGATION</p>
          <nav className="grid grid-cols-2 gap-2 text-[11px] font-bold uppercase tracking-[0.14em]">
            <Link href="/" className="text-[var(--muted)] hover:text-[var(--accent-cyan)] transition-colors py-1">HOME</Link>
            <Link href="/about" className="text-[var(--muted)] hover:text-[var(--accent-cyan)] transition-colors py-1">ABOUT</Link>
            <Link href="/projects" className="text-[var(--muted)] hover:text-[var(--accent-cyan)] transition-colors py-1">PROJECTS</Link>
            <Link href="/notes" className="text-[var(--muted)] hover:text-[var(--accent-cyan)] transition-colors py-1">NOTES</Link>
            <Link href="/arcade" className="text-[var(--muted)] hover:text-[var(--accent-cyan)] transition-colors py-1">ARCADE</Link>
            <Link href="/contact" className="text-[var(--muted)] hover:text-[var(--accent-cyan)] transition-colors py-1">CONTACT</Link>
          </nav>
        </div>

        {/* System Status */}
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--dim)] mb-4">SYSTEM_STATUS</p>
          <div className="space-y-2 font-mono text-[10px] text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <span className="pulse-dot h-1.5 w-1.5 bg-green-500" style={{ display: "inline-block" }} />
              <span>ALL_SYSTEMS: ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--dim)]">UPTIME:</span>
              <Uptime />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--dim)]">FRAMEWORK:</span>
              <span>NEXT.JS 16</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--dim)]">DEPLOY:</span>
              <span>VERCEL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-20" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1296px] px-5 py-5 md:px-10 xl:px-0 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--dim)]">
          © 2026 RAIHAN_ARIANSYAH // ALL_RIGHTS_RESERVED
        </p>
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--dim)]">
          BUILT_WITH ❤ AND NEXT.JS // CTRL+K FOR COMMANDS
        </p>
      </div>
    </footer>
  );
}

