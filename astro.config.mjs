import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config TO DO SETUP W DEPLOYMENT
export default defineConfig({
  site: "https://heidi-negrete.github.io",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
