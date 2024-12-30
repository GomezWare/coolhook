import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: { port: 3000 },
  adapter: node({
    mode: "standalone",
  }),
});
