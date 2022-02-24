import { Grid } from "@mui/material"
import React from "react"
import TasksDetails from "./tasksDetails/TasksDetails"
import TasksList from "./tasksList/TasksList"

const Tasks = () => {
  return (
    <Grid container gap="4px" justifyContent="space-between">
      <TasksList />
      <TasksDetails />
    </Grid>
  )
}

export default Tasks
