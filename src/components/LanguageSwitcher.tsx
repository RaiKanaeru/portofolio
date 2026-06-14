"use client";

import { useRouter } from "next/navigation";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: "en" | "id" }) {
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="flex items-center border border-[var(--line-subtle)] bg-[rgba(0,0,0,0.5)] p-0.5 text-[9px] font-bold tracking-[0.1em]">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-2 py-1 transition-all ${
          currentLocale === "en" ? "bg-[var(--accent-cyan)] text-black shadow-[0_0_8px_var(--accent-cyan)]" : "text-[var(--dim)] hover:text-[var(--ink)]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("id")}
        className={`px-2 py-1 transition-all ${
          currentLocale === "id" ? "bg-[var(--accent-cyan)] text-black shadow-[0_0_8px_var(--accent-cyan)]" : "text-[var(--dim)] hover:text-[var(--ink)]"
        }`}
      >
        ID
      </button>
    </div>
  );
}
