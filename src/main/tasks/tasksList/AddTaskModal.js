import React, { useContext, useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import TasksContext from "../../../context/tasks/TasksContext"
import { gql, useMutation } from "@apollo/client"

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
  const [createTask, { data: newTask, loading, error }] = useMutation(
    CREATE_NEW_TASK,
    {
      refetchQueries: ["getAllTasks"],
    }
  )
  const { addTaskHandler } = useContext(TasksContext)

  const handleClose = () => setOpen(false)
  const [data, setData] = useState({
    taskName: "",
  })

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const formSubmitAddTaskHandler = async (e) => {
    try {
      e.preventDefault()
      // addTaskHandler(data)
      await createTask({ variables: { task: { title: data.taskName } } })
      handleClose()
      setData({ taskName: "" })
    } catch (error) {
      console.log(error)
    }
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

const CREATE_NEW_TASK = gql`
  mutation createTask($task: TaskInput) {
    createTask(task: $task) {
      _id
      title
      description
      dueDate
      isFav
      isMyDay
      steps {
        step
        _id
      }
    }
  }
`
