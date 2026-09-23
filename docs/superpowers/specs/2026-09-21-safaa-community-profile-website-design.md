# SAFAA Community Profile Website — Design Specification

**Date:** 21 September 2026  
**Status:** Implemented and published on 23 September 2026
**Working directory:** `safaa-au-site/`  
**Public domain:** `https://safaa-au.site/`

## Implementation note — 23 September 2026

The approved Gemini Trust composition and English/Chinese, multi-city content goals remain unchanged. During source verification, the local export contained only a few event-specific image files; several images in the first code draft belonged to unrelated events or another organisation. Those have been removed from the published pages. The current implementation uses the approved SAFAA workshop photograph from the POC for the hero and mission section; event cards use an original poster only where it matches the exact event, and otherwise show a plainly designed city cover. This is an honest launch treatment until additional approved event photographs are supplied.

The curated collection now contains 17 source-checked activities spanning 2024–2026, five cities and online; three featured activities cover Sydney, Melbourne and Brisbane. The production routes are `/events/` and `/zh/events/`, retaining the approved Gemini reference's “Events” route naming. The compact launch content model is a typed `src/data/site.ts` array with a `featured` flag and source URL, rather than one JSON file per event. These choices supersede the data-file and route examples below; the maintenance workflow is recorded in `docs/content-update.md`.

The production repository is <https://github.com/yilinqiao/safaa-au-site>. GitHub Pages serves the site, while Hostinger remains the registrar and DNS manager; the custom domain is ownership-verified and HTTPS is enforced. The release record and remaining renewal decision are documented in the execution plan.

## 1. Purpose

Build a concise, credible public website for Starleap Asian Female Association Of Australia Inc (SAFAA). The site is a professional community profile: it should help a government, corporate, venue, community or prospective participant understand who SAFAA is, see evidence of real activity across Australia, and contact or follow the organisation.

The site is not a fundraising landing page. It must not ask visitors to donate, sponsor an event or fund the organisation. Its credibility should come from clear facts, real event photographs, consistent presentation and a visible record of activity.

## 2. Confirmed organisation facts

- Legal name: **Starleap Asian Female Association Of Australia Inc**
- Short name: **SAFAA**
- Status: registered not-for-profit; the registration number is not displayed publicly
- Community size: **2,300+ community members**
- Volunteer network: **100+ volunteers**
- Active cities represented on the site: **Sydney, Melbourne, Adelaide, Perth and Brisbane**
- Public email: **info@safaa-nonprofit.org**
- Public activity archive: <https://iced-beryl-997.notion.site/SAFAA-54391bb39be34aa88dcefa446a4fe2f4>
- Xiaohongshu: <https://xhslink.cn/m/AMpKhDSChIj>
- Primary language: English
- Secondary language: Simplified Chinese, available through a page-level language switch

These facts are user-supplied. They should be rechecked once immediately before publication, but they are the source of truth for implementation.

## 3. Intended audiences

The site must work for four overlapping audiences:

1. Government, corporate and venue stakeholders evaluating whether SAFAA is established, active and professionally run.
2. Asian women in Australia looking for relevant professional, learning and community activities.
3. Existing community members who want a simple public record of selected activities.
4. Volunteers and collaborators who want to understand SAFAA before making contact.

The site should feel welcoming to a broad age and professional range. It must not present Asian women as a narrow demographic stereotype or frame the community through victimhood or gender conflict.

## 4. Design principles

### 4.1 Real before decorative

Real SAFAA event photography is the main visual material. Abstract gradients, floating shapes, generic illustration packs and AI-generated community imagery are excluded. Every major page should show people, activities or materials that came from SAFAA.

### 4.2 Match the approved reference before introducing new design ideas

The local `gemini-safaa-website` Trust theme and the approved replacement-content POC are the visual baseline. Preserve their recognisable composition: fixed two-level header, dark photo hero, centred bold type, overlapping white impact panel, three raised activity cards, navy mission section with a circular photograph and a structured dark footer. Rounded corners and shadows are intentional in those components and must be matched closely rather than redesigned into a different visual system. Do not introduce an editorial layout, experimental typography or a new palette.

### 4.3 Evidence before claims

Show the scale of the organisation through verified figures and selected activities. Avoid unsupported superlatives such as “Australia’s leading” or “transforming thousands of lives.”

### 4.4 Concise before comprehensive

This launch is a profile site, not a member portal or content-management system. It includes the strongest 12–18 activities and links to the complete public Notion activity archive.

### 4.5 English-first, equally usable in Chinese

