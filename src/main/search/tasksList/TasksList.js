import React, { useContext, useEffect } from "react"
import { Grid } from "@mui/material"
import Task from "../../../common/task/Task"
import AddTasks from "./AddTasks"
import { makeStyles } from "@mui/styles"
import TasksContext from "../../../context/tasks/TasksContext"
import HeaderTitle from "../../../common/headerTitle/HeaderTitle"
import ErrorMessage from "../../../helpers/ErrorMessage"

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
  const {
    taskBySearch,
    resetSelectedTasks,
    taskBySearchLoading,
    taskBySearchError,
  } = useContext(TasksContext)

  useEffect(() => {
    resetSelectedTasks()
  }, [])

  return (
    <Grid item xs={12} lg={7} className={classes.root}>
      <HeaderTitle title="Tasks" />
      <div className={classes.TasksListing}>
        {taskBySearchLoading ? (
          "loading"
        ) : (
          <>
            {taskBySearchError ? (
              <ErrorMessage error={taskBySearchError} />
            ) : taskBySearch?.length > 0 ? (
              taskBySearch?.map((task) => {
                return <Task task={task} key={task?._id} />
              })
            ) : (
              "No Tasks Found"
            )}
          </>
        )}
      </div>
      <AddTasks />
    </Grid>
  )
}

export default TasksList
