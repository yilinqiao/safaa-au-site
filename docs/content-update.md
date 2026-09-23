# SAFAA content update workflow

This site is intentionally static and content-first. Every one to two months, refresh a small set of representative activities rather than rebuilding the site.

1. Check the original SAFAA public activity board. Record the exact date, city and original title; do not infer details from a similar event.
2. If you have a poster or photo from that exact activity, add it to `public/images/` with a short, lowercase filename. If you do not, leave `image` blank; the site will show a branded city cover. Never reuse another event's photo.
3. Add or update one record in `src/data/site.ts` with an ISO date, English and Simplified Chinese title and summary, city, type, source URL and optional image/alt text. Keep the array sorted newest first.
4. Keep exactly three records marked `featured: true`; they should cover three different cities. The full collection should contain 12–18 events and represent different types and years.
5. Run `npm run check`, `npm test`, `npm run build`, and `npm run test:e2e`.
6. Preview the hero, three featured cards, city filters, language switch and one detail page at desktop and mobile widths before pushing to `main`.

The public Notion activities page remains the complete archive. Do not publish private attendee details, registration numbers, personal phone numbers or internal notes. The images in `public/images/` are publicly deployable files, so do not put confidential material there.
