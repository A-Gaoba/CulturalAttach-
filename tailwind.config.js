/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#BDC1CB", // Add custom color
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(189,193,203,1) 48%, rgba(255,255,255,1) 100%)",
      },
    },
  },
  plugins: [],
};
