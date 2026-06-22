> Current direction note (2026-06-19): This older planning document is now archived/superseded for visual direction. Use `docs/DESIGN.md` and `docs/DESIGN_HANDOFF.md` as the active source of truth: Dark Xyrionex-inspired technical editorial, black/navy canvas, dark rounded cards, bright text, restrained blue accent, soft 3D, no bright cream dominant theme.
# Catatan Workflow Google Stitch Untuk Portfolio

Dokumen ini merangkum pemahaman teknis dan alur kerja yang tepat untuk menggunakan Google Stitch dalam pembuatan desain website portfolio ini.

Catatan ini dibuat sebagai jembatan antara dokumen konsep desain dan tahap implementasi frontend.

## 1. Pemahaman Utama Tentang Stitch

Google Stitch adalah tool desain UI berbasis AI dari Google Labs yang digunakan untuk membuat desain interface dari instruksi natural language, voice, gambar, sketch, atau referensi visual.

Untuk kebutuhan portfolio ini, Stitch sebaiknya dipakai sebagai:

```txt
AI design exploration tool â†’ visual direction generator â†’ design handoff â†’ frontend implementation reference
```

Bukan sebagai satu-satunya sumber final code production.

Berdasarkan dokumentasi Stitch, workflow utama dimulai dari prompt, lalu desain diiterasi. Prompt yang efektif sebaiknya memuat ide, tema visual, konten, perangkat target, dan batasan yang jelas. Stitch juga menyediakan integrasi MCP, SDK, Agent Skills, dan dukungan `DESIGN.md` sebagai design system/context file.

Untuk project ini, `DESIGN.md` sudah dibuat di root repository agar bisa digunakan sebagai arahan sistem desain saat bekerja dengan Stitch atau agent yang terhubung ke Stitch. Arah final yang dipilih adalah **Warm Editorial Engineer**, bukan cyber dark.

## 2. Posisi Stitch Dalam Workflow Project

Stitch paling tepat digunakan pada fase berikut:

```txt
Rencana produk
  â†“
Konsep desain
  â†“
Prompt Stitch
  â†“
Generate beberapa variasi UI
  â†“
Pilih arah visual terbaik
  â†“
Export / handoff desain
  â†“
Implementasi di Next.js + Tailwind
  â†“
Refine manual agar production-ready
```

## 3. Cara Pakai Yang Tepat

### 3.1 Jangan Mulai Dari Prompt Singkat

Prompt seperti ini kurang bagus:

```txt
Create a portfolio website for developer.
```

Prompt yang lebih tepat harus berisi:

- Target pengguna.
- Gaya visual.
- Struktur halaman.
- Komponen penting.
- Warna.
- Mood.
- Hal yang harus dihindari.
- Output yang diinginkan.

Contoh pendek yang lebih baik untuk tema final:

```txt
Create a warm editorial portfolio homepage for Raihan Ariansyah, a fullstack developer and fresh graduate software engineer. Use an ivory background, clean white cards, charcoal typography, blue and amber accents, numbered project case studies, refined spacing, subtle technical metadata, and a professional recruiter-friendly layout. Avoid dark cyber aesthetics, neon glow, hacker dashboard visuals, purple gradients, and generic portfolio templates.
```

## 4. Workflow Eksplorasi Desain

Untuk portfolio ini, jangan langsung membuat semua halaman. Mulai dari variasi homepage terlebih dahulu.

### 4.1 Tahap 1: Generate 3 Variasi Homepage

Buat 3 arah desain:

```txt
1. Warm Editorial Case Study
2. Minimal Product Engineer
3. Soft Tech Bento Editorial
```

Tujuannya adalah membandingkan:

- Kesan pertama.
- Kekuatan visual.
- Kesesuaian dengan karakter developer.
- Kemudahan implementasi.
- Kualitas mobile layout.

### 4.2 Tahap 2: Pilih Satu Design Direction

Setelah 3 variasi dibuat, pilih satu arah utama.

Kriteria pemilihan:

- Tidak generic.
- Cocok untuk fullstack/backend/deployment profile.
- Project terlihat seperti case study.
- Kontras dark mode aman.
- Bisa diturunkan ke admin dashboard.
- Bisa diimplementasikan dengan Tailwind tanpa terlalu berat.

