import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Make sure this is installed

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base:"/Sushi-Harry.github.io/",
})