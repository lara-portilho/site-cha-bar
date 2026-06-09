import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import tsconfig from "./tsconfig.app.json";

function resolvePaths(paths: Record<string, string[]>) {
  return Object.entries(paths).map(([key, value]) => ({
    find: key.slice(0, -2),
    replacement: path.resolve(__dirname, value[0].slice(0, -2)),
  }));
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: resolvePaths(tsconfig.compilerOptions.paths),
  },
});
