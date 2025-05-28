import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  plugins: [react()],
  base: isVercel ? "/" : (process.env.VITE_BASE_PATH || "/Karthik_Portfolio"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
