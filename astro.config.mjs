import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://safaa-au.site',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
