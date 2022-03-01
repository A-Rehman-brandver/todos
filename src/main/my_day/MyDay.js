import { Grid } from "@mui/material"
import React from "react"
import MyDayDetails from "./MyDayDetails"
import MyDaysList from "./MyDaysList"

const MyDay = () => {
  return (
    <Grid container gap="4px" justifyContent="space-between">
      <MyDaysList />
      <MyDayDetails />
    </Grid>
  )
}

export default MyDay
