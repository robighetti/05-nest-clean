import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './dist/vitest.config.e2e.d.ts',
  './dist/vitest.config.js',
  './dist/vitest.config.e2e.js',
  './dist/vitest.config.d.ts',
  './vitest.config.e2e.ts',
  './vitest.config.ts',
])
