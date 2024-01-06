/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: "#646c5a",
        whitesmoke: {
          "100": "#faf8f8",
          "200": "#f2ecec",
        },
        silver: "#bcb7b7",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      "13xl": "32px",
      xl: "20px",
      "5xl": "24px",
      "mid-5": "17.5px",
      "9xl": "28px",
      base: "16px",
      "17xl": "36px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
