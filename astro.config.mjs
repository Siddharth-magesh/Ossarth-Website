import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://Siddharth-magesh.github.io',
  base: '/Ossarth-Website/',
  output: 'static'
});
