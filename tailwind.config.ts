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
      },
      fontFamily: {
        'panno': ['"Panno"'],
        'robotoT': ['"RobotoT"'],
        'robotoE': ['"RobotoE"'],
        'robotoL': ['"RobotoL"'],
        'roboto': ['"Roboto"'],
        'lato': ['"Lato"'],
        'latoL': ['"LatoL"'],
      }
    },
  },
  plugins: [],
};
export default config;
