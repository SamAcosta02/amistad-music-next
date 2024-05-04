/* eslint-disable quotes */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dark-blue': '#004283',
        'nav-blue': '#014B8B',
        'dark-select-blue': '#003366',
        'light-blue': '#0096D5',
        'light-gray': '#D9D9D9',
        orange: '#FF5C2C',
        'select-orange': '#EA400D',
        'select-blue': '#008ECA',
        'focus-black': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
