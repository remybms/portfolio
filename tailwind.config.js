/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#4A919E',
      'pink': '#f19e91',
      'darkpink': '#CE6A6B',
      'darkgrey': '#222222',
      'transparent': 'transparent',
    },
    screens: {
      'phone': '431px',
      'tablet': '720px',
      'pc': '1310px',
    },
  },
  plugins: [],
}

