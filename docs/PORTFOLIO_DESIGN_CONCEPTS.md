> Current direction note (2026-06-19): This older planning document is now archived/superseded for visual direction. Use `docs/DESIGN.md` and `docs/DESIGN_HANDOFF.md` as the active source of truth: Dark Xyrionex-inspired technical editorial, black/navy canvas, dark rounded cards, bright text, restrained blue accent, soft 3D, no bright cream dominant theme.
# Konsep Desain Website Portfolio

Dokumen ini berisi beberapa skema konsep desain yang bisa digunakan sebagai arahan awal sebelum membuat visual di Stitch, Figma, atau tool desain lain yang dikontrol melalui MCP.

Tujuan dokumen ini adalah memastikan arah desain sudah matang sebelum masuk ke tahap pembuatan mockup, sehingga desain tidak terasa seperti template portfolio biasa.

## 1. Arah Utama Portfolio

Website portfolio ini sebaiknya diarahkan sebagai **technical portfolio with case-study storytelling**.

Identitas konten utama:

```txt
Nama: Raihan Ariansyah
Role: Fullstack Developer & Fresh Graduate Software Engineer
Status: Fresh Graduate RPL
Base: SMK Negeri 13 Bandung
Fokus: Fullstack, Backend, Web App, Mobile App, IoT
Organisasi: MPK SMK Negeri 13 Bandung - Komisi A
```

Artinya, website tidak hanya menampilkan:

- Nama.
- Foto.
- Skill.
- Project card.

Tetapi juga menampilkan:

- Cara berpikir.
- Problem yang pernah diselesaikan.
- Bukti kontribusi teknis.
- Stack yang dipakai.
- Alur kerja engineering.
- Hasil nyata dari project.

Portfolio ini harus terasa seperti gabungan antara:

```txt
Personal website + engineering dashboard + case study archive + digital CV
```

## 2. Prinsip Desain

### 2.1 Jangan Terlihat Seperti Template Umum

Hindari pola yang terlalu sering dipakai:

- Hero dengan gradient ungu-biru generik.
- Card project putih dengan shadow biasa.
- Skill icon berbaris tanpa konteks.
- Animasi terlalu ramai tanpa fungsi.
- Layout semua section rata tengah dan monoton.

### 2.2 Harus Menunjukkan Karakter Teknis

Karakter utama website:

- Rapi.
- Tegas.
- Modern.
- Teknis.
- Bisa dipercaya.
- Ada nuansa production system.

### 2.3 Project Harus Jadi Bukti Kemampuan

Project tidak cukup ditulis:

```txt
Nama Project + Tech Stack + Screenshot
```

Format yang lebih kuat:

```txt
Problem â†’ Role â†’ Stack â†’ Technical Challenge â†’ Solution â†’ Result
```

## 3. Skema Konsep Desain Yang Direkomendasikan

Ada 5 konsep yang bisa dipertimbangkan. Setelah evaluasi ulang, rekomendasi final adalah **Warm Editorial Engineer**, yaitu versi profesional dari konsep editorial case study dengan warna terang, hangat, dan recruiter-friendly.

---

# Concept A: Engineering Command Center (Archived / Not Selected)

## 3.1 Ringkasan

Konsep ini adalah opsi lama yang tidak dipilih. Visualnya gelap dan teknikal, tetapi untuk portfolio Raihan arah ini dianggap kurang recruiter-friendly dibanding Warm Editorial Engineer.

Gunakan bagian ini hanya sebagai referensi pembanding, bukan arahan final.

## 3.2 Kesan Visual

```txt
Dark technical dashboard, command center, production monitoring, engineering cockpit.
```

## 3.3 Cocok Untuk

- Fullstack developer.
- Backend developer.
- Developer yang sering mengerjakan sistem real production.
- Portfolio yang ingin terlihat serius dan teknis.

## 3.4 Struktur Visual

Hero section:

- Kiri: nama, role, positioning, CTA.
- Kanan: panel seperti system overview.
- Ada fake terminal/status card yang menampilkan stack dan aktivitas.

