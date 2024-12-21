import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'build', // Output folder for static files
      assets: 'build', // Output folder for assets
      fallback: 'index.html', // Fallback for SPA routing
    }),
    paths: {
      base: '', // Base path for deployment (update if deploying to a subdirectory)
    },
  },
  preprocess: vitePreprocess(),
};
