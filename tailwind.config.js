module.exports = {
  content: ["./pages/*", "./components/*"],
  theme: {
    extend: {
      screens: {
        xs: "345px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
