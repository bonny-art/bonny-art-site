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
  darkMode: 'class',
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
        bgLt: '#F0F0F0',
        bgDt: '#171717',
        bgFormLt: '#FFFFFF',
        bgFormDt: '#171717',
        accentBgLt: '#FFFFFF',
        accentBgDt: '#222222',
        additionalLt: '#FFEECC',
        additionalDt: '#2E281E',
        additionalVarLt: '#FFEECC',
        additionalVarDt: '#222222',
        additionalVar2Lt: '#FFEECC',
        additionalVar2Dt: '#171717',
        accentLt: '#F1951E',
        accentDt: '#F6B637',
        hoverLt: '#E58200',
        hoverDt: '#FFC87A',
        accent40Lt: '#F1951E66',
        accent40Dt: '#F6B63766',
        textLt: '#332F23',
        textDt: '#FFFCF5',
        textInvertLt: '#FFFCF5',
        textInvertDt: '#332F23',
        text60Lt: '#332F2399',
        text60Dt: '#FFF8EB99',
        backdrop: '#222222B3',
        error: '#FF3030',
        white: '#FFFCF5',
        black: '#171717',

        // bgColorDt: '#171717', // rgba(23, 23, 23, 1)
        // bgColorLt: '#F0F0F0', // rgba(240, 240, 240, 1)
        // accentBgColorDt: '#222222', // rgba(34, 34, 34, 1)
        // accentBgColorLt: '#FFFFFF', // rgba(255, 255, 255, 1)
        // additionalColorDt: '#3E3628', // rgba(62, 54, 40, 1)
        // additionalColorLt: '#FFEECC', // rgba(255, 238, 204, 1)
        // accentColorDt: '#F6B637', // rgba(246, 182, 55, 1)
        // accentColorLt: '#F1951E', // rgba(241, 149, 30, 1)
        // accentHoverColorDt: '#F8C45E', // rgba(248, 196, 94, 1)
        // accentHoverColorLt: '#F08800', // rgba(240, 136, 0, 1)
        // accentColor40Dt: '#F6B63766', // rgba(246, 182, 55, 0.4)
        // accentColor40Ll: '#F1951E66', // rgba(241, 149, 30, 0.4)
        // textColorDt: '#FFFCF5', // rgba(255, 252, 245, 1)
        // textColorLt: '#332F23', // rgba(51, 47, 35, 1)
        // textColor60Dt: '#FFF8EB99', // rgba(255, 248, 235, 0.6)
        // textColor60Lt: '#332F2399', // rgba(51, 47, 35, 0.6)
        // backdropDk: '#222222B3', // rgba(34, 34, 34, 0.7)
        // errorColor: '#FF3030', // rgba(255, 48, 48, 1)
      },
      fontFamily: {
        comfortaa: 'var(--font-comfortaa), sans-serif',
        marmelad: 'var(--font-marmelad), sans-serif',
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
