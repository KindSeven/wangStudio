import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude:['**/*.PNG'],
  resolve:{
    alias:{
      '@': resolve(__dirname, './src'),
    }
  },
  server: {
    // port:6908,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://47.109.193.161:7789/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
