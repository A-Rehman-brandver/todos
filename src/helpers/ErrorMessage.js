/** Shows an error if error prop set */
import { Typography, Grid } from "@mui/material"
import withStyles from "@mui/styles/withStyles"
import React, { useContext } from "react"
import ErrorIcon from "@mui/icons-material/Error"
import ErrorContext from "../context/error/ErrorContainer"

const styles = (theme) => ({
  summary: {
    boxShadow: "none",
    border: `1px solid red`,
    marginBottom: 8,
    borderRadius: 5,
    padding: 16,
    background: "white",
  },
  icon: {
    marginRight: 8,
    fontSize: 20,
    color: "red",
  },
})

function extractError(error) {
  if (error.message) {
    let message = error.message.split(":")

    if (message[0].indexOf("GraphQL") !== -1)
      message = message[message.length - 1]
    else message = error.message

    return message.replace(/"/g, "")
  }
  return null
}
const ErrorMessage = ({ error, classes }) => {
  const errorContext = useContext(ErrorContext)

  if (!error || errorContext?.errorAuth) return <></>
  return (
    <Grid className={classes.summary}>
      <Grid container wrap="nowrap" justifyContent="space-between">
        <Grid container alignItems="center" wrap="nowrap">
          <ErrorIcon className={classes.icon} />
          <Typography className={classes.whiteText}>
            {error && extractError(error)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ErrorMessage)
