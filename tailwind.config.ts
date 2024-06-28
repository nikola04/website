import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#111111',
      'gray': '#2f2f2f',
      'white': '#F6F6F6',
      'accent': {
        DEFAULT: '#FFCB74',
        dark: '#DC9E32',
      },
    },
    extend: {
      minHeight: {
        '33-svh': '33svh'
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
export default config;
