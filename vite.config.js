import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // Enables JSX without importing React
    tailwindcss(), // Enables Tailwind without PostCSS config
  ],
});
