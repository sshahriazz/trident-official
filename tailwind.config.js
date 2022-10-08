/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 10s linear infinite',
      },
      colors: {
        // white: "#F4F7FD",
        // note : primary color is picked form the tailwind sky vairent.
        primary: {
          100: "#CFF1FE",
          200: "#A0DFFD",
          300: "#71C5F9",
          400: "#4DACF4",
          500: "#1585ED", // main primary color code
          600: "#0F67CB",
          700: "#0A4DAA",
          600: "#063689",
          900: "#042671",
        },
        primaryDark: {
          100: "#CDD6F4",
          200: "#9FB0EA",
          300: "#6477C1",
          400: "#344384",
          500: "#0A1133", // secondary primary color code
          600: "#070C2B",
          700: "#050924",
          800: "#03061D",
          900: "#010418",
        },
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        Italiana: ["Italiana", "sans-serif"],
      },
    },
  },
  plugins: [],
});
