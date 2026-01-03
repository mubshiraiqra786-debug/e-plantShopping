import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/e-plantShopping/',   // ✅ slash zaroori hai
  plugins: [react()],
})
