import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Jost'", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#020818",
          900: "#060E2A",
          800: "#0B1640",
          700: "#112055",
          600: "#1A316E",
          500: "#254385",
          400: "#3A5FA3",
          300: "#6080BC",
          200: "#96AECF",
          100: "#D0DAED",
          50:  "#EEF2F9",
        },
        cream: {
          50:  "#FDFCF8",
          100: "#F9F7F0",
          200: "#F3EFE4",
          300: "#E8E1D0",
          400: "#D6CCBA",
          500: "#BFB49F",
        },
        gold: {
          400: "#C9A84C",
          300: "#D4B96A",
          200: "#E2CF96",
          100: "#F0E5C4",
        },
      },
      animation: {
        "fade-up":   "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in":   "fadeIn 0.6s ease forwards",
        "line-grow": "lineGrow 1.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%":   { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