Contoh panel kanan:

```txt
SYSTEM PROFILE
Status        Available
Focus         Fullstack / Backend / AI Tools
Stack         Go, Next.js, PostgreSQL
Mode          Building production-ready systems
```

Project section:

- Project ditampilkan seperti deployment cards.
- Setiap card punya status: `Production`, `Internal Tool`, `Research`, `Prototype`.
- Ada metadata seperti stack, role, year, dan impact.

Detail project:

- Layout seperti incident report atau engineering report.
- Ada section problem, solution, architecture, result.

## 3.5 Warna

```txt
Background: #05070D
Main Surface: #0B1120
Secondary Surface: #111827
Border: #1F2A3D
Text Primary: #E5EEF9
Text Muted: #8A9AB4
Accent Blue: #2563EB
Accent Green: #34D399
Accent Amber: #F59E0B
Accent Red: #EF4444
```

## 3.6 Tipografi

Rekomendasi karakter font:

- Heading: condensed, technical, atau editorial tech.
- Body: clean dan mudah dibaca.
- Code/metadata: monospace.

Contoh kombinasi:

```txt
Heading: Archivo / Sora / IBM Plex Sans Condensed
Body: Manrope / Geist / Source Sans 3
Mono: JetBrains Mono / IBM Plex Mono
```

## 3.7 Komponen Khas

- System status badge.
- Terminal card.
- Project deployment card.
- Tech stack pill.
- Metric card.
- Case study timeline.
- Architecture mini-map.
- Contact command bar.

## 3.8 Kelebihan

- Sangat cocok dengan portfolio developer teknis.
- Terlihat berbeda dari portfolio biasa.
- Cocok untuk menunjukkan project backend, worker, AI, dashboard, deployment.
- Mudah dikembangkan menjadi admin dashboard.

## 3.9 Kekurangan

- Jika terlalu banyak efek, bisa terasa ramai.
- Perlu menjaga kontras agar tetap nyaman dibaca.

## 3.10 Prompt Stitch Awal

```txt
Do not use this archived direction as the final theme. If exploring it only for comparison, keep the content structure but avoid making it the primary visual style. The final selected theme is Warm Editorial Engineer.
```

---

# Concept B: Warm Editorial Engineer

## 4.1 Ringkasan

Konsep ini membuat portfolio terasa seperti majalah digital atau archive profesional. Fokusnya bukan dashboard gelap, tetapi storytelling project secara kuat, hangat, dan premium.

Konsep ini cocok jika ingin portfolio terlihat elegan, profesional, fresh-graduate friendly, dan mudah dibaca oleh recruiter/client.

## 4.2 Kesan Visual

```txt
Warm editorial, case study magazine, professional engineering archive, calm premium layout.
```

## 4.3 Cocok Untuk

- Menampilkan project sebagai cerita.
- Melamar kerja.
- Client yang ingin melihat kualitas dan proses.
- Fresh graduate RPL yang ingin terlihat profesional.
- Portfolio yang ingin terlihat premium tanpa tema cyber gelap.

## 4.4 Struktur Visual

Hero section:

- Headline besar seperti cover magazine.
- Subheadline pendek dan kuat.
- CTA sederhana.
- Satu visual besar berupa project preview atau abstract technical diagram.

Project section:

- Layout besar per project.
- Setiap project seperti artikel case study.
- Gunakan nomor: `01`, `02`, `03`.
- Gunakan typography hierarchy yang kuat.

Detail project:

- Seperti artikel long-form.
- Ada sticky sidebar berisi stack, role, timeline, links.
- Konten utama menjelaskan problem, process, dan result.

## 4.5 Warna

```txt
Background: #F7F3EA
Surface: #FFFFFF
Text Primary: #171717
Text Muted: #756D63
Border: #DED6C8
Accent Blue: #2563EB
Accent Navy: #1E3A8A
Accent Amber: #B45309
Accent Gold: #D6A84F
```

## 4.6 Tipografi

