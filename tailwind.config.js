/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "airplane-takeoff-left": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "100%": { transform: "translate(-50px, -50px) rotate(-8deg)" },
        },
        "typing-loop": {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
        "blink": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 1s ease-out forwards",
        "slide-in-right": "slide-in-right 1s ease-out forwards",
        "slide-up": "slide-up 1s ease-out forwards",
        "airplane-takeoff-left": "airplane-takeoff-left 5s infinite linear",
        "typing-loop": "typing-loop 8s steps(30, end) infinite, blink 0.75s step-end infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
