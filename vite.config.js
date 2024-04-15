import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        second: resolve(__dirname, "./HTML/about.html"),
        third: resolve(__dirname, "./HTML/careers.html"),
        fourth: resolve(__dirname, "./HTML/locations.html"),
      },
    },
  },
});
