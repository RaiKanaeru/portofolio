# DESIGN_HANDOFF.md

# Portfolio Design Handoff — Raihan Ariansyah

This handoff translates the Pencil design direction into implementation-ready guidance for a Next.js + Tailwind CSS portfolio.

## 1. Design Direction

Final theme: **Warm Editorial Engineer**.

The portfolio should feel:

- Professional and recruiter-friendly.
- Warm, not cold.
- Editorial, not generic SaaS.
- Technical, but not cyber/hacker.
- Fresh-graduate appropriate while still credible.
- Built around project case studies, not basic project cards.

Avoid:

- Full dark/cyber theme.
- Neon glow.
- Purple AI gradients.
- Generic centered hero templates.
- Floating random tech icons.
- Glassmorphism-heavy cards.

## 2. Visual Tokens

### Colors

```txt
Background / Canvas: #F6F0E6
Paper Surface:       #FFFDF8
Ink Text:            #111315
Muted Text:          #6F6A61
Border Line:         #DED3C1
Mineral Blue:        #2F5F8F
Soft Blue:           #DCE8F2
Clay Accent:         #A86935
Editorial Gold:      #D1A35A
Sage Accent:         #8DAA91
Soft Sage:           #E5ECE3
Charcoal Panel:      #20201D
White:               #FFFFFF
```

### Tailwind Token Names

```txt
bg-canvas     #F6F0E6
bg-paper      #FFFDF8
text-ink      #111315
text-muted    #6F6A61
border-line   #DED3C1
accent-blue   #2F5F8F
accent-clay   #A86935
accent-gold   #D1A35A
accent-sage   #8DAA91
panel-dark    #20201D
```

### Typography

Use these font roles:

```txt
Display / Heading: Fraunces or Newsreader
Body:              Manrope or Plus Jakarta Sans
Metadata:          JetBrains Mono or IBM Plex Mono
```

Recommended implementation:

```txt
Heading font: Fraunces
Body font:    Manrope
Mono font:    JetBrains Mono
```

### Type Scale

Desktop:

```txt
Hero line:        64px - 70px
Section title:    42px - 52px
Card title:       26px - 32px
Body:             17px - 19px
Metadata:         11px - 13px
Nav:              15px
```

Tablet:

```txt
Hero line:        52px - 58px
Section title:    36px - 42px
Body:             16px - 17px
Metadata:         11px - 12px
```

Mobile:

```txt
Hero line:        42px - 48px
Section title:    32px - 36px
Card title:       22px - 26px
Body:             14px - 16px
Metadata:         10px - 12px
```

## 3. Responsive Layout

### Desktop

```txt
Canvas width:       1440px
Content max width:  1296px
Side padding:       72px
Section gap:        88px - 120px
Hero:               2 columns
Capability grid:    3 columns x 2 rows
Featured projects:  2 large cards + supporting project strip
```

### Tablet

```txt
Canvas width:       834px
Side padding:       40px
Hero:               stacked but spacious
Capability grid:    2 columns x 3 rows
Featured projects:  vertical list cards
```

### Mobile

```txt
Canvas width:       390px
Side padding:       20px
Hero:               stacked
Profile card:       below hero
Capability grid:    1 column
Projects:           1 column
Contact:            compact dark panel
```

## 4. Homepage Section Order

```txt
1. Navbar
2. Hero
3. Engineering Profile Card
4. About
5. Technical Matrix
6. Featured Case Studies
7. Supporting Builds
8. Organization Experience
9. Learning Logs / Engineering Notes
10. Contact Panel
```

The current Pencil canvas includes the core responsive layout for:

- Navbar.
- Hero.
- Engineering Profile.
- About.
- Technical Matrix.
- Featured projects.
- Contact panels.

## 5. Component Specs

### Navbar

Content:

```txt
Raihan Ariansyah
About
Projects
Notes
Contact
Download CV
```

Behavior:

- Desktop: wordmark left, links right, CV pill at far right.
- Tablet: wordmark left, compact CV button right.
- Mobile: wordmark left, `Menu` pill right.

### Hero

Desktop content:

```txt
OPEN TO WORK
FULLSTACK DEVELOPER · FRESH GRADUATE RPL
Practical software
systems with a
case-study mindset.

I build web systems, backend services, mobile apps, and IoT-integrated tools
with clean structure, real use cases, and production-ready engineering.

[View Projects] [Contact Me]
```

