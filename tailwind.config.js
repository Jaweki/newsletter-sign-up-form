/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile": "375px",
        "desktop": "1000px",
      },
      colors: {
        "dark_slate_grey": "hsl(234, 29%, 20%)",
        "charcoal_grey": "hsl(235, 18%, 26%)",
        "grey": "hsl(231, 7%, 60%)",
        "white": "hsl(0, 0%, 100%)",
        "red": "red",
        "rose_300": "rgb(253 164 175/1)",
      },
      listStyleImage: {
        icon_list: 'url("/icon-list.svg")',
      },
      fontFamily: {
        roboto_fm: ["roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

