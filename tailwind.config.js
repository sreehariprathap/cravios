/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F30C59",
          secondary: "#FF5C5C",
          accent: "#5E1AE5",
          neutral: "#35363C",
          "base-100": "#F4F7FA",
          info: "#3A86FF",
          success: "#0AC285",
          warning: "#F8AE1B",
          error: "#F30C59",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xsm: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1836px",
        "4xl": "2236px",
      },
      colors: {
        main: "#5E1AE5"
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
