/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,jk,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add Custom Colors 
        // ex => "web-primary": "#000000";
      }
    },
    fontFamily: {
      // Add Custome Fonts
      // ex => Roboto: ["Roboto, sans-serif"]
    },
    container: {
      // Add Container Default Settings
      // ex => padding: "2rem",
      //       center: true,
    },
    screens: {
      // Define Custom Screen Breakpoints
      // ex => sm: "600px"
    }
  },
  plugins: [],
};