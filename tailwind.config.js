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
        'laHuida': "url('https://img.itch.zone/aW1hZ2UvMTI2MjU1Ni84NDUyNzUwLmpwZw==/794x1000/8OxyT8.jpg')",
        'timeWanderer': "url('https://img.itch.zone/aW1nLzU2OTc0NDkucG5n/315x250%23c/uJtp%2BL.png')",
        'fondoProjectR':"url('https://i.pinimg.com/originals/7b/e9/3e/7be93eab8555eda4b74b7b0cb9840164.jpg')",
        'fondoCrazyRacy': "url('https://i.pinimg.com/originals/83/70/e8/8370e8a8c5b9bc20fed994fbe1f6f46e.jpg')",
        'tercios': "url('https://i.pinimg.com/564x/b3/52/d9/b352d94afb27323291732a299233414f.jpg')",
        'cssProyects': "url('https://i.pinimg.com/564x/ff/73/bb/ff73bbb43e051f63aa16ef642c904988.jpg')",
      },
      keyframes: {
        'showUp': {
          '0%': { opacity: '0', top:"10rem" },
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