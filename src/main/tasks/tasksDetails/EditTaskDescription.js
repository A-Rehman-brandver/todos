import React, { useContext, useState } from "react"
import { makeStyles } from "@mui/styles"
import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import FlareIcon from "@mui/icons-material/Flare"
import TasksContext from "../../../context/tasks/TasksContext"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "12px",
    marginTop: "12px",
  },
  icon: {
    cursor: "pointer",
  },
  divider: {
    borderBottom: "1px solid gray",
    width: "100%",
    paddingBottom: "12px",
  },
  datePicker: {
    width: "100%",
    paddingBottom: "12px",
    border: "none",
    borderBottom: "1px solid gray",
    outline: "none",
    fontSize: "15px",
    "&::placeholder": {
      color: "black",
      fontSize: "15px",
    },
  },
}))

const EditTaskDescription = () => {
  const classes = useStyles()
  const { addDiscriptionHandler } = useContext(TasksContext)

  const [data, setData] = useState({
    dueDate: "",
  })
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const formSubmitAddDescriptionHandler = (e) => {
    e.preventDefault()
    addDiscriptionHandler(data)
  }
  return (
    <Paper className={classes.root} elevation={0}>
      <form onSubmit={(e) => formSubmitAddDescriptionHandler(e)}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} display="flex" gap="12px" alignItems="flex-start">
            <FlareIcon className={classes.icon} />
            <input
              placeholder="Add Due Date"
              type="text"
              name="dueDate"
              required
              value={data.dueDate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              className={classes.datePicker}
              onChange={(e) => onChangeHandler(e)}
            />
          </Grid>

          <Grid item xs={12} display="flex" gap="12px" alignItems="flex-start">
            <FlareIcon className={classes.icon} />
            <Typography className={classes.divider} variant="subtitle1">
              Remind
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" gap="12px" alignItems="flex-start">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default EditTaskDescription
