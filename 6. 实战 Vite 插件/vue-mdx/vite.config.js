import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import testPlugins from './plugins/test-plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), testPlugins(),],
  resolve: {
    alias: {
      '@styles': '/src/styles'
    }
  }
})
