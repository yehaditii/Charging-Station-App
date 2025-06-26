// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ← important for dark mode toggle
  theme: {
    extend: {},
  },
  plugins: [],
}