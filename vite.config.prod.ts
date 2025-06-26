import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Production config for GitHub Pages
export default defineConfig({
  base: '/modern-coder-resume/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
