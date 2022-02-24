import ThemeMaker from "./styles/theme/ThemeMaker"
import Main from "./main/Main"
import TasksContainer from "./context/tasks/TasksContainer"

function App() {
  return (
    <ThemeMaker>
      <TasksContainer>
        <Main />
      </TasksContainer>
    </ThemeMaker>
  )
}

export default App
