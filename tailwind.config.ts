import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

const config: Config = {
  darkMode: 'selector',
  important: true,
  corePlugins: {
    preflight: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      width: {
        "80%": "80%"
      },
      fontFamily: {
        raleway: ['"Raleway", sans-serif', ...defaultTheme.fontFamily.sans],
        inika: ["Inika", ...defaultTheme.fontFamily.serif],
        kavivanar: ["Kavivanar", 'cursive'],
        inter: ["Inter", ...defaultTheme.fontFamily.serif]
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        primary: "#5452B2",
        buttons: "#0E3EE6",
        navText: "#2B2525",
        lightHeadingText: "#030098",
        darkHeadingText: "#8ab9ee",
        aboutUsLeftBannerBg: "#DBAE10",
        aboutUsRightBannerBg: "#E9D694"
      },
      backgroundImage: {
        'banner-keyboard': "url('/Home/banner.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
export default config;
