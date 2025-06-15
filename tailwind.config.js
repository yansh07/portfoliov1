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
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }, // Corrected for duplicated content
        },
        blur: {
          "0%, 100%": { filter: "blur(0px)", opacity: "1" },
          "50%": { filter: "blur(4px)", opacity: "0.7" },
        },
        "gradient-move": {
          // This is for the animated background
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        "blur-text": "blur 3s ease-in-out infinite",
        "gradient-bg": "gradient-move 30s ease infinite", // This is for the animated background
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
