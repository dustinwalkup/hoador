/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        forestGreen: "var(--forestGreen)",
        skyBlue: "var(--skyBlue)",
        lightGrey: "var(--lightGrey)",
        blue: "var(--blue)",
      },
    },
  },
  plugins: [],
};
