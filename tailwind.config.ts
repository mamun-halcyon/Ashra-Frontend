import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#F9F9F9',
      primary: '#164194',
      secondary: '#F1F1F1',
      black: '#000000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
      },
      fontFamily: {
        gotham: ['var(--font-gotham)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;
