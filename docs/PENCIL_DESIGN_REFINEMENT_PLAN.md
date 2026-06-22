> Current direction note (2026-06-19): This older planning document is now archived/superseded for visual direction. Use `docs/DESIGN.md` and `docs/DESIGN_HANDOFF.md` as the active source of truth: Dark Xyrionex-inspired technical editorial, black/navy canvas, dark rounded cards, bright text, restrained blue accent, soft 3D, no bright cream dominant theme.
# Pencil Design Refinement Plan

Dokumen ini adalah arahan lanjutan setelah workflow portfolio dipindahkan dari Stitch ke Pencil. Fokus final tetap **Warm Editorial Engineer**: profesional, terang, hangat, editorial, recruiter-friendly, dan tetap punya detail engineering.

## 1. Temuan Riset Context7

### 1.1 Tailwind CSS

Poin yang relevan dari dokumentasi Tailwind:

- Gunakan responsive utilities untuk layout yang berubah antar ukuran layar.
- Card dapat berubah dari stacked layout di mobile menjadi horizontal/grid layout di desktop.
- Gunakan `grid` dan breakpoint seperti `sm`, `md`, `lg`, dan `xl` untuk mengatur jumlah kolom.
- Gunakan container/max-width agar konten tidak terlalu melebar.
- Gunakan theme variables untuk warna, spacing, radius, typography, dan breakpoint.
- Untuk dashboard/admin, pola umum adalah fixed/sidebar desktop dan drawer/mobile.

Implikasi ke desain Pencil:

- Homepage desktop harus punya max content width sekitar `1180px - 1296px`.
- Project cards sebaiknya berupa 3 kolom di desktop, 1 kolom di mobile.
- Capability/skill matrix sebaiknya 3x2 di desktop, 2x3 di tablet, 1 kolom di mobile.
- Jangan membuat text terlalu panjang dalam satu baris; pecah menjadi 2-3 baris manual di desain Pencil.
- Gunakan spacing besar antar section agar terasa premium.

### 1.2 Next.js App Router

Poin yang relevan dari dokumentasi Next.js:

- Gunakan `generateMetadata` untuk metadata dinamis pada project detail.
- Gunakan Open Graph metadata agar project/case study terlihat bagus saat dibagikan.
- Gunakan dynamic Open Graph image untuk project atau blog unggulan.
- Metadata sebaiknya ada di server component.
- Dynamic project route cocok untuk `/projects/[slug]`.

Implikasi ke desain:

- Setiap project card perlu data yang bisa menjadi metadata: title, summary, image, category, stack, status.
- Project detail page harus punya hero yang kuat karena akan menjadi halaman shareable.
- Desain OG image bisa diturunkan dari style Warm Editorial: ivory background, project number, project title, stack, dan Raihan Ariansyah wordmark.

## 2. Referensi Template Yang Cocok

### 2.1 Gitfolio / Minimal Developer Portfolio

Referensi: GitHub `github-samples/gitfolio`.

Yang bisa diambil:

- Struktur minimal developer portfolio.
- Layout simpel untuk profil, skills, dan project.
- Cocok sebagai baseline konten.

Yang jangan diambil mentah:

- Terlalu minimal jika project ingin dijadikan case study.
- Kurang editorial jika hanya jadi daftar project.

### 2.2 Next.js Portfolio Templates

Referensi: Next.js portfolio themes/templates dengan Tailwind.

Yang bisa diambil:

- Struktur komponen modern.
- Section umum: hero, about, skills, projects, contact.
- Responsiveness dan deployment-friendly.

Yang perlu ditingkatkan:

- Jangan pakai generic gradient/hero template.
- Project harus lebih storytelling.

### 2.3 Editorial Website Inspiration

Referensi: editorial website examples, Behance editorial portfolio, Subframe editorial examples.

Yang bisa diambil:

- Numbered project entries.
- Strong serif typography.
- Banyak whitespace.
- Layout seperti archive/case-study.
- Detail visual dari divider, metadata, dan hierarchy.

### 2.4 Soft Bento Portfolio

Yang bisa diambil:

- Bento-style skill/project grid.
- Card modular.
- Cocok untuk banyak kategori project.

Yang perlu dijaga:

- Jangan terlalu SaaS generic.
- Tetap ada rasa editorial dan personal.

## 3. Skema Desain Final Yang Lebih Detail

### 3.1 Homepage Desktop

Ukuran frame rekomendasi:

```txt
Width: 1440
Height: 2200 - 2600
Background: #F7F3EA
Content max width: 1180 - 1296
Horizontal padding: 72
```

Urutan section:

```txt
1. Navbar
2. Hero + Editorial Engineering Profile
3. About Me
4. Technical Matrix
5. Featured Project Case Studies
6. Organization Experience
7. Engineering Notes / Learning Logs
8. Contact Panel
```

### 3.2 Hero Section Detail

Layout desktop:

```txt
Left: identity and CTA
Right: profile card / visual block
```

Hero left:

- Status badge.
- Eyebrow text.
- Headline 2 baris.
- Body 2-3 baris.
- CTA row.

Hero right:

- Editorial profile card.
- Warm background decorative block.
- Optional small paper note / stack snippet.

