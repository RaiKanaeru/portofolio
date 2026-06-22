# Current Design Handoff

Status: current source handoff for implementation.
Reference: https://portofolio-xyrionex.vercel.app/
Last updated: 2026-06-19

## One-Line Direction

Build Raihan's portfolio as a **Dark Xyrionex-inspired technical editorial portfolio**: black/navy canvas, translucent dark rounded cards, huge monospace engineering headline, restrained blue accent, soft 3D RA object, and case-study-first content.

## What Changed

The user clarified that the site should not stay bright/cream. The active direction is now:

```txt
Dark technical editorial + soft 3D + case-study archive
```

Not active:

```txt
Light cream editorial as the dominant theme
```

## Implementation Rules

### Keep

- `RA_` brand in navbar.
- Bracket navigation labels.
- Huge uppercase monospace hero headline.
- Blue primary CTA.
- Small metadata labels.
- Stats strip below hero.
- Tech marquee.
- Soft 3D RA scene on desktop.
- Mobile fallback that hides heavy 3D.

### Change / Avoid

- Avoid bright cream/white dominant screens.
- Avoid white project cards as primary card style.
- Avoid low-contrast gray text on dark background.
- Avoid chaotic neon glow; dark does not mean overdone cyber.
- Avoid pink/red arcade colors as main UI.

## Target Homepage Feel

- Dark technical canvas.
- Hero panel is deep navy/black with soft blue/amber light.
- Headline is bright and highly readable.
- 3D sits on the right as premium accent.
- Metadata card supports credibility.
- Lower cards are dark, rounded, and calm.

## File Responsibilities

- `src/app/globals.css`
  - owns color variables, hero panel, dark card system, 3D CSS, accessibility modes.
- `src/app/page.tsx`
  - owns homepage content composition and hero layout.
- `src/components/Hero3DScene.tsx`
  - owns lightweight CSS/React 3D scene.
- `src/components/LoadingScreen.tsx`
  - intro only; must never block content after timeout.
- `src/data/portfolio.ts`
  - content source for profile/project copy.

## Acceptance Criteria

A change is aligned if:

- The page feels dark, premium, and technical.
- Text contrast stays readable.
- Blue is the main accent and amber is secondary.
- Cards are dark/rounded with subtle depth.
- 3D does not create horizontal overflow.
- Mobile does not show heavy 3D.
- The design is structured like a professional portfolio, not a cluttered hacker dashboard.
