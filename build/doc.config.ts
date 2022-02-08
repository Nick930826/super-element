import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/super-element',  // 对应仓库的项目名称
  build: {
    outDir: 'docs',
  },
});