```txt
Heading: Fraunces / Newsreader / Literata / Source Serif 4
Body: Manrope / Geist / Source Sans 3 / Plus Jakarta Sans
Mono: JetBrains Mono / IBM Plex Mono
```

## 4.7 Komponen Khas

- Large editorial hero.
- Numbered project list.
- Case study article layout.
- Pull quote.
- Project metadata sidebar.
- Before-after section.
- Architecture block.

## 4.8 Kelebihan

- Sangat readable.
- Cocok untuk recruiter dan client.
- Project terlihat lebih bernilai.
- Tidak terlalu berat secara visual.

## 4.9 Kekurangan

- Kurang menunjukkan nuansa technical dashboard jika berdiri sendiri.
- Perlu copywriting yang kuat.

## 4.10 Prompt Stitch Awal

```txt
Design a premium warm editorial portfolio website for Raihan Ariansyah, a Fullstack Developer and Fresh Graduate Software Engineer. The layout should feel like a professional digital case-study archive, with ivory background, white editorial cards, charcoal typography, muted warm-gray text, numbered featured projects, elegant spacing, strong reading hierarchy, and detailed project storytelling sections. Use blue and amber accents, subtle technical metadata, and recruiter-friendly visual polish. Avoid dark cyber aesthetics, neon glow, hacker dashboard visuals, and generic portfolio cards.
```

---

# Concept C: Builder Lab / Experiment Console

## 5.1 Ringkasan

Konsep ini menampilkan portfolio sebagai â€œlabâ€ tempat eksperimen, tools, dan project dibuat. Lebih playful dibanding Concept A, tetapi tetap teknis.

Konsep ini cocok jika ingin menunjukkan banyak eksperimen, prototype, AI tools, mobile app, backend service, dan automation.

## 5.2 Kesan Visual

```txt
Developer lab, experiment board, technical playground, creative engineering space.
```

## 5.3 Cocok Untuk

- Portfolio personal yang kreatif.
- Menampilkan banyak project kecil dan eksperimen.
- Developer yang sering mencoba teknologi baru.

## 5.4 Struktur Visual

Hero section:

- Seperti lab board.
- Ada sticky notes digital, mini terminal, dan project chips.
- Headline lebih personal.

Project section:

- Dibagi berdasarkan kategori:
  - Production.
  - Experiment.
  - AI/Model.
  - Mobile.
  - Backend.

## 5.5 Warna

```txt
Background: #101014
Surface: #1B1B22
Text Primary: #F7F7F2
Text Muted: #A1A1AA
Accent Lime: #A3E635
Accent Pink: #FB7185
Accent Blue: #60A5FA
Accent Yellow: #FACC15
```

## 5.6 Tipografi

```txt
Heading: Space Mono / Archivo Black / Bricolage Grotesque
Body: Manrope / Atkinson Hyperlegible
Mono: JetBrains Mono
```

## 5.7 Komponen Khas

- Experiment cards.
- Category filter.
- Lab notes.
- Status chips.
- Tech tags.
- â€œCurrently buildingâ€ widget.

## 5.8 Kelebihan

- Terasa personal dan kreatif.
- Cocok untuk banyak variasi project.
- Tidak terlalu formal.

## 5.9 Kekurangan

- Bisa terlihat kurang premium jika tidak dikontrol.
- Perlu menjaga visual agar tidak terlalu main-main.

## 5.10 Prompt Stitch Awal

```txt
Create a developer portfolio homepage that feels like a builder lab and experiment console. Use a dark workspace background, playful but technical cards, project category chips, lab-note inspired sections, and colorful accents. The design should feel creative and personal while still professional for a fullstack engineer.
```

---

# Concept D: Minimal Executive Engineer

## 6.1 Ringkasan

Konsep ini sangat bersih, minimal, dan profesional. Fokus pada kredibilitas, tulisan, dan project besar.

Konsep ini cocok jika tujuan utama portfolio adalah melamar kerja atau menunjukkan profil profesional tanpa terlalu banyak efek.

## 6.2 Kesan Visual

