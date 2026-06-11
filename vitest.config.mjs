import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true, // no need to import expect/it/describe
    setupFiles: ['./vitest.setup.ts'], // runs before every test file
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next']
  }
})
