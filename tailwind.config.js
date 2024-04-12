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
        appear: {
          "0%": { opacity: '0' },
          "90%": { opacity: '0' },
          "100%": { opacity: '100%' },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
