import React from "react"
import { makeStyles } from "@mui/styles"
import { Grid, Paper, Typography } from "@mui/material"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import StarIcon from "@mui/icons-material/Star"
import AddIcon from "@mui/icons-material/Add"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "12px",
  },
  icon: {
    cursor: "pointer",
  },
  stepsContainer: {
    marginTop: "20px",
    color: theme.palette.primary.main,
  },
}))

const Title = ({ data }) => {
  const classes = useStyles()

  const addStepsHandler = () => {
    console.log("------Steps Added--------")
  }
  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={10} container gap="12px" alignItems="center">
          <CircleOutlinedIcon />
          <Typography variant="h6">{data?.title}</Typography>
        </Grid>
        <Grid item xs={2} textAlign="right">
          {data?.isFav ? (
            <StarIcon className={classes.icon} />
          ) : (
            <StarBorderOutlinedIcon className={classes.icon} />
          )}{" "}
        </Grid>

        <Grid
          container
          item
          xs={12}
          gap="12px"
          className={classes.stepsContainer}
        >
          <AddIcon className={classes.icon} onClick={() => addStepsHandler()} />
          <Typography variant="subtitle1">Add Steps</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Title
