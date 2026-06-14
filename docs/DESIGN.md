---
name: Raihan Warm Editorial Engineer Portfolio
description: A professional warm editorial design system for Raihan Ariansyah's fullstack developer portfolio, combining refined light UI, case-study storytelling, and subtle engineering details.
version: 1.1.0
author: Raihan Ariansyah
context: Portfolio website for a Fullstack Developer and Fresh Graduate Software Engineer from SMK Negeri 13 Bandung.
languages:
  primary: en
  secondary: id
devices:
  - web-desktop
  - web-tablet
  - web-mobile
style:
  mode: light
  direction: warm editorial engineer
  mood:
    - professional
    - warm
    - editorial
    - precise
    - credible
    - fresh-graduate-friendly
    - production-ready
  avoid:
    - dark cyber aesthetics
    - neon glow effects
    - hacker dashboard visuals
    - generic purple gradients
    - centered template portfolio layouts
    - excessive glassmorphism
    - overused SaaS landing page aesthetics
    - playful visuals that reduce professional credibility
colors:
  background:
    base: "#F7F3EA"
    surface: "#FFFFFF"
    elevated: "#FDFBF7"
    warmBlock: "#EFE7D8"
    coolBlock: "#EEF4FF"
  border:
    soft: "#DED6C8"
    strong: "#CDBFAE"
    accent: "#D6B26E"
  text:
    primary: "#171717"
    secondary: "#4B443D"
    muted: "#756D63"
    inverse: "#FFFFFF"
  accent:
    blue: "#2563EB"
    navy: "#1E3A8A"
    amber: "#B45309"
    gold: "#D6A84F"
    green: "#15803D"
    red: "#B91C1C"
typography:
  heading:
    family: Fraunces
    fallback: serif
    weight: 700
    tracking: -0.035em
  body:
    family: Manrope
    fallback: sans-serif
    weight: 400
    lineHeight: 1.7
  mono:
    family: JetBrains Mono
    fallback: monospace
    weight: 500
spacing:
  pageMaxWidth: 1180px
  sectionDesktop: 112px
  sectionMobile: 72px
  cardPadding: 24px
  gridGap: 24px
radii:
  small: 10px
  medium: 16px
  large: 24px
  full: 999px
shadows:
  panel: 0 24px 70px rgba(55, 41, 24, 0.10)
  editorial: 0 18px 50px rgba(180, 83, 9, 0.10)
  soft: 0 10px 30px rgba(23, 23, 23, 0.06)
motion:
  durationFast: 160ms
  durationBase: 240ms
  durationSlow: 560ms
  easing: cubic-bezier(0.22, 1, 0.36, 1)
accessibility:
  contrast: high
  minBodySize: 16px
  focusRing: "2px solid #2563EB"
---

# Raihan Warm Editorial Engineer Portfolio Design System

## Purpose

This file defines the final visual direction for Raihan Ariansyah's portfolio. Use it as the selected Stitch system design whenever possible.

The portfolio should look professional, warm, polished, and recruiter-friendly. It should not look like a hacker dashboard or dark cyber template. The design should make Raihan's fresh graduate profile feel credible by presenting projects as structured engineering case studies.

## Core Concept

The chosen theme is **Warm Editorial Engineer**.

It combines:

1. **Warm Editorial Portfolio** â€” ivory background, refined typography, strong spacing, numbered project case studies, and long-form storytelling.
2. **Engineer Case Study Archive** â€” project metadata, role, stack, status, problem, solution, and result structure.
3. **Professional Fresh Graduate Identity** â€” clean, approachable, confident, and suitable for recruiter/client viewing.

## Brand Identity

### Profile

- **Name:** Raihan Ariansyah
- **Role:** Fullstack Developer & Fresh Graduate Software Engineer
- **Status:** Fresh Graduate RPL
- **School:** SMK Negeri 13 Bandung
- **Location:** Bandung, Indonesia
- **Focus:** Fullstack Development, Backend System, Web App, Mobile App, IoT, Database Design, API Integration
- **Organization:** MPK SMK Negeri 13 Bandung â€” Anggota Komisi A
- **Email:** raihanariansyah160307@gmail.com

### Hero Copy

Use this English copy for the main hero:

> I build practical web systems, backend services, mobile apps, and IoT-integrated solutions with a focus on clean structure, real-world use cases, and production-ready engineering.

