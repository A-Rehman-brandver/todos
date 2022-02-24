import React from "react"
import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import BorderClearIcon from "@mui/icons-material/BorderClear"
import SearchBar from "./SearchBar"
import SettingsIcon from "@mui/icons-material/Settings"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    padding: "12px",
    color: theme.custom.white,
    position: "fixed",
    top: 0,
    zIndex: "9999",
  },
  logoContainer: {
    display: "flex",
    gap: "12px",
    [theme.breakpoints.down("md")]: {
      gap: "4px",
    },
    alignItems: "center",
  },
  searchBarContainer: {
    textAlign: "center",
  },
  menuContainer: {
    display: "flex",
    gap: "12px",
    [theme.breakpoints.down("md")]: {
      gap: "4px",
    },
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icons: {
    fontSize: "1.3rem !important",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem !important",
    },
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item xs={3} lg={2} className={classes.logoContainer}>
        <BorderClearIcon className={classes.icons} />
        <Typography variant="h6">Todos</Typography>
      </Grid>
      <Grid item xs={7} lg={8} className={classes.searchBarContainer}>
        <SearchBar />
      </Grid>
      <Grid item xs={2} lg={2} className={classes.menuContainer}>
        <SettingsIcon className={classes.icons} />
        <HelpOutlineIcon className={classes.icons} />
      </Grid>
    </Grid>
  )
}

export default Header
