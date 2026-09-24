# SAFAA Community Profile Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish an English-first, bilingual SAFAA community profile website with real multi-city activity evidence, simple repository-based maintenance and automatic GitHub Pages deployment at `safaa-au.site`.

**Architecture:** Astro generates all English and Chinese routes as static HTML while reproducing the approved local `gemini-safaa-website` Trust composition. Organisation copy lives in typed locale files, each activity lives in a validated JSON content entry beside its local images, and only the menu, language preference and city filter use client JavaScript. GitHub Actions builds and deploys the repository to GitHub Pages; Hostinger remains the domain registrar and DNS manager only.

**Tech Stack:** Astro, TypeScript strict mode, Astro content collections, scoped CSS, locally bundled Poppins and Inter fonts, Vitest, Playwright, `@axe-core/playwright`, GitHub Actions and GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-21-safaa-community-profile-website-design.md`

## Global Constraints

- Create a new repository rooted at `safaa-au-site/`; do not overwrite `SAFAA_Gemini`, `SAFAA_Web_Gemini`, `Website/` or `sydney-chinese-women's-community/`.
- Default routes are English; Chinese routes use the `/zh/` prefix and contain equivalent content.
- Publish 12–18 verified activities and represent Sydney, Melbourne, Adelaide, Perth and Brisbane wherever suitable source material exists.
- Exactly three activities are featured on the home page. They should cover three cities when verified material permits and must cover at least two cities.
- Match `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\gemini-safaa-website\` and the approved `safaa-gemini-style-poc.html` composition; do not substitute an editorial redesign.
- Use only real SAFAA photographs and approved logo assets; do not generate or substitute community imagery.
- Store production images in the repository; do not render expiring Notion image URLs.
- Show 2,300+ community members, 100+ volunteers and five Australian cities.
- Do not publish a registration number, founder profiles, committee profiles, donation request, sponsorship solicitation or unsupported impact claim.
- Do not add a live Notion API, n8n workflow, CMS, analytics, tracking pixel, contact form, account system or payment flow.
- Use `info@safaa-nonprofit.org`, the public Notion activity archive and the supplied Xiaohongshu link.
- Meet WCAG 2.2 AA contrast, preserve keyboard access and honour `prefers-reduced-motion`.
- Support current Chrome, Edge, Safari and Firefox plus responsive widths down to 320px.
- Use Node.js 24 and commit the generated `package-lock.json`.
- No release is complete until `npm run check`, `npm test`, `npm run build` and `npm run test:e2e` pass.

## Review Focus

1. **Incomplete translations:** every English route and activity field must have a Chinese equivalent; content validation must fail on empty localised text.
2. **Unbalanced activity selection:** validation must reject fewer than 12 or more than 18 activities, report missing cities and reject a three-card home row drawn from only one city.
3. **Missing or unsafe media:** validation must fail for missing local files or empty alt text and the content audit must exclude QR codes, private details and unapproved participant information.
4. **Broken equivalent-language routes:** the language switch must preserve the current page and activity slug and must fall back to the locale home only for an invalid route.
5. **DNS and canonical drift:** the public release must verify apex and `www`, enforce HTTPS, use a single canonical domain and remove the obsolete Hostinger A record only after the GitHub Pages URL passes checks.

---

## File Structure

```text
safaa-au-site/
├── .github/workflows/deploy.yml       # Build and GitHub Pages deployment
├── docs/
│   ├── content/activity-source-audit.csv
│   ├── maintenance.md
│   └── superpowers/
│       ├── plans/2026-09-21-safaa-community-profile-website.md
│       └── specs/2026-09-21-safaa-community-profile-website-design.md
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   ├── robots.txt
│   └── social/og-default.jpg
├── scripts/
│   └── validate-content.mjs
├── src/
│   ├── assets/brand/                  # Selected original logo exports
│   ├── components/
│   │   ├── activities/ActivityCard.astro
│   │   ├── activities/ActivityFilter.astro
│   │   ├── home/Hero.astro
│   │   ├── home/ImpactStrip.astro
│   │   ├── home/MissionBlock.astro
│   │   ├── layout/SiteFooter.astro
│   │   ├── layout/SiteHeader.astro
│   │   └── ui/SectionHeading.astro
│   ├── content/activities/<slug>/     # index.json and local event images
│   ├── content.config.ts
│   ├── data/site.ts
│   ├── i18n/en.ts
│   ├── i18n/types.ts
│   ├── i18n/zh.ts
│   ├── layouts/BaseLayout.astro
│   ├── lib/activities.ts
│   ├── lib/i18n.ts
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── activities/[slug].astro
│   │   ├── activities/index.astro
│   │   ├── index.astro
│   │   └── zh/                        # Equivalent Chinese routes
│   ├── scripts/activity-filter.ts
│   └── styles/
│       ├── global.css
│       └── tokens.css
├── tests/
│   ├── e2e/site.spec.ts
│   ├── unit/activities.test.ts
│   └── unit/i18n.test.ts
├── astro.config.mjs
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── vitest.config.ts
```

## Task 1: Establish the static Astro project and quality gates

**Files:**
- Create: `package.json`
- Create: `package-lock.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `playwright.config.ts`
- Create: `.gitignore`
- Create: `src/pages/index.astro`
- Create: `tests/e2e/site.spec.ts`