Use this Indonesian copy if a local-language version is needed:

> Saya adalah fresh graduate Rekayasa Perangkat Lunak dari SMK Negeri 13 Bandung yang fokus membangun aplikasi web, backend service, mobile app, dan sistem IoT dengan struktur rapi, kebutuhan nyata, serta pendekatan engineering yang siap dikembangkan.

## Visual Direction

### Overall Style

Use a light, warm, editorial layout.

The interface should feel like a premium digital case-study archive rather than a dark developer console. Use warm paper-like backgrounds, charcoal text, subtle dividers, elegant project numbers, soft cards, and controlled blue/amber accents.

### Do

- Use an ivory or warm off-white page background.
- Use clean white cards with soft warm borders.
- Use editorial serif headings and readable sans-serif body text.
- Use project numbers such as `01`, `02`, `03`.
- Present projects as case studies, not generic cards.
- Use monospace only for metadata labels, not the main visual identity.
- Use generous whitespace and strong reading hierarchy.
- Keep technical details subtle and professional.
- Make mobile layouts simple and clean.

### Do Not

- Do not use full dark mode.
- Do not use cyber, hacker, neon, or terminal-heavy visuals.
- Do not use purple AI gradients.
- Do not overuse glassmorphism.
- Do not use floating random tech icons.
- Do not make the site look like a generic template.

## Color System

### Backgrounds

- `#F7F3EA` â€” primary warm ivory page background.
- `#FFFFFF` â€” main surface and content cards.
- `#FDFBF7` â€” elevated editorial surface.
- `#EFE7D8` â€” warm highlight block.
- `#EEF4FF` â€” cool blue-tinted block.

### Borders

- `#DED6C8` â€” soft card border.
- `#CDBFAE` â€” stronger section divider.
- `#D6B26E` â€” warm accent border.

### Text

- `#171717` â€” primary text.
- `#4B443D` â€” secondary text.
- `#756D63` â€” muted metadata.
- `#FFFFFF` â€” inverse text for filled buttons.

### Accents

- `#2563EB` â€” primary professional blue.
- `#1E3A8A` â€” deep navy for strong actions or headings.
- `#B45309` â€” warm amber for editorial highlights.
- `#D6A84F` â€” soft gold detail accent.
- `#15803D` â€” success/available status.
- `#B91C1C` â€” danger/error state.

## Typography

### Recommended Pairing

- **Headings:** Fraunces, Newsreader, Literata, or Source Serif 4.
- **Body:** Manrope, Geist, Source Sans 3, or Plus Jakarta Sans.
- **Mono:** JetBrains Mono, IBM Plex Mono, or Google Sans Code.

### Hierarchy

- Hero headline should feel editorial, confident, and premium.
- Section titles should be large but not loud.
- Project titles should pair with clear numbers.
- Metadata labels may use monospace for technical credibility.
- Body content must be comfortable for long-form case studies.

### Suggested Sizes

- Hero headline desktop: 64pxâ€“84px.
- Hero headline mobile: 40pxâ€“48px.
- Section heading desktop: 36pxâ€“52px.
- Body text: 16pxâ€“18px.
- Metadata and badges: 12pxâ€“14px.

## Layout System

### Page Container

- Max width: `1180px`.
- Desktop section spacing: `112px`.
- Mobile section spacing: `72px`.
- Use generous whitespace and readable columns.

### Homepage Layout

- Hero should use a refined editorial two-column layout on desktop.
- Left side: name, role, hero copy, CTA buttons.
- Right side: editorial engineering profile card.
- Below hero: about, technical matrix, featured projects, organization experience, learning logs, contact panel.

### Project Layout

- Project listing should look like a numbered case-study archive.
- Detail pages should read like long-form engineering articles.
- Use sticky metadata sidebar on desktop.
- Use single-column stacked content on mobile.

### Background Treatment

Use subtle atmosphere only:

- Paper texture or soft noise.
- Thin section dividers.
- Warm editorial highlight blocks.
- Optional blueprint/fine-grid detail as a small technical accent.

Avoid dramatic glow, cyber grids, or dark dashboard backgrounds.

## Components

### Navbar

Minimal, editorial, and professional.

Include:

