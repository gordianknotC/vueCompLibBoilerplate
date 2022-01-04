module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f0b90b",
        },
        secondary: {
          DEFAULT: "#898989",
        },
        hr: "#e8e8e8",
        font: {
          DEFAULT: "#050505",
        },
        bg: {
          DEFAULT: "#fafafa",
        },
        GroupBorder: {
          DEFAULT: "#f1f1f1",
        },
        success: {
          DEFAULT: "#5aa22e"
        },
        error: {
          DEFAULT: "#bf1111",
        },
        warning: {
          DEFAULT: "#e2ab00",
          dark: "#f0b90b",
          light: "#f8da79"
        }
      },
      fontFamily: {
        lexend: [
          "Lexend",
          "-apple-system",
          "BlinkMacSystemFont",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        DEFAULT: "0 2px 7px 0 rgba(29, 29, 29, 0.05)"
      },
      borderRadius: {
        DEFAULT: "5px"
      },
      minWidth: {
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        ".primary-gradient": {
          background: `linear-gradient(to right, ${theme(
            "colors.primary.light"
          )}, ${theme("colors.primary.DEFAULT")})`
        },
      })
    }
  ],
}
