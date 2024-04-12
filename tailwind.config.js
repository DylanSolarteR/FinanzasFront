/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        expand: {
          "0%": { width: "15rem" },
          "100%": { width: "15rem" },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
