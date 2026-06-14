# Rencana Pembuatan Website Portfolio Pribadi

## 1. Gambaran Umum

Website ini direncanakan sebagai portfolio pribadi yang tidak hanya menampilkan daftar project, tetapi juga menunjukkan cara berpikir, kemampuan teknis, alur kerja, dan bukti nyata dari pengalaman membangun aplikasi.

Konsep utama website ini adalah **portfolio berbasis engineering case study**. Artinya, setiap project tidak hanya ditampilkan sebagai kartu biasa, tetapi dijelaskan sebagai cerita teknis: masalah yang diselesaikan, teknologi yang digunakan, kontribusi pribadi, tantangan, dan hasil akhirnya.

Website ini ditujukan untuk menjadi identitas profesional yang bisa digunakan untuk:

- Melamar kerja.
- Menampilkan project pribadi dan client.
- Menunjukkan kemampuan fullstack development.
- Menjadi pusat dokumentasi pengalaman teknis.
- Menjadi produk nyata yang mencerminkan kualitas engineering.

## 2. Konsep Desain

### 2.1 Arah Visual

Konsep desain yang direkomendasikan adalah **Warm Editorial Engineer**.

Website akan memiliki tampilan terang, hangat, editorial, teknikal, dan profesional. Bukan sekadar landing page sederhana, tetapi terasa seperti portfolio case study premium yang dibuat dengan pendekatan produk nyata.

### 2.2 Karakter Desain

- Dominan light mode dengan warm ivory background.
- Warna dasar terang seperti ivory, white, warm beige, dan soft paper tones.
- Accent warna professional blue, navy, amber, dan soft gold.
- Elemen visual berupa editorial card, nomor project, garis divider halus, badge status, dan metadata teknis yang subtle.
- Layout tidak terlalu ramai, tetapi tetap memiliki identitas teknis yang kuat.
- Project ditampilkan seperti case study, bukan hanya card biasa.

### 2.3 Kesan yang Ingin Dibangun

Website ini harus memberi kesan bahwa pemiliknya:

- Serius dalam membangun software.
- Mampu berpikir sistematis.
- Paham frontend, backend, database, deployment, dan production flow.
- Bisa menyelesaikan masalah nyata, bukan hanya membuat tampilan.
- Punya kualitas kerja yang bisa dipercaya.

## 3. Stack Teknologi Rekomendasi

Stack yang direkomendasikan adalah stack modern, kuat, dan cocok untuk production.

### 3.1 Frontend

```txt
Next.js + TypeScript + Tailwind CSS
```

Alasan:

- Cocok untuk portfolio karena mendukung SEO dengan baik.
- Bisa membuat halaman statis dan dinamis.
- Cocok untuk project detail, blog, dan halaman case study.
- TypeScript membantu menjaga kualitas kode.
- Tailwind CSS mempercepat styling dan menjaga konsistensi desain.

### 3.2 Backend

```txt
Golang + Echo
```

Alasan:

- Golang cepat, ringan, dan cocok untuk backend production.
- Mudah dideploy sebagai single binary.
- Cocok untuk API service yang clean dan scalable.
- Echo memiliki struktur yang rapi dan cocok untuk REST API.

Alternatif backend framework:

```txt
Gin
```

Gin juga bagus jika ingin komunitas lebih besar dan referensi lebih banyak. Namun untuk struktur yang clean dan minimal, Echo menjadi rekomendasi utama.

### 3.3 Database

```txt
PostgreSQL
```

Alasan:

- Stabil untuk jangka panjang.
- Cocok untuk data portfolio, blog, user admin, contact message, dan analytics.
- Lebih fleksibel dibanding database sederhana.
- Banyak digunakan di production.
- Cocok jika website berkembang menjadi CMS pribadi.

### 3.4 Query Layer

```txt
SQLC
```

Alasan:

- Tetap menulis SQL asli.
- Menghasilkan kode Go yang type-safe.
- Lebih eksplisit dan ringan dibanding ORM besar.
- Cocok untuk backend Go yang ingin clean dan maintainable.

