/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nimasa-blue': '#1F52DA',
        'nimasa-light-blue': '#5390C1',
        'nimasa-sky-blue': '#249EFF',
        'nimasa-green': '#009650',
        'nimasa-yellow': '#FFC107',
        'nimasa-gold': '#EAB308',
        'nimasa-red': '#FF0000',
        'nimasa-dark-text': '#333333',
        'background-gray': '#EEEEEE',
        'input-bg': '#F5F5F5',
        'table-header-gray': '#D9D9D9',
      },
      fontFamily: {
        ubuntu: ['"Ubuntu"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
