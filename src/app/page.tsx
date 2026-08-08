import { cookies } from "next/headers";
import Link from "next/link";
import { getAllProjects, getPortfolioData, slugifyProjectTitle, type FeaturedProject } from "@/data/portfolio";

import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";
import ScrollRevealText from "@/components/ScrollRevealText";
import TechMarquee from "@/components/TechMarquee";
import TiltCard from "@/components/TiltCard";
import ScrambleText from "@/components/ScrambleText";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import CodeFlavor from "@/components/CodeFlavor";

const dossierStats = [
  { value: 6, label: "CASE_FILES" },
  { value: 7, label: "SYSTEM_LANES" },
  { value: 3, label: "DELIVERY_MODES" },
];

const proofItems = [
  { label: "Approach", value: "Case-study first" },
  { label: "Core", value: "Backend + Data" },
  { label: "Reach", value: "Web + Mobile + IoT" },
];

const routeItems = [
  { number: "01", label: "CASE_STUDIES", href: "#case-studies" },
  { number: "02", label: "CAPABILITIES", href: "#capabilities" },
  { number: "03", label: "BUILD_NOTES", href: "/notes" },
  { number: "04", label: "START_CONTACT", href: "/contact" },
];

function StatusBadge({ label }: { label: string }) {
  return (
    <div className="portfolio-status-badge inline-flex items-center gap-3 border border-[var(--line)] bg-[var(--surface)] px-4 py-2">
      <span className="pulse-dot h-2 w-2 bg-[var(--accent-cyan)]" aria-hidden="true" />
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">{label}</span>
    </div>
  );
}