Alternatif:

```txt
GORM
```

GORM bisa digunakan jika ingin development lebih cepat, tetapi untuk kualitas engineering yang lebih rapi, SQLC lebih direkomendasikan.

### 3.5 Cache

```txt
Redis
```

Redis bersifat optional pada tahap awal, tetapi bagus untuk fitur lanjutan seperti:

- Cache data project.
- Rate limit contact form.
- Session management.
- Analytics ringan.

### 3.6 Object Storage

```txt
Cloudflare R2 / AWS S3 / Supabase Storage
```

Digunakan untuk menyimpan:

- Screenshot project.
- Gambar blog.
- File CV.
- Asset portfolio lain.

Rekomendasi utama:

```txt
Cloudflare R2
```

Alasan:

- Biaya efisien.
- Cocok dengan Cloudflare CDN.
- Bagus untuk asset static.

## 4. Arsitektur Aplikasi

### 4.1 Skema Besar

```txt
User Browser
    â†“
Next.js Frontend
    â†“
Golang REST API
    â†“
PostgreSQL Database
    â†“
Cloudflare R2 Storage
```

### 4.2 Pembagian Tanggung Jawab

Frontend bertanggung jawab untuk:

- Landing page.
- Project listing.
- Project detail.
- Blog page.
- Contact page.
- Admin dashboard UI.
- SEO metadata.

Backend bertanggung jawab untuk:

- API project.
- API blog.
- API contact form.
- API upload asset.
- Auth admin.
- Database operation.
- Rate limiting.

Database bertanggung jawab untuk menyimpan:

- Data project.
- Data teknologi.
- Data blog.
- Data pesan kontak.
- Data admin user.
- Konfigurasi website.

Storage bertanggung jawab untuk menyimpan:

- Gambar project.
- Thumbnail.
- CV PDF.
- Asset blog.

## 5. Struktur Halaman Website

### 5.1 Public Pages

```txt
/
/projects
/projects/[slug]
/blog
/blog/[slug]
/about
/contact
```

### 5.2 Admin Pages

```txt
/admin/login
/admin/dashboard
/admin/projects
/admin/projects/create
/admin/projects/[id]/edit
/admin/blog
/admin/blog/create
/admin/messages
/admin/settings
```

## 6. Fitur Utama

### 6.1 Landing Page

Landing page menjadi halaman utama yang memperkenalkan identitas profesional.

Isi utama:

- Nama dan role.
- Kalimat positioning.
- CTA ke project dan kontak.
- Highlight project terbaik.
- Ringkasan skill.
- Statistik singkat.
- Link ke GitHub, LinkedIn, CV, dan kontak.

Contoh positioning:

```txt
Fullstack Developer focused on building practical systems, clean backend services, and production-ready web applications.
```

### 6.2 Project Case Study

Setiap project memiliki detail yang menjelaskan:

- Nama project.
- Masalah yang diselesaikan.
- Role pribadi.
- Tech stack.
- Fitur utama.
- Tantangan teknis.
- Solusi yang dibuat.
- Screenshot.
- Link demo atau repository.
- Status project.

Format ini membuat project terlihat lebih kuat dibanding hanya menampilkan gambar dan nama teknologi.

### 6.3 Blog / Engineering Notes

Blog digunakan untuk menulis catatan teknis seperti:

- Debugging.
- Setup environment.
- Backend architecture.
- Database design.
- Deployment notes.
- AI/modeling notes.
- Pembelajaran dari project.

Bagian ini dapat meningkatkan nilai portfolio karena menunjukkan proses berpikir dan kemampuan komunikasi teknis.

### 6.4 Admin Dashboard

Admin dashboard digunakan agar konten portfolio bisa dikelola tanpa mengubah kode langsung.

Fitur admin:

- Login admin.
- CRUD project.
- CRUD blog.
- Upload gambar.
- Melihat pesan kontak.
- Mengubah site settings.

### 6.5 Contact Form

