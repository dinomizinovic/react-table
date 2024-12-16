import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
    proxy: {
      "/sifre": {
        target: "http://77.78.198.63:252",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