English is the default public route. Chinese pages contain equivalent information, not shortened summaries. Both language versions use the same photography, layout and event data.

## 5. Visual direction

The chosen direction is a faithful production adaptation of the **Trust** theme in the local `gemini-safaa-website` project. The approved POC is:

`C:\Users\elynq\.codex\visualizations\2026\09\21\01a0c2d6-c958-7960-8118-9914f43d722e\safaa-gemini-style-poc.html`

The production site must look recognisably like this reference at first glance. Content, imagery, accessibility and implementation architecture change; the overall visual composition does not.

### 5.1 Preserve from `SAFAA_Gemini`

- A full-bleed, real-photo hero with a dark navy overlay
- A slim dark utility bar above a white fixed navigation header
- A short, memorable headline instead of a long institutional paragraph
- A centred legal-name capsule, headline, supporting copy and two hero actions
- A floating impact strip that overlaps the hero and the following section
- Exactly three large, photo-first featured activity cards on the home page
- Poppins-style heavy sans-serif headlines with Inter body copy
- Navy, teal and warm orange as the core palette
- The navy `Achieve. Inspire. Connect.` section with a large circular community photograph
- The original spacing, moderate radii and component shadows that create depth
- A multi-column navy footer with organisation details and public links

### 5.2 Do not carry forward

- Theme switching; the public site has one coherent visual identity
- Placeholder or stock event imagery
- The generated diamond logo placeholder; production uses the approved SAFAA logo in the same header footprint
- The existing HashRouter SPA structure
- Generic `Join Us` or donation-style calls to action
- Unverified legacy statistics
- Remote Picsum images, fake social icons, dead links and demo-only controls
- In-browser Tailwind/Babel compilation; the production build remains static Astro

### 5.3 Colour system

| Token | Value | Use |
|---|---:|---|
| Deep navy | `#023047` | Hero overlay, primary buttons, headings, footer |
| Teal | `#1AA3BB` | Section accents, links, rules, selected filters |
| Warm orange | `#FFB733` | Small highlights, dates, focus moments; never body text on white |
| Warm ivory | `#FDFBF7` | Main background |
| White | `#FFFFFF` | Photo overlays and raised surfaces |
| Ink | `#17242B` | Body copy |
| Muted ink | `#5F6B70` | Supporting copy and metadata |
| Brand blue | sampled from the selected logo asset | Logo artwork only unless contrast testing supports a wider use |

Teal and orange are accent colours, not default text colours. All text and controls must meet WCAG 2.2 AA contrast.

### 5.4 Typography

- Headlines: locally bundled Poppins, weights 700 and 800, with a system sans-serif fallback
- English body and controls: locally bundled Inter Variable with a system sans-serif fallback
- Chinese: `PingFang SC`, `Microsoft YaHei`, `Noto Sans SC`, sans-serif
- Headlines: bold sans-serif with the compact scale and centred hero treatment from the approved Gemini POC
- Body copy: regular sans-serif, 17–19px on desktop, 16–18px on mobile
- No editorial serif typeface; it contributed to the generic “AI nonprofit” appearance in the first POC

### 5.5 Shape, spacing and motion

- Match the approved Gemini component radii: pill-shaped primary header action, rounded hero actions, 12px impact panel and 8–12px activity cards
- Use pill shapes for the legal-name capsule, city labels, language controls and the primary header action
- Use one substantial overlap: the white impact strip crossing the bottom of the hero
- Preserve the pronounced impact-panel shadow and medium activity-card shadows; do not add the same shadow to ordinary text sections
- Keep the generous section spacing and centred/three-column rhythm visible in the approved POC
- Motion is limited to short button, card-shadow and image-scale responses to user interaction
- Respect `prefers-reduced-motion`; no looping animation or parallax

### 5.6 Photography rules

- Use only real SAFAA event photographs and approved brand materials
- Prioritise images with visible participation, interaction and a clear activity context
- Represent multiple cities on the home page, not only on the Activities page
- Avoid publishing private contact details, sign-in sheets, QR codes or participant names visible in source materials
- Crop for composition without misrepresenting the event
- Supply meaningful alt text in both languages; decorative images use empty alt text
- Store final images locally in the repository so the public site does not depend on expiring Notion image URLs

## 6. Information architecture

The launch has three primary sections and no separate donation, membership or sponsorship flow.

### Global navigation

- Home
- Activities
- About
- EN / 中文 language switch

The header uses the SAFAA logo and short name. On desktop, the legal name appears as a secondary line. On mobile, the legal name moves to accessible text to avoid compressing the logo.

