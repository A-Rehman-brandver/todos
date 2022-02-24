import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      light: "#f4f6ff",
      main: "#1976d2",
      dark: "#1565c0",
    },
    secondary: {
      main: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "'Roboto'",
    fontWeight: 400,
    color: "black",
    h4: {
      fontWeight: "bold",
    },
  },
  custom: {
    white: "#fff",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})
