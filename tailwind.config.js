/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: "#111827",
      },
      spacing: {
        "minArticle": "40em",
        "maxArticle": "70em"
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      mania: ["mania", "sans-serif"],
      popcorn: ["popcorn", "sans-serif"],
      nanum: ["nanum", "sans-serif"],
      montserrat: ["montserrat", "sans-serif"],
    }
  },
  plugins: [],
}