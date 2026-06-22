---
name: Raihan Portfolio Design Direction
version: 3.0.0
status: current-source-of-truth
reference: https://portofolio-xyrionex.vercel.app/
updated: 2026-06-19
---

# Raihan Portfolio Design Direction

## Ringkasan Konsep

Arah final sekarang adalah **Dark Xyrionex-inspired Technical Editorial**.

Website tetap mengambil pola visual dari referensi Xyrionex: navbar bracket, hero besar, monospace technical, 3D soft object, metadata engineering, case-study route, dan layout portfolio modern. Namun warna utama tidak lagi light cream. User menginginkan tema **gelap**: black/navy canvas, dark rounded cards, bright text, restrained blue accent, dan visual 3D yang terasa premium.

## Formula Visual

```txt
Dark navy canvas + translucent dark cards + bright technical typography + blue accent + soft RA 3D object + case-study metadata
```

## Moodboard Verbal

- Dark technical portfolio.
- Premium engineering archive.
- Soft futuristic, not neon-chaotic.
- Monospace, structured, precise.
- Strong contrast and readable.
- 3D accent as identity, not decoration overload.

## Yang Diikuti Dari Referensi

- Navbar tipis dengan bracket links `[HOME]`.
- Hero sebagai anchor visual besar.
- Headline uppercase monospace yang dominan.
- Availability pill + small status dot.
- CTA utama biru.
- Proof cards kecil di hero.
- Soft 3D object di sisi kanan.
- Metadata card sebagai credibility panel.
- Stats strip dan tech marquee.
- Clean footer.

## Racikan Raihan

- Dark mode menjadi default, bukan light mode.
- Identitas 3D memakai `RA / PORTO_OS`.
- Copywriting tetap `practical software systems` dan `case-study mindset`.
- Project cards harus terasa seperti technical case files.
- Arcade/robot boleh ada, tapi jangan mengubah keseluruhan website menjadi game UI.

## Palette Final

```txt
Canvas:        #060914
Surface:       #0D1322
Card:          #111827
Text primary:  #E8EEF8
Text muted:    #AEB9CC
Text soft:     #8390A6
Line:          #263449
Line subtle:   #1A2435
Primary blue:  #60A5FA
Blue glow:     rgba(96,165,250,0.16-0.42)
Amber accent:  #F59E0B
Amber soft:    rgba(245,158,11,0.10-0.18)
```

## Accessibility Rules

- Body and small metadata must meet WCAG AA.
- Do not use low-contrast gray on dark backgrounds.
- Blue and amber can be accents, but text must stay readable.
- `prefers-contrast: more` and `forced-colors` must remain supported.

## Implementation Priority

1. Keep dark token system in `src/app/globals.css`.
2. Refine hero panel so it feels premium dark, not washed-out gray.
3. Keep 3D soft and readable on dark background.
4. Bring projects/about/contact pages into the same dark card system.
5. Remove old light-cream language from future planning.

## Anti-Patterns

Avoid:

- Light cream dominant pages.
- White cards as the primary surface.
- Low-contrast gray labels.
- Neon chaos or excessive glow.
- Purple/pink generic gradients.
- Cyber hacker dashboard clutter.
