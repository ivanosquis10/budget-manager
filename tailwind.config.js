/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        shark: {
          50: '#f5f7f8',
          100: '#e0e3e7',
          200: '#c0c6cf',
          300: '#99a1af',
          400: '#737d8e',
          500: '#596273',
          600: '#464d5b',
          700: '#3a404b',
          800: '#31353e',
          900: '#2c2e35',
          950: '#1a1c22'
        }
      }
    }
  },
  plugins: []
}
