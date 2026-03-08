import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative base so assets load correctly on GitHub Pages (avoids blank white screen)
  // For project site (username.github.io/RepoName): set GITHUB_PAGES=true and use base '/RepoName/'
  base: process.env.GITHUB_PAGES === 'true' ? '/Portfolio_website/' : './',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
