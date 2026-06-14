import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CyberEffects from "@/components/CyberEffects";
import ParticleField from "@/components/ParticleField";
import AudioPlayer from "@/components/AudioPlayer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CommandPalette from "@/components/CommandPalette";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";
import HomeRobotMascot from "@/components/HomeRobotMascot";

const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raihan Ariansyah // Fullstack Developer",
    template: "%s // Raihan Ariansyah",
  },
  description:
    "Portfolio of Raihan Ariansyah — Fullstack Developer & Fresh Graduate Software Engineer from SMK Negeri 13 Bandung. Web systems, backend, mobile apps, and IoT.",
  applicationName: "Raihan Ariansyah Portfolio",
  authors: [{ name: "Raihan Ariansyah", url: siteUrl }],
  creator: "Raihan Ariansyah",
  keywords: [
    "Raihan Ariansyah",
    "Fullstack Developer",
    "Fresh Graduate Software Engineer",
    "Next.js Portfolio",
    "Backend Developer",
    "Flutter Developer",
    "Bandung Developer",
  ],
  openGraph: {
    title: "Raihan Ariansyah // Fullstack Developer",
    description:
      "Case-study driven portfolio covering web systems, backend services, mobile apps, dashboards, and IoT integrations.",
    url: siteUrl,
    siteName: "Raihan Ariansyah Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Ariansyah // Fullstack Developer",
    description:
      "Case-study driven portfolio covering web systems, backend services, mobile apps, dashboards, and IoT integrations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id" | undefined;
  const locale = localeCookie === "en" ? "en" : "id";

  return (
    <html lang={locale} className="h-full antialiased">
      <body className={`${jetbrains.variable} ${inter.variable} min-h-full flex flex-col`}>
        <div className="cyber-shell relative min-h-screen flex flex-col bg-[var(--canvas)]">
          <LoadingScreen />
          <HomeRobotMascot />
          <ScrollProgress />
          <CyberEffects />
          <ParticleField />
          <Navbar locale={locale} />
          <div className="relative z-[2] flex-1">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
          <AudioPlayer />
          <BackToTop />
          <CommandPalette />
        </div>
      </body>
    </html>
  );
}
