import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3003' // Redirige solicitudes que comiencen con /api al servidor en el puerto 3003
    }
  }
})
