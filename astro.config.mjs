import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://queernessexperiences.com',
  integrations: [sitemap({ filter: (page) => !page.includes('thank-you') })],
});
