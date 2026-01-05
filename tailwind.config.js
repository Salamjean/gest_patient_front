/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2da442',
        'primary-blue': '#014b85',
        'white': '#ffffff',
      },
    },
  },
  safelist: [
    'bg-primary-blue',
    'bg-primary-green',
    'text-primary-blue',
    'text-primary-green',
    'border-primary-blue',
    'border-primary-green',
    'hover:bg-primary-blue/80',
    'focus:ring-primary-green',
    'focus:ring-primary-blue/50',
    'hover:text-primary-green',
  ],
  plugins: [],
}