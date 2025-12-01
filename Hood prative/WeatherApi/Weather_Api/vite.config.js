const { defineConfig } = require('vite')

// Important: @vitejs/plugin-react is ESM-only. Vite's config may be loaded via
// CommonJS, so use dynamic import to load the ESM plugin when necessary.
module.exports = defineConfig(async () => {
  const react = (await import('@vitejs/plugin-react')).default
  return { plugins: [react()] }
})
