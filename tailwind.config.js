module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    textAlign: false,
    container: false,
    display: false,
    padding: false,
    margin: false
  },
  plugins: []
}
