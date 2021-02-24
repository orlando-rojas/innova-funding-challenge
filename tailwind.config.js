module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      gray: "#DBDBDB",
      grayLight: "#EDEDED",
      purple: "#4D2DD9",
      purpleDark: "#452CB4",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    opacity: {
      0: "0",
      15: ".15",
      25: ".25",
      30: ".30",
      45: ".45",
      50: ".5",
      100: "1",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
