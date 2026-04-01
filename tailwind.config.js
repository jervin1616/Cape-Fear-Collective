/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stone-dark': '#0E0C0A',
        'stone-mid': '#1C1917',
        'stone-warm': '#2C2825',
        'cream': '#F5F0E8',
        'cream-muted': '#A89F94',
        'gold': '#C9A96E',
        'gold-light': '#E8D5B0',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-lg': '0.15em',
      },
    },
  },
  plugins: [],
}