### Footer

- Legal name
- “Registered not-for-profit organisation” without a registration number
- Email link to `info@safaa-nonprofit.org`
- Public Notion activity archive link
- Xiaohongshu link
- Navigation links
- Copyright year generated at build time

There is no contact form at launch. A mail link is more reliable and avoids collecting personal data.

## 7. Page designs

### 7.1 Home

**Header**

- Fixed two-level header matching the Gemini reference
- Slim navy utility bar with registered-not-for-profit wording and the EN / 中文 control
- White navigation row with the approved SAFAA logo, Home, Activities, About and a teal `Activity archive` action
- Mobile collapses to the logo, language control and a keyboard-accessible menu button without horizontal overflow

**Hero**

- Full-width community photograph, approximately 85vh on desktop and content-height on mobile
- Dark navy overlay that preserves faces and provides text contrast
- Centred translucent capsule: `Starleap Asian Female Association Of Australia Inc`
- Headline: `Driven. Open-minded. Independent.`
- Supporting copy: `A volunteer-led community where Asian women across Australia meet, learn and support one another.`
- Primary action: `Explore activities`
- Secondary action: `Our vision`

Chinese equivalent:

- Headline: `积极进取 · 开放包容 · 独立自信`
- Supporting copy: `由志愿者共同建设，让澳大利亚各地的亚裔女性相聚、学习并彼此支持。`
- Actions: `浏览活动` and `我们的愿景`

**Impact strip**

- `2,300+` Community members / 社群成员
- `100+` Volunteers / 志愿者
- `5` Australian cities / 澳洲城市
- `AU` Community network / 全澳社群网络

**Selected activities**

- Exactly three photo-first cards, matching the approved Gemini three-column desktop layout and single-column mobile layout
- The three features should cover three cities when verified material permits; they must cover at least two and cannot all be Sydney
- Each card shows date, city, title, concise description and a detail link
- A section link opens the full 12–18 activity collection

**Mission block**

- Navy full-width section matching the Gemini reference, with left-aligned copy and one large circular community image on the right
- Heading: `Achieve. Inspire. Connect.`
- Copy: `Through practical workshops, professional conversations and welcoming social events, SAFAA creates space for Asian women to exchange knowledge, build confidence and form genuine connections.`
- Chinese heading: `成长 · 启发 · 连接`

**Closing link group**

- `See all activities`
- `View our public activity archive`
- `Follow SAFAA on Xiaohongshu`

This is a navigation close, not a fundraising CTA.

### 7.2 Activities

- Intro explaining that the page is a selected, multi-city record rather than a complete archive
- 12–18 curated activities, initially sorted newest first
- City filters: All, Sydney, Melbourne, Adelaide, Perth and Brisbane
- Filters are progressive enhancement: all activity cards remain visible if JavaScript fails
- Each card includes photograph, title, date, city, activity type and short description
- Cards lead to a statically generated detail page
- The page ends with a link to the complete Notion archive and Xiaohongshu

#### Activity selection rules

1. Prefer events from the most recent 18–24 months represented in the available archive.
2. Include at least one activity from each of the five cities when verified material exists.
3. Target two or more activities per city where the source archive supports it.
4. The three home-page features should cover three cities when suitable verified material exists and must cover at least two cities.
5. Represent a mix of professional learning, AI or technology workshops, networking, wellbeing, cultural and social activities.
6. Prefer events with clear dates, city information and strong original photography.
7. Never invent missing dates, attendance figures, speaker names or outcomes.
8. If a city has fewer suitable recent events, show the verified material available and explain the archive is curated; do not backfill with a Sydney event labelled as another city.

### 7.3 Activity detail

- Large lead photograph
- Date, city and activity type
- 100–180 word English summary and equivalent Chinese summary based on the source material
- Two to six photographs where available
- A restrained “What we explored” or “Event highlights” list only when source material supports it
- Link to the original public post or the complete Notion archive
- Previous/next activity navigation is omitted at launch

### 7.4 About

The About page translates the supplied mission and audience documents into concise public copy.

**Mission**

`Our mission is to support Asian women in unlocking their potential and strengthening their presence in the workplace, entrepreneurship and personal life. Through practical workshops, professional conversations and community activities, we create opportunities for learning, confidence and genuine connection.`

**Vision**

- Increased representation of Asian women in leadership and decision-making
- More confident founders and professionals with access to practical knowledge and peer support
- Stronger self-confidence, resilience and openness to diverse perspectives

**Who the community serves**

