import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
