/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Vinque Rg", "serif"],
      },
      animation: {
        "expand-vertical": "expand-vertical 1s linear",
        "expand-horizontal": "expand-horizontal 1s linear",
        "fade-in": "fade-in 0.5s ease-in",
      },
      keyframes: {
        "expand-vertical": {
          "0%": {
            maxHeight: "0",
          },
          "100%": { maxHeight: "110vh" },
        },
        "expand-horizontal": {
          "0%": {
            maxWidth: "0",
          },
          "100%": { maxWidth: "110vw" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
