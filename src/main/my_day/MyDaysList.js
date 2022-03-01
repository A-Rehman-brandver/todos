import React, { useContext, useEffect } from "react"
import { Grid } from "@mui/material"
import Task from "../../common/task/Task"
import { makeStyles } from "@mui/styles"
import TasksContext from "../../context/tasks/TasksContext"
import HeaderTitle from "../../common/headerTitle/HeaderTitle"
import ErrorMessage from "../../helpers/ErrorMessage"

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
const MyDaysList = () => {
  const classes = useStyles()
  const { getAllMyDayTasks, resetSelectedTasks, myDaysError, myDaysLoading } =
    useContext(TasksContext)

  useEffect(() => {
    resetSelectedTasks()
  }, [])

  return (
    <Grid item xs={12} lg={7} className={classes.root}>
      <HeaderTitle title="My Days" />
      <div className={classes.TasksListing}>
        {myDaysLoading ? (
          "Loading"
        ) : (
          <>
            {myDaysError ? (
              <ErrorMessage error={myDaysError} />
            ) : getAllMyDayTasks?.length > 0 ? (
              getAllMyDayTasks?.map((task) => {
                return <Task task={task} key={task?.id} />
              })
            ) : (
              "No Tasks Found"
            )}
          </>
        )}
      </div>
    </Grid>
  )
}

export default MyDaysList
