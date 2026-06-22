"use client";

import { useState } from "react";
import Link from "next/link";
import { getPortfolioData, getAllProjects } from "@/data/portfolio";
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
      <div className="cyber-reveal route-hero stack-header">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <p className="meta-chip" data-tone="mono"><ScrambleText text={data.ui.work_archive} /></p>
          <span className="meta-chip" data-tone="mono">
            <span className="pulse-dot h-1.5 w-1.5 bg-[var(--accent-cyan)]" style={{ display: "inline-block" }} />
            {allProjects.length} PROJECTS
          </span>
        </div>
        <h1 className="h1-display mt-4 max-w-3xl">
          {data.ui.archive_title}
        </h1>
        <p className="lead-text mt-5">
          {locale === "id"
            ? "Koleksi proyek nyata dari web apps, backend systems, mobile apps, dan IoT yang pernah saya bangun — disusun seperti case file agar keputusan teknisnya mudah dibaca."
            : "A collection of real projects spanning web apps, backend systems, mobile apps, and IoT integrations — arranged as case files so the technical decisions are easy to read."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="cyber-reveal dossier-strip mb-8 flex w-fit items-center gap-2 p-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ${
              activeFilter === f.value
                ? "bg-[rgba(255,255,255,0.14)] text-[var(--accent-cyan)] shadow-[0_12px_28px_rgba(255,255,255,0.12)]"
                : "text-[var(--dim)] hover:text-[var(--ink)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {filteredProjects.length === 0 ? (
        <div className="empty-dossier">
          <p className="meta-chip" data-tone="mono">NO_CASE_FILES</p>
          <h2 className="dossier-title mt-5 text-2xl">No projects match this filter.</h2>
          <p className="dossier-copy mt-3">Switch filters to reopen the full archive.</p>
        </div>
      ) : (
        <div className="case-file-wall">
          {filteredProjects.map((project) => (
            <TiltCard key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="dossier-card accent-mono spotlight-card group block h-full transition duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="heading-font text-4xl font-bold text-[var(--dim)]">{project.number}</p>
                  <span className="meta-chip" data-tone="mono">
                    {Number(project.number) <= 2 ? "CASE_FILE" : "BUILD"}
                  </span>
                </div>
                <h2 className="dossier-title mt-7 text-xl transition-colors group-hover:text-[var(--accent-cyan)]">
                  {project.title}
                </h2>
                <p className="dossier-label mt-3 text-[var(--card-accent)]">
                  {project.category}
                </p>
                <p className="dossier-copy mt-5 line-clamp-3">
                  {project.summary}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--line-subtle)] pt-5">
                  <p className="text-[10px] font-bold text-[var(--dim)]">{project.stack}</p>
                  <span className="text-[10px] font-bold text-[var(--muted)] opacity-70 transition group-hover:text-[var(--accent-cyan)] group-hover:opacity-100">
                    OPEN_DOSSIER →
                  </span>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      )}
    </div>
  );
}
