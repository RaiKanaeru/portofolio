"use client";

import { useState } from "react";
import Link from "next/link";
import { getPortfolioData, getAllProjects, slugifyProjectTitle } from "@/data/portfolio";
import ScrambleText from "@/components/ScrambleText";
import TiltCard from "@/components/TiltCard";

type FilterTab = "ALL" | "FEATURED" | "SUPPORTING";

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : undefined;
}

export default function ProjectsPage() {
  const locale = (getCookie("NEXT_LOCALE") as "en" | "id") || "id";
  const data = getPortfolioData(locale);
  const [activeFilter, setActiveFilter] = useState<FilterTab>("ALL");

  const allProjects = getAllProjects(locale);
  const featured = allProjects.filter((_, i) => i < data.featuredProjects.length);
  const supporting = allProjects.filter((_, i) => i >= data.featuredProjects.length);

  const filteredProjects =
    activeFilter === "ALL"
      ? allProjects
      : activeFilter === "FEATURED"
        ? featured
        : supporting;

  const filters: { label: string; value: FilterTab }[] = [
    { label: "ALL", value: "ALL" },
    { label: "FEATURED", value: "FEATURED" },
    { label: "SUPPORTING", value: "SUPPORTING" },
  ];

  return (
    <div className="container-page section-tight">
      {/* Header */}
      <div className="cyber-reveal stack-header">
        <div className="flex items-center gap-4 mb-4">
          <p className="section-num"><ScrambleText text={data.ui.work_archive} /></p>
          <span className="inline-flex items-center gap-2 border border-[var(--line)] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--accent-cyan)]">
            <span className="pulse-dot h-1.5 w-1.5 bg-[var(--accent-cyan)]" style={{ display: "inline-block" }} />
            {allProjects.length} PROJECTS
          </span>
        </div>
        <h1 className="h1-display mt-4 max-w-3xl">
          {data.ui.archive_title}
        </h1>
        <p className="lead-text mt-5">
          {locale === "id"
            ? "Koleksi proyek nyata dari web apps, backend systems, mobile apps, dan IoT yang pernah saya bangun."
            : "A collection of real projects spanning web apps, backend systems, mobile apps, and IoT integrations I've built."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="cyber-reveal mb-8 flex items-center gap-2 border border-[var(--line)] bg-[var(--surface)] p-1 w-fit">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ${
              activeFilter === f.value
                ? "bg-[var(--accent-cyan)] text-black shadow-[0_0_12px_var(--accent-cyan)]"
                : "text-[var(--dim)] hover:text-[var(--ink)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <TiltCard key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="project-card spotlight-card group block p-6 transition duration-300 h-full"
            >
              <div className="relative z-[1] flex items-start justify-between gap-3">
                <p className="heading-font text-3xl font-bold text-[var(--dim)]">{project.number}</p>
                <span className="border border-[var(--line)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--dim)]">
                  {Number(project.number) <= 2 ? "CASE_FILE" : "BUILD"}
                </span>
              </div>
              <h3 className="relative z-[1] heading-font mt-4 text-lg font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--accent-cyan)]">
                {project.title}
              </h3>
              <p className="relative z-[1] mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                {project.category}
              </p>
              <p className="relative z-[1] mt-4 text-sm leading-7 text-[var(--muted)] line-clamp-3">
                {project.summary}
              </p>
              <div className="relative z-[1] mt-5 flex items-center justify-between border-t border-[var(--line-subtle)] pt-4">
                <p className="text-[10px] font-bold text-[var(--dim)]">{project.stack}</p>
                <span className="text-[10px] font-bold text-[var(--muted)] opacity-60 transition group-hover:opacity-100">
                  VIEW →
                </span>
              </div>
            </Link>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
