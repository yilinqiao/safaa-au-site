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

Edit `src/data/site.ts` for activities and bilingual copy. Add an approved poster or photo for the exact event to `public/images/`; otherwise the site uses a branded city cover. Exactly three records marked `featured: true` appear on the home page. The Activities page shows all 12–18 records with city filters. See [the content workflow](docs/content-update.md).

## Deployment

The output is static (`dist/`). Pushes to `main` deploy through GitHub Pages using `.github/workflows/deploy.yml`. The production site is configured for `https://safaa-au.site` with `public/CNAME`. Domain renewal must be handled in Hostinger separately.
