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
  isMyDayActive: {
    color: theme.palette.primary.main,
  },
}))

const AddInMyDays = ({ data }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={10} container gap="12px" alignItems="center">
          <FlareIcon
            className={`${classes.icon}   ${
              data?.isMyDay && classes.isMyDayActive
            }`}
          />
          <Typography variant="subtitle1">Add to My Day</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AddInMyDays
