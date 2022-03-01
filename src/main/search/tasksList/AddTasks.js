import React from "react"
import { makeStyles } from "@mui/styles"
import AddIcon from "@mui/icons-material/Add"
import { Grid, Typography } from "@mui/material"
import AddTaskModal from "./AddTaskModal"

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
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Grid container item xs={10} lg={12} gap="12px" className={classes.root}>
        <AddIcon className={classes.icon} onClick={() => setOpen(true)} />
        <Typography variant="subtitle1">AddTasks</Typography>
      </Grid>
      <AddTaskModal setOpen={setOpen} open={open} />
    </>
  )
}

export default AddTasks
