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
        arrow: "url('/public/arrow.svg')",
        bg_img: "url('/public/bg.svg')",
        second_img: "url('/public/bg1.svg')",
        logo: "url('/public/logo.svg')",
        cart: "url('/public/cart.svg')",
        about: "url('/public/about_logo.svg')",
        card: "url('/public/card/image.png')",
        search: "url('/public/search2.svg')",
      },
    },
  },
  plugins: [],
};
