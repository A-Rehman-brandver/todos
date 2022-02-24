import React from "react"
import { makeStyles } from "@mui/styles"
import AddIcon from "@mui/icons-material/Add"
import { Grid, Typography } from "@mui/material"

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    marginTop: "20px",
  },
  icon: {
    cursor: "pointer",
  },
}))

const AddTasks = () => {
  const classes = useStyles()
  const addTaskHandler = () => {
    console.log("------Task Added--------")
  }
  return (
    <Grid container xs={12} gap="12px" className={classes.root}>
      <AddIcon className={classes.icon} onClick={() => addTaskHandler()} />
      <Typography variant="subtitle1">AddTasks</Typography>
    </Grid>
  )
}

export default AddTasks
