# SAFAA community profile

Static Astro site for Starleap Asian Female Association Of Australia Inc.

## Local development

Because this Windows machine has a conflicting user-level npm launcher, use the installed npm entry point directly:

```powershell
$npmCli = 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js'
node $npmCli run dev
```

The normal project commands are:

```text
npm run check
npm test
npm run build
npm run test:e2e
```

## Content updates

Edit `src/data/site.ts` for activities and bilingual copy. Add a poster or photo to `public/images/`, then reference it from the event record. The home page shows the first three curated records; the Activities page shows all records and filters by city. See [the content workflow](docs/content-update.md).

## Deployment

The output is static (`dist/`) and is suitable for Netlify, Cloudflare Pages or GitHub Pages. The production site is configured for `https://safaa-au.site`.
