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
  date: [],
  games: ["Redirecting to /arcade..."],
  clear: [],
};

interface TermLine {
  type: "input" | "output";
  text: string;
}

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<TermLine[]>([
    { type: "output", text: "Welcome to Raihan's Terminal v2.0" },
    { type: "output", text: 'Type "help" for available commands.' },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
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
      } else if (cmd === "") {
        // do nothing
      } else {
        newLines.push({
          type: "output",
          text: `command not found: ${cmd}. Type "help" for available commands.`,
        });
      }

      newLines.push({ type: "output", text: "" });
      setLines(newLines);
      setInput("");
    },
    [input, lines]
  );

  return (
    <div
      className="terminal-card flex flex-col h-[420px] cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line-subtle)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-[10px] font-bold text-[var(--dim)] uppercase tracking-[0.14em]">
          raihan@portfolio: ~/about
        </span>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-[12px] leading-6">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.type === "input" ? "text-[var(--accent-cyan)]" : "text-[var(--muted)]"}
          >
            {line.text}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-[var(--accent-cyan)] whitespace-nowrap">raihan@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-[var(--ink)] outline-none caret-[var(--accent-cyan)] font-mono text-[12px]"
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
