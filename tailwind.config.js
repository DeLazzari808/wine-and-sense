/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // MUDANÇA DE TEMA: Novas fontes baseadas na referência
      fontFamily: {
        'title-serif': ['Playfair Display', 'serif'],
        'body-sans': ['Montserrat', 'sans-serif'],
      },
      // MUDANÇA DE TEMA: Nova paleta de cores
      colors: {
        'brand-purple': '#7A3A8F',
        'brand-pink': '#E75A82',
        'brand-blue': '#4A8CB7',
        'brand-orange': '#F26430',
        'brand-peach': '#F9A25E',
        'light-gray': '#F8F9FA',
        'medium-gray': '#E9ECEF',
        'dark-gray': '#333333',
        'text-gray': '#6C757D',
      }
    },
  },
  plugins: [],
}
  