**Interfaces:**
- Consumes: the global Node.js and npm installation
- Produces: `npm run dev`, `npm run check`, `npm test`, `npm run build`, `npm run preview` and `npm run test:e2e`

- [ ] **Step 1: Repair and verify the local Node/npm toolchain**

The 21 September 2026 preflight found Node `v24.13.0`, but `npm --version` failed because the launcher resolved a missing `%APPDATA%\npm\node_modules\npm\bin\npm-cli.js`. Repair the installed Node.js 24 package from Windows Installed Apps or reinstall the current Node.js 24 LTS build from the official installer, then open a fresh terminal.

```powershell
node --version
npm --version
npx --version
```

Expected: all three commands print versions and no module-resolution error. Do not initialise or install the project until this passes.

- [ ] **Step 2: Initialise Git without importing unrelated parent-folder history**

Run from `safaa-au-site/`:

```powershell
git init -b main
git status --short --branch
```

Expected: an empty repository on `main`; only the two design documents are untracked.

- [ ] **Step 3: Install the project and test dependencies**

```powershell
npm init -y
npm install astro @astrojs/sitemap @fontsource-variable/inter @fontsource/poppins
npm install --save-dev typescript @astrojs/check vitest @playwright/test @axe-core/playwright
npx playwright install chromium
```

Expected: `package-lock.json` is created and no install command reports a dependency error.

- [ ] **Step 4: Define the scripts and static-site metadata**

Set these package scripts exactly:

```json
{
  "scripts": {
    "dev": "astro dev",
    "check": "astro check",
    "test": "vitest run",
    "build": "astro build",
    "preview": "astro preview",
    "test:e2e": "playwright test"
  }
}
```

Configure `astro.config.mjs` with `site: 'https://safaa-au.site'`, static output, trailing slashes set to `always`, and the sitemap integration. Do not set a repository `base` because the production site uses the apex custom domain.

- [ ] **Step 5: Add the first smoke test before the final home page exists**

Create `tests/e2e/site.spec.ts`:

```ts
import { expect, test } from '@playwright/test';

test('English home is the default route', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Driven');
});
```

Configure Playwright to run `npm run dev -- --host 127.0.0.1` on port `4321`, reuse the server locally and test Chromium at desktop and a 390×844 mobile viewport.

- [ ] **Step 6: Prove the smoke test fails for the intended reason**

```powershell
npm run test:e2e -- --project=chromium-desktop
```

Expected: FAIL because the initial page does not yet contain the final English heading.

- [ ] **Step 7: Add a minimal semantic home shell**

Create `src/pages/index.astro` with `lang="en"`, a `main` landmark and the `Driven. Open-minded. Independent.` `h1`. This is temporary structure that later tasks expand, not a separate visual design.

- [ ] **Step 8: Run the baseline checks**

```powershell
npm run check
npm test
npm run build
npm run test:e2e -- --project=chromium-desktop
```

Expected: all four commands pass; Vitest may report no unit files only if configured with `passWithNoTests: true` for this first task.

- [ ] **Step 9: Commit the foundation**

```powershell
git add .gitignore package.json package-lock.json astro.config.mjs tsconfig.json vitest.config.ts playwright.config.ts src/pages/index.astro tests/e2e/site.spec.ts docs/superpowers
git commit -m "chore: establish SAFAA static site foundation"
```

## Task 2: Define the bilingual activity model and validation

**Files:**
- Create: `src/content.config.ts`
- Create: `src/lib/activities.ts`
- Create: `scripts/validate-content.mjs`
- Create: `tests/unit/activities.test.ts`
- Create: `tests/fixtures/activities/valid.json`
- Create: `tests/fixtures/activities/missing-translation.json`

**Interfaces:**
- Produces: `Activity`, `City`, `Category`, `getActivities()`, `getFeaturedActivities(limit)` and content validation used by every page
- Produces: a command that exits non-zero for invalid count, empty translation, missing image, invalid URL or missing city coverage

- [ ] **Step 1: Write unit tests for sorting, featured selection and translation completeness**

Create tests that assert:

```ts
expect(sortActivitiesByDate(items).map((item) => item.slug)).toEqual(['newer', 'older']);
expect(selectFeaturedActivities(items, 3)).toHaveLength(3);
expect(new Set(selectFeaturedActivities(items, 3).map((item) => item.city)).size).toBeGreaterThanOrEqual(2);
expect(hasCompleteTranslations(incomplete)).toBe(false);
```

Include a case where three featured records are all Sydney entries and assert that selection promotes eligible records from other cities. When three verified cities are available, assert one home feature is selected from each.

