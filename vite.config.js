import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Cambiá "mi-tp" por el nombre EXACTO de tu repo en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/TP3-LENGUAJES4/',
})
