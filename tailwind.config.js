/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.{md,vue}',
    './docs/.vitepress/**/*.{ts,vue}',
    './theme-neo/**/*.{ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}
