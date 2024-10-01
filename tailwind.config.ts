import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1280px',
      xsOnly: { max: '374px' },
      smOnly: { max: '767px' },
      mdOnly: { min: '768px', max: '1279px' },
      notXL: { max: '1279px' },
    },
    extend: {
      colors: {
        blackPrimary: 'rgb(38, 38, 38)',
        blackPrimaryFiftyPercent: 'rgba(38, 38, 38, 0.5)',
        blackPrimarySixtyPercent: 'rgba(38, 38, 38, 0.6)',
        blackPrimaryThirtyPercent: 'rgba(38, 38, 38, 0.3)',
        blackPrimaryLight: 'rgba(38, 38, 38, 0.15)',
        blackPrimaryCard: ' rgb(43, 43, 42)',

        orangePrimary: 'rgb(246, 184, 61)',
        orangePrimaryActive: 'rgb(249, 176, 32)',
        orangeLight: 'rgb(255, 244, 223)',
        orangeDim: ' rgb(251, 231, 193)',

        white: 'rgb(255, 255, 255)',
        whiteTransparencyZeroFour: 'rgba(255, 255, 255, 0.4)',
        mainBackground: ' rgb(249, 249, 249)',

        greenRight: 'rgb(8, 170, 131)',
        redWrong: 'rgb(239, 36, 71)',
      },
      fontFamily: {
        manrope: 'var(--font-manrope), sans-serif',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '32px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
