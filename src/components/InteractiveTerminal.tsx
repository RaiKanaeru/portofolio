"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about      - Display personal info",
    "  skills     - Show technical skills",
    "  projects   - List all projects",
    "  contact    - Show contact info",
    "  education  - Show education history",
    "  clear      - Clear terminal",
    "  ascii      - Show ASCII art",
    "  whoami     - Who am I?",
    "  date       - Show current date",
    "  games      - Open arcade",
    "",
    "Type a command and press Enter.",
  ],
  about: [
    "┌─────────────────────────────────┐",
    "│  RAIHAN ARIANSYAH              │",
    "│  Fullstack Developer           │",
    "│  Fresh Graduate RPL            │",
    "│  SMK Negeri 13 Bandung         │",
    "│  Bandung, Indonesia            │",
    "└─────────────────────────────────┘",
    "",
    "Focused on building practical software",
    "systems with a case-study mindset.",
  ],
  skills: [
    "TECHNICAL SKILLS:",
    "",
    "  ██████████░░  Laravel      83%",
    "  ████████░░░░  Next.js      67%",
    "  ████████░░░░  TypeScript   67%",
    "  ███████░░░░░  Go           58%",
    "  █████████░░░  Flutter      75%",
    "  ████████░░░░  Firebase     67%",
    "  ██████░░░░░░  PostgreSQL   50%",
    "  ███████░░░░░  REST API     58%",
    "  █████░░░░░░░  ESP32/IoT    42%",
    "  ████████░░░░  Git          67%",
  ],
  projects: [
    "PROJECT ARCHIVE:",
    "",
    "  [01] ABSENTA13         Flutter | Firebase",
    "  [02] Manajemen Track   React | NestJS",
    "  [03] Absensi App       Flutter | Firebase",
    "  [04] IoT Workshop Kit  ESP32 | MQTT",
    "  [05] HoyoSense         Smart City Concept",
    "  [06] Hoyonimeku        API Integration",
    "",
    "  Visit /projects for full case studies.",
  ],
  contact: [
    "CONTACT INFO:",
    "",
    "  Email:    raihanariansyah160307@gmail.com",
    "  Location: Bandung, Indonesia",
    "  Status:   OPEN TO WORK",
    "",
    "  Visit /contact to get in touch.",
  ],
  education: [
    "EDUCATION:",
    "",
    "  2022-2025  SMK Negeri 13 Bandung",
    "             Major: Software Engineering (RPL)",
    "             Status: Fresh Graduate",
    "",
    "  Organization:",
    "    MPK - Komisi A Member",
  ],
  whoami: [
    "raihan@portfolio:~$ ",
    "User: Raihan Ariansyah",
    "Role: Fullstack Developer",
    "Shell: /bin/cyber-bash",
    "Uptime: Since 2022",
  ],
  ascii: [
    "        ██████╗  █████╗ ",
    "        ██╔══██╗██╔══██╗",
    "        ██████╔╝███████║",
    "        ██╔══██╗██╔══██║",
    "        ██║  ██║██║  ██║",
    "        ╚═╝  ╚═╝╚═╝  ╚═╝",
    "    RAIHAN ARIANSYAH v2.0",
    "    ═══════════════════════",
    "    Building the future,",
    "    one commit at a time.",
  ],
};

interface TermLine {
  type: "input" | "output";
  text: string;
}

interface InteractiveTerminalProps {
  /** Auto-type a welcome command sequence on first view, then hand over control. */
  autoBoot?: boolean;
}

/** Sequence typed out once on mount when `autoBoot` is enabled (homepage hero). */
const BOOT_SEQUENCE: { input: string; output: string[] }[] = [
  { input: "whoami", output: COMMANDS.whoami },
  { input: "help", output: COMMANDS.help },
];

