/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-translate": "fade-translate 1000ms",
      },
      keyframes: {
        "fade-translate": {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dracula: {
          ...require("daisyui/src/theming/themes")["[data-theme=dracula]"],
          ".btn-primary": {
            "background-color": "#FF577F",
            "border-color": "#FF577F",
          },
          ".btn-secondary": {
            "background-color": "#848c94",
            "border-color": "#848c94",
          },
          ".btn-secondary:hover": {
            "background-color": "#60686E",
            "border-color": "#60686E",
          },
          ".btn-primary:hover": {
            "background-color": "#CC3D5A",
            "border-color": "#CC3D5A",
          },
          ".bg-primary": {
            "background-color": "#FF577F",
          },
          ".text-primary": {
            color: "#FF577F",
          },
          ".border-primary": {
            "border-color": "#FF577F",
          },
          ".bg-base-100": {
            "background-color": "#343B41",
          },
          ".bg-base-200": {
            "background-color": "#212529",
          },
          ".bg-base-300": {
            "background-color": "#121214",
          },
          ".text-primary-content": {
            color: "#FFFFFF",
          },
          ".text-base-100": {
            color: "#343B41",
          },
          ".text-base-200": {
            color: "#212529",
          },
          ".text-base-300": {
            color: "#121214",
          },
        },
      },
    ],
  },
};
