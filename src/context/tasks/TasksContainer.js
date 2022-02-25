import React, { useEffect, useState } from "react"
import { TasksProvider } from "./TasksContext"

let tasksData = [
  {
    id: "01",
    title: "Online Interview",
    dueDate: "22-02-2022",
    isMyDay: false,
    isFav: true,
    steps: [
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
  },
  {
    id: "02",
    title: "Tea Break",
    dueDate: "22-02-2022",
    isMyDay: false,
    isFav: false,
    steps: [
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
  },
  {
    id: "03",
    title: "Payment Bug Solve",
    dueDate: null,
    isMyDay: true,
    isFav: true,
    steps: [
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
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
    steps: [
      {
        step: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
  },
]

const TasksContainer = ({ children }) => {
  const [selectTask, setSelectedTask] = useState()

  const updateSelectedTask = (id) => {
    const task = tasksData.find((task) => task.id === id)
    setSelectedTask(task)
  }

  const addTaskHandler = (data) => {
    console.log(data)
  }
  const addDiscriptionHandler = (data) => {
    console.log(data)
  }
  const addMyDayHandler = (id) => {
    console.log(id)
  }
  const isFavHandler = (id) => {
    console.log(id)
  }
  const getAllMyDayTasks = (id) => {
    let allMyTasks = tasksData.filter((task) => task.isMyDay === true)
    return allMyTasks
  }
  const resetSelectedTasks = () => {
    setSelectedTask()
  }
  // useEffect(() => {
  //   setSelectedTask(tasksData && tasksData?.length > 0 && tasksData[0])
  // }, [])

  return (
    <TasksProvider
      value={{
        tasksData,
        updateSelectedTask,
        selectTask,
        addTaskHandler,
        addMyDayHandler,
        isFavHandler,
        addDiscriptionHandler,
        getAllMyDayTasks,
        resetSelectedTasks,
      }}
    >
      {children}
    </TasksProvider>
  )
}

export default TasksContainer
