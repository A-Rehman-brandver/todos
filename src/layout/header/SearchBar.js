import * as React from "react"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px",
    display: "flex",
    alignItems: "center",
    background: `${theme.palette.primary.light} !important`,
  },
  searchInput: {
    color: `${theme.palette.primary.dark} !important`,
  },
  searchInon: {
    padding: "8px",
    color: `${theme.palette.primary.dark} !important`,
  },
}))

export default function SearchBar() {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.searchInon} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.searchInput}
        fullWidth
        placeholder="Search "
      />
    </Paper>
  )
}