```txt
Clean executive, quiet luxury, professional CV, minimal technical profile.
```

## 6.3 Cocok Untuk

- Lamaran kerja formal.
- Recruiter.
- Client enterprise.
- Portfolio yang cepat dibaca.

## 6.4 Struktur Visual

Hero section:

- Nama besar.
- Role jelas.
- 1 paragraf ringkas.
- CTA ke CV dan project.

Project section:

- List minimal.
- Banyak whitespace.
- Metadata jelas.

## 6.5 Warna

```txt
Background: #FAFAF7
Text Primary: #111111
Text Muted: #666666
Border: #E5E0D8
Accent: #1D4ED8
```

Dark option:

```txt
Background: #080808
Surface: #111111
Text Primary: #F5F5F5
Text Muted: #9CA3AF
Accent: #FFFFFF
```

## 6.6 Tipografi

```txt
Heading: Neue Haas Grotesk style / Suisse style / Satoshi
Body: Source Sans 3 / Manrope
Mono: IBM Plex Mono
```

## 6.7 Komponen Khas

- Minimal navbar.
- Text-first hero.
- Project list row.
- CV section.
- Contact block.

## 6.8 Kelebihan

- Paling aman untuk profesional.
- Mudah dibuat responsif.
- Cepat dibaca.

## 6.9 Kekurangan

- Bisa terasa terlalu sederhana.
- Kurang unik jika tidak ada detail khas.

## 6.10 Prompt Stitch Awal

```txt
Design a minimal executive portfolio website for a fullstack engineer. Use strong typography, generous whitespace, precise alignment, subtle technical metadata, and a polished professional layout. The website should feel like a high-end digital CV with project case studies, not a generic template.
```

---

# Concept E: Soft Tech Bento Editorial

## 7.1 Ringkasan

Konsep ini adalah variasi modern yang menggabungkan warm editorial dengan soft bento layout. Cocok jika ingin desain terlihat lebih modern-startup, tetapi tetap profesional dan terang.

Ini menjadi alternatif kedua setelah Warm Editorial Engineer.

## 7.2 Kesan Visual

```txt
Soft product UI, warm editorial case studies, and friendly technical content.
```

## 7.3 Cocok Untuk

- Portfolio yang ingin terlihat modern, clean, dan mudah dibaca.
- Menampilkan banyak project dalam layout modular.
- Membuat website terasa seperti product portfolio yang ramah recruiter.

## 7.4 Struktur Visual

Homepage:

- Hero bersih dengan editorial headline.
- Featured project dalam bento/editorial cards.
- Skill section seperti capability matrix.
- Engineering notes seperti article archive.
- Contact sebagai professional contact panel.

Project detail:

- Hero project besar.
- Sidebar metadata.
- Section problem, role, stack, architecture, result.
- Screenshot gallery.
- Technical notes.

Admin dashboard:

- Tetap menggunakan visual command center.
- Sidebar gelap.
- Table rapi.
- Status badges.

## 7.5 Warna Final Rekomendasi

```txt
Base Background: #F4F7FB
Panel Surface: #FFFFFF
Elevated Surface: #F8FAFC
Soft Border: #E2E8F0
Strong Border: #CBD5E1
Primary Text: #111827
Secondary Text: #667085
Muted Text: #94A3B8
Primary Accent: #3B82F6
Success Accent: #10B981
Warm Accent: #B45309
Soft Lavender: #EEF2FF
```

## 7.6 Visual Identity

Elemen yang wajib ada:

- Light warm/cool background.
- Soft rounded bento cards.
- Editorial typography pada judul besar.
- Monospace metadata secukupnya.
- Project numbering.
- Status chip.
- Case study section.

## 7.7 Prompt Stitch Utama

```txt
Create a soft tech bento editorial portfolio website for Raihan Ariansyah, a Fullstack Developer and Fresh Graduate Software Engineer. Use a light modern theme with soft gray background, white rounded cards, blue and mint accents, editorial project numbers, clean typography, bento-style sections, and professional case-study storytelling. Avoid dark cyber visuals, neon effects, hacker dashboard aesthetics, and generic templates.
```

