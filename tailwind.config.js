/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title-script': ['AboveTheBeyond', 'cursive'],
        'body-sans': ['Balgin', 'sans-serif'],
        'title-serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'brand-blue': '#4186b7',
        'brand-purple': '#7d2e8d',
        'brand-pink': '#e86ca7',
        'brand-orange': '#f26a2b',
        'brand-yellow': '#fbb04c',
        'light-gray': '#F8F9FA',
        'medium-gray': '#E9ECEF',
        'dark-gray': '#333333',
        'text-gray': '#6C757D',
      }
    },
  },
  plugins: [],
}
  