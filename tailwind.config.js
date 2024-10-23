/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E4FF2C",
        secondary: "#00FFFF",
        // ...
      },
    },
  },
  plugins: [tailwindScrollbar],
};
