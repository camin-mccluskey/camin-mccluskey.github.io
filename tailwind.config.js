module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    minHeight: {
      '0': '0px',
      '250': '250px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'screen': '100vh'
    },
    extend: {
      keyframes: {
        'blink-caret': {
          '0%, 100%': {
            'border-color': 'transparent',
          },
          '50%': {
            'border-color': '#34D399',
          },
        },
        'typing': {
          '0%': {
            width: '0%'
          },
          '100%': {
            width: '100%'
          },
        },
      },
      animation: {
        'blink-caret': 'blink-caret 1s step-end infinite',
        'typing': 'typing 1.5s steps(16, end) 1.5s 1 normal both, blink-caret 1s step-end infinite'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
