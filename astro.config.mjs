import { defineConfig } from 'astro/config';

// Static build output -> deploys directly to Cloudflare Pages.
// Build command: npm run build
// Output directory: dist
export default defineConfig({
  compressHTML: false,
  output: 'static',
  vite: {
    build: {
      cssMinify: false,
    },
  },
});
