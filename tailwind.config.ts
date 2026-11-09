import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f8f1",
          100: "#dbe7d8",
          300: "#9bd36a",
          500: "#2f8f3e",
          600: "#26782f",
          700: "#14532d",
          900: "#0c2a17",
          950: "#071a0e",
        },
        gold: { 300: "#e9d77a" },
        lime: { brand: "#6ee000" },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(3deg)" },
        },
      },
      animation: { float: "float 7s ease-in-out infinite" },
    },
  },
  plugins: [],
};

export default config;