Contact form digunakan agar pengunjung bisa mengirim pesan.

Data disimpan ke database dan bisa dilihat melalui admin dashboard.

Fitur tambahan:

- Rate limit.
- Validasi input.
- Spam protection sederhana.
- Optional email notification.

## 7. Skema Database Awal

### 7.1 Tabel `users`

Untuk admin website.

```txt
id
name
email
password_hash
role
created_at
updated_at
```

### 7.2 Tabel `projects`

Untuk menyimpan data project.

```txt
id
title
slug
summary
description
problem
solution
role
status
demo_url
repo_url
featured
published
created_at
updated_at
```

### 7.3 Tabel `project_images`

Untuk menyimpan gambar project.

```txt
id
project_id
image_url
alt_text
sort_order
created_at
```

### 7.4 Tabel `technologies`

Untuk daftar teknologi.

```txt
id
name
category
icon_url
created_at
```

### 7.5 Tabel `project_technologies`

Relasi many-to-many antara project dan teknologi.

```txt
project_id
technology_id
```

### 7.6 Tabel `blog_posts`

Untuk artikel atau engineering notes.

```txt
id
title
slug
excerpt
content
cover_image_url
published
published_at
created_at
updated_at
```

### 7.7 Tabel `contact_messages`

Untuk pesan dari pengunjung.

```txt
id
name
email
subject
message
is_read
created_at
```

### 7.8 Tabel `site_settings`

Untuk konfigurasi website.

```txt
id
key
value
updated_at
```

## 8. API Endpoint Awal

### 8.1 Public API

```txt
GET    /api/projects
GET    /api/projects/:slug
GET    /api/blog
GET    /api/blog/:slug
POST   /api/contact
GET    /api/settings/public
```

### 8.2 Admin API

```txt
POST   /api/admin/login
POST   /api/admin/logout
GET    /api/admin/me

GET    /api/admin/projects
POST   /api/admin/projects
GET    /api/admin/projects/:id
PUT    /api/admin/projects/:id
DELETE /api/admin/projects/:id

GET    /api/admin/blog
POST   /api/admin/blog
GET    /api/admin/blog/:id
PUT    /api/admin/blog/:id
DELETE /api/admin/blog/:id

GET    /api/admin/messages
PUT    /api/admin/messages/:id/read

POST   /api/admin/upload
GET    /api/admin/settings
PUT    /api/admin/settings
```

## 9. Struktur Folder Rekomendasi

Jika frontend dan backend dibuat dalam satu repository monorepo:

```txt
portfolio-website/
  apps/
    web/
      src/
      public/
      package.json
    api/
      cmd/
      internal/
      migrations/
      sql/
      go.mod
  docs/
  docker-compose.yml
  README.md
```

Jika ingin dipisah menjadi dua repository:

```txt
portfolio-frontend/
portfolio-backend/
```

Untuk tahap awal, monorepo lebih direkomendasikan agar pengembangan lebih mudah dikontrol.

## 10. Deployment Rekomendasi

### 10.1 Frontend

```txt
Cloudflare Pages / Vercel
```

### 10.2 Backend

```txt
Fly.io / Railway / VPS
```

### 10.3 Database

```txt
Neon / Supabase / Railway PostgreSQL
```

### 10.4 Storage

```txt
Cloudflare R2
```

### 10.5 Domain dan CDN

```txt
Cloudflare DNS + CDN
```

## 11. Roadmap Pengerjaan

### Phase 1: Foundation

- Setup repository.
- Setup Next.js frontend.
- Setup Golang Echo backend.
- Setup PostgreSQL.
- Setup environment variable.
- Setup basic Docker Compose untuk local development.

### Phase 2: Public Portfolio

- Buat landing page.
- Buat halaman project listing.
- Buat halaman project detail.
- Buat halaman about.
- Buat halaman contact.
- Buat data dummy project.

### Phase 3: Backend API

- Buat database migration.
- Buat SQLC query.
- Buat API project.
- Buat API blog.
- Buat API contact.
- Buat validasi request.

