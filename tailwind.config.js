/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    appearance: false,
  },
};
