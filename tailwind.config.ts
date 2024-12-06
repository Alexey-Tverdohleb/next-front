import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue-500': '#275FCC',
      'blue-300': '#5D8AE2',
      'blue-200': '#7299E6',
      'primary-blue': '#356DDB',
      'text-blue': '#497CDF',
      'secondary-blue': '#F2F6FC',
      'blue-tertiary': '#DFECFF',
      green: '#22C55E',
      'gray-divider': '#E3E8EC',
      'gray-secondary': '#8A9CA9',
      'dark-gray': '#8C8C8C',
      'light-gray': '#E2E1D9',
      gray: '#8A9CA9',
      'text-gray': '#697A86',
      'gray-bg': '#EDEFF1',
      primary: '#3B454E',
      red: '#EF4444',
      blue: '#86A7E9',
      white: '#FFFFFF',
      'dark-white': '#E1E1E1',
      'dark-blue-200': '#95AEDF',
      'dark-500': '#121212',
      'dark-400': '#1F1F1F',
      'dark-300': '#292929',
      'dark-200': '#565656',
      black: '#000',
    },
    fontSize: {
      xxl: '24px',
      xl: '21px',
      lg: '18px',
      md: '16px',
      sm: '14px',
      xs: '12px',
    },
    extend: {
      spacing: {
        xxl: '32px',
        xl: '24px',
        lg: '18px',
        xmd: '16px',
        md: '12px',
        sm: '8px',
        xs: '6px',
        xxs: '4px',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
    screens: {
      desktop: '1145',
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
