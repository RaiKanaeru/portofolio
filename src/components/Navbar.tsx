"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ScrambleText from "./ScrambleText";
import LiveClock from "./LiveClock";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/notes", label: "NOTES" },
  { href: "/arcade", label: "ARCADE" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar({ locale }: { locale: "en" | "id" }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMobileOpen(false));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="cyber-navbar">
      <div className="mx-auto flex w-full max-w-[1296px] items-center justify-between px-5 py-4 md:px-10 xl:px-0">
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line-subtle)] bg-[var(--surface-soft)] px-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ink)] transition-colors hover:border-[var(--accent-cyan)]"
            href="/"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_14px_rgba(255,255,255,0.5)]" />
            RA_
          </Link>
          <span className="hidden md:block h-4 w-[1px] bg-[var(--line)]" />
          <span className="hidden md:block"><LiveClock /></span>
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 rounded-full border border-[var(--line-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-[11px] font-bold tracking-[0.14em] uppercase lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={isActive(link.href)}
              className={`nav-link transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-[var(--accent-cyan)]"
                  : "text-[var(--dim)] hover:text-[var(--ink)]"
              }`}
            >
              <ScrambleText text={`[${link.label}]`} />
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--line-subtle)] bg-[var(--surface-soft)] p-2 transition-colors hover:border-[var(--accent-cyan)] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block h-[2px] w-5 bg-[var(--ink)] transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-[var(--ink)] transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-[var(--ink)] transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-[max-height,border-color,background-color] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px] border-t border-[var(--line)]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1296px] flex-col gap-2 px-5 py-4 md:px-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`min-h-11 border-l-2 px-4 py-3 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors ${
                isActive(link.href)
                  ? "border-[var(--accent-cyan)] text-[var(--accent-cyan)] bg-[var(--glow)]"
                  : "border-transparent text-[var(--dim)] hover:text-[var(--ink)] hover:border-[var(--line)]"
              }`}
            >
              [{link.label}]
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
