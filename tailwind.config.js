/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#000000",
          100: "#008080",
          200: "#BABABA",
          300: "#D9D9D9",
          400: "#C0C0C0"
        },
        light: {
          50: "#FDFFFF ",
          100: "#E3E3E3 ",
          200: "#010081 ",
        },
      },
    },
  },
  plugins: [],
};
