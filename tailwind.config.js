/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004b87',
          container: '#1363ac',
          fixed: '#d3e3ff',
          'fixed-dim': '#a3c9ff',
          'on-container': '#cbdfff',
          'on-primary': '#ffffff',
        },
        'surveyor-lime': '#6EF712',
        charcoal: '#11161f',
        'stone-charcoal': '#11161f',
        stone: {
          charcoal: '#11161f',
        },
        'rebar-steel': '#3E4651',
        'concrete-sand': '#F5F4F0',
        'concrete-aggregate': '#D2CECA',
        'concrete-honed': '#E7E5E0',
        surface: {
          DEFAULT: '#f7f9ff',
          container: '#eaeef5',
          'container-low': '#f0f4fb',
          'container-high': '#e4e8ef',
          'container-highest': '#dee3ea',
          'container-lowest': '#ffffff',
          variant: '#dee3ea',
        },
        secondary: {
          DEFAULT: '#53606d',
          container: '#d3e1f1',
          'on-container': '#576472',
        },
        'on-surface': '#171c21',
        'on-surface-variant': '#414751',
      },
      fontFamily: {
        sans: ['"Work Sans"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
    },
  },
  plugins: [],
}
