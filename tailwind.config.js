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
      boxShadow: (theme) => ({
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.0)',
        'dark-lg': `0 10px 15px -3px ${theme("colors.green.400")}, 0 4px 6px -2px ${theme("colors.green.400")}`,
        'purple-lg': `0 10px 15px -3px ${theme("colors.purple.600")}, 0 4px 6px -2px ${theme("colors.purple.600")}`,
      }),
      keyframes: (theme) => ({
        'dark-blink-caret': {
          '0%, 100%': {
            'border-color': 'transparent',
          },
          '50%': {
            'border-color': theme("colors.green.400"),
          },
        },
        'blink-caret': {
          '0%, 100%': {
            'border-color': 'transparent',
          },
          '50%': {
            'border-color': theme("colors.purple.600"),
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
      }),
      animation: {
        'blink-caret': 'blink-caret 1s step-end infinite',
        'dark-blink-caret': 'dark-blink-caret 1s step-end infinite',
        'typing': 'typing 1.5s steps(16, end) 1s 1 normal both, blink-caret 1s step-end infinite',
        'dark-typing': 'typing 1.5s steps(16, end) 1s 1 normal both, dark-blink-caret 1s step-end infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.purple.600'),
            },
            pre: {
              'background-color': theme('colors.gray.200'),
              padding: '3px'
            },
            h1: {
              'margin-bottom': '0rem',
            },
            'ol > li::before': {
              color: theme('colors.purple.600'),
            },
            'ul > li::before': {
              'background-color': theme('colors.purple.600'),
            },
            '.articleMeta': {
              'padding-top': '0rem',
              'padding-bottom': '0rem',
            },
            '.articleMeta > p': {
              'margin-top': '0rem',
              'margin-bottom': '0rem',
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
            'ol > li::before': {
              color: theme('colors.green.400'),
            },
            'ul > li::before': {
              'background-color': theme('colors.green.400'),
            },
            pre: {
              'background-color': theme('colors.gray.900'),
              padding: '3px'
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
      animation: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
