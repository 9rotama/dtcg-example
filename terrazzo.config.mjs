import { defineConfig } from '@terrazzo/cli';
import tailwind from '@terrazzo/plugin-tailwind';
import css from '@terrazzo/plugin-css';
import js from '@terrazzo/plugin-js';

export default defineConfig({
  tokens: [
    './tokens/digital-go.figma.tokens/Color.tokens.json',
    './tokens/digital-go.figma.tokens/Typography.tokens.json',
    './tokens/digital-go.figma.tokens/Size.tokens.json'
  ],
  plugins: [
    js({
      js: 'tokens.js',
      ts: 'tokens.d.ts'
    }),
    css({
      filename: 'css-tokens.css'
    }),
    tailwind({
      filename: 'tailwind-tokens.css',
      theme: {
        /** @see https://tailwindcss.com/docs/configuration#theme */
        color: ['Color.*'],
        text: ['FontSize.*'],
        font: ['FontFamily.*'],
        'font-weight': ['FontWeight.*'],
        radius: ['BorderRadius.*']
      }
    })
  ],
  outDir: './src/routes/',
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  }
});
