/* eslint-disable no-dupe-keys */
module.exports = {
  theme: {
    screens: {
      sm: '639px',
      md: '767px',
      lg: '1025px',
      xl: '1279px',
    },
    fontFamily: {
      Helvetica: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      roboto: ['Roboto'],
      body: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      openSans: ['Open Sans', 'Helvetica Neue', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
    fontSize: {
      '4xs': '.375rem', // 6px
      '3xs': '.5rem', // 8px
      '2xs': '.625rem', // 10px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '34px': '2.125rem', // 34px
      '15px': '0.875rem', // 15px
      '13px': '0.8125rem', // 13px
      '26px': '1.625rem', // 26px
      '22px': '1.375rem', // 22px
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      activeBlue: '#107EC3',
    }),
  },
  variants: {
    backgroundRepeat: ['responsive', 'hover', 'focus'],
    backgroundColor: ['active'],
    textColor: ['active'],
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [],
};
