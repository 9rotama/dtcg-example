import { defineConfig } from '@terrazzo/cli';
import js from '@terrazzo/plugin-js';
import css from '@terrazzo/plugin-css';
import tailwind from '@terrazzo/plugin-tailwind';
export default defineConfig({
  tokens: ['./tokens.json'],
  plugins: [
    js(),
    css(),
    tailwind(),
  ],
  outDir: './dist/',
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  },
});