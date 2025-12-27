import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // an empty outDir will make vite build to the project root
    // this is required for github pages to work with the default settings
    outDir: '',
  },
})
