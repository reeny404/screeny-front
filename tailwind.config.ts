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
      sm: "640px",
      md: "768px",
      lg: "1024px",
      max: "1280px",
    },
    extend: {
      colors: {
        navy: "#23262F",
        darkNavy: "#141416",
        carrot: "#F77052",
        "nenutral-1": "#151618",
        "nenutral-2": "#1A1B1E",
        "nenutral-3": "#1B1D23",
        "nenutral-4": "#292A2F",
        "nenutral-5": "#353945",
        "nenutral-6": "#777E90",
        "nenutral-7": "#B1B5C3",
        "nenutral-8": "#E6E8EC",
        "nenutral-9": "#F4F5F6",
        "primary-1": "#3772FF",
        "primary-2": "#9757D7",
        "primary-3": "#EF466F",
        "primary-4": "#45B26B",
        "secondary-1": "#E4D7CF",
        "secondary-2": "#4BC9F0",
        "secondary-3": "#FFD166",
        "secondary-4": "#CDB4DB",
      },
    },
  },
  plugins: [],
};
export default config;
