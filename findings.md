# Findings - Upgrade RPD Portfolio

## Current Repo
- Next.js 16 + React 19 + Tailwind 4 style via `src/app/globals.css`.
- Homepage is in `src/app/page.tsx` and already has cyber components: DigitalRain, OrbitingIcons, TerminalProfileCard, stats, tech marquee, quick links.
- Current state notes previous robot/loading flow is done and build previously passed.

## Design Risks
- Banyak efek visual dapat terasa ramai jika semua bersaing di hero.
- Perlu anchor visual yang jelas: role, value proposition, CTA, proof stats.
- 3D should enhance depth with lightweight CSS/scene layering rather than adding heavy dependencies.

## 3D Implementation Choice
- Used CSS 3D instead of WebGL because the project has no 3D dependencies and the current goal is visual depth, not heavy model rendering.
- Hero right side is the best 3D placement because it adds impact above the fold without disrupting reading flow.
- Scene is hidden under desktop breakpoint to avoid mobile performance and layout risk.

## Current Visual Direction Correction - 2026-06-20
- User clarified the intended concept should be close to `https://portofolio-xyrionex.vercel.app/` with a different Raihan-specific mix.
- Active direction is now Dark Xyrionex-inspired technical editorial: black/navy canvas, bright monospace hero, soft 3D, dark rounded cards, case-study focus.
- Bright cream/light-card dominance is deprecated; dark technical editorial is active.



## Dark Theme Correction - 2026-06-19
- User clarified the desired theme is dark, not bright/light cream.
- Active direction is Dark Xyrionex-inspired Technical Editorial: black/navy canvas, dark translucent cards, bright text, blue accent, amber secondary accent, soft 3D.

[2026-06-19 19:18:01 +07:00] Browser evidence: desktop 1280x720 body rgb(6,9,20), overlay false, scrollW=1280; mobile 390x844 scrollW=390, 3D hidden, title rgb(232,238,248). Build: npm run build passed.

[2026-06-19 19:24:45 +07:00] Vision/browser evidence: /projects active nav rgb(96,165,250), lang/filter active rgba(96,165,250,0.14), project accents cycle blue/amber/green; /contact panels dark; mobile home 390px scrollW=390, overlay false, 3D hidden.

[2026-06-19 19:25:46 +07:00] Completion audit routes: /notes, /arcade, /projects/absenta13 all body rgb(6,9,20), active nav rgb(96,165,250), no horizontal overflow at 1440px; panels stay dark card/surface.