### Phase 4: Admin Dashboard

- Buat login admin.
- Buat dashboard.
- Buat CRUD project.
- Buat CRUD blog.
- Buat pesan kontak.
- Buat upload gambar.

### Phase 5: Production Readiness

- Setup authentication lebih aman.
- Setup rate limit.
- Setup SEO metadata.
- Setup OpenGraph image.
- Setup sitemap.
- Setup error handling.
- Setup logging.
- Setup deployment.

### Phase 6: Enhancement

- Tambah blog engineering notes.
- Tambah analytics sederhana.
- Tambah dark/light mode jika dibutuhkan.
- Tambah downloadable CV.
- Tambah project filtering berdasarkan teknologi.

## 12. Prioritas MVP

Untuk versi pertama, fitur yang harus dibuat terlebih dahulu:

```txt
1. Landing page
2. Project listing
3. Project detail
4. Contact form
5. Admin login
6. CRUD project
7. Upload image
```

Fitur blog dan analytics bisa dibuat setelah MVP selesai.

## 13. Kesimpulan Rekomendasi Final

Spesifikasi terbaik yang direkomendasikan untuk website ini adalah:

```txt
Frontend: Next.js + TypeScript + Tailwind CSS
Backend: Golang + Echo
Database: PostgreSQL
Query Layer: SQLC
Cache: Redis
Storage: Cloudflare R2
Deployment: Cloudflare Pages + Fly.io
Database Hosting: Neon / Supabase PostgreSQL
DNS/CDN: Cloudflare
```

Stack ini cukup kuat untuk portfolio pribadi, tetapi tetap realistis untuk dikerjakan. Website akan terlihat profesional karena tidak hanya menampilkan tampilan, tetapi juga memiliki backend, database, admin dashboard, storage, dan struktur production-ready.

Tujuan akhirnya adalah membuat portfolio yang bisa menjadi bukti langsung bahwa pemiliknya mampu membangun aplikasi fullstack dari sisi desain, frontend, backend, database, deployment, dan maintenance.

## 14. Hasil Riset Teknis Tambahan

Bagian ini adalah tambahan pemahaman berdasarkan referensi teknis dari Context7 dan dokumentasi resmi stack yang akan digunakan.

### 14.1 Next.js App Router

Next.js cocok digunakan sebagai frontend utama karena mendukung pola modern untuk portfolio yang membutuhkan SEO, routing dinamis, dan halaman detail project.

Poin penting untuk pengembangan:

- Gunakan `app` directory sebagai struktur routing utama.
- Gunakan `metadata` atau `generateMetadata` untuk SEO setiap halaman.
- Gunakan dynamic route untuk halaman detail project dan blog.
- Gunakan Open Graph metadata agar link portfolio tampil bagus saat dibagikan.
- Gunakan dynamic OG image untuk project dan blog unggulan.
- Gunakan sitemap agar halaman project dan blog mudah diindeks search engine.
- Gunakan server component untuk halaman public yang mengambil data dari API.
- Gunakan client component hanya untuk bagian interaktif seperti filter, form, animation, dan admin dashboard.

Rekomendasi implementasi:

```txt
app/
  page.tsx
  projects/
    page.tsx
    [slug]/
      page.tsx
      opengraph-image.tsx
  blog/
    page.tsx
    [slug]/
      page.tsx
      opengraph-image.tsx
  sitemap.ts
  robots.ts
```

### 14.2 Echo untuk Backend Golang

Echo cocok digunakan untuk backend karena mendukung routing group, middleware, request logger, CORS, rate limiter, JWT middleware, dan centralized error handling.

Pola penting:

- Pisahkan route public dan admin.
- Gunakan middleware umum untuk logging, recover, CORS, dan security header.
- Gunakan rate limiter untuk endpoint yang rawan spam seperti contact form dan login.
- Gunakan JWT atau session cookie untuk admin area.
- Gunakan centralized error handler agar response API konsisten.
- Gunakan structured logging agar backend mudah dianalisis saat production.

