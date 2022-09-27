/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(\w+)-(\d+)/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