- Raihan wordmark.
- Links: About, Projects, Notes, Contact.
- CTA: Download CV or Contact.
- Optional status chip: `Open to Work`.

### Hero Section

Required content:

- `Raihan Ariansyah`.
- `Fullstack Developer & Fresh Graduate Software Engineer`.
- Hero positioning statement.
- CTA buttons: `View Projects`, `Download CV`, `Contact Me`.
- Editorial engineering profile card.

### Editorial Engineering Profile Card

Use this content:

```txt
ENGINEERING PROFILE

Name          Raihan Ariansyah
Status        Fresh Graduate
Major         Software Engineering / RPL
Base          SMK Negeri 13 Bandung
Focus         Fullstack, Backend, Mobile, IoT
Organization  MPK - Komisi A
Mode          Building practical production-ready systems
```

Style it as a clean profile card with warm borders, soft paper surface, clear metadata rows, and subtle technical labels.

### About Me Section

Use a readable editorial layout with a maximum line length. Split long copy into short paragraphs.

Content summary:

Raihan is a fresh graduate from Software Engineering / RPL at SMK Negeri 13 Bandung with interest in fullstack development, backend systems, database design, mobile apps, and IoT integration. He builds projects beyond UI, including authentication, CRUD, databases, REST APIs, dashboards, Firebase, realtime monitoring, and IoT connections. His MPK Komisi A experience adds coordination, monitoring, communication, and problem-solving credibility.

### Technical Matrix

Show focus areas as a clean capability grid:

- Fullstack Web Development.
- Backend System.
- Database Design.
- Mobile App Development.
- IoT Integration.
- API Integration.

Main stack:

- Laravel.
- Flutter.
- Firebase.
- MySQL.
- PostgreSQL.
- JavaScript.
- TypeScript.
- Python.
- Go.
- ESP32.

### Featured Project Card

Each project card must include:

- Project number.
- Project title.
- Category.
- Role.
- Status.
- Stack badges.
- Problem/result-oriented summary.
- CTA: `View Case Study`.

Project cards should feel editorial and content-first, not flashy.

### Organization Experience

Create a credibility section for:

```txt
MPK SMK Negeri 13 Bandung
Anggota Komisi A

Membantu koordinasi, pengawasan kegiatan, komunikasi organisasi, dan penyelesaian masalah dalam lingkungan sekolah.
```

Style it like a formal timeline or credential card.

### Engineering Notes / Learning Logs

Use a clean archive style. This can be a placeholder-ready section for future writing.

Labels may include:

- `Learning Log`.
- `Build Journal`.
- `Engineering Notes`.
- `Debug Notes`.

### Contact Panel

Use a polished professional contact card.

Include:

- Email.
- Contact CTA.
- Download CV.
- GitHub placeholder.
- LinkedIn placeholder.
- Optional WhatsApp placeholder.

## Project Content

### 01 â€” ABSENTA13

- **Category:** School Attendance System.
- **Role:** System Designer & Developer.
- **Status:** In Development / Case Study.
- **Stack:** Flutter, Firebase, Firestore, Firebase Authentication, QR Code.
- **Summary:** A digital attendance system designed for SMK Negeri 13 Bandung to modernize attendance flow with structured data, authentication, QR-based interaction, and practical school use cases.

Case-study structure:

- **Problem:** Sistem absensi sekolah membutuhkan solusi yang lebih fleksibel, mudah digunakan, dan sesuai dengan kebutuhan internal sekolah.
- **Challenge:** Membuat alur absensi yang praktis, aman, dan mudah digunakan oleh siswa maupun admin sekolah.
- **Solution:** Membangun sistem absensi digital dengan autentikasi, database realtime, QR code, dan struktur data modular.
- **Result:** Sistem absensi digital yang lebih modern, rapi, dan siap dikembangkan untuk kebutuhan sekolah.

### 02 â€” Absensi App

- **Category:** Mobile App / School System.
- **Role:** Mobile Developer.
- **Status:** In Development.
- **Stack:** Flutter, Dart, Firebase, Firestore.
- **Summary:** A mobile attendance application using Firebase services, authentication, realtime database structure, and QR-based attendance flow.

### 03 â€” Hoyonimeku

