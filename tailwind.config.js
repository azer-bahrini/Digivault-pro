/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      content: ["var(--font-roboto)"],
      title: ["var(--font-montserrat)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pr: "#2DADE4",
        sc: "#8FC048",
        "text-light-gray": "#A2A2A2",
        "text-dark-gray": "#384448",
        "dark-pr": "#5A6E76",
        "light-pr": "#C2D8E1",
        "warning-red": "#E21C4A",
        "light-warning-red": "#FFE4E6",
        "border-color": "#D4E2E8",
      },
    },
  },
  plugins: [],
};
