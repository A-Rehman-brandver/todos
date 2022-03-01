import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import MenuIcon from "@mui/icons-material/Menu"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { makeStyles } from "@mui/styles"
import { drawerRoutes } from "../../config/route/DrawerRoute"
import { useHistory, useLocation } from "react-router-dom"
import DrawerFooter from "./DrawerFooter"

const drawerWidth = 340

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
})

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "&	.MuiDrawer-paper": {
    background: theme.palette.secondary.main,
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}))

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerHeader: {
    marginTop: "80px",
  },
  contentContainer: {
    flexGrow: 1,
    padding: "32px",
    background: theme.palette.secondary.main,
    height: "100vh ",
  },
  selected: {
    color: theme.palette.primary.main,
  },
}))

function SideDrawer({ children }) {
  const classes = useStyles()
  const router = useHistory()

  const { pathname } = useLocation()
  const [open, setOpen] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(pathname)

  const handleListItemClick = (route) => {
    setSelectedIndex(route)
    router.push(route)
  }

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} style={{ background: "red" }}>
        <List>
          <ListItem className={classes.drawerHeader}>
            <ListItemIcon>
              <MenuIcon onClick={handleDrawerOpen} />
            </ListItemIcon>
          </ListItem>
          <Divider />
          {drawerRoutes.map((route) => (
            <ListItem
              button
              key={route.key}
              selected={route.route === selectedIndex}
              onClick={() => handleListItemClick(route.route)}
              className={route.route === selectedIndex && classes.selected}
            >
              <ListItemIcon
                className={route.route === selectedIndex && classes.selected}
              >
                {route.icon}
              </ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItem>
          ))}
        </List>
        {open && <DrawerFooter />}
      </Drawer>
      <Box component="main" className={classes.contentContainer}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}

export default SideDrawer
