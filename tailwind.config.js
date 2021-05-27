module.exports = {
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        "max-w-screen-sm",
        "max-w-screen-md",
        "max-w-screen-lg",
        "max-w-screen-xl",
      ],
    },
  },
  theme: {},
  variants: {},
  plugins: [],
};
