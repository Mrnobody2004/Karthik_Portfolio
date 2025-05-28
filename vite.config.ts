import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const isPreview = process.env.npm_lifecycle_event === "preview"

export default defineConfig({
  plugins: [react()],
  base: isPreview ? "/" : (process.env.VITE_BASE_PATH || "/Karthik_Portfolio"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})