- [ ] **Step 2: Run the tests and confirm missing exports fail**

```powershell
npm test -- tests/unit/activities.test.ts
```

Expected: FAIL because the activity helpers do not exist.

- [ ] **Step 3: Implement the Astro content schema**

Use `glob({ pattern: '**/index.json', base: './src/content/activities' })` and define the collection schema as `schema: ({ image }) => z.object(...)` so local image paths are validated by Astro. Validate these exact properties:

```ts
const localisedText = z.object({ en: z.string().min(1), zh: z.string().min(1) });

const activities = defineCollection({
  loader: glob({ pattern: '**/index.json', base: './src/content/activities' }),
  schema: ({ image }) => z.object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    city: z.enum(['sydney', 'melbourne', 'adelaide', 'perth', 'brisbane']),
    category: z.enum(['professional', 'technology', 'networking', 'wellbeing', 'culture', 'social']),
    featured: z.boolean(),
    title: localisedText,
    summary: localisedText,
    highlights: z.object({ en: z.array(z.string()), zh: z.array(z.string()) }),
    cover: image(),
    coverAlt: localisedText,
    gallery: z.array(z.object({ src: image(), alt: localisedText })).max(6),
    sourceUrl: z.string().url()
  })
});

export const collections = { activities };
```

- [ ] **Step 4: Implement pure activity helpers**

`src/lib/activities.ts` must export pure functions for date sorting, translation checks and featured selection plus async wrappers around Astro `getCollection()`. Featured selection first respects `featured: true`, then chooses newest entries while maintaining at least three unique cities when the source collection permits it.

- [ ] **Step 5: Implement release validation**

`scripts/validate-content.mjs` must:

- require 12–18 production entries;
- verify every `title`, `summary`, `coverAlt` and gallery alt has non-empty `en` and `zh` values;
- check that every referenced image exists below the activity entry directory;
- reject non-HTTP(S) `sourceUrl` values;
- print city counts and fail if a city with audited source material has no selected event;
- verify exactly three featured events span at least two cities and prefer three-city coverage when eligible entries exist.

Make the validator accept `CONTENT_DIR` and `EXPECTED_CITIES` environment variables so fixtures can exercise failure states without changing production content.

- [ ] **Step 6: Add validator tests for the five review-focus failures**

Use temporary fixture directories to assert non-zero results for 11 activities, 19 activities, an empty Chinese title, a missing image and a three-card single-city featured set. Assert a valid 12-item fixture with three multi-city features returns zero.

- [ ] **Step 7: Run unit tests and type checks**

```powershell
npm test -- tests/unit/activities.test.ts
npx astro check
```

Expected: PASS.

- [ ] **Step 8: Commit the content contract**

```powershell
git add src/content.config.ts src/lib/activities.ts scripts/validate-content.mjs tests/unit/activities.test.ts tests/fixtures
git commit -m "feat: define validated bilingual activity content"
```

## Task 3: Audit source material and curate the production activity set

**Files:**
- Create: `docs/content/activity-source-audit.csv`
- Create: `src/content/activities/<slug>/index.json` for 12–18 selected activities
- Create: `src/content/activities/<slug>/*.{jpg,jpeg,png,webp}` for approved local images
- Modify: `package.json`

**Interfaces:**
- Consumes: public Notion page, Xiaohongshu, local Notion exports, `SAFAA_活动数据_UTF8BOM_Excel/`, `Poster/` and other supplied activity materials
- Produces: validated production entries consumed by `getActivities()`

- [ ] **Step 1: Build the source audit before selecting events**

Create `docs/content/activity-source-audit.csv` with this exact header:

```csv
source_id,date,city,source_url,activity_type,title_en,title_zh,photo_count,privacy_checked,selected,notes
```

Record each usable activity discovered in the public archive or local export. `privacy_checked` is `yes` only after reviewing every proposed image for personal details, participant consent concerns, QR codes and sign-in information.

- [ ] **Step 2: Select 12–18 events using the design rules**

Sort verified entries newest first, then select for city and category breadth. Record `selected=yes` in the audit. The final set must include each city where verified source material exists and must not claim missing cities through inferred information.

- [ ] **Step 3: Copy and normalise approved media**

For each selected event, copy one cover and up to six gallery images into its content directory. Use lowercase kebab-case filenames such as `cover.jpg`, `workshop-discussion.jpg` and `group-photo.jpg`. Preserve original source files outside the repository.

- [ ] **Step 4: Write bilingual content entries from the source material**

Write 100–180 words per language for the detail summary. Keep dates, cities, event type and participant claims faithful to the sources. Use the event-specific public URL when one exists; otherwise use the complete public Notion archive URL.

- [ ] **Step 5: Mark exactly three home-page features**

Choose three visually strong activities. Prefer three different cities and three categories; require at least two cities. Set `featured: true` only on those entries so the home page matches the approved Gemini three-card row.

- [ ] **Step 6: Run content validation**

```powershell
node scripts/validate-content.mjs
npx astro check
```

