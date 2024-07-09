/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        emblem: ["emblem", "sans-serif"],
      },
      colors: {
        "custom-blue": "#009ACE",
      },
    },
  },
  plugins: [],
};
