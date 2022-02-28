import ThemeMaker from "./styles/theme/ThemeMaker"
import Main from "./main/Main"
import TasksContainer from "./context/tasks/TasksContainer"
import { StyledEngineProvider } from "@mui/material/styles"
import ErrorContainer from "./context/error/ErrorContainer"

function App() {
  return (
    <ThemeMaker>
      <StyledEngineProvider injectFirst>
        <ErrorContainer>
          <TasksContainer>
            <Main />
          </TasksContainer>
        </ErrorContainer>
      </StyledEngineProvider>
    </ThemeMaker>
  )
}

export default App