## 7.8 Alasan Konsep Ini Paling Tepat

Soft Tech Bento Editorial cocok sebagai alternatif karena:

- Tetap modern dan mudah dibaca.
- Project bisa ditampilkan dalam struktur modular.
- Cocok untuk recruiter dan client.
- Bisa berkembang menjadi admin dashboard.
- Tidak terlalu formal, tetapi tetap profesional.

## 8. Skema Halaman Untuk Dibuat di Stitch

Urutan desain yang sebaiknya dibuat:

```txt
1. Homepage desktop
2. Homepage mobile
3. Project listing desktop
4. Project detail desktop
5. Admin dashboard overview
6. Admin project editor
7. Contact page
```

Konten project yang harus menjadi acuan desain:

```txt
1. ABSENTA13
2. Absensi App
3. Hoyonimeku
4. HoyoSense
5. IoT Workshop Kit / IWK
6. Manajemen Tracking System / PKL
```

## 9. Rancangan Homepage

### 9.1 Section 1: Hero

Isi:

- Nama: Raihan Ariansyah.
- Role: Fullstack Developer & Fresh Graduate Software Engineer.
- Positioning statement.
- CTA: `View Projects`, `Download CV`, `Contact Me`.
- Status: `Available for work/project`.
- Panel kanan berisi system profile.

Layout:

```txt
Left: identity and CTA
Right: system profile / dashboard panel
Background: grid + soft glow
```

### 9.2 Section 2: Technical Matrix

Isi:

- Frontend.
- Backend.
- Database.
- Mobile.
- AI/Model.
- Deployment.

Format:

```txt
Category + technologies + confidence/usage label
```

### 9.3 Section 3: Featured Projects

Isi:

- 6 project utama.
- Nomor project.
- Problem summary.
- Role.
- Stack.
- Status.
- CTA ke detail.

Project utama:

```txt
01 ABSENTA13 - School Attendance System
02 Absensi App - Mobile App / School System
03 Hoyonimeku - Anime Streaming App
04 HoyoSense - Smart City Concept
05 IoT Workshop Kit / IWK - IoT Monitoring System
06 Manajemen Tracking System - Tracking Dashboard
```

### 9.4 Section 4: Engineering Notes

Isi:

- Catatan teknis singkat.
- Bisa berupa blog preview.
- Format seperti log archive.

### 9.5 Section 5: Contact Command

Isi:

- CTA kontak.
- Email/WhatsApp.
- Link GitHub/LinkedIn.
- Download CV.

Tambahan section yang perlu masuk homepage:

```txt
Organization Experience
MPK SMK Negeri 13 Bandung - Anggota Komisi A
```

## 10. Rancangan Project Detail

Project detail harus menjadi bagian paling kuat.

Struktur:

```txt
Project Hero
Problem Statement
My Role
Tech Stack
System Architecture
Key Features
Technical Challenges
Solution
Result
Gallery
Links
```

Layout:

- Konten utama di kiri.
- Metadata sticky sidebar di kanan.
- Screenshot gallery di bagian tengah/bawah.
- Section architecture menggunakan diagram sederhana.

## 11. Rancangan Admin Dashboard

Admin dashboard tetap mengikuti tema command center agar konsisten.

Halaman utama admin:

- Total projects.
- Published projects.
- Draft projects.
- Contact messages.
- Recent updates.

Project editor:

- Title.
- Slug.
- Summary.
- Problem.
- Solution.
- Role.
- Stack selector.
- Status.
- Featured toggle.
- Published toggle.
- Image upload.

## 12. Prompt Umum Untuk Stitch

Gunakan prompt ini jika ingin membuat desain global:

