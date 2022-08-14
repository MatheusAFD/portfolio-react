/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "0.95",
            transform: "translateY(0)",
          },

          "fade-out-down": {
            "0%": {
              opacity: "1",
              transform: "translateX(0)",
            },
            "100%": {
              opacity: "0",
              transform: "translateY(100px)",
            },
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down .5s ease-in-out",
        "fade-out-down": "fade-in-down .5s ease-in-out",
      },
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