function ProofRail() {
  return (
    <div className="proof-rail mt-7 grid w-full gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
      {proofItems.map((item) => (
        <div key={item.label} className="proof-card accent-mono">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}

function RouteRail() {
  return (
    <nav className="route-rail mt-7" aria-label="Jalur utama portfolio">
      {routeItems.map((item) => (
        <Link key={item.label} href={item.href} className="route-rail__item cursor-target">
          <span>{item.number}</span>
          <strong>{item.label}</strong>
          <b aria-hidden="true">↗</b>
        </Link>
      ))}
    </nav>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="section-console-header mb-9 grid gap-5 lg:grid-cols-[1fr_0.42fr] lg:items-end">
      <div>
        <h2 className="h2-section max-w-4xl">
          <span className="meta-chip mb-3 block w-fit" data-tone="mono"><ScrambleText trigger="view" text={eyebrow} /></span>
          {title}
        </h2>
      </div>
      <p className="max-w-md text-sm leading-7 text-[var(--muted)] lg:text-right">{desc}</p>
    </div>
  );
}

function HeroEvidenceCard({ project, locale }: { project: FeaturedProject; locale: "en" | "id" }) {
  return (
    <Link
      href={`/projects/${slugifyProjectTitle(project.title)}`}
      className="hero-evidence-card spotlight-card cursor-target"
      aria-label={`${locale === "id" ? "Buka studi kasus" : "Open case study"} ${project.title}`}
    >
      <div className="hero-evidence-card__topline">
        <span>PRIMARY_EVIDENCE / {project.number}</span>
        <b>{project.status}</b>
      </div>
      <div className="hero-evidence-card__title">
        <span>{project.category}</span>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
      </div>
      <dl className="hero-evidence-card__proof">
        <div>
          <dt>{locale === "id" ? "Masalah" : "Problem"}</dt>
          <dd>{project.caseStudy.problem}</dd>
        </div>
        <div>
          <dt>{locale === "id" ? "Hasil" : "Outcome"}</dt>
          <dd>{project.caseStudy.result}</dd>
        </div>
      </dl>
      <div className="hero-evidence-card__footer">
        <span>{project.stack}</span>
        <strong>{locale === "id" ? "BACA_STUDI_KASUS" : "READ_CASE_STUDY"} ↗</strong>
      </div>
    </Link>
  );
}

function FeaturedCaseCard({ project, locale }: { project: FeaturedProject; locale: "en" | "id" }) {
  return (
    <TiltCard>
      <Link
        href={`/projects/${slugifyProjectTitle(project.title)}`}
        className="case-study-card accent-mono spotlight-card cursor-target group block h-full"
        aria-label={`${locale === "id" ? "Buka studi kasus" : "Open case study"} ${project.title}`}
      >
        <div className="relative z-[1] flex items-start justify-between gap-4">
          <p className="heading-font text-5xl font-bold text-[var(--dim)]">{project.number}</p>
          <span className="border border-[var(--line)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">CASE_FILE</span>
        </div>
        <div className="relative z-[1] mt-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--card-accent)]">{project.category}</p>
          <h3 className="heading-font mt-3 text-2xl font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--card-accent)]">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
        </div>
        <div className="case-study-card__outcome relative z-[1] mt-7">
          <span>{locale === "id" ? "OUTCOME" : "OUTCOME"}</span>
          <p>{project.caseStudy.result}</p>
        </div>
        <div className="relative z-[1] mt-7 grid gap-3 border-t border-[var(--line-subtle)] pt-5 text-[12px] md:grid-cols-3">
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
  const locale = cookieStore.get("NEXT_LOCALE")?.value === "en" ? "en" : "id";
  const data = getPortfolioData(locale);
  const allProjects = getAllProjects(locale);
  const featuredProjects = data.featuredProjects;
  const supportingProjects = allProjects.slice(featuredProjects.length);
  const primaryProject = featuredProjects[0];

  return (
    <>
      <section className="portfolio-hero portfolio-hero-v3 motion-hero relative container-page grid gap-10 pb-20 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="portfolio-hero__grid" aria-hidden="true" />
        <div className="hero-ambient-mesh" aria-hidden="true" />
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="hero-scan-line" aria-hidden="true" />
        <div className="portfolio-hero__copy relative z-10 flex flex-col items-start justify-center">
          <StatusBadge label={data.ui.open_to_work} />
          <ScrambleText as="p" trigger="view" className="hero-identity mt-7" text="RAIHAN_ARIANSYAH / IT_SYSTEMS_BUILDER" />
          <h1 className="h1-display hero-title mt-5 max-w-3xl">
            {data.profile.heroLines.map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
          <ScrollRevealText text={data.profile.summary} className="hero-summary mt-7 max-w-2xl text-sm leading-7 text-[var(--muted)]" />
          <ProofRail />
          <div className="mt-7 flex flex-wrap gap-3">
            <MagneticButton><Link className="cyber-btn-primary" href="#case-studies">{data.ui.view_archive}</Link></MagneticButton>
            <MagneticButton><Link className="cyber-btn-secondary" href="/contact">{locale === "id" ? "MULAI_KONTAK" : "START_CONTACT"}</Link></MagneticButton>
          </div>
          <RouteRail />
        </div>
        <div className="portfolio-hero__visual relative z-[2]">
          <div className="hero-orbit-frame" aria-hidden="true"><div className="hero-depth-orb" aria-hidden="true" /></div>
          <div className="hero-terminal-wrap">
            <p className="hero-terminal-note">
              <strong>{data.ui.hero_terminal_caption}</strong>
              <span>{data.ui.terminal_hint}</span>
            </p>
            <InteractiveTerminal autoBoot />
          </div>
          <HeroEvidenceCard project={primaryProject} locale={locale} />
        </div>
      </section>

      <div className="section-beam" aria-hidden="true" />

      <section className="container-page pb-12" aria-label={locale === "id" ? "Ringkasan portfolio" : "Portfolio summary"}>
        <div className="dossier-strip grid gap-px bg-[var(--line)] md:grid-cols-3">
          {dossierStats.map((stat) => <AnimatedCounter key={stat.label} target={stat.value} label={stat.label} />)}
        </div>
      </section>

      <div className="section-beam" aria-hidden="true" />

      <section id="case-studies" className="cyber-reveal container-page scroll-mt-24 pb-24" data-reveal>
        <SectionHeader
          eyebrow="// SELECTED_EVIDENCE"
          title={locale === "id" ? "Bukti kerja yang menjelaskan masalah, keputusan, dan hasil." : "Selected work that explains the problem, decisions, and outcome."}
          desc={locale === "id" ? "Dua studi kasus utama ditempatkan di depan agar cara berpikir teknis bisa dinilai tanpa menelusuri seluruh website." : "Two primary case studies sit upfront so technical thinking can be evaluated without searching the whole site."}
        />
        <div className="selected-case-grid grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => <FeaturedCaseCard key={project.title} project={project} locale={locale} />)}
        </div>
      </section>

      <section className="cyber-reveal mb-20"><TechMarquee /></section>

      <section className="cyber-reveal container-page mb-20">
        <CodeFlavor />
      </section>

      <div className="section-beam" aria-hidden="true" />

      <section id="capabilities" className="cyber-reveal container-page scroll-mt-24 pb-24" data-reveal>
        <SectionHeader
          eyebrow="// SYSTEM_CAPABILITIES"
          title={locale === "id" ? "Kemampuan disusun sebagai jalur delivery, bukan daftar teknologi." : "Capabilities framed as delivery lanes, not a technology list."}
          desc={locale === "id" ? "Setiap area menghubungkan problem, implementasi, dan bukti yang bisa diperiksa." : "Each lane connects a problem, implementation, and evidence that can be inspected."}
        />
        <div className="case-file-wall">
          {data.capabilities.map((capability, index) => (
            <article key={capability.title} data-reveal data-reveal-delay={`${index * 55}ms`} className="dossier-card accent-mono spotlight-card cursor-target">
              <span className="meta-chip" data-tone="mono">SYS_0{index + 1}</span>
              <h3 className="dossier-title mt-7 text-xl">{capability.title}</h3>
              <p className="dossier-copy mt-4">{capability.meta}</p>
              {capability.subs && capability.subs.length > 0 && (
                <ul className="feature-card__subs mt-6">
                  {capability.subs.map((sub) => (
                    <li key={sub} className="feature-card__sub">{sub}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="cyber-reveal container-page pb-24">
        <div className="dossier-panel spotlight-card grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <h2 className="h2-section mt-4"><span className="meta-chip mb-3 block w-fit" data-tone="mono">{"// BUILD_ARCHIVE"}</span>{locale === "id" ? "Eksperimen pendukung, tetap dengan jejak teknis." : "Supporting builds with a technical trail."}</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{locale === "id" ? "Buka arsip lengkap untuk melihat proyek lain, batasan, dan keputusan implementasinya." : "Open the full archive to inspect additional projects, constraints, and implementation decisions."}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="cyber-btn-primary">OPEN_ARCHIVE</Link>
              <Link href="/notes" className="cyber-btn-secondary">READ_NOTES</Link>
            </div>
          </div>
          <div className="supporting-build-grid grid gap-3 sm:grid-cols-2">
            {supportingProjects.slice(0, 4).map((project, index) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} data-reveal data-reveal-delay={`${index * 55}ms`} className="supporting-build-card accent-mono spotlight-card cursor-target">
                <span>{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.stack}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cyber-reveal container-page pb-24" data-reveal>
        <div className="home-final-grid grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <article className="dossier-panel spotlight-card">
            <h2 className="h2-section mt-4"><span className="meta-chip mb-3 block w-fit" data-tone="mono">{"// WORKING_PRINCIPLES"}</span>{locale === "id" ? "Cara kerja yang bisa dibaca dan dipertanggungjawabkan." : "A working method that stays readable and accountable."}</h2>
            <div className="mt-6 grid gap-3">
              {data.learningNotes.slice(0, 3).map((item) => (
                <div key={item.title} className="mini-log-line">
                  <strong>{item.title}</strong>
                  <span>{item.summary}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="dossier-panel accent-mono spotlight-card">
            <h2 className="h2-section mt-4"><span className="meta-chip mb-3 block w-fit" data-tone="mono">{"// NEXT_ACTION"}</span>{data.ui.contact_title}</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{locale === "id" ? "Mulai dari studi kasus, cek arsip lengkap, atau langsung hubungi saya untuk membahas kebutuhan sistem." : "Start with the case studies, inspect the archive, or contact me to discuss a system need."}</p>
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