```txt
Design a complete responsive portfolio website for Raihan Ariansyah, a Fullstack Developer and Fresh Graduate Software Engineer from SMK Negeri 13 Bandung, majoring in Software Engineering / RPL. Use a Warm Editorial Engineer style: professional light theme, ivory background, white editorial cards, charcoal typography, warm muted text, numbered project case studies, refined spacing, subtle technical metadata, and blue/amber accents. The website should include homepage, project listing, project detail, contact page, and admin dashboard concepts. His focus areas are fullstack development, backend systems, web apps, mobile apps, IoT, database design, and API integration. Featured projects include ABSENTA13, Absensi App, Hoyonimeku, HoyoSense, IoT Workshop Kit / IWK, and Manajemen Tracking System. Also include organization experience: MPK SMK Negeri 13 Bandung, Komisi A. The final design should feel custom, professional, recruiter-friendly, fresh-graduate friendly, and production-ready. Avoid dark cyber aesthetics, neon glow, hacker dashboard visuals, purple gradients, and generic portfolio templates.
```

## 13. Prompt Per Halaman

### 13.1 Homepage

```txt
Create the homepage for Raihan Ariansyah's fullstack engineer portfolio. Use a Warm Editorial Engineer style with a refined light theme, hero section, editorial engineering profile card, about me, technical matrix, featured case-study projects, organization experience, engineering notes preview, and contact panel. Make it responsive, premium, professional, fresh-graduate friendly, and not generic.
```

### 13.2 Project Listing

```txt
Create a project listing page for a professional technical portfolio. Show projects as numbered editorial case-study cards with status badges, problem summary, role, tech stack, and links. Use a warm light editorial style with filtering by category and technology.
```

### 13.3 Project Detail

```txt
Create a project detail case-study page for Raihan Ariansyah's portfolio. Include project hero, problem statement, role, tech stack, architecture section, technical challenges, solution, result metrics, screenshot gallery, and sticky metadata sidebar. Use a premium warm editorial style with subtle technical metadata and strong readability.
```

### 13.4 Admin Dashboard

```txt
Create an admin dashboard for managing portfolio content. Use a warm light product-dashboard interface with sidebar navigation, metric cards, project table, status badges, recent messages, and quick actions. It should feel consistent with the public portfolio but more functional and data-focused.
```

### 13.5 Contact Page

```txt
Create a contact page for Raihan Ariansyah's fullstack engineer portfolio. Use a warm editorial professional style with a contact form, availability status, social links, email, WhatsApp CTA placeholder, and polished contact panel. Keep it professional and easy to use.
```

## 14. Output Yang Diharapkan Dari Stitch

Untuk setiap desain, output ideal yang perlu dihasilkan:

- Desktop layout.
- Mobile layout.
- Color palette.
- Typography pairing.
- Component list.
- Spacing guideline.
- Exportable design reference.
- Jika memungkinkan, HTML/CSS atau React/Tailwind draft.

## 15. Kriteria Desain Diterima

Desain dianggap cocok jika:

- Tidak terlihat seperti template portfolio umum.
- Hero section langsung memberi kesan technical dan profesional.
- Project section terlihat seperti case study, bukan card biasa.
- Typography terbaca jelas.
- Kontras dark mode aman.
- Mobile layout tetap rapi.
- Visual cocok untuk developer fullstack/backend/AI/deployment.
- Bisa diimplementasikan dengan Next.js dan Tailwind tanpa terlalu berat.

## 16. Rekomendasi Final

Konsep yang paling direkomendasikan:

```txt
Concept B: Warm Editorial Engineer
```

Alasannya:

- Paling seimbang antara profesional, hangat, dan teknis.
- Cocok untuk portfolio yang ingin terlihat sebagai produk nyata.
- Bisa menunjukkan kekuatan backend, frontend, database, deployment, dan project case study.
- Lebih recruiter-friendly untuk fresh graduate.
- Cocok untuk desain public page dan admin dashboard.

Jika ingin variasi desain untuk dibandingkan di Stitch, buat 3 versi:

```txt
Version 1: Warm Editorial Case Study
Version 2: Minimal Product Engineer
Version 3: Soft Tech Bento Editorial
```

Setelah dibandingkan, pilih satu desain utama lalu turunkan ke semua halaman.


