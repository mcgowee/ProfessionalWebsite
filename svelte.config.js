import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the static adapter
    adapter: adapter({
      // Default options for the static adapter
      pages: 'build', // where to generate static files
      assets: 'build', // where to place assets
      fallback: 'index.html', // single-page app fallback
      precompress: false // set to true if you want precompressed .gz/.br files
    }),
    // Optional: Specify base paths for deployment under subdirectories
    paths: {
      base: '', // Adjust if hosting under a subpath
    }
  },
  preprocess: vitePreprocess()
};

export default config;
