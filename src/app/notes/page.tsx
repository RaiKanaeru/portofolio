import { cookies } from "next/headers";
import { getPortfolioData, type LearningNote } from "@/data/portfolio";
import type { Metadata } from "next";
import ScrambleText from "@/components/ScrambleText";
import TiltCard from "@/components/TiltCard";
import TypewriterText from "@/components/TypewriterText";

export const metadata: Metadata = {
  title: "Notes",
  description: "Learning notes and development insights by Raihan Ariansyah.",
};

export default async function NotesPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id" | undefined;
  const locale = localeCookie === "en" ? "en" : "id";
  const data = getPortfolioData(locale);

  return (
    <div className="container-page section-tight">
      {/* Header */}
      <div className="cyber-reveal stack-header">
        <p className="section-num"><ScrambleText text={data.ui.learning_records} /></p>
        <h1 className="h1-display mt-4 max-w-2xl">
          {data.ui.notes_title}
        </h1>
        <p className="lead-text mt-6">{data.ui.notes_desc}</p>
      </div>

      {/* Notes Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {data.learningNotes.map((note: LearningNote, index: number) => (
          <TiltCard key={note.title}>
            <article className="cyber-card spotlight-card p-7 cyber-reveal h-full transition duration-300 group">
              <div className="flex items-center gap-3 mb-5">
                <span className="heading-font text-3xl font-bold text-[var(--dim)] transition-colors group-hover:text-[var(--accent-cyan)]">0{index + 1}</span>
                <span className="h-[1px] flex-1 bg-gradient-to-r from-[var(--accent-cyan)] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
              <h2 className="text-lg font-bold uppercase tracking-[0.06em] text-[var(--ink)] transition-colors group-hover:text-[var(--accent-cyan)]">{note.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{note.summary}</p>
              <div className="mt-6 pt-4 border-t border-[var(--line-subtle)]">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--dim)] group-hover:text-[var(--accent-cyan)] transition-colors">LOG_ENTRY</span>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>

      {/* Philosophy Box */}
      <div className="cyber-reveal mt-16">
        <div className="terminal-card p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)] mb-4">// DEVELOPMENT_PHILOSOPHY</p>
          <div className="font-mono text-[12px] text-[var(--muted)] space-y-2">
            <p><span className="text-[var(--accent-cyan)]">$</span> cat philosophy.md</p>
            <p className="pl-4 text-[var(--ink)]">
              <TypewriterText text={`> "${locale === "id" ? "Bangun sistem yang bisa dibaca, bukan hanya yang bisa berjalan." : "Build systems that can be read, not just ones that run."}"`} delay={500} speed={15} />
            </p>
            <p className="pl-4 text-[var(--ink)]">
              <TypewriterText text={`> "${locale === "id" ? "Setiap proyek harus bisa menjelaskan dirinya sendiri." : "Every project should be able to explain itself."}"`} delay={1500} speed={15} />
            </p>
            <p className="pl-4 text-[var(--ink)]">
              <TypewriterText text={`> "${locale === "id" ? "Dokumentasi adalah bagian dari kode." : "Documentation is part of the code."}"`} delay={2500} speed={15} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
