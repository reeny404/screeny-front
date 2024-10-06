import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