Expected: the validator prints 12–18 entries, reports city counts, reports exactly three featured entries across at least two cities and exits zero.

- [ ] **Step 7: Make validation part of every project check**

Change the package script to:

```json
{
  "scripts": {
    "check": "astro check && node scripts/validate-content.mjs"
  }
}
```

Run `npm run check` and confirm both Astro and the content validator pass.

- [ ] **Step 8: Perform a human source check**

Open each selected card image and its source row side-by-side. Confirm the date, city, title, source URL, privacy result and English/Chinese meaning. Correct discrepancies before committing.

- [ ] **Step 9: Commit the curated content**

```powershell
git add docs/content/activity-source-audit.csv src/content/activities package.json
git commit -m "content: add curated multi-city SAFAA activities"
```

## Task 4: Establish brand assets, tokens and the shared page shell

**Files:**
- Create: `src/assets/brand/safaa-logo-full.png`
- Create: `src/assets/brand/safaa-mark.png`
- Create: `public/favicon.svg`
- Create: `public/social/og-default.jpg`
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/ui/SectionHeading.astro`
- Modify: `src/pages/index.astro`

**Interfaces:**
- Produces: `BaseLayout` props `locale`, `title`, `description`, `canonicalPath`, `image?`, `structuredData?`
- Consumes: the approved `gemini-safaa-website` Trust theme and `safaa-gemini-style-poc.html` as visual references
- Produces: shared CSS tokens named `--color-navy`, `--color-teal`, `--color-orange`, `--color-ivory`, `--color-ink`, plus Poppins/Inter type scales, reference radii and component-shadow tokens

- [ ] **Step 1: Inspect all logo variants at full resolution**

Compare `LOGO BLACK _画板 1.png`, `LOGO BLACK&WHITE_画板 1.png`, `LOGO COLOERED.jpg`, `SAFAA logo1.png` and `新颜色SAFAA.png`. Select the cleanest transparent or high-resolution full lockup and mark. Do not redraw the logo in CSS.

- [ ] **Step 2: Copy selected originals and create web derivatives**

Keep a lossless full logo under `src/assets/brand/`, generate a transparent mark for the favicon, and create a 1200×630 Open Graph image using the logo, navy background and the line `Driven. Open-minded. Independent.`. Verify the logo is not stretched or cropped.

- [ ] **Step 3: Write a failing BaseLayout rendering test**

Add an e2e assertion that `/` contains a viewport meta tag, English description, canonical `https://safaa-au.site/`, `og:image`, one `main` landmark and exactly one `h1`.

- [ ] **Step 4: Implement tokens and global styles**

Use the exact palette from the spec, local Poppins 700/800 for headings, local Inter Variable for body/controls, Chinese system fonts, and the approved Gemini spacing. Define separate radii for pill controls, the 12px impact panel and 8–12px activity cards. Define one pronounced impact shadow and one medium card shadow rather than a universal shadow. Keep visible `:focus-visible` outlines and include a reduced-motion media query that disables non-essential transitions and image scaling.

- [ ] **Step 5: Implement `BaseLayout.astro`**

Set `lang`, canonical URL, Open Graph tags, locale-specific metadata, favicon and optional JSON-LD. The component imports shared styles once and wraps header, `main` slot and footer slots without adding decorative containers.

- [ ] **Step 6: Run visual shell checks at three widths**

Use 390×844, 768×1024 and 1440×900. Compare the shell side-by-side with the approved POC: two-level fixed header, ivory page background, navy/teal/orange hierarchy, Poppins heading weight and content width must match closely. Confirm no horizontal overflow, body text remains at least 16px and focus indicators remain visible against ivory and navy surfaces.

- [ ] **Step 7: Run checks and commit**

```powershell
npm run check
npm test
npm run build
git add src/assets/brand public/favicon.svg public/social src/styles src/layouts src/components/ui src/pages/index.astro tests
git commit -m "feat: establish SAFAA brand system and page shell"
```

## Task 5: Implement locale dictionaries, route helpers and global navigation

**Files:**
- Create: `src/i18n/types.ts`
- Create: `src/i18n/en.ts`
- Create: `src/i18n/zh.ts`
- Create: `src/lib/i18n.ts`
- Create: `src/data/site.ts`
- Create: `src/components/layout/SiteHeader.astro`
- Create: `src/components/layout/SiteFooter.astro`
- Create: `tests/unit/i18n.test.ts`
- Modify: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Produces: `Locale = 'en' | 'zh'`, `getDictionary(locale)`, `localisePath(path, locale)` and `formatDate(date, locale)`
- Produces: central `site` object containing legal name, email, statistics, city list, Notion URL and Xiaohongshu URL

- [ ] **Step 1: Write route-helper tests**