Rekomendasi route grouping:

```txt
/api/v1
  /health
  /projects
  /blog
  /contact

/api/v1/admin
  /auth
  /projects
  /blog
  /messages
  /settings
  /upload
```

### 14.3 SQLC + PostgreSQL + pgx

SQLC direkomendasikan karena menghasilkan kode Go type-safe dari query SQL asli. Untuk PostgreSQL, driver yang direkomendasikan adalah `pgx/v5`.

Pola penting:

- Simpan schema/migration secara terpisah dari query.
- Query diberi nama menggunakan format `-- name: NamaQuery :one/:many/:exec`.
- Gunakan generated package khusus seperti `internal/db`.
- Gunakan transaction untuk operasi yang menyentuh beberapa tabel, misalnya membuat project sekaligus technologies dan images.

Rekomendasi struktur SQLC:

```txt
apps/api/
  sqlc.yaml
  migrations/
    000001_init.up.sql
    000001_init.down.sql
  sql/
    projects.sql
    blog.sql
    auth.sql
    messages.sql
  internal/
    db/
      generated files from sqlc
```

Contoh `sqlc.yaml`:

```yaml
version: "2"
sql:
  - engine: "postgresql"
    schema: "migrations"
    queries: "sql"
    gen:
      go:
        package: "db"
        out: "internal/db"
        sql_package: "pgx/v5"
```

### 14.4 PostgreSQL sebagai Database Utama

PostgreSQL tetap menjadi pilihan utama karena cocok untuk data relasional, indexing, full-text search, JSONB, dan kebutuhan query kompleks.

Fitur PostgreSQL yang bermanfaat untuk portfolio:

- `UUID` untuk primary key yang aman dan tidak mudah ditebak.
- `JSONB` untuk field fleksibel seperti metadata SEO, social links, atau project metrics.
- `GIN index` untuk pencarian full-text atau JSONB.
- `tsvector` untuk search blog dan project.
- `slug` unique index untuk project dan blog.
- `created_at`, `updated_at`, dan `published_at` untuk lifecycle konten.

Rekomendasi:

```txt
Gunakan PostgreSQL sebagai source of truth.
Gunakan Redis hanya sebagai cache/rate limit, bukan database utama.
Gunakan storage eksternal untuk file, bukan menyimpan binary besar di database.
```

### 14.5 Redis untuk Cache dan Rate Limit

Redis tidak wajib di MVP, tetapi bagus jika ingin website terasa production-ready.

Kegunaan utama:

- Cache daftar project public.
- Cache site settings public.
- Rate limit login admin.
- Rate limit contact form.
- Temporary token untuk reset password jika fitur ini dibuat.

Untuk tahap awal, Redis bisa ditunda sampai fitur public dan admin dashboard sudah stabil.

### 14.6 Cloudflare R2 untuk Asset

Cloudflare R2 cocok untuk menyimpan file seperti gambar project, cover blog, CV PDF, dan asset publik lain.

Alasan:

- S3-compatible.
- Cocok dipasangkan dengan Cloudflare CDN.
- Lebih efisien untuk file static.
- Backend hanya menyimpan metadata file dan URL di database.

Pola penyimpanan file:

```txt
portfolio-assets/
  projects/
    {project-slug}/thumbnail.webp
    {project-slug}/screenshots/*.webp
  blog/
    {blog-slug}/cover.webp
  cv/
    cv-raihan.pdf
```

## 15. RPD: Rencana Pengembangan Detail

RPD ini menjadi panduan eksekusi agar pengembangan tidak melebar dan setiap tahap memiliki output yang jelas.

### 15.1 Tujuan Produk

Membuat website portfolio fullstack yang menampilkan identitas profesional, project case study, blog teknis, contact form, dan admin dashboard untuk mengelola konten.

### 15.2 Sasaran Pengguna

Pengguna utama:

- Recruiter.
- Client potensial.
- Teman developer.
- Dosen/penguji/pembimbing jika digunakan untuk presentasi.
- Diri sendiri sebagai admin konten.

