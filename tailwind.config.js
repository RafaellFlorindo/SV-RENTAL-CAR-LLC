/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: '#080C11',
        midnight: '#0E1622',
        card: '#131F2E',
        'card-hover': '#18273A',
        gold: {
          DEFAULT: '#C5A059',
          light: '#E5CB96',
          dark: '#9A7A38',
          subtle: 'rgba(197, 160, 89, 0.15)'
        },
        slate: {
          750: '#233042',
          850: '#141E2B'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
        'luxury': '0 20px 50px -10px rgba(0, 0, 0, 0.8)'
      }
    },
  },
  plugins: [],
}
