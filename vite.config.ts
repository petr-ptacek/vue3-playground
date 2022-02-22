import * as path                from 'path';
import { defineConfig }         from 'vite';
import vue                      from '@vitejs/plugin-vue';
import Inspect                  from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Inspect()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify('version 0.0.1')
  }
});