### 15.3 Nilai Utama Website

Website ini harus membuktikan bahwa pemiliknya mampu:

- Mendesain interface modern.
- Membuat frontend yang SEO-friendly.
- Membuat backend Golang yang rapi.
- Mendesain database PostgreSQL.
- Mengelola upload file.
- Membuat dashboard admin.
- Melakukan deployment production.
- Menulis dokumentasi teknis.

### 15.4 Ruang Lingkup MVP

Fitur MVP:

- Landing page.
- Project listing.
- Project detail.
- Contact form.
- Admin login.
- CRUD project.
- Upload gambar project.
- Basic SEO.

Tidak termasuk MVP:

- Blog penuh.
- Analytics detail.
- Multi user role kompleks.
- Komentar blog.
- Newsletter.
- Dark/light theme toggle jika desain awal sudah dark mode.

### 15.5 Success Criteria MVP

MVP dianggap selesai jika:

- Landing page bisa dibuka dan responsif.
- Project bisa ditampilkan dari database.
- Detail project bisa dibuka menggunakan slug.
- Admin bisa login.
- Admin bisa tambah, edit, publish, dan delete project.
- Admin bisa upload gambar project.
- Contact form bisa menyimpan pesan ke database.
- Website memiliki metadata SEO dasar.
- Frontend dan backend bisa berjalan di local menggunakan environment terpisah.

## 16. PRD: Product Requirements Document

### 16.1 Problem Statement

Portfolio biasa sering hanya menampilkan nama project, gambar, dan tech stack. Format seperti itu kurang menunjukkan kualitas engineering dan kontribusi nyata.

Website ini ingin menyelesaikan masalah tersebut dengan membuat portfolio yang menampilkan project sebagai case study teknis.

### 16.2 Product Goals

- Menampilkan identitas profesional secara kuat.
- Menunjukkan project dengan narasi teknis.
- Memberikan bukti kemampuan fullstack.
- Memudahkan update konten melalui admin dashboard.
- Menjadi platform jangka panjang untuk blog dan engineering notes.

### 16.3 Functional Requirements

Public website harus bisa:

- Menampilkan landing page.
- Menampilkan daftar project.
- Menampilkan detail project.
- Menampilkan teknologi yang digunakan.
- Mengirim pesan kontak.
- Menampilkan link CV, GitHub, LinkedIn, dan kontak.

Admin dashboard harus bisa:

- Login admin.
- Logout admin.
- Melihat daftar project.
- Membuat project.
- Mengedit project.
- Menghapus project.
- Publish/unpublish project.
- Upload gambar.
- Melihat pesan kontak.

### 16.4 Non-Functional Requirements

- Mobile responsive.
- SEO-friendly.
- Aman untuk admin route.
- Cepat dibuka.
- API response konsisten.
- Struktur kode maintainable.
- Bisa dideploy ke production.
- Environment variable tidak bocor ke frontend.

### 16.5 Content Requirements

Minimal konten awal:

- 1 profil singkat.
- 3 project unggulan.
- 6 sampai 12 teknologi utama.
- 1 CV PDF.
- Link GitHub.
- Link LinkedIn jika ada.
- Kontak email atau WhatsApp.

## 17. ERD: Entity Relationship Design

Skema relasi awal:

```txt
users
  1 â”€â”€â”€â”€ * projects

projects
  1 â”€â”€â”€â”€ * project_images
  * â”€â”€â”€â”€ * technologies melalui project_technologies

blog_posts
  * â”€â”€â”€â”€ * technologies melalui blog_post_technologies optional

contact_messages
  berdiri sendiri

site_settings
  berdiri sendiri
```

Detail relasi:

- Satu admin user bisa membuat banyak project.
- Satu project bisa memiliki banyak gambar.
- Satu project bisa memiliki banyak technology.
- Satu technology bisa digunakan oleh banyak project.
- Contact message tidak perlu relasi ke user karena berasal dari pengunjung publik.
- Site settings digunakan untuk data global seperti nama, tagline, social links, dan CV URL.

