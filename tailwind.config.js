/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        imsa: {
          DEFAULT: "#3b82f6",
          dark: "#1e3a8a",
        },
        omsa: {
          DEFAULT: "#ef4444",
          dark: "#7f1d1d",
        },
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
