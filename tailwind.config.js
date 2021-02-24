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
      grayDark: "#5C5B5B",
      silver: "#B1B1B1",
      purple: "#4D2DD9",
      purpleDark: "#452CB4",
      green: "#2D907288",
      greenLight: "#63E5C3",

      tags: {
        blue: "#6D949880",
        default: "#9E997080",
        danger: "#CD6C6980",
      },
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
