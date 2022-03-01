import React, { useEffect } from "react"
import { TasksProvider } from "./TasksContext"
import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client"

const TasksContainer = ({ children }) => {
  let selectTask
  const { loading, data, error } = useQuery(GET_ALL_TASKS, {
    fetchPolicy: "network-only",
  })

  const {
    loading: myDaysLoading,
    data: myDaysData,
    error: myDaysError,
  } = useQuery(GET_ALL_MYDAYS, {
    fetchPolicy: "network-only",
  })
  const [getTask, { data: taskById }] = useLazyQuery(GET_TASK)
  const [
    getTaskBySearch,
    {
      data: taskBySearch,
      loading: taskBySearchLoading,
      error: taskBySearchError,
    },
  ] = useLazyQuery(GET_TASKS_BY_SEARCH)
  const [updateTask] = useMutation(UPDATE_TASKS, {
    refetchQueries: ["getAllTasks", "getMyDayTasks"],
  })
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
        getAllMyDayTasks: myDaysData?.getMyDayTasks,
        resetSelectedTasks,
        loading,
        error,
        myDaysError,
        myDaysLoading,
        getTaskBySearch,
        taskBySearch: taskBySearch?.getTaskBySearch,
        taskBySearchLoading,
        taskBySearchError,
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
const GET_ALL_MYDAYS = gql`
  query getMyDayTasks {
    getMyDayTasks {
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
const GET_TASKS_BY_SEARCH = gql`
  query getTaskBySearch($title: String!) {
    getTaskBySearch(title: $title) {
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