Perbaikan penting di Pencil:

- Jangan pakai satu text node panjang untuk headline.
- Buat headline menjadi 2 node:
  - `Building practical systems`
  - `from idea to production.`
- Body juga 3 node pendek agar tidak overflow.

### 3.3 Technical Matrix Detail

Layout desktop:

```txt
3 columns x 2 rows
Card width: 400
Card height: 112-132
Gap: 18-24
```

Isi per card:

- Skill category.
- Short meta line.
- Optional small stack chips.

Contoh:

```txt
Fullstack Web
Laravel · Next.js · TypeScript
```

```txt
Backend System
Go · REST API · Auth Flow
```

### 3.4 Project Section Detail

Jangan hanya 3 project kalau untuk portfolio final. Tampilkan 6 project dengan prioritas visual:

```txt
Featured row:
1. ABSENTA13
2. Manajemen Tracking System

Secondary grid:
3. Absensi App
4. IoT Workshop Kit / IWK
5. HoyoSense
6. Hoyonimeku
```

Alasan:

- ABSENTA13 cocok menjadi project utama karena relevan dengan sekolah dan sistem nyata.
- Manajemen Tracking System cocok menunjukkan fullstack/dashboard/realtime.
- IWK menunjukkan IoT.
- Absensi App menunjukkan mobile/Firebase.
- HoyoSense dan Hoyonimeku menjadi concept/prototype supporting projects.

### 3.5 Project Card Anatomy

Setiap project card harus punya:

```txt
Project number
Title
Category
Role
Stack chips
Status badge
1-2 line summary
CTA: View Case Study
```

Untuk Pencil, pecah text supaya tidak overflow.

### 3.6 Organization Section

Buat section khusus yang tidak terlalu besar:

```txt
Organization Experience
MPK SMK Negeri 13 Bandung · Komisi A
Membantu koordinasi, pengawasan kegiatan, komunikasi organisasi, dan penyelesaian masalah.
```

Visual:

- Warm accent block.
- Timeline marker kecil.
- Card formal.

### 3.7 Contact Section

Visual harus clean dan percaya diri:

```txt
Let's build practical software systems.
Email: raihanariansyah160307@gmail.com
CTA: Contact Me / Download CV
```

Bisa pakai dark charcoal panel kecil sebagai kontras, tapi tidak full dark theme.

## 4. Skema Mobile

Homepage mobile harus disederhanakan:

```txt
Navbar compact
Hero stacked
Profile card below hero
About single column
Technical matrix 1 column
Projects 1 column
Contact panel
```

Ukuran frame mobile rekomendasi:

```txt
Width: 390
Height: 3000+
Padding: 20
```

## 5. Skema Project Detail Page

Halaman detail paling penting untuk portfolio.

Struktur:

```txt
Project Hero
Metadata sidebar
Problem
Role
Stack
Architecture / Flow
Challenge
Solution
Result
Gallery placeholder
Next project
```

Untuk ABSENTA13:

```txt
Problem: Absensi sekolah butuh alur yang lebih fleksibel dan terstruktur.
Role: System Designer & Developer.
Stack: Flutter, Firebase, Firestore, Firebase Auth, QR Code.
Challenge: Membuat alur absensi praktis, aman, dan mudah digunakan.
Solution: Digital attendance flow dengan auth, realtime data, QR interaction, dan struktur modular.
Result: Sistem absensi modern yang siap dikembangkan untuk kebutuhan sekolah.
```

## 6. Perbaikan Pencil Yang Harus Dilakukan

Karena Pencil saat ini lebih stabil jika elemen root-level atau flex sederhana:

- Hindari nested frame dengan clipping untuk desain besar.
- Jika memakai frame exportable, gunakan flex layout dan hindari absolute child yang kompleks.
- Untuk positioning presisi, root-level composition lebih terlihat di canvas.
- Untuk export final, buat ulang frame exportable khusus setelah layout matang.
- Text panjang harus dipecah menjadi beberapa text node.
- Jangan bergantung pada variable `$background` karena resolver bisa fallback ke hitam; gunakan warna eksplisit di desain Pencil.

## 7. Prompt Agent Pencil

Gunakan arahan ini saat memakai agent Pencil:

```txt
Create a Warm Editorial Engineer portfolio design for Raihan Ariansyah. Use a professional light editorial theme with ivory background, white cards, charcoal typography, professional blue CTAs, amber/gold accents, subtle metadata, numbered project case studies, and generous spacing. Avoid cyber dark, neon, hacker dashboard, and generic gradient portfolio templates.

Design homepage desktop first. Use root-level or flex-safe layout to avoid clipping. Split long text into manual lines. Include hero, profile card, about, technical matrix, featured project case studies, organization experience, learning logs, and contact panel.
```

## 8. References

- Tailwind CSS docs via Context7: responsive utilities, grid/cards, container scale, theme variables.
- Next.js docs via Context7: `generateMetadata`, Open Graph metadata, dynamic project route patterns.
- Gitfolio: minimal Next.js/Tailwind developer portfolio baseline.
- Next.js portfolio templates: common structure for hero/about/skills/projects/contact.
- Editorial portfolio inspiration: numbered case studies, strong typography, whitespace, archive-style layout.