- **Category:** Anime Streaming App.
- **Role:** App Developer.
- **Status:** Prototype.
- **Stack:** API Integration, JSON, Mobile UI.
- **Summary:** A simple anime streaming app that fetches anime data, episodes, images, and details from an external API.

### 04 â€” HoyoSense

- **Category:** Smart City Concept.
- **Role:** Web Designer & Concept Developer.
- **Status:** Concept.
- **Stack:** HTML, CSS, JavaScript, IoT Concept.
- **Summary:** A smart and sustainable city concept website explaining smart transportation, environmental monitoring, and energy efficiency.

### 05 â€” IoT Workshop Kit / IWK

- **Category:** IoT Monitoring System.
- **Role:** IoT System Developer.
- **Status:** Experiment.
- **Stack:** ESP32, MQTT, Sensor, Flutter.
- **Summary:** An IoT monitoring and control system for reading sensor data and controlling devices in realtime.

### 06 â€” Manajemen Tracking System

- **Category:** Tracking Dashboard.
- **Role:** Fullstack Developer / Contributor.
- **Status:** Case Study.
- **Stack:** React, TypeScript, NestJS, MongoDB, WebSocket, Leaflet.
- **Summary:** A web-based tracking management system for monitoring location data, route history, devices, users, and realtime dashboard information.

## Page Requirements

### Homepage

Required sections in order:

1. Hero + Editorial Engineering Profile Card.
2. About Me.
3. Technical Matrix.
4. Featured Projects.
5. Organization Experience.
6. Engineering Notes / Learning Logs.
7. Contact Panel.

### Project Listing Page

Show projects as numbered case-study cards with filters by category, technology, and status.

### Project Detail Page

Use the case-study structure with a sticky metadata sidebar on desktop.

### Contact Page

Use a contact form plus professional contact panel layout.

### Admin Dashboard

Admin dashboard should use the same warm editorial system, but with functional product-dashboard structure.

Include:

- Sidebar navigation.
- Metric cards.
- Project table.
- Status badges.
- Recent contact messages.
- Quick actions.
- Project editor entry point.

## Stitch Prompting Guidance

When using Stitch, this design system should be selected if available. If Stitch automatically chooses based on the prompt, mention this file explicitly:

```txt
Use this uploaded DESIGN.md as the main design system for Raihan Ariansyah's Warm Editorial Engineer portfolio. Follow the light warm editorial theme, color system, typography, component rules, project content, and page requirements exactly. Do not use the previous dark cyber direction.
```

For first exploration, generate three homepage variants within this final direction:

1. Warm Editorial Case Study.
2. Minimal Product Engineer.
3. Soft Tech Bento Editorial.

Prefer **Warm Editorial Case Study** unless another generated variant is clearly stronger.


## Pencil-Specific Layout Rules

When creating this design in Pencil:

- Prefer explicit colors instead of variable references for final visual nodes.
- Split long headlines and body copy into multiple text nodes to avoid overflow.
- Use root-level composition or simple flex-safe sections for large page mockups.
- Avoid complex nested absolute-positioned children inside clipped frames until the layout is stable.
- Create a separate exportable frame only after the visible canvas composition is approved.

## Featured Project Priority

For homepage presentation, use this priority:

1. **ABSENTA13** — primary featured case study.
2. **Manajemen Tracking System** — secondary featured case study for dashboard/realtime/fullstack proof.
3. **Absensi App** — mobile/Firebase proof.
4. **IoT Workshop Kit / IWK** — IoT/realtime monitoring proof.
5. **HoyoSense** — smart city/web concept proof.
6. **Hoyonimeku** — API integration/mobile UI prototype.

Design implication:

- ABSENTA13 and Manajemen Tracking System should have stronger visual treatment.
- Other projects can appear as smaller supporting cards.
- Project cards must remain editorial case-study entries, not generic cards.
## Quality Bar

The design is accepted only if:

- It does not look like a generic portfolio template.
- It avoids dark cyber, neon, and hacker dashboard visuals.
- The hero immediately communicates Raihan's identity and technical focus.
- The profile card feels intentional and useful.
- Project cards look like editorial case-study entries.
- Light theme contrast is readable.
- Mobile layout is clean.
- The design can be implemented with Next.js and Tailwind CSS.
- The admin dashboard feels consistent with the public portfolio.
- The result feels professional enough for recruiter/client viewing while still honest to a fresh graduate profile.

