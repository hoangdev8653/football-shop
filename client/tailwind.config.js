/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
        xxxs: "6px",
      },
      screens: {
        xxs: { max: "549px" },
        sx: "550px",
        tablet: "860px",
      },
    },
  },
  plugins: [],
};
