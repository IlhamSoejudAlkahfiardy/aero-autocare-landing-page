/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlack:'#292524',
        black: "#1c1917", // Warna hitam
        gold: "#854d0e", // Warna emas
        hoverGold:'#713f12',
        lightGold: "#ca8a04",
      },
    },
  },
  plugins: [],
};
