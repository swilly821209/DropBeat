module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      blur: {
        xs: '1px',
      }
    },
    textColor: theme => theme('colors'),
    colors:{
      transparent: 'transparent',
      gray: {
        dark: '#7b7b7b',
        light: '#B5b5b5'
      },
      black: {
        backdrop: '#383838'
      },
      green: {
        light: '#A6ff00'
      },
      orange: '#FF9D83',
      white: '#FFF',
      leightGray: '#ededed'
    },
  },
  variants: {
    extend: {}
  },
  plugins: []
}
