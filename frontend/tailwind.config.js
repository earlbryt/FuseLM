/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00FFF0',
        'cyber-dark': '#1a1f2e',
        'cyber-darker': '#050810',
      },
    },
  },
  plugins: [],
}
