import React from "react"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    border: "none",
    outline: "none",
    fontFamily: "Roboto, sans-serif",
    fontSize: "15px",
    height: "100px",
  },
  icon: {
    cursor: "pointer",
  },
}))

const Note = () => {
  const classes = useStyles()

  return (
    <TextareaAutosize
      maxRows={7}
      minRows={7}
      placeholder="Notes ..."
      className={classes.root}
    />
  )
}

export default Note
