/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: '#196144',
        bot: '#17B890',
        user: '#082D0F',
      },
      boxShadow: {
        // xl: '5px 0px 35px rgba(0,0,0,0.7)',
        lg: '3px 0px 5px rgba(0,0,0,0.1)',
        sm: '0px 0px 25px rgba(0,0,0,0.2)',
        md: '0px 0px 15px rgba(0,0,0,0.2)',
        // xl: '0px 0px 5px rgba(0,0,0,0.9)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
