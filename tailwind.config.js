/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F4F7FD",
        primary: "#1585ED",
        primaryDark: "#0A1133",
        secondary: "#F9BF3C",
        text: "#0A1133",
        textWhite: "#FFFFFF",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
