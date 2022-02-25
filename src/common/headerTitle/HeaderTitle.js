import { Typography } from "@mui/material"
import React from "react"

const HeaderTitle = ({ title }) => {
  return (
    <Typography variant="h5" color="primary">
      {title} ...
    </Typography>
  )
}

export default HeaderTitle
