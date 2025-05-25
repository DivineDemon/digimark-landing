/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 12s linear infinite",
      },
    },
  },
};
