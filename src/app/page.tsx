import { cookies } from "next/headers";
import Link from "next/link";
import { getAllProjects, getPortfolioData, slugifyProjectTitle, type FeaturedProject, type Profile } from "@/data/portfolio";

import DigitalRain from "@/components/DigitalRain";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import TechMarquee from "@/components/TechMarquee";
import MagneticButton from "@/components/MagneticButton";
import Hero3DScene from "@/components/Hero3DScene";
import ScrollRevealText from "@/components/ScrollRevealText";

const dossierStats = [
  { value: 6, label: "CASE_FILES" },
  { value: 7, label: "TECH_STACKS" },
  { value: 3, label: "BUILD_MODES" },
];

const proofItems = [
  { label: "Signal", value: "Case-led build" },
  { label: "System", value: "Backend + Data" },
  { label: "Orbit", value: "Mobile + IoT" },
];

const commandItems = ["SCAN_CASES", "MAP_SYSTEMS", "TRACE_DECISIONS", "OPEN_CONTACT"];

function StatusBadge({ label }: { label: string }) {
  return (
    <div className="portfolio-status-badge inline-flex items-center gap-3 border border-[var(--line)] bg-[var(--surface)] px-4 py-2">
      <span className="pulse-dot h-2 w-2 bg-[var(--accent-cyan)]" style={{ display: "inline-block" }} />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">{label}</span>
    </div>
  );
}

