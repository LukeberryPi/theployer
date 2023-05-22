/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        berryBlue: "#79CBE3",
        offBlack: "#080808",
        weirdWhite: "#E6F4F1",
        otherBlue: "#005065",
      },
    },
  },
  plugins: [],
};
