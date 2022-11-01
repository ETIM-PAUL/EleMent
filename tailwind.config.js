module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#645CAA',
        'container-bg': '#eaeaea',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
      },
      colors: {
        'main-col': '#645CAA',
        'secondary-col': '#818181',
        'plain': '#eaeaea'
      },
      boxShadow: {
        'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      borderRadius: {
        'normal': '20px',
      }
    },
  },
  plugins: [],
}