- Asian women living in Australia, with activities delivered mainly in English and Chinese
- Professional women, founders, people preparing to enter the workforce and people seeking personal growth
- A broad community connected by learning, independence, openness and mutual support

**Positioning**

SAFAA focuses on capability, connection and practical growth. It does not use language that promotes gender hostility, stereotypes women as weak or defines members through victimhood.

No founder biography, committee list or registration number is included at launch.

## 8. Bilingual behaviour

- English routes use the root path: `/`, `/activities/`, `/about/`
- Chinese routes use `/zh/`, `/zh/activities/`, `/zh/about/`
- Activity detail routes mirror the same slug under each locale
- The language switch takes the visitor to the equivalent page, not always to the home page
- The site writes the language choice to `localStorage` only after the visitor uses the switch; it does not force an automatic redirect
- Each page supplies the correct `lang`, canonical URL and `hreflang` links
- Legal names, URLs and email addresses remain unchanged between languages
- Dates are formatted using `en-AU` and `zh-CN` locale rules

## 9. Content model and maintenance

The site is statically generated. Content is stored in the repository, separate from layout code. A typical update every one or two months consists of adding one JSON activity file and its images, running validation, previewing locally and pushing to GitHub.

Each activity record contains:

```ts
type LocalisedText = {
  en: string;
  zh: string;
};

type Activity = {
  slug: string;
  date: string; // ISO YYYY-MM-DD
  city: 'sydney' | 'melbourne' | 'adelaide' | 'perth' | 'brisbane';
  category: 'professional' | 'technology' | 'networking' | 'wellbeing' | 'culture' | 'social';
  featured: boolean;
  title: LocalisedText;
  summary: LocalisedText;
  highlights: { en: string[]; zh: string[] };
  cover: string;
  coverAlt: LocalisedText;
  gallery: Array<{ src: string; alt: LocalisedText }>;
  sourceUrl: string;
};
```

Launch deliberately does not include a live Notion API, n8n workflow or web CMS. The update frequency does not justify the additional credentials, failure modes and hosting dependency. The data model keeps a future Notion-to-GitHub sync possible without changing page components.

Exactly three launch activities use `featured: true`. They feed the Gemini-style home-page row; the full Activities page still contains 12–18 curated entries.

## 10. Technical architecture

- Framework: Astro, static output
- Language: TypeScript in strict mode
- Content: Astro content collection using one JSON file per activity
- Styling: scoped component CSS plus shared design tokens; no runtime CSS framework
- Client JavaScript: only the mobile navigation, language preference and activity city filter
- Images: repository-owned assets processed by Astro’s image pipeline
- Hosting: GitHub Pages through the official Astro GitHub Action
- Domain: `safaa-au.site`, with `www.safaa-au.site` redirected or aliased consistently
- HTTPS: enforced after DNS and certificate provisioning complete
- Repository: a new repository, separate from `SAFAA_Gemini` and `SAFAA_Web_Gemini`

Astro is selected over reusing the React SPA because this site is primarily content, benefits from pre-rendered HTML and search metadata, and needs very little client-side state. The `SAFAA_Gemini` repository remains a visual reference, not the production codebase.

## 11. SEO, accessibility and performance

- Unique English and Chinese title and description for each route
- Canonical and `hreflang` metadata
- `Organization` structured data on Home and About
- `Event` structured data on each activity detail page when its source fields are complete
- Open Graph image, favicon and social share metadata using approved SAFAA assets
- Sitemap and robots file
- Semantic landmarks and one `h1` per page
- Keyboard-accessible navigation, language switch and activity filters
- Visible focus indicators
- WCAG 2.2 AA colour contrast
- Meaningful bilingual alt text
- No horizontal overflow at 320px
- Performance, Accessibility, Best Practices and SEO Lighthouse targets of 90 or higher on representative production pages
- No analytics, tracking cookies or contact-form data collection at launch

## 12. Deployment and domain requirements

The domain portfolio screenshot records an expiry date of **22 November 2026** and shows auto-renewal disabled. From this specification date, that is roughly two months away, so renewal is a release risk and should be handled independently of the website build.

Current DNS inspection on 21 September 2026 resolved the apex domain to `72.61.124.181`, the former Hostinger server. During cutover:

1. Deploy and verify the GitHub Pages URL first.
2. Verify domain ownership in GitHub.
3. Replace the obsolete apex DNS records with GitHub Pages records.
4. Point `www` at the GitHub Pages hostname.
5. Wait for DNS and certificate provisioning.
6. Enforce HTTPS.
7. Verify both apex and `www` routes and choose one canonical form.

