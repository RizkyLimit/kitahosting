// tailwind.config.js
module.exports = {
    content: [
      "./*.{html,js}",
      "./src/**/*.{html,js}",
    ],
    theme: {
      extend: {
        colors: {
          'blue-600': '#1D4ED8',
          'blue-700': '#1E40AF',
          'gray-100': '#F3F4F6',
          'gray-800': '#1F2937',
        },
        fontFamily: {
          'sans': ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  