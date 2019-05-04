import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: ["Raleway"],
  headerWeight: 900,
  bodyFontFamily: ["PT Serif"],
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400", "900"],
    },
    {
      name: "PT Serif",
      styles: ["400", "700"],
    },
  ],
})

export const { scale, rhythm, options } = typography
export default typography