The old DNS record must not be removed until the GitHub Pages build has passed its public checks.

## 13. Acceptance criteria

The site is ready to publish when all of the following are true:

- The design faithfully matches the approved local `gemini-safaa-website` Trust composition and `safaa-gemini-style-poc.html` while replacing all placeholder content and demo controls.
- English is the default and every public page has a complete Chinese equivalent.
- The home page shows 2,300+ members, 100+ volunteers and five cities.
- The Activities page contains 12–18 verified activities and represents every city for which suitable source material exists.
- The three home-page activities cover three cities when verified material permits and never present a Sydney-only row.
- All published photos are local, approved and have bilingual alt text.
- No donation, sponsorship solicitation, registration number or unsupported claim appears.
- Notion, Xiaohongshu and `info@safaa-nonprofit.org` are easy to find.
- The site builds without errors, passes content validation and has no broken internal links or missing images.
- Representative mobile and desktop pages meet the accessibility and Lighthouse targets.
- The GitHub Pages build is green, the custom domain resolves correctly and HTTPS is enforced.
- A non-developer can add a new activity by following the maintenance guide.

## 14. Reference inventory

### Primary SAFAA sources

| Source | Location | How it informs the site |
|---|---|---|
| Vision, mission and milestones | `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\SAFAA Vision Mission Profile.png` | Legal name, mission, representation, entrepreneurship and confidence outcomes |
| Target audience and positioning | `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\SAFAA 目标人群.png` | Audience definition, brand character and language to avoid |
| Logo collection | `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\Logo\` | Production logo, colour sampling, favicon and social assets |
| Earlier website PRD | `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\website prompt.txt` | Original functional goals, Trust palette, slogan and early data model; overridden where this specification simplifies scope |
| Local legacy website | `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\Website\` | Historical architecture and event schema reference only; its three sample events are synthetic and must not be published as SAFAA history |
| Approved Gemini source | `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\gemini-safaa-website\` | Exact visual reference for header, hero, impact strip, activity row, mission section, responsive structure and footer |
| Local Notion/archive exports | `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\Notion\` and related activity-data folders | Source material for event titles, dates, cities, descriptions and images |
| Public Notion page | <https://iced-beryl-997.notion.site/SAFAA-54391bb39be34aa88dcefa446a4fe2f4> | Public activity inventory and destination for the complete archive link |
| Xiaohongshu | <https://xhslink.cn/m/AMpKhDSChIj> | Public social proof, event captions and destination link |

### Visual and code references

| Source | Location | Used | Not copied |
|---|---|---|---|
| `gemini-safaa-website` | `C:\Users\elynq\OneDrive\Documents\Personal\Starleap\gemini-safaa-website\` and <https://github.com/yilinqiao/SAFAA_Gemini> | Primary visual source: two-level header, hero proportions, centred hierarchy, overlapping statistics, three-card row, mission block, footer, desktop/mobile rhythm | React/HashRouter architecture, CDN Tailwind/Babel, placeholder images and copy, demo theme switcher |
| `SAFAA_Web_Gemini` | <https://github.com/yilinqiao/SAFAA_Web_Gemini> | Legacy snapshot for comparison | Production structure; it is not the maintainable source of truth |
| Approved replacement-content POC | `C:\Users\elynq\.codex\visualizations\2026\09\21\01a0c2d6-c958-7960-8118-9914f43d722e\safaa-gemini-style-poc.html` | Final visual approval reference with real SAFAA hero, statistics and sample activity materials | Its in-browser build technique and provisional activity subset are not production architecture/content completeness |
| Rejected earlier POCs | `safaa-homepage-poc.html`, `safaa-homepage-poc-v2.html` and `safaa-editorial-homepage-poc.html` in the same visualization directory | Negative references documenting directions the user found generic or inferior | Their editorial structures, alternate palettes and section compositions |

### Technical references

- Astro deployment to GitHub Pages: <https://docs.astro.build/en/guides/deploy/github/>
- Astro internationalisation API: <https://docs.astro.build/en/reference/modules/astro-i18n/>
- GitHub Pages custom domains: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages>
- GitHub Pages HTTPS: <https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https>

## 15. Explicitly out of scope for launch

- Donations, sponsorship packages or funding application forms
- Member accounts, payments or event registration
- A public registration number
- Founder, committee or staff profiles
- Live Notion API, n8n or CMS integration
- Blog/news publishing
- Email newsletter signup
- Visitor analytics or marketing pixels
- Automated translation
- Theme switching
