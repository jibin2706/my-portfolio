import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: ["Montserrat"],
  headerWeight: 700,
  bodyFontFamily: ["PT Serif"],
  googleFonts: [
    {
      name: "PT Serif",
      styles: ["400"],
    },
    {
      name: "Montserrat",
      styles: ["500", "700"],
    },
  ],
})

export const { scale, rhythm, options } = typography
export default typography
