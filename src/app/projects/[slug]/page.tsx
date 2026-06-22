import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects, getPortfolioData } from "@/data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const allProjects = getAllProjects("id"); // Slugs are identical across locales
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id" | undefined;
  const locale = localeCookie === "en" ? "en" : "id";
  
  const allProjects = getAllProjects(locale);
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} // Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} // Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id" | undefined;
  const locale = localeCookie === "en" ? "en" : "id";

  const allProjects = getAllProjects(locale);
  const data = getPortfolioData(locale);
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-page py-12 text-[var(--ink)]">
      <article className="relative z-[2] mx-auto max-w-[1120px]">
        {/* Nav */}
        <nav className="flex items-center justify-between gap-4">
          <Link
            className="meta-chip transition-colors hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
            href="/projects"
          >
            {data.ui.back_to_archive}
          </Link>
          <span className="meta-chip" data-tone="mono">
            CASE_FILE_{project.number}
          </span>
        </nav>

        {/* Header */}
        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="route-hero">
            <p className="heading-font text-6xl font-bold text-[var(--dim)]">{project.number}</p>
            <p className="meta-chip mt-6 w-fit" data-tone="mono">{project.category}</p>
            <h1 className="heading-font mt-6 text-4xl font-bold leading-tight md:text-6xl">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
          </div>

          {/* Metadata sidebar */}
          <aside className="dossier-panel p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">{data.ui.project_meta}</p>
            <dl className="mt-6 space-y-4">
              {[
                ["Category", project.category],
                ["Role", project.role],
                ["Status", project.status],
                ["Stack", project.stack],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-[var(--line-subtle)] pb-4 last:border-0">
                  <dt className="text-[10px] font-bold text-[var(--dim)]">{label}</dt>
                  <dd className="mt-2 text-[13px] font-bold text-[var(--ink)]">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        {/* Case Study */}
        <section className="mt-12 grid gap-3 md:grid-cols-3">
          {[
            ["Problem", project.caseStudy.problem],
            ["Solution", project.caseStudy.solution],
            ["Result", project.caseStudy.result],
          ].map(([title, body], index) => (
            <div key={title} className="dossier-card spotlight-card">
              <p className="meta-chip mb-5" data-tone={index === 1 ? "amber" : index === 2 ? "green" : "blue"}>STEP_0{index + 1}</p>
              <h2 className="dossier-title text-base text-[var(--accent-cyan)]">{title}</h2>
              <p className="dossier-copy mt-4">{body}</p>
            </div>
          ))}
        </section>

        {/* Contact CTA */}
        <section className="contact-panel mt-16 p-8 text-[var(--ink)] md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">{data.ui.collab_brief}</p>
          <h2 className="heading-font mt-5 text-3xl font-bold">{data.ui.contact_title}</h2>
          <a className="mt-6 inline-block text-sm font-bold text-[var(--accent-cyan)] hover:text-[var(--ink)] transition-colors" href={`mailto:${data.profile.email}`}>{data.profile.email}</a>
        </section>
      </article>
    </div>
  );
}
