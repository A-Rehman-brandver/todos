import React, { useCallback, useContext, useEffect, useState } from "react"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { makeStyles } from "@mui/styles"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useLocation } from "react-router-dom"
import debounceHelper from "../../helpers/debounceHelper"
import TasksContext from "../../context/tasks/TasksContext"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px",
    display: "flex",
    alignItems: "center",
    background: `#c3ddf7 `,
  },
  searchInput: {
    color: `${theme.palette.primary.dark} `,
  },
  searchInon: {
    padding: "8px",
    color: `${theme.palette.primary.dark} `,
  },
}))

export default function SearchBar() {
  const { getTaskBySearch } = useContext(TasksContext)
  const classes = useStyles()
  const router = useHistory()
  const { search } = useLocation()
  let urlQuery = new URLSearchParams(search)
  let searchValFromQuery = urlQuery.get("searchVal")
  const [searchVal, setSearchVal] = useState()

  const searchHandler = (val) => {
    if (val) {
      router.push(`/search?searchVal=${val}`)
      getTaskBySearch({ variables: { title: val } })
    }
  }
  const debouncedChangeHandler = useCallback(
    debounceHelper((val) => {
      searchHandler(val)
    }, 1000),
    []
  )
  useEffect(() => {
    setSearchVal(searchValFromQuery)
  }, [])

  return (
    <Paper className={classes.root}>
      <IconButton
        onClick={() => searchHandler(searchVal)}
        className={classes.searchInon}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.searchInput}
        fullWidth
        value={searchVal}
        placeholder="Search "
        onChange={(e) => {
          let val = e.target.value
          if (!val) {
            router.push("/tasks")
          }
          setSearchVal(val)
          debouncedChangeHandler(val)
        }}
        onKeyDown={(e) => {
          e.key == "Enter" && searchHandler(searchVal)
        }}
      />
    </Paper>
  )
}
