import React, { useState } from "react"
import { ErrorProvider } from "./ErrorContext"

function ErrorContainer({ children }) {
  const [errorAuth, setErrorAuth] = useState(false)
  function toggleErrorAuth() {
    setErrorAuth(!errorAuth)
  }
  return (
    <ErrorProvider
      value={{
        errorAuth,
        toggleErrorAuth,
      }}
    >
      {children}
    </ErrorProvider>
  )
}

export default ErrorContainer
