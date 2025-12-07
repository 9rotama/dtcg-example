import { defineConfig } from '@terrazzo/cli';
import tailwind from '@terrazzo/plugin-tailwind';
import css from '@terrazzo/plugin-css';
import js from "@terrazzo/plugin-js";

export default defineConfig({
  tokens: ['./tokens/digital-go.tokens.json'],
  plugins: [
    js({
      js: "tokens.js",
      ts: "tokens.d.ts"
    }),
    css({
      filename: 'css-tokens.css'
    }),
    tailwind({
      filename: 'tailwind-tokens.css',
      theme: {
        /** @see https://tailwindcss.com/docs/configuration#theme */
        color: ['Color.Color.*'],
        text: ['Typography.FontSize.*'],
        font: ['Typography.FontFamily.*'],
        "font-weight": ['Typography.FontWeight.*'],
        radius: ['Size.BorderRadius.*'],
        shadow: ['Effect-styles.Elevation.*']
      }
    })
  ],
  outDir: './src/routes/',
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  }
});
