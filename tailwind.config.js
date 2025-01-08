/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00bdd6',
          light: '#4ccfe1',
          dark: '#00abc2',
        },
        secondary: {
          DEFAULT: '#80deea',
          light: '#b4ffff',
          dark: '#4bacb8',
        },
      },
    },
  },
  plugins: [],
};