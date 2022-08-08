/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        negative: "0px 96px 0px 0px #181824",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      borderRadius: {
        extend: "100px 100px 0px 0px",
      },
      colors: {
        purple: {
          700: "#7562E0",
          800: "#282162",
          900: "#000036",
        },
        gray: {
          200: "#F5F5F5",
          300: "#bdbdbd",
          400: "#848191",
        },
        dark: {
          800: "#191a28",
          900: "#181824",
        },
      },
    },
  },
  plugins: [],
};
