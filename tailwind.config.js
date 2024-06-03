/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobil: "320px",
      tablet: "768px",
      md: { max: "871px" },
      mdMin: "871px",
      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [],
  variants: {},
};
