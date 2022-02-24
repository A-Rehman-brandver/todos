import React, { useEffect, useState } from "react"
import { TasksProvider } from "./TasksContext"

let tasksData = [
  {
    id: "01",
    title: "Online Interview",
    dueDate: "22-02-2022",
    isMyDay: false,
    isFav: true,
  },
  {
    id: "02",
    title: "Tea Break",
    dueDate: "22-02-2022",
    isMyDay: false,
    isFav: false,
  },
  {
    id: "03",
    title: "Payment Bug Solve",
    dueDate: null,
    isMyDay: true,
    isFav: true,
  },
  {
    id: "04",
    title: "Namaz",
    dueDate: "22-02-2022",
    isMyDay: true,
    isFav: true,
  },
  {
    id: "05",
    title: "Online Interview",
    dueDate: null,
    isMyDay: true,
    isFav: true,
  },
]

const TasksContainer = ({ children }) => {
  const [selectTask, setSelectedTask] = useState()

  const updateSelectedTask = (id) => {
    const task = tasksData.find((task) => task.id === id)
    setSelectedTask(task)
  }

  useEffect(() => {
    setSelectedTask(tasksData && tasksData?.length > 0 && tasksData[0])
  }, [])

  return (
    <TasksProvider
      value={{
        tasksData,
        updateSelectedTask,
        selectTask,
      }}
    >
      {children}
    </TasksProvider>
  )
}

export default TasksContainer
