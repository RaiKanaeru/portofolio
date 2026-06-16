import { cookies } from "next/headers";
import Link from "next/link";
import { getPortfolioData, type Profile } from "@/data/portfolio";

import TypewriterText from "@/components/TypewriterText";
import DigitalRain from "@/components/DigitalRain";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import TechMarquee from "@/components/TechMarquee";
import MagneticButton from "@/components/MagneticButton";
import OrbitingIcons from "@/components/OrbitingIcons";
import ScrollRevealText from "@/components/ScrollRevealText";

const dossierStats = [
  { value: 6, label: "CASE_FILES" },
  { value: 5, label: "BUILD_LANES" },
  { value: 2, label: "MAIN_STUDIES" },
];

const commandItems = ["AVAILABLE", "CASE_STUDY_FIRST", "BACKEND_AWARE", "MOBILE_+_IOT"];

function StatusBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-3 border border-[var(--line)] bg-[var(--surface)] px-4 py-2">
      <span className="pulse-dot h-2 w-2 bg-[var(--accent-cyan)]" style={{ display: "inline-block" }} />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">{label}</span>
    </div>
  );
}

function TerminalProfileCard({ profile, metaLabel }: { profile: Profile; metaLabel: string }) {
  const rows = [
    ["Identity", profile.name],
    ["Status", profile.status],
    ["Major", profile.major],
    ["Base", profile.school],
    ["Focus", "Web / Backend / Mobile / IoT"],
    ["Org", "MPK — Komisi A"],
    ["Mode", "Learning // Building // Shipping"],
  ];

  return (
    <aside className="terminal-card p-6 md:p-7">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">{metaLabel}</p>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--dim)] border border-[var(--line-subtle)] px-2 py-0.5">ID_RA-01</span>
      </div>
      <div className="space-y-3">
        {rows.map(([label, value], index) => (
          <div key={label} className="border-b border-[var(--line-subtle)] pb-3 last:border-b-0">
            <div className="grid grid-cols-[80px_1fr] gap-4">
              <span className="text-[10px] font-bold text-[var(--dim)]">{label}</span>
              <span className="text-[13px] font-bold text-[var(--ink)]">
                <TypewriterText text={value} delay={800 + index * 400} speed={20} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function CommandStrip() {
  return (
    <div className="mt-10 grid w-full max-w-2xl gap-2 border border-[var(--line)] bg-[var(--surface)] p-3 sm:grid-cols-2">
      {commandItems.map((item, index) => (
        <div key={item} className="flex items-center gap-3 border border-[var(--line-subtle)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
          <span className="text-[10px] font-bold text-[var(--muted)]">0{index + 1}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--dim)]">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default async function Home() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id" | undefined;
  const locale = localeCookie === "en" ? "en" : "id";
  const data = getPortfolioData(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative cyber-reveal container-page grid gap-12 pb-16 pt-14 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr]">
        <DigitalRain />
        <div className="radar-sweep" />
        <div className="relative z-10 flex flex-col items-start justify-center">
          <StatusBadge label={data.ui.open_to_work} />
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--dim)]">
            FULLSTACK_DEVELOPER // FRESH_GRADUATE_RPL
          </p>
          <h1 className="h1-display mt-6 max-w-3xl text-[42px] md:text-[58px] xl:text-[68px]">
            {data.profile.heroLines.map((line: string) => (
              <span key={line} className="block">{line}</span>
            ))}
          </h1>
          <ScrollRevealText text={data.profile.summary} className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)]" />
          <div className="mt-9 flex flex-wrap gap-4">
            <MagneticButton><Link className="cyber-btn-primary" href="/projects">{data.ui.view_archive}</Link></MagneticButton>
            <MagneticButton><Link className="cyber-btn-secondary" href="/about">{locale === "id" ? "LIHAT_PROFIL" : "VIEW_PROFILE"}</Link></MagneticButton>
          </div>
          <CommandStrip />
        </div>
        <div className="relative flex flex-col items-center justify-center gap-6">
          <div className="hidden lg:block">
            <OrbitingIcons />
          </div>
          <div className="relative w-full max-w-[430px]">
            <TerminalProfileCard profile={data.profile} metaLabel={data.ui.project_meta} />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="cyber-reveal container-page pb-20">
        <div className="stats-strip grid gap-[1px] md:grid-cols-3">
          {dossierStats.map((stat) => (
            <AnimatedCounter key={stat.label} target={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="cyber-reveal mb-24">
        <TechMarquee />
      </section>

      {/* Quick Links */}
      <section className="cyber-reveal container-page pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { href: "/about", title: locale === "id" ? "TENTANG_SAYA" : "ABOUT_ME", desc: locale === "id" ? "Profil lengkap, kemampuan teknis, dan pengalaman organisasi." : "Full profile, technical skills, and organizational experience.", tag: "PROFILE" },
            { href: "/projects", title: locale === "id" ? "ARSIP_PROYEK" : "PROJECT_ARCHIVE", desc: locale === "id" ? "Studi kasus nyata dari sistem software yang saya bangun." : "Real case studies from software systems I've built.", tag: "ARCHIVE" },
            { href: "/arcade", title: "CYBER_ARCADE", desc: locale === "id" ? "Main game Pong melawan AI. Tunjukkan skillmu!" : "Play Pong against AI. Show your skills!", tag: "GAME" },
          ].map((item) => (
            <TiltCard key={item.href}>
              <Link href={item.href} className="project-card spotlight-card group block p-7 transition duration-300 h-full">
                <span className="relative z-[1] border border-[var(--line)] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent-cyan)]">{item.tag}</span>
                <h2 className="relative z-[1] heading-font mt-5 text-xl font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--accent-cyan)]">{item.title}</h2>
                <p className="relative z-[1] mt-3 text-sm leading-7 text-[var(--muted)]">{item.desc}</p>
                <p className="relative z-[1] mt-5 text-[10px] font-bold text-[var(--muted)] opacity-60 transition group-hover:opacity-100">ENTER →</p>
              </Link>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
}