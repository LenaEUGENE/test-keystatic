import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), markdoc(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});