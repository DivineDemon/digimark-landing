import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        secondary: "#12242E",
        brand: {
          "25": "#F3FBE8", // Very light tint of #6bb64a
          "50": "#E6F6D1", // Light tint
          "100": "#CDEBAC", // Light
          "200": "#B2DE8A", // Lighter
          "300": "#96D169", // Light-medium
          "400": "#7CC74F", // Medium
          "500": "#6BB64A", // Base color
          "600": "#5A9A3E", // Slightly darker
          "700": "#497D32", // Dark
          "800": "#386226", // Darker
          "900": "#27491A", // Very dark
          "950": "#1C3512", // Almost black
        },
      },
      keyframes: {
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
