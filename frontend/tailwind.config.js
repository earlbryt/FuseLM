/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00D9D9',
        'cyber-dark': '#0A0E1A',
        'cyber-darker': '#050810',
      },
    },
  },
  plugins: [],
}
