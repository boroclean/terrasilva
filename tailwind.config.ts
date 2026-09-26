import type { Config } from "tailwindcss";

const config: Config = {
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
        luxury: {
          50: "#faf8f5",
          100: "#f4efe8",
          200: "#e8ddcf",
          300: "#d7c4ac",
          400: "#c2a585",
          500: "#b08c65",
          600: "#9e7753",
          700: "#805e43",
          800: "#684d39",
          900: "#553f31",
          950: "#2e2118",
        },
        charcoal: {
          800: "#1e2229",
          900: "#14171c",
          950: "#0b0d10",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
