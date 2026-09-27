/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        'deep-shadow': '#0B0C10',
        bone: '#E8E3D8',
        'lunar-silver': '#BFC3C7',
        ash: '#777A7D',
        'ancient-gold': '#A88A5A',
        'moonlight': '#D8E1E5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'grain-shift': 'grainShift 0.5s steps(2) infinite',
      },
      keyframes: {
        grainShift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-5px,-5px)' },
        },
      },
    },
  },
  plugins: [],
};
