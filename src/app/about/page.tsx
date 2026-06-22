import { cookies } from "next/headers";
import { getPortfolioData, type Capability } from "@/data/portfolio";
import type { Metadata } from "next";
import ScrambleText from "@/components/ScrambleText";
import TypewriterText from "@/components/TypewriterText";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import SkillBars from "@/components/SkillBars";
import ActivityHeatmap from "@/components/ActivityHeatmap";
import GlitchAvatar from "@/components/GlitchAvatar";
import ScrollRevealText from "@/components/ScrollRevealText";

export const metadata: Metadata = {
  title: "About",
  description: "Profile, technical skills, and organizational experience of Raihan Ariansyah.",
};

const timeline = [
  { year: "2022", title: "Mulai Belajar Programming", desc: "Belajar dasar pemrograman (HTML, CSS, JS) dan logika algoritma." },
  { year: "2023", title: "Fullstack & Mobile", desc: "Mendalami Laravel, Flutter, Firebase, dan membangun proyek pertama." },
  { year: "2024", title: "Backend & IoT", desc: "Eksplorasi Go, REST API, PostgreSQL, ESP32, MQTT, dan WebSocket." },
  { year: "2025", title: "Fresh Graduate", desc: "Lulus dari SMK Negeri 13 Bandung, siap berkontribusi di industri." },
];

const timelineEN = [
  { year: "2022", title: "Started Learning Programming", desc: "Learned programming fundamentals (HTML, CSS, JS) and algorithmic logic." },
  { year: "2023", title: "Fullstack & Mobile", desc: "Dived into Laravel, Flutter, Firebase, and built first real projects." },
  { year: "2024", title: "Backend & IoT", desc: "Explored Go, REST APIs, PostgreSQL, ESP32, MQTT, and WebSocket." },
  { year: "2025", title: "Fresh Graduate", desc: "Graduated from SMK Negeri 13 Bandung, ready to contribute to the industry." },
];

export default async function AboutPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id" | undefined;
  const locale = localeCookie === "en" ? "en" : "id";
  const data = getPortfolioData(locale);
  const timelineData = locale === "id" ? timeline : timelineEN;

  return (
    <div className="container-page section-tight">
      {/* Page Header */}
      <div className="cyber-reveal route-hero stack-header">
        <p className="meta-chip w-fit" data-tone="mono"><ScrambleText text={data.ui.profile_brief} /></p>
        <h1 className="h1-display mt-5 max-w-3xl">
          {data.ui.hero_title}
        </h1>
        <ScrollRevealText text={data.ui.hero_desc} className="lead-text mt-6 max-w-4xl" />
      </div>

      {/* Terminal Profile */}
      <div className="cyber-reveal mb-20 grid gap-8 lg:grid-cols-[1fr_280px_400px]">
        <div className="space-y-6">
          <div className="cyber-card p-7">
            <p className="text-[10px] font-bold text-[var(--dim)] mb-4">PERSONAL_DATA</p>
            <div className="space-y-3">
              {[
                [locale === "id" ? "Nama" : "Name", data.profile.name],
                [locale === "id" ? "Peran" : "Role", data.profile.role],
                [locale === "id" ? "Sekolah" : "School", data.profile.school],
                [locale === "id" ? "Jurusan" : "Major", data.profile.major],
                [locale === "id" ? "Lokasi" : "Location", data.profile.location],
                ["Email", data.profile.email],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-[var(--line-subtle)] pb-3 last:border-b-0 grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-[10px] font-bold text-[var(--dim)]">{label}</span>
                  <span className="text-[13px] font-bold text-[var(--ink)]">
                    <TypewriterText text={value} delay={300} speed={15} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <GlitchAvatar />
        </div>

        <div className="relative">
          <InteractiveTerminal />
        </div>
      </div>

      {/* Tech Stack & Skills */}
      <div className="cyber-reveal mb-20 grid gap-12 lg:grid-cols-[1fr_400px]">
        <div>
          <p className="section-num"><ScrambleText text={data.ui.tech_ops} /></p>
          <h2 className="h2-section mt-4">ENGINEERING STACK</h2>
          <div className="mt-8 grid gap-[1px] md:grid-cols-2">
            {data.capabilities.map((item: Capability, index: number) => (
              <article key={item.title} className="cyber-card spotlight-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--ink)]">{item.title}</h3>
                  <span className="text-[10px] font-bold text-[var(--dim)]">SYS_0{index + 1}</span>
                </div>
                <p className="mt-4 text-[11px] font-bold text-[var(--muted)]">{item.meta}</p>
                <div className="mt-5 h-[1px] bg-gradient-to-r from-[var(--line)] via-[rgba(255,255,255,0.12)] to-transparent" />
              </article>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-bold text-[var(--dim)] mb-6">SKILL_METRICS</p>
          <SkillBars />
        </div>
      </div>

      {/* GitHub Heatmap */}
      <div className="cyber-reveal mb-20">
        <div className="terminal-card p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">{"// ACTIVITY_LOG"}</p>
            <p className="text-[10px] font-bold text-[var(--dim)]">1,245 COMMITS (THIS YEAR)</p>
          </div>
          <ActivityHeatmap />
        </div>
      </div>

      {/* Timeline */}
      <div className="cyber-reveal mb-20">
        <p className="section-num"><ScrambleText text={locale === "id" ? "// PERJALANAN" : "// JOURNEY"} /></p>
        <h2 className="h2-section mt-4">
          {locale === "id" ? "TIMELINE PERJALANAN" : "JOURNEY TIMELINE"}
        </h2>
        <div className="mt-10 relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--line)] to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {timelineData.map((item, index) => (
              <div key={item.year} className={`cyber-reveal relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-[12px] top-2 h-4 w-4 rounded-full border-2 border-[var(--accent-cyan)] bg-[var(--canvas)] z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="cyber-card spotlight-card p-6">
                    <span className="heading-font text-2xl font-bold text-[var(--accent-cyan)]">{item.year}</span>
                    <h3 className="mt-3 text-base font-bold uppercase tracking-[0.08em] text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Organization */}
      <div className="cyber-reveal mb-20">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-num"><ScrambleText text={data.ui.leadership_record} /></p>
            <h2 className="h2-section mt-4 leading-tight">
              {data.ui.leadership_title}
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              {data.ui.leadership_desc}
            </p>
          </div>
          <div className="grid gap-3">
            {data.organizationHighlights.map((item: string, index: number) => (
              <article key={index} className="cyber-card spotlight-card p-5">
                <p className="text-[10px] font-bold text-[var(--dim)]">REC_0{index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
