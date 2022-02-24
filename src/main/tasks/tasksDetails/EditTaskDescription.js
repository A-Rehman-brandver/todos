import React from "react"
import { makeStyles } from "@mui/styles"
import { Grid, Paper, Typography } from "@mui/material"
import FlareIcon from "@mui/icons-material/Flare"

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
}))

const EditTaskDescription = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} display="flex" gap="12px" alignItems="flex-start">
          <FlareIcon className={classes.icon} />
          <Typography className={classes.divider} variant="subtitle1">
            Add Due Date
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" gap="12px" alignItems="flex-start">
          <FlareIcon className={classes.icon} />
          <Typography className={classes.divider} variant="subtitle1">
            Repeat
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" gap="12px" alignItems="flex-start">
          <FlareIcon className={classes.icon} />
          <Typography className={classes.divider} variant="subtitle1">
            Repeat
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default EditTaskDescription