```ts
expect(localisePath('/about/', 'zh')).toBe('/zh/about/');
expect(localisePath('/zh/activities/ai-workshop/', 'en')).toBe('/activities/ai-workshop/');
expect(localisePath('/activities/ai-workshop/', 'zh')).toBe('/zh/activities/ai-workshop/');
expect(formatDate('2026-08-16', 'en')).toContain('2026');
expect(formatDate('2026-08-16', 'zh')).toContain('2026');
```

Include an invalid path case that returns the target locale home.

- [ ] **Step 2: Run the tests and confirm they fail**

```powershell
npm test -- tests/unit/i18n.test.ts
```

Expected: FAIL because the route and formatting helpers are missing.

- [ ] **Step 3: Define one typed dictionary contract**

`src/i18n/types.ts` defines every navigation, home, activities, about, footer and accessibility string. Both dictionaries must satisfy the same interface so a missing translation is a TypeScript error.

- [ ] **Step 4: Implement route and date helpers**

Normalise leading/trailing slashes, remove an existing `/zh` prefix before adding the target locale and preserve activity slugs. Use `Intl.DateTimeFormat('en-AU')` and `Intl.DateTimeFormat('zh-CN')` with day, month and year.

- [ ] **Step 5: Implement the Gemini-style header**

Build the slim navy utility bar above an ivory/white 80px navigation row. The utility bar shows registered-not-for-profit wording and EN / 中文; the main row shows the approved official SAFAA logo in the same footprint as the Gemini reference, Home, Activities, About and a teal pill linking to the public activity archive. Mobile keeps the official logo, language control and a native menu button with `aria-expanded` plus a labelled navigation region. The equivalent-language link is a real anchor and writes preference only when clicked.

- [ ] **Step 6: Implement the footer**

Show the legal name, registered not-for-profit wording, email, Notion, Xiaohongshu and navigation. External links announce that they open externally; do not add empty social icons.

- [ ] **Step 7: Add e2e navigation tests**

Test keyboard opening/closing of the mobile menu, switching `/` to `/zh/`, correct Home/Activities/About link destinations, and footer email `mailto:info@safaa-nonprofit.org`. Route navigation tests for Activities and About are added when those pages exist.

- [ ] **Step 8: Run checks and commit**

```powershell
npm run check
npm test
npm run build
npm run test:e2e
git add src/i18n src/lib/i18n.ts src/data/site.ts src/components/layout src/layouts tests
git commit -m "feat: add bilingual navigation and organisation data"
```

## Task 6: Build the English and Chinese home pages

**Files:**
- Create: `src/components/home/Hero.astro`
- Create: `src/components/home/ImpactStrip.astro`
- Create: `src/components/home/MissionBlock.astro`
- Create: `src/components/activities/ActivityCard.astro`
- Modify: `src/pages/index.astro`
- Create: `src/pages/zh/index.astro`
- Modify: `tests/e2e/site.spec.ts`

**Interfaces:**
- Consumes: `getFeaturedActivities(3)`, dictionaries, site data and approved local imagery
- Produces: equivalent Home routes with the approved Gemini hero, proof points, exactly three featured activities, mission block and public links

- [ ] **Step 1: Extend e2e tests for required home content**

Assert English and Chinese home pages each have one `h1`, four proof points, exactly three activity articles and links to Activities, Notion and Xiaohongshu. Assert the cards contain at least two unique `data-city` values and contain three when eligible production content exists.

- [ ] **Step 2: Run the home tests and confirm they fail**

```powershell
npm run test:e2e -- --grep "home"
```

Expected: FAIL because the complete sections are not implemented.

- [ ] **Step 3: Implement the full-bleed hero**

Match the approved POC hero composition: approximately 85vh on desktop, full-width approved group photograph, dark navy multiply overlay plus bottom gradient, centred translucent legal-name capsule, large Poppins headline, constrained supporting copy and two actions. Preserve faces with art-direction cropping. On 320–390px widths, keep the headline readable without clipping, stack the actions and let the hero grow with content rather than forcing text into a fixed viewport height.

- [ ] **Step 4: Implement the overlapping impact strip**

Render the four verified proof points from `site.ts` in one white rounded panel with the pronounced reference shadow and orange bottom rule. It overlaps the hero edge, uses four desktop columns and a 2×2 mobile layout; do not create four independent floating cards.

- [ ] **Step 5: Implement photo-first activity cards**

Render exactly three matching raised cards in a three-column desktop row and one-column mobile stack. Each uses a fixed photo area, white city label, date, localised title, two-line summary and underlined detail link, with the same proportions, radii and medium shadow as the approved POC. Limit summaries visually without removing them from the accessibility tree.

- [ ] **Step 6: Implement the Gemini-style mission section**

Use the navy full-width section from the reference with left-aligned `Achieve. Inspire. Connect.` / `成长 · 启发 · 连接` copy, orange action and one large circular real community image on the right. On mobile, stack text before the image and keep the decorative circular outline inside the viewport. City reach remains visible through the impact statistic and Activities collection; do not add an ornamental map or a separate layout that changes the approved home-page rhythm.

- [ ] **Step 7: Compose both routes from the same components**

