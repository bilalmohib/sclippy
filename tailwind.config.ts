import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: 'selector',
  preflight: true,
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    typography: (theme: any) => ({}),
    extend: {
      fontFamily: {
        raleway: ['"Raleway", sans-serif', ...defaultTheme.fontFamily.sans],
        inika: ["Inika", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#5452B2",
        buttons: "#0E3EE6",
        navText: "#2B2525"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
