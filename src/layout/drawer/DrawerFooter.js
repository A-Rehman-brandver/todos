import React from "react"
import AppleIcon from "@mui/icons-material/Apple"
import { makeStyles } from "@mui/styles"
import Divider from "@mui/material/Divider"
import AndroidIcon from "@mui/icons-material/Android"
import { Typography } from "@mui/material"

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    position: "fixed",
    bottom: 0,
    width: "inherit",
  },
  footer: {
    padding: "8px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))

const DrawerFooter = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footerContainer}>
      <Divider />
      <div className={classes.footer}>
        <Typography variant="subtitle1"> Get The App </Typography>
        <span>
          <AppleIcon /> <AndroidIcon />
        </span>
      </div>
    </footer>
  )
}

export default DrawerFooter
