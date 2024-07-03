/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Helvetica"', 'sans-serif'],
      serif: ['"Droid Serif"', 'serif']
    },
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('./assets/coffee.png')",
        'me-image': "url('./assets/me.png')"
      })
    },
  },
  plugins: [],
}
