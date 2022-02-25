import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import React, { useContext } from "react"
import { makeStyles } from "@mui/styles"
import TasksContext from "../../context/tasks/TasksContext"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    padding: "12px",
  },
  step: {
    padding: "12px",
    background: `${theme.palette.primary.light}!important`,
  },
}))

const MyDayDetails = () => {
  const classes = useStyles()
  const { selectTask } = useContext(TasksContext)

  return (
    <>
      {selectTask && (
        <Grid item xs={12} lg={4.8} className={classes.root}>
          <>
            <Typography variant="h6" color="primary">
              Steps
            </Typography>
            <List>
              {selectTask?.steps?.length > 0
                ? selectTask?.steps?.map((step, index) => {
                    return (
                      <ListItem disablePadding key={index}>
                        <ListItemText
                          className={classes.step}
                          primary={step?.step}
                        />
                      </ListItem>
                    )
                  })
                : "No Steps Found"}
            </List>
          </>
        </Grid>
      )}
    </>
  )
}

export default MyDayDetails
