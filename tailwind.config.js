/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        palette1: "#fbbf24", // Example color
        palette2: "#34d399", // Another color
        palette3: "#60a5fa", // Another color
        // Add more palettes
      },
      screens: {
        sm: "304px",
        // => @media (min-width: 640px) { ... }

        md: "478px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
