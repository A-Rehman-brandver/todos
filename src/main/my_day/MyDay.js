import { Grid } from "@mui/material"
import React from "react"
import MyDaysList from "./MyDaysList"

const MyDay = () => {
  return (
    <Grid container gap="4px" justifyContent="space-between">
      <MyDaysList />
      {/* <TasksDetails /> */}
    </Grid>
  )
}

export default MyDay