### 4.3 Tahap 3: Turunkan Ke Halaman Lain

Setelah arah visual dipilih, baru buat halaman:

```txt
Homepage
Project Listing
Project Detail
Contact Page
Admin Dashboard
Admin Project Editor
```

## 5. Workflow Iterasi Dengan Stitch

Stitch sebaiknya digunakan secara iteratif.

Urutan iterasi:

```txt
Prompt awal
  â†“
Review layout besar
  â†“
Perbaiki section yang kurang tepat
  â†“
Kunci style guide
  â†“
Generate halaman turunan
  â†“
Export desain / code / brief
  â†“
Implement manual di repo
```

Contoh instruksi iterasi:

```txt
Keep the current Warm Editorial Engineer style, but make the project section more like numbered case studies instead of regular cards. Add clearer technical metadata, status badges, and a stronger problem-solution summary for each project.
```

Contoh instruksi menjaga konsistensi:

```txt
Use the same design system, colors, typography, spacing, border radius, and component style from the homepage. Create a project detail page with a sticky metadata sidebar and long-form case study layout.
```

## 6. Output Dari Stitch Yang Harus Diambil

Jika tersedia, ambil output berikut:

- Screenshot desain desktop.
- Screenshot desain mobile.
- Export ke Figma jika ingin editing manual.
- Code export / HTML / CSS jika tersedia.
- Project brief / design brief jika tersedia.
- DESIGN.md jika tersedia.
- Link share/prototype jika tersedia.

Untuk implementasi frontend, output paling berguna adalah:

```txt
1. Screenshot desain
2. Color values
3. Typography
4. Spacing
5. Component structure
6. Exported HTML/CSS atau React draft
7. DESIGN.md / project brief
```

## 7. Cara Menghubungkan Dengan Implementasi Next.js

Desain dari Stitch tidak langsung dianggap final production code.

Langkah implementasi yang benar:

```txt
Stitch design
  â†“
Ambil visual reference dan CSS values
  â†“
Pecah menjadi component system
  â†“
Implement di Next.js + Tailwind
  â†“
Hubungkan ke API backend
  â†“
Optimasi responsive, accessibility, SEO
```

Komponen yang perlu dibuat dari hasil Stitch:

```txt
Navbar
HeroSection
SystemProfilePanel
TechnicalMatrix
FeaturedProjectCard
ProjectCaseStudyLayout
EngineeringNotesPreview
ContactCommandPanel
AdminSidebar
AdminMetricCard
AdminProjectTable
AdminProjectEditor
```

## 8. Hal Yang Perlu Diwaspadai

Karena Stitch adalah tool Google Labs dan berbasis AI, hasilnya perlu dikurasi.

Risiko:

- Desain bisa berubah-ubah antar iterasi.
- Multi-screen consistency bisa kurang stabil jika prompt tidak jelas.
- Code export belum tentu sesuai standar production.
- Accessibility perlu dicek ulang.
- Responsive layout perlu diverifikasi manual.
- Komponen mungkin belum cocok langsung untuk arsitektur Next.js.

Mitigasi:

- Gunakan design brief yang detail.
- Kunci warna, typography, spacing, dan komponen sejak awal.
- Buat satu halaman sebagai source of truth.
- Turunkan halaman lain dari style yang sama.
- Implement ulang secara rapi di Next.js/Tailwind.
- Jangan asal copy seluruh code export tanpa review.

## 9. Prompt Utama Untuk Portfolio Ini

Gunakan prompt ini sebagai prompt utama di Stitch:

```txt
Create a complete responsive portfolio website design for Raihan Ariansyah, a Fullstack Developer and Fresh Graduate Software Engineer from SMK Negeri 13 Bandung, majoring in Software Engineering / RPL. Use the uploaded DESIGN.md as the main design system. The selected theme is Warm Editorial Engineer: a professional light editorial style with ivory background, clean white cards, charcoal typography, warm muted text, numbered project case studies, subtle technical metadata, generous whitespace, and blue/amber accents. The portfolio should feel like a real production product, not a generic template.

The homepage must include: hero section, name and role, positioning statement, CTA buttons, system profile panel, about me section, technical matrix, featured projects as numbered case studies, organization experience, engineering notes preview, and contact command section.

Profile content: Raihan is a fresh graduate from Rekayasa Perangkat Lunak / Software Engineering, focused on fullstack web development, backend systems, database design, mobile app development, IoT integration, and API integration. He has organization experience in MPK SMK Negeri 13 Bandung as Anggota Komisi A.

Featured projects: ABSENTA13, Absensi App, Hoyonimeku, HoyoSense, IoT Workshop Kit / IWK, and Manajemen Tracking System. Present these projects as case studies with problem, role, stack, status, and result-oriented summaries.

Visual direction: warm ivory background, white editorial cards, soft warm borders, charcoal typography, muted brown-gray secondary text, professional blue CTAs, amber editorial highlights, technical metadata, numbered project case studies, and strong readable typography.

Avoid dark cyber aesthetics, neon glow, hacker dashboard visuals, generic purple gradients, centered template layouts, boring project cards, excessive glassmorphism, and overused SaaS landing page aesthetics.

Make the design responsive for desktop and mobile. Prioritize clarity, professional credibility, strong visual identity, and ease of implementation in Next.js and Tailwind CSS.
```

## 10. Prompt Untuk Menjaga Konsistensi Antar Halaman

Gunakan setelah homepage terpilih:

```txt
Use the same visual system from the selected homepage: colors, typography, panel style, spacing, borders, status badges, grid background, and technical editorial tone. Create a new page that feels part of the same portfolio product, not a separate design.
```

## 11. Prompt Untuk Project Detail

```txt
Create a project detail case-study page using the same Warm Editorial Engineer design system from the uploaded DESIGN.md. Include project hero, problem statement, my role, tech stack, architecture section, technical challenges, solution, result metrics, screenshot gallery, and sticky metadata sidebar. The page should read like an engineering case study and feel premium, professional, technical, warm, and trustworthy.
```

Untuk halaman detail ABSENTA13, gunakan arahan tambahan:

```txt
Create the ABSENTA13 project detail page. ABSENTA13 is a digital attendance system designed for SMK Negeri 13 Bandung to modernize attendance flow with structured data, authentication, QR-based interaction, Firebase/Firestore, and a modular school system concept. Show the problem, role as System Designer & Developer, stack, challenge, solution, and result. Make it feel like a real school attendance system case study.
```

## 12. Prompt Untuk Admin Dashboard

```txt
Create an admin dashboard for managing portfolio content using the same Warm Editorial Engineer design language. Use a light product-dashboard interface with sidebar navigation, metric cards, project table, status badges, recent messages, quick actions, and a clean project editor entry point. The dashboard should be functional, readable, and consistent with the public portfolio identity.
```

## 13. Keputusan Final Workflow

Workflow yang paling tepat untuk project ini:

```txt
1. Pakai dokumen konsep sebagai design brief.
2. Generate 3 homepage variation di Stitch.
3. Pilih Warm Editorial Engineer sebagai kandidat utama.
4. Export visual reference / code / design brief.
5. Buat halaman turunan dari style yang sama.
6. Implement manual di Next.js + Tailwind.
7. Gunakan hasil Stitch sebagai design reference, bukan final source code mentah.
```

Tambahan berdasarkan dokumentasi Stitch:

```txt
8. Jika Stitch menyediakan pilihan System Design, pilih DESIGN.md portfolio ini.
9. Jika tidak memilih System Design manual, sebutkan DESIGN.md secara eksplisit di prompt.
10. Gunakan variasi desain untuk eksplorasi awal, lalu kunci satu design direction sebelum membuat halaman turunan.
```

## 14. Referensi

- Google Labs Blog: Stitch as an AI-native software design canvas for high-fidelity UI from natural language.
- Google Labs Blog: Real-time design with Stitch, including text, voice, existing codebase/design files, and shareable AI Studio links.
- Google I/O related coverage: Stitch as AI-powered UI design tool for web and mobile app frontends.
- Community reports: Stitch workflow commonly uses design export, Figma/code handoff, MCP/SDK integration, and iterative prompt refinement.


