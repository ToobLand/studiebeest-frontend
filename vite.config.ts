import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Voor het testen van React-componenten
    setupFiles: './src/setupTests.ts', // Optioneel, voor extra setup
  },
})
