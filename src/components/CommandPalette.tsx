"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const actions = [
  { label: "Home", href: "/", tag: "PAGE" },
  { label: "About", href: "/about", tag: "PAGE" },
  { label: "Projects", href: "/projects", tag: "PAGE" },
  { label: "Notes", href: "/notes", tag: "PAGE" },
  { label: "Arcade — Pong Game", href: "/arcade", tag: "GAME" },
  { label: "Contact", href: "/contact", tag: "PAGE" },
  { label: "ABSENTA13", href: "/projects/absenta13", tag: "PROJECT" },
  { label: "Manajemen Tracking", href: "/projects/manajemen-tracking", tag: "PROJECT" },
  { label: "Absensi App", href: "/projects/absensi-app", tag: "PROJECT" },
  { label: "IoT Workshop Kit", href: "/projects/iot-workshop-kit-iwk", tag: "PROJECT" },
  { label: "HoyoSense", href: "/projects/hoyosense", tag: "PROJECT" },
  { label: "Hoyonimeku", href: "/projects/hoyonimeku", tag: "PROJECT" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      router.push(href);
    },
    [router]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        handleNavigate(filtered[selectedIndex].href);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selectedIndex, handleNavigate]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[560px] mx-4 border border-[var(--line)] bg-[var(--surface)] shadow-[0_0_60px_rgba(34,211,238,0.06)] animate-[page-fade-in_0.15s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--line-subtle)]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5" />
            <path d="M11 11l3.5 3.5" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, projects..."
            className="flex-1 bg-transparent text-[var(--ink)] text-sm font-bold outline-none placeholder:text-[var(--dim)]"
            autoFocus
          />
          <kbd className="text-[9px] font-bold text-[var(--dim)] border border-[var(--line-subtle)] px-1.5 py-0.5">ESC</kbd>
        </div>

        {/* Results */}
        <div className="max-h-[320px] overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="px-5 py-6 text-center text-[12px] font-bold text-[var(--dim)]">No results found.</p>
          ) : (
            filtered.map((action, i) => (
              <button
                key={action.href}
                onClick={() => handleNavigate(action.href)}
                className={`w-full flex items-center justify-between px-5 py-3 text-left transition-colors ${
                  i === selectedIndex
                    ? "bg-[rgba(34,211,238,0.06)] text-[var(--accent-cyan)]"
                    : "text-[var(--muted)] hover:bg-[rgba(255,255,255,0.03)] hover:text-[var(--ink)]"
                }`}
              >
                <span className="text-sm font-bold">{action.label}</span>
                <span className={`text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 border ${
                  action.tag === "GAME"
                    ? "border-[#ff0050] text-[#ff0050]"
                    : action.tag === "PROJECT"
                      ? "border-[var(--accent-cyan)] text-[var(--accent-cyan)]"
                      : "border-[var(--line)] text-[var(--dim)]"
                }`}>
                  {action.tag}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[var(--line-subtle)]">
          <div className="flex items-center gap-3 text-[9px] font-bold text-[var(--dim)]">
            <span>↑↓ Navigate</span>
            <span>↵ Open</span>
          </div>
          <span className="text-[9px] font-bold text-[var(--dim)]">Ctrl+K to toggle</span>
        </div>
      </div>
    </div>
  );
}
