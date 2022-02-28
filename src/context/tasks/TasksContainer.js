import React, { useState } from "react"
import { TasksProvider } from "./TasksContext"
import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client"

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
  let selectTask
  const { loading, data, error } = useQuery(GET_ALL_TASKS, {
    // fetchPolicy: "network-only",
  })
  const [getTask, { data: taskById, error: taskByIdError }] =
    useLazyQuery(GET_TASK)

  const [updateTask] = useMutation(UPDATE_TASKS, {
    refetchQueries: ["getAllTasks"],
  })
  // console.log(loading, data, error)

  const updateSelectedTask = async (id) => {
    try {
      await getTask({ variables: { id } })
    } catch (error) {
      console.log(error)
    }
  }

  const addTaskHandler = (data) => {
    console.log(data)
  }
  const addDiscriptionHandler = async (data, id) => {
    try {
      await updateTask({ variables: { task: data, id } })
      updateSelectedTask(id)
    } catch (error) {
      console.log(error)
    }
  }
  const addMyDayHandler = async (id) => {
    try {
      await updateTask({ variables: { task: { isMyDay: true }, id } })
      updateSelectedTask(id)
    } catch (error) {
      console.log(error)
    }
  }
  const isFavHandler = async (id) => {
    try {
      await updateTask({ variables: { task: { isFav: true }, id } })
    } catch (error) {
      console.log(error)
    }
  }
  const getAllMyDayTasks = (id) => {
    let allMyTasks = tasksData.filter((task) => task.isMyDay === true)
    return allMyTasks
  }
  const resetSelectedTasks = () => {
    selectTask = ""
  }
  return (
    <TasksProvider
      value={{
        tasksData: data?.getAllTasks,
        updateSelectedTask,
        selectTask: taskById?.getTask,
        addTaskHandler,
        addMyDayHandler,
        isFavHandler,
        addDiscriptionHandler,
        getAllMyDayTasks,
        resetSelectedTasks,
        loading,
        error,
      }}
    >
      {children}
    </TasksProvider>
  )
}

export default TasksContainer

const GET_ALL_TASKS = gql`
  query getAllTasks {
    getAllTasks {
      _id
      title
      description
      dueDate
      isFav
      isMyDay
      steps {
        step
        _id
      }
    }
  }
`

const UPDATE_TASKS = gql`
  mutation updateTask($task: TaskUpdateInput, $id: ID!) {
    updateTask(task: $task, id: $id) {
      _id
      title
      description
      dueDate
      isFav
      isMyDay
      steps {
        step
        _id
      }
    }
  }
`
const GET_TASK = gql`
  query getTask($id: ID!) {
    getTask(id: $id) {
      _id
      title
      description
      dueDate
      isFav
      isMyDay
      steps {
        step
        _id
      }
    }
  }
`
