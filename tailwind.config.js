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
      boxShadow: {
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.0)',
        'dark-lg': '0 10px 15px -3px #34D399, 0 4px 6px -2px #34D399',
      },
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
        'typing': 'typing 1.5s steps(16, end) 1s 1 normal both, blink-caret 1s step-end infinite'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.green.400'),
            },
            pre: {
              'background-color': theme('colors.gray.200'),
              padding: '3px'
            },
            'li::before': {
              color: theme('colors.green.400'),
            },
            h1: {
              'margin-bottom': '0rem',
            },
            '.articleMeta': {
              color: theme('colors.green.400'),
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.green.400'),
            },
            p: {
              color: theme('colors.white'),
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            li: {
              color: theme('colors.white'),
            },
            'li::before': {
              color: theme('colors.green.400'),
            },
            pre: {
              'background-color': theme('colors.gray.900'),
              padding: '3px'
            },
            'p.articleMeta': {
              color: theme('colors.green.400'),
            },
          },
        }
      }),
      listStyleType: (theme) => ({
        decimal: {
          color: theme('colors.white'),
        },
      }),
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      typography: ['dark'],
      listStyleType: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