## 18. API Contract Rekomendasi

### 18.1 Format Response Berhasil

```json
{
  "success": true,
  "data": {},
  "message": "OK"
}
```

### 18.2 Format Response Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request payload",
    "details": []
  }
}
```

### 18.3 Error Code Awal

```txt
VALIDATION_ERROR
UNAUTHORIZED
FORBIDDEN
NOT_FOUND
CONFLICT
RATE_LIMITED
INTERNAL_SERVER_ERROR
```

### 18.4 Pagination

Untuk project dan blog:

```txt
GET /api/v1/projects?page=1&limit=10&featured=true&technology=golang
```

Response pagination:

```json
{
  "success": true,
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 24,
    "total_pages": 3
  }
}
```

## 19. Security Plan

### 19.1 Auth Admin

Pilihan auth:

```txt
JWT access token + refresh token
```

atau

```txt
HTTP-only secure session cookie
```

Rekomendasi untuk admin dashboard:

```txt
HTTP-only secure cookie
```

Alasan:

- Lebih aman dari akses JavaScript langsung.
- Cocok untuk dashboard admin.
- Bisa dikombinasikan dengan CSRF protection.

### 19.2 Password

Gunakan password hashing:

```txt
argon2id / bcrypt
```

Rekomendasi:

```txt
argon2id
```

### 19.3 Proteksi Endpoint

- Rate limit `/api/v1/contact`.
- Rate limit `/api/v1/admin/auth/login`.
- Validasi semua payload.
- CORS hanya izinkan domain frontend.
- Jangan expose secret ke frontend.
- Gunakan HTTPS di production.
- Gunakan security headers.
- Batasi ukuran upload file.
- Validasi MIME type file upload.

### 19.4 Upload Security

Aturan upload:

- Hanya izinkan image format tertentu: `jpg`, `jpeg`, `png`, `webp`.
- Maksimal ukuran file, misalnya 2 MB sampai 5 MB.
- Rename file menggunakan UUID.
- Jangan percaya nama file dari user.
- Simpan file ke R2, bukan ke server lokal production.

## 20. SEO dan Content Strategy

### 20.1 Metadata Dasar

Setiap halaman penting harus memiliki:

- Title.
- Description.
- Canonical URL.
- Open Graph title.
- Open Graph description.
- Open Graph image.
- Twitter card metadata.

### 20.2 Dynamic Metadata

Untuk project detail:

```txt
title: {project.title} - Case Study
description: {project.summary}
image: project thumbnail / generated OG image
```

Untuk blog detail:

```txt
title: {post.title}
description: {post.excerpt}
image: blog cover / generated OG image
```

### 20.3 Sitemap

Sitemap harus berisi:

- Home.
- About.
- Contact.
- Project listing.
- Semua published project.
- Blog listing.
- Semua published blog.

## 21. UI/UX Design System Awal

### 21.1 Warna

```txt
Background utama: #F7F3EA
Surface utama: #FFFFFF
Surface kedua: #FDFBF7
Warm block: #EFE7D8
Border: #DED6C8
Text utama: #171717
Text muted: #756D63
Accent blue: #2563EB
Accent navy: #1E3A8A
Accent amber: #B45309
Accent gold: #D6A84F
Danger: #B91C1C
```

### 21.2 Komponen UI

Komponen awal:

- Navbar.
- Hero section.
- Project card.
- Project case study layout.
- Technology badge.
- Timeline item.
- Contact form.
- Admin sidebar.
- Admin table.
- Form input.
- Upload field.
- Status badge.
- Toast notification.

### 21.3 Pola Layout

- Gunakan max width agar konten tetap nyaman dibaca.
- Hero boleh menggunakan layout asimetris.
- Project detail gunakan gaya editorial: problem, solution, tech stack, gallery.
- Admin dashboard gunakan layout sidebar + content area.

## 22. Observability dan Maintenance

Untuk tahap production, backend sebaiknya memiliki:

- Structured logging.
- Request ID.
- Health check endpoint.
- Error response standar.
- Basic metrics optional.

Endpoint health check:

```txt
GET /api/v1/health
```

Response:

```json
{
  "success": true,
  "data": {
    "status": "ok",
    "service": "portfolio-api",
    "version": "1.0.0"
  }
}
```

## 23. Environment Variable Awal

### 23.1 Frontend

```txt
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_API_BASE_URL=
```

### 23.2 Backend

```txt
APP_ENV=
APP_PORT=
DATABASE_URL=
REDIS_URL=
SESSION_SECRET=
FRONTEND_ORIGIN=
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_PUBLIC_BASE_URL=
```

Catatan keamanan:

```txt
Jangan pernah menaruh secret backend dengan prefix NEXT_PUBLIC_.
```

## 24. Docker Local Development

Untuk local development, gunakan Docker Compose untuk service pendukung.

Service awal:

```txt
postgres
redis
api
web optional
```

Pada tahap awal, web dan api juga bisa dijalankan langsung dari terminal agar debugging lebih mudah.

## 25. Testing Strategy

### 25.1 Frontend

- Component smoke test untuk komponen penting.
- E2E test untuk flow contact form dan project detail.
- Manual responsive check untuk mobile/tablet/desktop.

### 25.2 Backend

- Unit test service layer.
- Integration test untuk repository/database.
- API test untuk endpoint public dan admin.
- Test validasi payload.
- Test auth middleware.

### 25.3 Database

- Migration up/down harus bisa dijalankan.
- Seed data untuk project demo.
- Constraint unique slug harus diuji.

## 26. Risiko dan Mitigasi

### 26.1 Risiko Scope Terlalu Besar

Mitigasi:

- Fokus MVP dulu.
- Blog, analytics, dan fitur lanjutan ditunda.

### 26.2 Risiko Admin Dashboard Memakan Waktu

Mitigasi:

- Buat CRUD project dulu.
- Blog dan settings menyusul.

### 26.3 Risiko Desain Terlihat Generic

Mitigasi:

- Gunakan konsep editorial engineering.
- Project harus ditulis sebagai case study.
- Tambahkan visual seperti log, grid, metrics, dan technical badge.

### 26.4 Risiko Deployment Rumit

Mitigasi:

- Mulai dengan local Docker Compose.
- Deploy frontend lebih dulu.
- Deploy backend setelah API stabil.
- Database managed seperti Neon/Supabase agar tidak perlu maintenance server database.

## 27. Keputusan Teknis Final Setelah Riset

Keputusan final yang disarankan:

```txt
Frontend:
Next.js App Router + TypeScript + Tailwind CSS

