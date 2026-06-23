# Final Portfolio Audit Design

## Goal

Run a focused final audit after the Monochrome Cosmic Hacker redesign to find and fix only real, low-risk issues before more feature work.

## Scope

- Review current Next.js/React portfolio code after commit `b78dece`.
- Check accessibility basics: labels, landmarks, focus visibility, reduced motion, and decorative `aria-hidden` usage.
- Check performance basics: avoid unnecessary client work, obvious animation/canvas overhead, and excessive CSS duplication.
- Check SEO/metadata basics: route metadata, sitemap/robots sanity, social image behavior, and crawl-friendly structure.
- Check code quality cleanup: dead code, duplicate selectors, token drift, and simple reuse opportunities.
- Apply only small fixes that preserve the current visual direction and behavior.

## Non-goals

- No redesign, theme pivot, or new visual language.
- No new dependencies.
- No file deletion unless the file is proven generated, unused, and safe to remove.
- No large refactor of card systems or animation architecture.
- No speculative features.

## Quality Gates

- `npx eslint src` passes.
- `npm run build` passes.
- Browser preview verifies `/`, `/projects`, at least one project detail page, and `/contact` at mobile width with no horizontal overflow.
- Preview console/server/network logs show no new errors.
- Any skipped finding is listed with the reason.

## Risks

- CSS is large and visual regressions are easy; prefer token or selector-level changes only.
- Some previous reviewer/model routes failed; use direct verification if agents fail again.
- Full `npm run lint` may still hit unrelated `.stitch-docs-assets`; prefer `npx eslint src` unless the generated-assets issue is explicitly in scope.

## Next Step

Create an implementation plan for the final audit, then execute findings in the smallest safe batches.
