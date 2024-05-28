/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"], // Adding Ubuntu as the default sans font
      },

      // add custom responsive px 
      screens: {
        'mobile-s': '430px',  // Adding a custom breakpoint
      },
    },
  },
  plugins: [],
};
