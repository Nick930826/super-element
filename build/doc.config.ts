import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/super-element',
  build: {
    outDir: 'docs',
  },
});
