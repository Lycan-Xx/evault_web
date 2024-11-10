/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0A2342',
        'dark-secondary': '#133B5F',
        'light-primary': '#FFFFFF',
        'light-secondary': '#F4F4F4',
        fontFamily: {
          mono: ['Ubuntu Mono', 'monospace'],
          sans: ['Roboto', 'sans-serif'],
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}