/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: "#181818",
        black: "#090909", // Warna hitam
        hoverBlack: "#2F2F2F", // Warna hitam
        lightGold: "#EBBE87",
        gold: "#B28752", // Warna emas
        hoverGold: "#B77B32",
        gradientText: {
          black: "rgb(202, 138, 4)", // Warna dasar
          light: "rgb(255, 208, 149)", // Warna lebih terang untuk gradient
        },
        textWhite:'#d4d4d8',
        testingColor: "#1A1A1A",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
