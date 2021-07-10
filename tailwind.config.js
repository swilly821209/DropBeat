module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      gray: '#7b7b7b',
      orange: '#FF9D83',
      white: '#FFF'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
