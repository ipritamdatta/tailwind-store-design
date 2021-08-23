module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily:{
      gotham: ['Gotham Pro', 'sans-serif']
    },
    extend: {
      fontSize: {
        '8xl': '6rem'
      },
      spacing:{
        '144':'36rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
