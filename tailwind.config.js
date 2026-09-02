/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#09121F',
          900: '#0E1D31',
          850: '#14253E',
          800: '#1A304F',
          700: '#233E65'
        },
        gold: {
          DEFAULT: '#C59A45',
          light: '#E2BD75',
          dark: '#A67D28',
          bg: '#F9F5EC'
        },
        surface: {
          light: '#FFFFFF',
          muted: '#F4F6F9',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
