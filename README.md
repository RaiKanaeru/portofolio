# Raihan Ariansyah — Portfolio

Portfolio pribadi bertema **Dark Cyber / terminal** untuk Raihan Ariansyah — Fullstack Developer & Fresh Graduate Software Engineer (SMK Negeri 13 Bandung, RPL).

Dibangun dengan pendekatan **case-study**: tiap proyek ditulis sebagai problem → solution → result, bukan sekadar galeri screenshot. Dwibahasa (Indonesia / English).

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4, Vanilla CSS |
| Bahasa | TypeScript (strict mode) |
| Font | JetBrains Mono + Inter (`next/font`) |
| Deploy | Vercel |

## Memulai

```bash
# 1. Install dependencies
npm install

# 2. (opsional) Set environment variables
cp .env.example .env.local
# isi NEXT_PUBLIC_SITE_URL dengan domain produksimu

# 3. Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Script

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Dev server (hot reload) |
| `npm run build` | Build produksi |
| `npm run start` | Jalankan hasil build produksi |
| `npm run lint` | ESLint |

## Struktur Folder

```
src/
├── app/                 # Routes (App Router)
│   ├── about/           # Halaman profil
│   ├── arcade/          # Mini-game Pong
│   ├── contact/         # Halaman kontak
│   ├── notes/           # Catatan belajar
│   ├── projects/        # Arsip proyek + halaman detail [slug]
│   ├── layout.tsx       # Root layout (efek global, navbar, footer)
│   ├── globals.css      # Design tokens & utility kustom
│   ├── opengraph-image.tsx  # OG image dinamis untuk social share
│   ├── sitemap.ts       # Sitemap
│   └── robots.ts        # robots.txt
├── components/          # Komponen UI (efek cyber, kartu, animasi)
└── data/
    └── portfolio.ts     # Sumber data konten (ID/EN), fully typed

docs/                    # Dokumen desain & perencanaan
public/                  # Aset statis
```

## Konten

Semua teks portofolio (profil, proyek, capabilities, catatan) terpusat di [`src/data/portfolio.ts`](src/data/portfolio.ts) — fully typed dan dwibahasa. Bahasa ditentukan dari cookie `NEXT_LOCALE` (`id` default, atau `en`).

## Deploy

Dioptimalkan untuk **Vercel**. Header keamanan (CSP, HSTS, X-Frame-Options, dll) dan strategi cache dikonfigurasi di [`next.config.ts`](next.config.ts).

---

© 2026 Raihan Ariansyah. Bandung, Indonesia.
