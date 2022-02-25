import React, { useContext } from "react"
import { Grid } from "@mui/material"
import Title from "./Title"
import AddInMyDays from "./AddInMyDays"
import EditTaskDescription from "./EditTaskDescription"
import TasksContext from "../../../context/tasks/TasksContext"

const TasksDetails = () => {
  const { selectTask } = useContext(TasksContext)

  return (
    <Grid item xs={12} lg={4.8}>
      {selectTask && (
        <>
          <Title data={selectTask} />
          <AddInMyDays data={selectTask} />
          <EditTaskDescription data={selectTask} />
        </>
      )}
    </Grid>
  )
}

export default TasksDetails
