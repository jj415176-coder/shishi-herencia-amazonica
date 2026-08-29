import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shishi-herencia-amazonica/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
