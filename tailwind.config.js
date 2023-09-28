/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage:{
        'fondoProjectR':"url('https://i.pinimg.com/originals/7b/e9/3e/7be93eab8555eda4b74b7b0cb9840164.jpg')",
        'fondoCrazyRacy': "url('https://i.pinimg.com/originals/83/70/e8/8370e8a8c5b9bc20fed994fbe1f6f46e.jpg')",
      },
      keyframes: {
        'showUp': {
          '0%': { opacity: '0', position:"relative", top:"10rem" },
          '40%': { position:"relative", top:"10rem" },
          '60%': { position:"relative", top:"0rem" },
          '100%': { opacity: '1', position:"static" },
        },
        "questions": {
          '0%': { opacity: '0' },
          '60%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        'showUp': 'showUp 5s ease-in-out',
        'questions': 'questions 5s ease-in-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}