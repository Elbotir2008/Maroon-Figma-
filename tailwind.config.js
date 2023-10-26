/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pharColor: "#122947",
        mainColor: "#F4F1ED",
      },
      fontFamily: {
        mainFontFamily:
          "@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;500;700;800;900&display=swap');",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1240px",
      xl: "1700px",
    },
  },
  plugins: [],
};
