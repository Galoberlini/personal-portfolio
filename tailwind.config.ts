import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
      },
      colors: {
        bg: "var(--bg-color)",
        text: "var(--text-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        third: "var(--third-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
