import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      // This tells Vite to use the 'buffer' package we just installed
      buffer: 'buffer',
    },
  },
})