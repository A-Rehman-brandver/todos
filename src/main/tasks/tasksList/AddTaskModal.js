import React, { useContext, useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import TasksContext from "../../../context/tasks/TasksContext"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    background: "#fff",
    border: "none",
    boxShadow: "24px",
    padding: "24px",
    borderRadius: "12px",
  },
  title: {
    marginBottom: "8px !important",
  },
}))

export default function AddTaskModal({ open, setOpen }) {
  const classes = useStyles()
  const { addTaskHandler } = useContext(TasksContext)

  const handleClose = () => setOpen(false)
  const [data, setData] = useState({
    taskName: "",
  })

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const formSubmitAddTaskHandler = (e) => {
    e.preventDefault()
    addTaskHandler(data)
    handleClose()
    setData({ taskName: "" })
  }
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.root}>
          <Typography variant="h6" className={classes.title} component="h2">
            Add Your New Task
          </Typography>
          <form onSubmit={(e) => formSubmitAddTaskHandler(e)}>
            <Grid container item xs={12} gap="12px" justifyContent="center">
              <TextField
                name="taskName"
                fullWidth
                placeholder="Enter Task ..."
                required
                onChange={(e) => onChangeHandler(e)}
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button onClick={handleClose} variant="contained">
                Cancel
              </Button>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
