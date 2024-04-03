/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { min: "280px" },
      sm: { min: "360px" },
      md: { min: "430px" },
      lg: { min: "786px" },
      xl: { min: "1280px" },
      "2xl": { min: "1400px" },
      "3xl": { min: "1600px" },
      "4xl": { min: "1730px" },
      "5xl": { min: "1920px" },
    },
    fontFamily: {
      rubik: "Rubik, sans-serif",
    },
  },
  plugins: [],
};
