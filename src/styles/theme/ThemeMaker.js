import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme"

const ThemeMaker = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeMaker
