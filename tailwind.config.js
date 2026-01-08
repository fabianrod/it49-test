/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores primarios
        primary: {
          blue: '#114177',
          'blue-dark': '#204186',
          'blue-light': '#0e76c0',
          'blue-accent': '#0099FF',
        },
        // Colores secundarios
        secondary: {
          yellow: '#f5c143',
          'light-blue': '#e9f2fb',
        },
        // Colores neutros
        neutral: {
          black: '#010101',
          gray: '#556d8a',
          white: '#ffffff',
        },
        // Mantener compatibilidad con código existente
        'blue-dark': '#1e3a5f',
        'blue-light': '#2d5a8a',
        'yellow-btn': '#ffd700',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}
