/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      colors: {
        text: '#ebe7e5',
        background: '#181a1b',
        primary: '#d3b878',
        secondary: '#99741e',
        accent: '#fabd2f',
      },
    }
  },
  plugins: []
};