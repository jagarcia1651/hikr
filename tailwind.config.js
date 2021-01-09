module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        light: '#85d7ff',
        DEFAULT: '#008037',
        dark: '#009eeb',
      },
      brown: {
        light: '#ff7ce5',
        DEFAULT: '#51260e',
        dark: '#ff16d1',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
