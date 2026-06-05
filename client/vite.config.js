import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "inline",
      manifest: {
        name: "Comicsite",
        short_name: "Comicsite",
        description: "A comics website built with React and Vite",
        theme_color: "#ffffff",
        icons: [],
      },
    }),
  ],
  server: {
    fs: {
      strict: false,
    },
  },
});
