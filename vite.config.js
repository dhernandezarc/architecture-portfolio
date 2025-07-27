import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // root-relative because custom domain
  plugins: [react()],
})