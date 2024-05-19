module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'vietnam': ['Be Vietnam Pro', 'sans-serif']
      },
      colors: {
        'primary-color': '#F65151',
        'secondary-red': '#A33333'
      },
      backgroundImage: {
        'working-man': "url('assets/images/man-working-factory.jpeg')"
      }
    },
  },
  plugins: [],
}