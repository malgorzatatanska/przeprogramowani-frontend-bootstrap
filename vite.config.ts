import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';

const env = loadEnv('', process.cwd(), 'VITE_ENVIRONMENT');

console.log(env);

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  server: {
    port: 3000,
  },
  plugins: [react(), splitVendorChunkPlugin()],
});