Pass `locale="en"` and `locale="zh"`; do not duplicate layout markup between languages. Add locale-specific metadata and `Organization` JSON-LD.

- [ ] **Step 8: Verify responsive composition**

Check that the header, hero typography, stacked actions, 2×2 impact strip, activity cards and mission image work at 320–390px. Text must not cover important faces, no element may overflow horizontally, card images keep consistent aspect ratios and no content depends on hover.

- [ ] **Step 9: Run checks and commit**

```powershell
npm run check
npm test
npm run build
npm run test:e2e
git add src/components/home src/components/activities/ActivityCard.astro src/pages/index.astro src/pages/zh/index.astro tests
git commit -m "feat: build bilingual photo-led home pages"
```

## Task 7: Build the activity index, filter and detail routes

**Files:**
- Create: `src/components/activities/ActivityFilter.astro`
- Create: `src/scripts/activity-filter.ts`
- Create: `src/pages/activities/index.astro`
- Create: `src/pages/zh/activities/index.astro`
- Create: `src/pages/activities/[slug].astro`
- Create: `src/pages/zh/activities/[slug].astro`
- Create: `src/pages/404.astro`
- Modify: `tests/e2e/site.spec.ts`

**Interfaces:**
- Consumes: all validated activity entries, `Locale`, `formatDate()` and `localisePath()`
- Produces: 12–18 filterable cards and static detail pages in both languages

- [ ] **Step 1: Add index and detail route tests**

Assert the English and Chinese indexes render 12–18 cards, newest first, and include all represented city labels. For one known production slug, assert both detail routes show the correct title, date, city, lead image, gallery alt text and source link.

- [ ] **Step 2: Add progressive-filter tests**

With JavaScript enabled, select Melbourne and assert only Melbourne cards remain visible and the results announcement updates. With JavaScript disabled, assert all cards remain visible and the page is still navigable.

- [ ] **Step 3: Run the route tests and confirm they fail**

```powershell
npm run test:e2e -- --grep "activities"
```

Expected: FAIL because the routes do not exist.

- [ ] **Step 4: Implement both index routes**

Use one shared rendering path per locale, one intro, accessible city buttons, the card grid and closing Notion/Xiaohongshu links. Buttons use `aria-pressed`; an `aria-live="polite"` line reports the visible result count.

- [ ] **Step 5: Implement progressive city filtering**

The client script reads `data-city`, toggles the `hidden` attribute, updates `aria-pressed` and reports the count. It must not rewrite the URL, fetch data or hide cards before JavaScript initialises.

- [ ] **Step 6: Implement static detail routes**

Use `getStaticPaths()` for every slug and locale. Render lead image, metadata, localised summary, optional highlights, two to six gallery images, source link and `Event` JSON-LD when date and location are complete.

- [ ] **Step 7: Add missing-slug behaviour**

Build only known slugs. Create a shared-brand 404 page with links to English Home and Activities. Test a non-existent route returns it in preview and that no activity route emits an empty locale field.

- [ ] **Step 8: Run checks and commit**

```powershell
npm run check
npm test
npm run build
npm run test:e2e
git add src/components/activities src/scripts src/pages/activities src/pages/zh/activities tests
git commit -m "feat: add curated activity collection and detail pages"
```

## Task 8: Build the bilingual About pages

**Files:**
- Create: `src/pages/about.astro`
- Create: `src/pages/zh/about.astro`
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/zh.ts`
- Modify: `tests/e2e/site.spec.ts`

**Interfaces:**
- Consumes: exact Mission, Vision, Audience and Positioning content from the spec
- Produces: equivalent public About pages without team profiles or registration number

- [ ] **Step 1: Write content-presence and absence tests**

Assert the English page contains Mission, Vision and Who we serve; the Chinese page contains their equivalents. Assert neither page contains `Donate`, `Sponsor`, `registration number`, `ABN`, `founder` or committee profile markup.

- [ ] **Step 2: Run the About tests and confirm they fail**

```powershell
npm run test:e2e -- --grep "About"
```

Expected: FAIL because the pages do not exist.

- [ ] **Step 3: Implement the About composition**

Use one introductory image, a concise mission block, three vision outcomes, audience copy and the positioning statement. Use typographic hierarchy and simple dividers; do not turn every paragraph into a card.

- [ ] **Step 4: Add locale metadata and structured data**

Supply unique titles/descriptions, canonical and alternate language links, and `Organization` JSON-LD matching Home.

- [ ] **Step 5: Run checks and commit**

```powershell
npm run check
npm test
npm run build
npm run test:e2e
git add src/pages/about.astro src/pages/zh/about.astro src/i18n tests
git commit -m "feat: add bilingual mission and vision pages"
```

## Task 9: Complete accessibility, SEO, resilience and visual QA

**Files:**
- Modify: `src/pages/404.astro`
- Create: `public/robots.txt`
- Modify: `tests/e2e/site.spec.ts`
- Modify: components and styles only where failures require a correction

**Interfaces:**
- Produces: accessible production routes, sitemap, robots policy, social metadata and a useful not-found page

- [ ] **Step 1: Add automated accessibility checks**

Run `AxeBuilder` against `/`, `/zh/`, `/activities/`, one activity detail and `/about/`. Fail on serious or critical violations. Keep colour contrast enabled.

- [ ] **Step 2: Add route and metadata checks**

For every generated HTML file, assert one `h1`, non-empty title and description, canonical URL, correct `lang`, reciprocal alternate language links and no broken local image paths.

- [ ] **Step 3: Add overflow and keyboard tests**

At 320px and 390px widths, assert `document.documentElement.scrollWidth <= window.innerWidth`. Tab through header, language switch, filter and footer and confirm every interactive control receives a visible focus indicator.

- [ ] **Step 4: Refine the 404 page and implement robots policy**

The 404 page uses the shared header/footer and links to English Home and Activities. `robots.txt` allows public crawling and points to `https://safaa-au.site/sitemap-index.xml`.