function ProofRail() {
  return (
    <div className="proof-rail mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
      {proofItems.map((item) => (
        <div key={item.label} className="proof-card accent-mono">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
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
        <span className="border border-[var(--line-subtle)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--dim)]">ID_RA-01</span>
      </div>
      <div className="space-y-3">
        {rows.map(([label, value]) => (
          <div key={label} className="border-b border-[var(--line-subtle)] pb-3 last:border-b-0">
            <div className="grid grid-cols-[80px_1fr] gap-4">
              <span className="text-[10px] font-bold text-[var(--dim)]">{label}</span>
              <span className="break-words text-[13px] font-bold leading-6 text-[var(--ink)]">
                {value}
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
    <div className="community-command-deck mt-8 w-full max-w-2xl">
      <div className="community-command-deck__bar">
        <span>ra@portfolio:~</span>
        <span>community_ref // terminal_editorial</span>
      </div>
      <div className="community-command-deck__grid">
        {commandItems.map((item, index) => (
          <div key={item} className="community-command-deck__item">
            <span className="community-command-deck__prompt">$ run 0{index + 1}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="section-console-header mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="meta-chip w-fit" data-tone="mono">{eyebrow}</p>
        <h2 className="h2-section mt-4 max-w-3xl">{title}</h2>
      </div>
      <p className="max-w-md text-sm leading-7 text-[var(--muted)] md:text-right">{desc}</p>
    </div>
  );
}

function FeaturedCaseCard({ project }: { project: FeaturedProject }) {
  return (
    <TiltCard>
      <Link href={`/projects/${slugifyProjectTitle(project.title)}`} className="case-study-card accent-mono group block h-full">
        <div className="relative z-[1] flex items-start justify-between gap-4">
          <p className="heading-font text-5xl font-bold text-[var(--dim)]">{project.number}</p>
          <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">CASE_FILE</span>
        </div>
        <div className="relative z-[1] mt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--card-accent)]">{project.category}</p>
          <h3 className="heading-font mt-3 text-2xl font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--card-accent)]">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
        </div>
        <div className="relative z-[1] mt-7 grid gap-3 border-t border-[var(--line-subtle)] pt-5 text-[11px] md:grid-cols-3">
          <span><b>ROLE</b>{project.role}</span>
          <span><b>STACK</b>{project.stack}</span>
          <span><b>STATE</b>{project.status}</span>
        </div>
      </Link>
    </TiltCard>
  );
}

export default async function Home() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id" | undefined;
  const locale = localeCookie === "en" ? "en" : "id";
  const data = getPortfolioData(locale);
  const allProjects = getAllProjects(locale);
  const featuredProjects = data.featuredProjects;
  const supportingProjects = allProjects.slice(featuredProjects.length);

  return (
    <>
      <section className="portfolio-hero motion-hero relative cyber-reveal container-page grid gap-12 pb-16 pt-14 lg:min-h-[760px] lg:grid-cols-[1.08fr_0.92fr]">
        <DigitalRain />
        <div className="cosmic-field" aria-hidden="true" />
        <div className="constellation-map" aria-hidden="true" />
        <div className="motion-hero__beam motion-hero__beam--one" aria-hidden="true" />
        <div className="motion-hero__beam motion-hero__beam--two" aria-hidden="true" />
        <div className="radar-sweep" aria-hidden="true" />
        <div className="portfolio-hero__copy relative z-10 flex flex-col items-start justify-center">
          <StatusBadge label={data.ui.open_to_work} />
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="meta-chip" data-tone="mono">FULLSTACK_DEVELOPER</span>
            <span className="meta-chip" data-tone="mono">CASE_STUDY_ARCHIVE</span>
            <span className="meta-chip" data-tone="mono">PRODUCTION_MINDSET</span>
          </div>
          <h1 className="h1-display hero-title mt-6 max-w-3xl text-[42px] md:text-[58px] xl:text-[72px]">
            {data.profile.heroLines.map((line: string) => (
              <span key={line} className="block">{line}</span>
            ))}
          </h1>
          <ScrollRevealText text={data.profile.summary} className="hero-summary mt-8 max-w-xl text-sm leading-7 text-[var(--muted)]" />
          <ProofRail />
          <div className="mt-9 flex flex-wrap gap-4">
            <MagneticButton><Link className="cyber-btn-primary" href="/projects">{data.ui.view_archive}</Link></MagneticButton>
            <MagneticButton><Link className="cyber-btn-secondary" href="/contact">{locale === "id" ? "MULAI_KONTAK" : "START_CONTACT"}</Link></MagneticButton>
          </div>
          <CommandStrip />
        </div>
        <div className="portfolio-hero__visual relative flex flex-col items-center justify-center gap-6">
          <div className="hero-depth-orb hidden lg:block" aria-hidden="true" />
          <div className="cosmic-orbit-ring cosmic-orbit-ring--one hidden lg:block" aria-hidden="true" />
          <div className="cosmic-orbit-ring cosmic-orbit-ring--two hidden lg:block" aria-hidden="true" />
          <div className="hero-orbit-frame hidden lg:block"><Hero3DScene /></div>
          <div className="relative w-full max-w-[430px] hero-terminal-wrap"><TerminalProfileCard profile={data.profile} metaLabel={data.ui.project_meta} /></div>
        </div>
      </section>

      <section className="cyber-reveal container-page pb-20" data-reveal>
        <div className="dossier-strip grid gap-[1px] md:grid-cols-3">
          {dossierStats.map((stat) => <AnimatedCounter key={stat.label} target={stat.value} label={stat.label} />)}
        </div>
      </section>

      <section className="cyber-reveal mb-20"><TechMarquee /></section>

      <section className="cyber-reveal container-page pb-24" data-reveal>
        <SectionHeader
          eyebrow="// CAPABILITY_MATRIX"
          title={locale === "id" ? "Kemampuan teknis yang disusun sebagai sistem, bukan daftar template." : "Technical capability framed as a system, not a template list."}
          desc={locale === "id" ? "Setiap area diposisikan sebagai jalur build yang bisa dibaca dari problem, keputusan, sampai hasil." : "Each area is positioned as a build lane that can be read from problem, decision, to result."}
        />
        <div className="case-file-wall">
          {data.capabilities.map((capability, index) => (
            <article
              key={capability.title}
              data-reveal
              data-reveal-delay={`${index * 80}ms`}
              className="dossier-card accent-mono"
            >
              <span className="meta-chip" data-tone="mono">SYS_0{index + 1}</span>
              <h3 className="dossier-title mt-7 text-xl">{capability.title}</h3>
              <p className="dossier-copy mt-4">{capability.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cyber-reveal container-page pb-24" data-reveal>
        <SectionHeader
          eyebrow="// FEATURED_CASES"
          title={locale === "id" ? "Studi kasus utama dengan konteks masalah dan keputusan teknis." : "Main case studies with problem context and technical decisions."}
          desc={locale === "id" ? "Portfolio diarahkan agar recruiter atau mentor bisa membaca cara berpikir, bukan hanya melihat kartu proyek." : "The portfolio is directed so recruiters or mentors can read the thinking, not only project cards."}
        />
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          {featuredProjects.map((project) => <FeaturedCaseCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="cyber-reveal container-page pb-24">
        <div className="dossier-panel grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent-cyan)]">{"// BUILD_ARCHIVE"}</p>
            <h2 className="h2-section mt-3">{locale === "id" ? "Jalur pendukung yang memperluas bukti teknis." : "Supporting lanes that expand technical proof."}</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{locale === "id" ? "Bagian ini menjaga website tetap terasa seperti arsip sistem, bukan landing page generik." : "This keeps the site feeling like a system archive, not a generic landing page."}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="cyber-btn-primary">OPEN_ARCHIVE</Link>
              <Link href="/notes" className="cyber-btn-secondary">READ_NOTES</Link>
            </div>
          </div>
          <div className="supporting-build-grid grid gap-3 sm:grid-cols-2">
            {supportingProjects.slice(0, 4).map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                data-reveal
                data-reveal-delay={`${index * 70}ms`}
                className="supporting-build-card accent-mono"
              >
                <span>{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.stack}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cyber-reveal container-page pb-24" data-reveal>
        <div className="home-final-grid grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <article className="dossier-panel" data-reveal data-reveal-delay="60ms">
            <p className="meta-chip" data-tone="mono">{"// ORGANIZATION_SIGNAL"}</p>
            <h2 className="h2-section mt-3">{data.profile.organization.position}</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{data.profile.organization.description}</p>
            <div className="mt-6 grid gap-3">
              {data.organizationHighlights.slice(0, 3).map((item) => <p key={item} className="mini-log-line">{item}</p>)}
            </div>
          </article>
          <article className="dossier-panel accent-mono" data-reveal data-reveal-delay="160ms" data-reveal-axis="x">
            <p className="meta-chip" data-tone="mono">{"// NEXT_ACTION"}</p>
            <h2 className="h2-section mt-3">{data.ui.contact_title}</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{locale === "id" ? "Jika ingin melihat alur lengkap, mulai dari arsip proyek atau langsung kontak untuk kolaborasi." : "To inspect the full flow, start from the project archive or contact for collaboration."}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="cyber-btn-primary">CONTACT_RA</Link>
              <Link href="/about" className="cyber-btn-secondary">PROFILE</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}