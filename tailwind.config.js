/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "white": "#ffffff",
      "black": "#000000",
      "gray": "#7f7f7f",
      "lgray": "#e8e5e480",
    },
    extend: {
      width: {
        "50": "50rem",
      }
    },
  },
  plugins: [],
};
