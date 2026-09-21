/** @type {import('tailwindcss').Config} */
module.exports = {
  // Make sure your content paths match your project structure
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")], // <-- Add this line
  theme: {
    extend: {},
  },
  plugins: [],
}