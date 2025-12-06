import { defineConfig } from '@terrazzo/cli';
import tailwind from '@terrazzo/plugin-tailwind';
import css from '@terrazzo/plugin-css';
export default defineConfig({
  tokens: ['./tokens/digital-go.tokens.json'],
  plugins: [
    css({
      filename: "css-tokens.css"
    }),
    tailwind({
      filename: "tailwind-tokens.css",
      theme: {
        /** @see https://tailwindcss.com/docs/configuration#theme */
        colors: ['Color.Color.*'],
        text: ['Typography.FontSize.*'],
        font: ['Typography.FontFamily.*'],
        radius: ['Size.BorderRadius.*']
      }
    })
  ],
  outDir: './src/routes/',
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  }
});
