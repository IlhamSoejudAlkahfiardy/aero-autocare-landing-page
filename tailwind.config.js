/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        lightBlack: "#181818",
        black: "#090909", // Warna hitam
        gold: "#854d0e", // Warna emas
        hoverGold: "#713f12",
        lightGold: "#ca8a04",
        gradientText: {
          black: "rgb(202, 138, 4)", // Warna dasar
          light: "rgb(255, 208, 149)", // Warna lebih terang untuk gradient
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
