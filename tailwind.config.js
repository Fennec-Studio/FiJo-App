/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'Midnight-Blue': '#05116A',
        'Deep-Blue': '#072E33',
        'Intense-Turquoise': '#0c7075',
        'Bright-Cyan': '#0F969C',
        'Serene-Blue': '#6DA5C0',
        'Navy-Blue': '#294D61'
      },
      screens: {
        'desktop': '1024px'
      },
    },
  },
  plugins: [],
}
