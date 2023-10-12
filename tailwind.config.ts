import type { Config } from 'tailwindcss';

const config: Config = {
  content : [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme : {
    extend : {
      backgroundImage : {
        'gradient-radial' : 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic' : 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bluelogo: '#0283C4',
      },
      minWidth: {
        '300': '300px',
      },
      boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins : [],
};
export default config;
