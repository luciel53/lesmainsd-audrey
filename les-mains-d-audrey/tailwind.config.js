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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#BD8334",
        pink: "#D25D8F",
        lightPink: "#DF9AC5",
        veryLightPink: "#FFDEF0",
        lightBG: "#F3F2F0",
      },
      fontFamily: {
        brittany: ['BrittanySignature', 'serif'],
        italiana: ['Italiana-Regular', 'serif'],
        jaldi: ['Jaldi-Regular', 'sans-serif'],
      },
      textAlign: {
        justify: 'justify',
      },
      backgroundImage: {
        background: "url('/images/baby-hand-opacity.jpg')",
      },
      lineClamp: {
        2: '2',
      },

    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require('@tailwindcss/line-clamp'),
  ],
};
