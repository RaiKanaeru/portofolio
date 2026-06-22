import { cookies } from "next/headers";
import { getPortfolioData } from "@/data/portfolio";
import type { Metadata } from "next";
import ScrambleText from "@/components/ScrambleText";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import ScrollRevealText from "@/components/ScrollRevealText";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Raihan Ariansyah — open for collaboration and opportunities.",
};

export default async function ContactPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id" | undefined;
  const locale = localeCookie === "en" ? "en" : "id";
  const data = getPortfolioData(locale);

  return (
    <div className="container-page section-tight">
      <div className="cyber-reveal min-h-[60vh] flex flex-col justify-center">
        {/* Header */}
        <div className="route-hero w-full">
          <p className="meta-chip w-fit" data-tone="mono"><ScrambleText text={data.ui.collab_brief} /></p>
          <h1 className="h1-display mt-6 max-w-3xl">
            {data.ui.contact_title}
          </h1>
          <p className="lead-text mt-6">
            {locale === "id"
              ? "Jalur kontak dibuat langsung: email, lokasi, dan status kerja terbuka tanpa form yang memperlambat."
              : "A direct contact route: email, location, and availability without a slow form in the way."}
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <TiltCard>
            <a
              href={`mailto:${data.profile.email}`}
              className="dossier-card spotlight-card group block h-full transition-all hover:border-[var(--accent-cyan)]"
            >
              <p className="relative z-[1] text-[10px] font-bold text-[var(--dim)] mb-3">EMAIL_</p>
              <p className="relative z-[1] text-base font-bold text-[var(--ink)] group-hover:text-[var(--accent-cyan)] transition-colors break-all">
                {data.profile.email}
              </p>
              <p className="relative z-[1] mt-4 text-[10px] font-bold text-[var(--muted)] opacity-60 group-hover:opacity-100 transition">SEND_MESSAGE →</p>
            </a>
          </TiltCard>

          <TiltCard>
            <div className="dossier-card spotlight-card h-full">
              <p className="relative z-[1] text-[10px] font-bold text-[var(--dim)] mb-3">LOCATION_</p>
              <p className="relative z-[1] text-base font-bold text-[var(--ink)]">{data.profile.location}</p>
              <p className="relative z-[1] mt-4 text-[10px] font-bold text-[var(--muted)]">{locale === "id" ? "ZONA WAKTU WIB (UTC+7)" : "TIMEZONE WIB (UTC+7)"}</p>
            </div>
          </TiltCard>

          <TiltCard>
            <div className="dossier-card spotlight-card h-full">
              <p className="relative z-[1] text-[10px] font-bold text-[var(--dim)] mb-3">STATUS_</p>
              <div className="relative z-[1] flex items-center gap-3">
                <span className="pulse-dot h-2 w-2 bg-[var(--accent-cyan)]" style={{ display: "inline-block" }} />
                <p className="text-base font-bold text-[var(--accent-cyan)]">{data.ui.open_to_work}</p>
              </div>
              <p className="relative z-[1] mt-4 text-[10px] font-bold text-[var(--muted)]">
                {locale === "id" ? "TERSEDIA UNTUK KOLABORASI" : "AVAILABLE FOR COLLABORATION"}
              </p>
            </div>
          </TiltCard>
        </div>

        {/* CTA */}
        <div className="mt-16 contact-panel p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">READY_TO_CONNECT</p>
              <ScrollRevealText
                text={locale === "id"
                  ? "Kirimkan email kapanpun — saya akan membalas secepatnya."
                  : "Send an email anytime — I'll get back to you as soon as possible."}
                className="mt-3 text-lg font-bold text-[var(--ink)]"
              />
            </div>
            <MagneticButton strength={0.4}>
              <a
                href={`mailto:${data.profile.email}`}
                className="cyber-btn-primary whitespace-nowrap"
              >
                {locale === "id" ? "KIRIM_EMAIL" : "SEND_EMAIL"}
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
