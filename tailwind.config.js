/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "teal",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blur: {
          // Your existing blur keyframes
          "0%, 100%": { filter: "blur(0px)", opacity: "1" },
          "50%": { filter: "blur(4px)", opacity: "0.7" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite", // Your marquee animation
        "blur-text": "blur 3s ease-in-out infinite", // ADD THIS LINE for the blur effect
      },
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