Backend:
Golang Echo REST API

Database:
PostgreSQL

Query Layer:
SQLC + pgx/v5

Cache:
Redis optional setelah MVP

Storage:
Cloudflare R2

Auth:
HTTP-only secure cookie untuk admin dashboard

Deployment:
Cloudflare Pages atau Vercel untuk frontend
Fly.io, Railway, atau VPS untuk backend
Neon atau Supabase untuk PostgreSQL managed database
```

Prioritas implementasi tetap:

```txt
1. Public frontend
2. Database schema
3. Backend public API
4. Admin auth
5. Admin CRUD project
6. Upload asset
7. SEO production
8. Deployment
```

## 28. Referensi Riset

Referensi yang digunakan untuk memperkaya rancangan:

- Next.js documentation via Context7: App Router, metadata, Open Graph image, sitemap concept.
- Echo documentation via Context7: route grouping, middleware, JWT, request logger, centralized error handling.
- SQLC documentation via Context7: PostgreSQL, pgx/v5, `sqlc.yaml`, generated type-safe query.
- PostgreSQL official documentation: relational database, indexing, JSONB, search capability.
- Cloudflare R2 documentation: S3-compatible object storage.
- Redis documentation: cache and rate limiting use cases.
- OWASP guidance: authentication, session handling, API security principles.