export default function InteractiveTerminal({ autoBoot = false }: InteractiveTerminalProps = {}) {
  const [lines, setLines] = useState<TermLine[]>([
    { type: "output", text: "Welcome to Raihan's Terminal v2.0" },
    { type: "output", text: 'Type "help" for available commands.' },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [bootInput, setBootInput] = useState("");
  const [bootDone, setBootDone] = useState(!autoBoot);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const output = outputRef.current;
    if (!output) return;

    output.scrollTo({ top: output.scrollHeight, behavior: "smooth" });
  }, [lines]);

  // Auto-boot: type `whoami`, then `help`, then leave the terminal fully interactive.
  useEffect(() => {
    if (!autoBoot || bootDone) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));

    const commit = (step: number) => {
      const { input: cmd, output } = BOOT_SEQUENCE[step];
      setLines((prev) => [
        ...prev,
        { type: "input", text: `raihan@portfolio:~$ ${cmd}` },
        ...output.map((line) => ({ type: "output" as const, text: line })),
        { type: "output", text: "" },
      ]);
    };

    if (reduced) {
      BOOT_SEQUENCE.forEach((_, i) => later(() => commit(i), 0));
      later(() => setBootDone(true), 0);
      return;
    }

    const typeCommand = (step: number) => {
      if (step >= BOOT_SEQUENCE.length) {
        setBootDone(true);
        return;
      }
      const cmd = BOOT_SEQUENCE[step].input;
      let i = 0;
      const typing = window.setInterval(() => {
        i += 1;
        setBootInput(cmd.slice(0, i));
        if (i >= cmd.length) {
          clearInterval(typing);
          commit(step);
          setBootInput("");
          later(() => typeCommand(step + 1), 480);
        }
      }, 90);
      timers.push(typing);
    };

    later(() => typeCommand(0), 600);

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoBoot]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!bootDone) return;
      const cmd = input.trim().toLowerCase();
      const newLines: TermLine[] = [
        ...lines,
        { type: "input", text: `raihan@portfolio:~$ ${input}` },
      ];

      if (cmd === "clear") {
        setLines([]);
        setInput("");
        return;
      }

      if (cmd === "date") {
        newLines.push({ type: "output", text: new Date().toString() });
      } else if (cmd === "games") {
        newLines.push({ type: "output", text: "Redirecting to /arcade..." });
        setTimeout(() => {
          window.location.href = "/arcade";
        }, 500);
      } else if (COMMANDS[cmd]) {
        COMMANDS[cmd].forEach((line) => {
          newLines.push({ type: "output", text: line });
        });
      } else if (cmd !== "") {
        newLines.push({
          type: "output",
          text: `command not found: ${cmd}. Type "help" for available commands.`,
        });
      }

      newLines.push({ type: "output", text: "" });
      setLines(newLines);
      setInput("");
    },
    [input, lines, bootDone]
  );

  return (
    <div
      className="terminal-card flex flex-col h-[420px] cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line-subtle)]">
        <span className="h-2.5 w-2.5 rounded-none bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-none bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-none bg-[#27c93f]" />
        <span className="ml-3 text-[11px] font-bold text-[var(--dim)] uppercase tracking-[0.14em]">
          raihan@portfolio: ~/about
        </span>
      </div>

      <div ref={outputRef} className="flex-1 overflow-y-auto overscroll-contain p-4 font-mono text-[12px] leading-6">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.type === "input" ? "text-[var(--accent-cyan)]" : "text-[var(--muted)]"}
          >
            {line.text}
          </div>
        ))}

        {!bootDone && (
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent-cyan)] whitespace-nowrap">raihan@portfolio:~$</span>
            <span className="font-mono text-[12px] text-[var(--accent-cyan)]">
              {bootInput}
              <span className="cursor-blink" aria-hidden="true" />
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-[var(--accent-cyan)] whitespace-nowrap">raihan@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
              }
            }}
            className="min-h-11 flex-1 bg-transparent text-[var(--ink)] outline-none caret-[var(--accent-cyan)] font-mono text-[12px]"
            autoComplete="off"
            spellCheck={false}
            disabled={!bootDone}
          />
        </form>
      </div>
    </div>
  );
}

