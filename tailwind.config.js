module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Components/LayoutComponent/**/*.{js,ts,jsx,tsx}",
    "./pages/detailPage/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    fontFamily: {
      sans: [
        "Aktiv Grotesk",
        "-apple-system",
        "BlinkMacSystemFont",
        "San Francisco",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "sans-serif",
      ],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {
      screens: {
        "4xl": "2000px",
      },
    },
  },
};
