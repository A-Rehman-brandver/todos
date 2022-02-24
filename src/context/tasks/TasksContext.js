import React from "react"

const TasksContext = React.createContext({})

export const TasksProvider = TasksContext.Provider
export const TasksConsumer = TasksContext.Consumer

export default TasksContext
