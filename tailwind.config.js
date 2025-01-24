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
      'darkblue': '#212E53',
      'blue': '#4A919E',
      'pastel': '#BED3C3',
      'pink': '#EBACA2',
      'darkpink': '#CE6A6B',
      'transparent': 'transparent',
      'js': '#E4C01A',
      'java': '#d52827',
      'python': '#3e74a2',
      'php': '#556096',
      'c#': '#6f0885'
    },
    screens: {
      'phone': '431px',
      'tablet': '720px',
      'pc': '1310px',
    },
  },
  plugins: [],
}

