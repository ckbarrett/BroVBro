import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["brovbro.ckbarrett.com"],
  },
  preview: {
    allowedHosts: ["brovbro.ckbarrett.com"],
  },
});
