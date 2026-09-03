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
          950: '#131514',
          900: '#191C1A',
          850: '#202421',
          800: '#2B302C',
          700: '#3A403B'
        },
        gold: {
          DEFAULT: '#A94F2B',
          light: '#C16A44',
          dark: '#823A20',
          bg: '#F4E7DF'
        },
        surface: {
          light: '#FFFFFF',
          muted: '#F4F6F9',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Libre Franklin"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(19, 21, 20, 0.14)',
        card: '0 18px 50px rgba(19, 21, 20, 0.08)'
      }
    },
  },
  plugins: [],
}
