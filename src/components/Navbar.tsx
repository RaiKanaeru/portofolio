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
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="cyber-navbar">
      <div className="mx-auto flex w-full max-w-[1296px] items-center justify-between px-5 py-5 md:px-10 xl:px-0">
        <div className="flex items-center gap-4">
          <Link
            className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--ink)]"
            href="/"
          >
            RA_
          </Link>
          <span className="hidden md:block h-4 w-[1px] bg-[var(--line)]" />
          <span className="hidden md:block"><LiveClock /></span>
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-[11px] font-bold tracking-[0.14em] uppercase lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
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
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-[500px] border-t border-[var(--line)]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-[1296px] px-5 py-4 md:px-10 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 px-4 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors border-l-2 ${
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
