/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"],
  },
  config: {
    variants: {
      extend: {
        translate: ["group-hover"],
      },
    },
  },
};
