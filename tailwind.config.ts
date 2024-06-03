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
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      screens: {
        'sssm:': '320px',
        'ssm': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xlg': '1150px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      borderRadius: {
        "2.5xl": "20px"
      },
      boxShadow: {
        'course_card-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        contactFormShadow: "0px 4px 9.3px 0px rgba(0, 0, 0, 0.25)"
      },
      margin: {
        "4.5": "14px"
      },
      width: {
        "80%": "80%",
        "428px": "428px",
        "508px": "508px",
        "600px": "600px",
      },
      height: {
        "284px": "284px",
        "416px": "416px",
        "554px": "554px",
        "600px": "600px",
        "342px": "342px",
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
        bannerHeadingText: "#2220A5",
        bannerHeadingCaption: "rgba(0, 0, 0, 0.70)",
        lightHeadingText: "#030098",
        darkHeadingText: "#8ab9ee",
        courseCardText: "#0B0B0A",
        courseCardLightBg: "#E9E9E9",
        courseCardDarkBg: "#272727",
        courseCardDarkButtonText: "#FFFDFD",

        // Pricing Page
        pricingCardBg: "#F9F8F8",
        pricingCardHeading: "rgba(11, 11, 10, 0.90)",

        // About Us Page 
        aboutUsLeftBannerBg: "#DBAE10",
        aboutUsRightBannerBg: "#E9D694",
        aboutGoalsHeader: "#FBFBFF",
        aboutGoalsBottomBar: "#DEAE07",
        appSecondary: "#F0F0F0",

        // Contact Us Form 
        contactFormHeading: "#000007",
        contactFormSubHeading: "#1D1C1C"
      },
      backgroundImage: {
        'banner-keyboard': "url('/Home/banner.png')",
        "simulator-banner": "url('/simulator/simulator-banner.png')",
      },
      fontSize: {
        "40px": "40px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
export default config;
