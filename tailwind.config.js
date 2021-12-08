module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainColor: '#E5E11B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
