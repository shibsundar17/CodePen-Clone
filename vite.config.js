import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
try {
  cm = require('codemirror');
} catch (error) {
  // Handle the error, log it, or provide a fallback
  console.error('Error loading codemirror:', error);
}