- [ ] **Step 5: Run complete automated verification**

```powershell
npm run check
npm test
npm run build
npm run test:e2e
```

Expected: every command exits zero.

- [ ] **Step 6: Run Lighthouse against the production build locally**

Start `npm run preview -- --host 127.0.0.1` and audit Home, Activities and one detail page at mobile settings. Performance, Accessibility, Best Practices and SEO must each score at least 90. Fix missing dimensions, oversized images, render-blocking assets and contrast issues, then repeat.

- [ ] **Step 7: Perform human visual review**

Review English and Chinese at 390×844, 768×1024 and 1440×900 beside the approved POC. Confirm the two-level header, hero height/overlay, centred type scale, overlapping impact panel, three-card row, circular-image mission block and footer are recognisably the same design. Confirm photography feels real and multi-city, Chinese line breaks are natural, mobile headings and controls do not clip, and the site contains no fundraising language.

- [ ] **Step 8: Commit the release-quality pass**

```powershell
git add src public tests
git commit -m "test: complete accessibility SEO and responsive QA"
```

## Task 10: Document the one-to-two-month content update workflow

**Files:**
- Create: `docs/maintenance.md`
- Modify: `README.md`

**Interfaces:**
- Produces: a non-developer update procedure and a technical project overview

- [ ] **Step 1: Write the maintenance guide**

Document this exact workflow:

1. Duplicate one recent `src/content/activities/<slug>/` directory.
2. Rename the directory and JSON `slug` using lowercase kebab case.
3. Replace date, city, category, English/Chinese title, summary, highlights, alt text and source URL.
4. Replace the cover and gallery files with approved local images.
5. Keep the total selected collection between 12 and 18 by archiving an older entry outside `src/content/activities/` when required.
6. Keep exactly three `featured: true` entries. Prefer three cities and require at least two.
7. Run `npm run check`, `npm test`, `npm run build` and `npm run test:e2e`.
8. Preview, commit and push; GitHub Pages deploys automatically.

Include a troubleshooting table for invalid JSON, missing image, empty translation, wrong city value and a failed GitHub Action.

- [ ] **Step 2: Write the repository README**

Explain purpose, routes, content structure, local commands, deployment, domain, source references and out-of-scope features. Link the design spec, implementation plan and maintenance guide.

- [ ] **Step 3: Follow the guide once as a dry run**

Duplicate an entry in a temporary directory outside `src/content/activities/`, apply the documented steps, run the validator against that fixture and delete the temporary fixture after the test. Correct any ambiguous instruction.

- [ ] **Step 4: Commit documentation**

```powershell
git add README.md docs/maintenance.md
git commit -m "docs: explain SAFAA site maintenance and release flow"
```

## Task 11: Create the GitHub repository, deploy and cut over the domain

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `public/CNAME`
- Modify: DNS records in the Hostinger domain dashboard after public preview passes

**Interfaces:**
- Consumes: green local build and GitHub account `yilinqiao`
- Produces: GitHub repository, Pages deployment, `https://safaa-au.site/` and HTTPS

- [ ] **Step 1: Add the deployment workflow**

Use `actions/checkout@v7`, `withastro/action@v6` with `node-version: 24`, and `actions/deploy-pages@v5`. Grant only `contents: read`, `pages: write` and `id-token: write`. Trigger on pushes to `main` and manual dispatch.

- [ ] **Step 2: Add the custom-domain file**

Create `public/CNAME` with exactly:

```text
safaa-au.site
```

- [ ] **Step 3: Verify the final local release**

```powershell
npm run check
npm test
npm run build
npm run test:e2e
git status --short
```

Expected: all checks pass and only intended deployment files are uncommitted.

- [ ] **Step 4: Commit deployment configuration**

```powershell
git add .github/workflows/deploy.yml public/CNAME
git commit -m "ci: deploy SAFAA site to GitHub Pages"
```

- [ ] **Step 5: Create and push the new GitHub repository**

