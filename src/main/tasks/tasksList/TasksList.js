import React, { useContext } from "react"
import { Grid } from "@mui/material"
import Task from "./Task"
import AddTasks from "./AddTasks"
import { makeStyles } from "@mui/styles"
import TasksContext from "../../../context/tasks/TasksContext"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    padding: "12px",
  },
  TasksListing: {
    maxHeight: "72vh",
    overflowY: "auto",
  },
}))
const TasksList = () => {
  const classes = useStyles()
  const { tasksData } = useContext(TasksContext)

  return (
    <Grid item xs={12} lg={7} className={classes.root}>
      <div className={classes.TasksListing}>
        {tasksData?.length > 0
          ? tasksData?.map((task) => {
              return <Task task={task} key={task?.id} />
            })
          : "No Tasks Found"}
      </div>
      <AddTasks />
    </Grid>
  )
}

export default TasksList
