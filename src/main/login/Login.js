import { Button, Grid, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  form: {
    background: theme.palette.secondary.main,
    padding: "40px 40px",
    borderRadius: "20px",
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      width: "700px",
    },
  },
  field: {
    marginTop: "10px",
  },
}))
const Login = () => {
  const classes = useStyles()
  const router = useHistory()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmitAuthHandler = (e) => {
    e.preventDefault()
    console.log(data)
    setData({ email: "", password: "" })
    router.push("/tasks")
  }

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justifyContent="center"
    >
      <form className={classes.form} onSubmit={(e) => onSubmitAuthHandler(e)}>
        <Typography variant="h5" color="primary">
          Login
        </Typography>
        <Grid item xs={12} className={classes.field}>
          <TextField
            onChange={(e) => onChangeHandler(e)}
            required
            placeholder="Email..."
            variant="outlined"
            name="email"
            value={data.email}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.field}>
          <TextField
            onChange={(e) => onChangeHandler(e)}
            required
            placeholder="Pssword..."
            variant="outlined"
            name="password"
            type="password"
            fullWidth
            value={data.password}
          />
        </Grid>
        <Grid item xs={12} className={classes.field}>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  )
}

export default Login