Create a new repository named `safaa-au-site`, set the local `origin`, and push `main`. Use public visibility if the account relies on GitHub Free Pages; otherwise private is acceptable only after confirming the account plan supports Pages.

```powershell
gh repo create yilinqiao/safaa-au-site --source . --remote origin --push --public
```

Expected: the repository URL is `https://github.com/yilinqiao/safaa-au-site` and the first Actions run starts.

- [ ] **Step 6: Enable Pages and verify the GitHub preview**

In repository Settings → Pages, select GitHub Actions. Wait for the workflow to finish, then test Home, Chinese Home, Activities, one detail route, About and 404 at the generated GitHub Pages URL before changing DNS.

- [ ] **Step 7: Verify the domain in GitHub**

Add the TXT record GitHub provides for domain verification. Confirm the repository Pages settings accept `safaa-au.site` before replacing the old A record.

- [ ] **Step 8: Replace obsolete Hostinger DNS**

Remove the apex A record resolving to `72.61.124.181` only after Step 6 succeeds. Add GitHub Pages apex A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Set `www` as a CNAME to `yilinqiao.github.io`. Remove conflicting apex A/AAAA records and conflicting `www` records.

- [ ] **Step 9: Verify DNS, HTTPS and canonical behaviour**

After propagation, verify:

```powershell
Resolve-DnsName safaa-au.site -Type A
Resolve-DnsName www.safaa-au.site -Type CNAME
curl.exe -I https://safaa-au.site/
curl.exe -I https://www.safaa-au.site/
```

Expected: apex resolves to GitHub Pages, both hostnames serve or redirect successfully, the certificate is valid and every page declares `https://safaa-au.site/` as canonical.

- [ ] **Step 10: Enforce HTTPS and run public smoke tests**

Enable **Enforce HTTPS** in Pages settings. Run the e2e suite against `https://safaa-au.site` using a configurable `BASE_URL`, then manually test the Notion, Xiaohongshu and email links.

- [ ] **Step 11: Address domain renewal risk**

Confirm renewal of `safaa-au.site` before its recorded 22 November 2026 expiry. This is an ownership action separate from deployment; the site must not be considered operationally complete while auto-renew remains off without a documented manual renewal decision.

- [ ] **Step 12: Record the release**

Add a release note containing the production URL, deployed commit SHA, DNS cutover date, test results and the next recommended content review date. Tag the release:

```powershell
git tag -a v1.0.0 -m "SAFAA community profile launch"
git push origin v1.0.0
```

## Final Verification Checklist

- [x] `npm run check` passes.
- [x] `npm test` passes.
- [x] `npm run build` passes.
- [ ] `npm run test:e2e` passes locally and against production.
- [x] English and Chinese copy are complete and equivalent.
- [x] 12–18 activities are published with verified date, city, source and privacy review.
- [x] All five cities with suitable material are represented; exactly three home features span three cities when possible and at least two cities in all cases.
- [ ] Desktop and mobile Home visibly match the approved `safaa-gemini-style-poc.html` composition rather than either rejected POC direction.
- [x] No synthetic legacy events, unsupported claims or fundraising language appear.
- [x] All images are local, optimised and have bilingual alt text.
- [ ] Lighthouse scores are at least 90 in all four categories on representative routes.
- [x] GitHub Actions deployment is green.
- [x] Apex and `www` behaviour is consistent, HTTPS is enforced and canonical URLs use `https://safaa-au.site/`.
- [ ] Notion, Xiaohongshu and email links work.
- [ ] Domain renewal is confirmed before 22 November 2026.

# Implementation addendum — 23 September 2026

The approved Gemini Trust layout is implemented in Astro. Source checking found that the first draft mislabelled several events and reused unrelated artwork; the activity collection was rebuilt from the public Notion board and local export. The release uses 18 events from 2024–2026, with exactly three featured cities, typed records in `src/data/site.ts`, bilingual detail copy and `/events/` routes. Every selected event has an exact local image, prioritising live event photography and using the matching poster only when necessary. This intentionally supersedes the earlier per-event JSON and `/activities/` file-path examples in this plan.

## Release record — 23 September 2026

- Published the public repository at <https://github.com/yilinqiao/safaa-au-site> with a successful GitHub Actions Pages deployment.
- Bound `safaa-au.site` to GitHub Pages and verified ownership through the account-level TXT challenge. Hostinger's apex A records are the four official GitHub Pages addresses; `www` points to `yilinqiao.github.io`. The unrelated `n8n` A record was preserved.
- GitHub approved a certificate for both apex and `www`; HTTPS enforcement is on. Browser checks confirmed the English home page, the 18-activity index, city filtering, Chinese switching, and HTTP/`www` redirects to <https://safaa-au.site/>.
- Local release checks passed: Astro check, unit tests, static build, desktop/mobile Playwright tests and axe accessibility checks. The domain-renewal decision remains with the owner: Hostinger shows expiry on 22 November 2026 and auto-renewal is off.
