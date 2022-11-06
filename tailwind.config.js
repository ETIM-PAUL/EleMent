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
      },
      gridTemplateColumns: {
        tableGridBody: ".4fr 0.3fr 0.3fr 0.3fr 0.3fr .5fr 0.15fr",
        tableHousesBody: ".3fr 0.3fr .3fr 0.3fr 0.1fr",
        tableHousesHead: ".3fr 0.3fr .3fr 0.3fr 0.1fr",
        tableGridHead: ".4fr 0.3fr 0.3fr 0.3fr 0.3fr .5fr 0.15fr",
      },
    },
  },
  plugins: [],
}
