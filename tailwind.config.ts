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
      },
      colors: {
        'dot6': 'rgba(255, 255, 255, .6)',
        'dot7': 'rgba(255, 255, 255, .7)',
        'dot8': 'rgba(255, 255, 255, .8)',
        'dot9': 'rgba(255, 255, 255, .9)',
        'bdot9': 'rgba(0, 0, 0, .9)',
        'bdot8': 'rgba(0, 0, 0, .8)',
        'bdot4': 'rgba(0, 0, 0, .4)',
      },
    },
  },
  plugins: [],
};
export default config;
