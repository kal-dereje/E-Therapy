/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 2s linear infinite",
        
      },
      keyframes: {
        right: {
          "0%": { transform: "scale(1)" },
          
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
