# SAFAA content update workflow

This site is intentionally static and content-first. Every one to two months, refresh a small set of representative activities rather than rebuilding the site.

1. Check the original SAFAA public activity board. Record the exact date, city and original title; do not infer details from a similar event.
2. Add one exact-event image to `public/images/` with a short, lowercase filename. Prefer a real activity photo; use the matching event poster only when no suitable live photo is available. Every published activity must have its own local image—never leave it blank, use a city cover, or reuse another event's photo.
3. Add or update one record in `src/data/site.ts` with an ISO date, English and Simplified Chinese title, summary and detail, city, type, source URL and bilingual image alt text. Keep the array sorted newest first.
4. Keep exactly three records marked `featured: true`; they should cover three different cities. The full collection should contain 12–18 events and represent different types and years.
5. Run `npm run check`, `npm test`, `npm run build`, and `npm run test:e2e`.
6. Preview the hero, three featured cards, city filters, language switch and one detail page at desktop and mobile widths before pushing to `main`.

The public Notion activities page remains the complete archive. Do not publish private attendee details, registration numbers, personal phone numbers or internal notes. The images in `public/images/` are publicly deployable files, so do not put confidential material there. Keep the curated set between 12 and 18 activities, with a visible mix of cities and a strong representation of workplace, AI and practical-skills programming.
