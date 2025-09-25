import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TP3-LENGUAJES4/', // 👈 nombre de tu repo
})
