import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://62.72.35.44:3001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api/v1/law'),
      },
    },
  },
})