/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-white": "#EFEFEF",
        bg: " #191919",
      },
      backgroundImage: {
        arrow: "url('/public/image/arrow.svg')",
        bg_img: "url('/public/image/bg.svg')",
        second_img: "url('/public/image/bg1.svg')",
        logo: "url('/public/image/logo.svg')",
        about: "url('/public/image/about_logo.svg')",
        card: "url('/public/image/card.png')",
        search: "url('/public/image/search2.svg')",
      },
    },
  },
  plugins: [],
};
