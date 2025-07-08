// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./**/*.{html,js}"],

//   theme: {
//     extend: {
//       colors: {
//         accent: "teal",
//       },

//       keyframes: {
//         marquee: {
//           "0%": { transform: "translateX(0%)" },

//           "100%": { transform: "translateX(-100%)" },
//         },

//         blur: {
//           // Your existing blur keyframes

//           "0%, 100%": { filter: "blur(0px)", opacity: "1" },

//           "50%": { filter: "blur(4px)", opacity: "0.7" },
//         },
//       },

//       animation: {
//         marquee: "marquee 15s linear infinite", // Your marquee animation

//         "blur-text": "blur 3s ease-in-out infinite", // ADD THIS LINE for the blur effect
//         "gradient-bg": "gradient-move 30s ease infinite",
//       },

//       fontFamily: {
//         heading: ["Montserrat", "sans-serif"],

//         body: ["Inter", "sans-serif"],
//       },
//     },
//   },

//   plugins: [],

//   corePlugins: {
//     appearance: false,
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "teal",
      },
      fontFamily: {
        body: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Open Sans"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        heading: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Open Sans"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blur: {
          "0%, 100%": { filter: "blur(0px)", opacity: "1" },
          "50%": { filter: "blur(4px)", opacity: "0.7" },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradientMove: "gradientMove 15s ease infinite",
        blob1: "blob 20s ease-in-out infinite",
        blob2: "blob 25s ease-in-out infinite",
        marquee: "marquee 15s linear infinite",
        "blur-text": "blur 3s ease-in-out infinite",
        "gradient-bg": "gradient-move 5s ease infinite",
      },
    },
  },
  plugins: [],
  corePlugins: {
    appearance: false,
  },
};
