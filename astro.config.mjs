import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), preact()]
});