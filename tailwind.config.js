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
          DEFAULT: '#ea580c',
          container: '#c2410c',
          fixed: '#ffedd5',
          'fixed-dim': '#fed7aa',
          'on-container': '#431407',
          'on-primary': '#ffffff',
        },
        'surveyor-lime': '#ea580c',
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
          DEFAULT: '#faf9f6',
          container: '#f3f2ee',
          'container-low': '#f7f6f2',
          'container-high': '#eceae4',
          'container-highest': '#e4e2dc',
          'container-lowest': '#ffffff',
          variant: '#e4e2dc',
        },
        secondary: {
          DEFAULT: '#52525b',
          container: '#e4e4e7',
          'on-container': '#3f3f46',
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
