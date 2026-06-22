"use client";

import { useRouter } from "next/navigation";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: "en" | "id" }) {
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="flex items-center rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 text-[9px] font-bold tracking-[0.1em] shadow-[0_10px_28px_rgba(31,41,55,0.06)]" aria-label="Pilih bahasa">
      <button
        onClick={() => handleLanguageChange("en")}
        aria-pressed={currentLocale === "en"}
        className={`min-h-11 rounded-full px-3 py-1 transition-all ${
          currentLocale === "en" ? "bg-[rgba(255,255,255,0.14)] text-[var(--accent-cyan)] shadow-[0_10px_24px_rgba(255,255,255,0.12)]" : "text-[var(--dim)] hover:text-[var(--ink)]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("id")}
        aria-pressed={currentLocale === "id"}
        className={`min-h-11 rounded-full px-3 py-1 transition-all ${
          currentLocale === "id" ? "bg-[rgba(255,255,255,0.14)] text-[var(--accent-cyan)] shadow-[0_10px_24px_rgba(255,255,255,0.12)]" : "text-[var(--dim)] hover:text-[var(--ink)]"
        }`}
      >
        ID
      </button>
    </div>
  );
}

