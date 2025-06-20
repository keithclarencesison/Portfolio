export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@chakra-ui/react/dist/**/*.js'
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],

      },
    },
  },
  plugins: [],
}