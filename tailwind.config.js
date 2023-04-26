/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF6D60",
          secondary: "#F7D060",
          accent: "#009FBD",
          neutral: "#35363C",
          "base-100": "#F4F7FA",
          info: "#210062",
          success: "#24A897",
          warning: "#F8AE1B",
          error: "#E53E4F",
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
        main: "#210062"
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
