import { Grid, Paper, Typography } from "@mui/material"
import React, { useContext } from "react"
import { makeStyles } from "@mui/styles"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import StarIcon from "@mui/icons-material/Star"
import CircleIcon from "@mui/icons-material/Circle"
import TasksContext from "../../context/tasks/TasksContext"

const useStyles = makeStyles((theme) => ({
  item: {
    padding: "16px 12px",
    margin: "12px 0",
    background: `${theme.palette.primary.light}!important`,
  },
  icon: {
    cursor: "pointer",
  },
}))
const List = ({ task }) => {
  const classes = useStyles()
  const { selectTask, updateSelectedTask, isFavHandler } =
    useContext(TasksContext)

  const taskIdHandler = (id) => {
    updateSelectedTask(id)
  }

  return (
    <Paper elevation={0} className={classes.item}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid
          onClick={() => taskIdHandler(task?._id)}
          item
          xs={10}
          container
          gap="12px"
          alignItems="center"
        >
          {task?._id === selectTask?._id ? (
            <CircleIcon />
          ) : (
            <CircleOutlinedIcon />
          )}
          <Typography variant="subtitle1">{task?.title}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          textAlign="right"
          onClick={() => isFavHandler(task?._id)}
        >
          {task?.isFav ? (
            <StarIcon className={classes.icon} />
          ) : (
            <StarBorderOutlinedIcon className={classes.icon} />
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default List
