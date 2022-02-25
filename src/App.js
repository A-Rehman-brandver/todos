import ThemeMaker from "./styles/theme/ThemeMaker"
import Main from "./main/Main"
import TasksContainer from "./context/tasks/TasksContainer"
import { StyledEngineProvider } from "@mui/material/styles"

function App() {
  return (
    <ThemeMaker>
      <StyledEngineProvider injectFirst>
        <TasksContainer>
          <Main />
        </TasksContainer>
      </StyledEngineProvider>
    </ThemeMaker>
  )
}

export default App
