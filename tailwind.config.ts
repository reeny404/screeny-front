import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.5rem",
      sm: "0.8rem",
      "base-s": "0.875rem",
      base: "1rem",
      "base-l": "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      xs: "280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "#23262F",
        "dark-navy-100": "#1B1D23",
        "dark-navy-200": "#141416",
        carrot: "#F77052",
      },
    },
  },
  plugins: [],
};
export default config;