Implementation note:

- Keep headline split into lines for rhythm.
- Hero should not be centered; use editorial left alignment.
- Use decorative soft blue/sage blocks behind the profile card.

### Engineering Profile Card

Content:

```txt
ENGINEERING PROFILE
Name          Raihan Ariansyah
Status        Fresh Graduate
Major         Software Engineering / RPL
Base          SMK Negeri 13 Bandung
Focus         Fullstack · Backend · Mobile · IoT
Org           MPK - Komisi A
Mode          Learning, Building, Shipping
```

Visual:

- White paper card.
- Rounded corners around 28px.
- Warm border.
- Metadata in mono.

### About

Content:

```txt
Fresh graduate focused on
real-world software systems.

Saya Raihan Ariansyah, fresh graduate RPL dari SMK Negeri 13 Bandung.
Saya terbiasa membangun struktur sistem: autentikasi, CRUD, database,
REST API, dashboard, Firebase, monitoring realtime, mobile app,
dan koneksi perangkat IoT.
```

### Technical Matrix

Cards:

```txt
Fullstack Web      Laravel · Next.js · TypeScript
Backend System     Go · REST API · Auth Flow
Database Design    PostgreSQL · MySQL · Firestore
Mobile App         Flutter · Dart · Firebase
IoT Integration    ESP32 · MQTT · Sensor
API Integration    JSON · External API · Dashboard
```

### Featured Case Studies

Primary featured projects:

```txt
01 ABSENTA13
Category: School Attendance System
Role: System Designer & Developer
Stack: Flutter · Firebase · Firestore · QR Code
Summary: Digital attendance system for SMK Negeri 13 Bandung with structured data and practical school flow.

02 Manajemen Tracking
Category: Realtime Dashboard
Role: Fullstack Developer / Contributor
Stack: React · TypeScript · NestJS · WebSocket
Summary: Tracking dashboard for location data, route history, devices, users, and realtime monitoring.
```

Supporting projects:

```txt
03 Absensi App              Flutter · Firebase
04 IoT Workshop Kit / IWK   ESP32 · MQTT
05 HoyoSense                Smart City Concept
06 Hoyonimeku               API Integration
```

### Contact Panel

Content:

```txt
CONTACT
raihanariansyah160307@gmail.com
```

Visual:

- Charcoal panel.
- Gold label.
- White email text.
- Rounded 20px.

## 6. Next.js Implementation Plan

Recommended frontend structure:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    projects/
      [slug]/
        page.tsx
  components/
    Navbar.tsx
    HeroSection.tsx
    ProfileCard.tsx
    AboutSection.tsx
    TechnicalMatrix.tsx
    FeaturedProjects.tsx
    ContactPanel.tsx
  data/
    portfolio.ts
```

### Data-First Implementation

Start with static TypeScript data. Move to backend/PostgreSQL later.

```txt
profile
skills
projects
organization
contact
```

### SEO

- Homepage metadata from profile.
- Project detail metadata from project data.
- Later: generated OG images using warm editorial style.

## 7. Tailwind Translation

Use CSS variables in `globals.css`:

```css
:root {
  --canvas: #F6F0E6;
  --paper: #FFFDF8;
  --ink: #111315;
  --muted: #6F6A61;
  --line: #DED3C1;
  --blue: #2F5F8F;
  --blue-soft: #DCE8F2;
  --clay: #A86935;
  --gold: #D1A35A;
  --sage: #8DAA91;
  --sage-soft: #E5ECE3;
  --charcoal: #20201D;
}
```

Use utility style patterns:

```txt
max-w-[1296px] mx-auto px-5 md:px-10 xl:px-[72px]
grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
gap-4 md:gap-6
rounded-[20px] border border-[var(--line)] bg-[var(--paper)]
font-serif for headings
font-sans for body
font-mono for metadata
```

## 8. Quality Checklist

Before coding is considered done:

- Desktop, tablet, and mobile layouts match the Pencil direction.
- No dark cyber/neon style appears.
- Hero is editorial and memorable.
- Project cards read as case studies.
- Color palette feels custom, not generic AI gradient.
- Text contrast is readable.
- Cards and sections have consistent spacing.
- Homepage is static-data driven.
- `npm run build` passes.
