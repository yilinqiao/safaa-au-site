# SAFAA content update workflow

This site is intentionally static and content-first. Every one to two months, refresh a small set of representative activities rather than rebuilding the site.

1. Add the poster or photo to `public/images/` with a short, lowercase filename.
2. Add or update one record in `src/data/site.ts` with English and Simplified Chinese title, summary, city, date, type and image path.
3. Keep the first three records as the homepage’s featured selection. Prefer three different cities when the source material allows it.
4. Keep the full activity set between 12 and 18 records, removing older or less representative entries when needed.
5. Run `npm run check`, `npm run build`, and `npm run test:e2e -- --project=chromium-mobile`.
6. Open the built preview and check the hero, three cards, activity filters, language switch, and one detail page at desktop and mobile widths.

The public Notion activities page remains the source link for registration and the full archive. Do not publish private attendee details, registration numbers, personal phone numbers or internal notes.
