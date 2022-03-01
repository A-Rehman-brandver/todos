import React from "react"
import { routes } from "../config/route/route_configeration"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { PrivateRoute } from "../config/route/PrivateRoute"
import NotFound from "./NotFound"

const Main = () => {
  return (
    <Router>
      {routes?.map((route) => {
        if (route.auth_required) {
          return (
            <PrivateRoute
              path={route.route}
              component={route.component}
              key={route.key}
              exact
            />
          )
        } else {
          return (
            <Route
              path={route.route}
              component={route.component}
              key={route.key}
              exact
            />
          )
        }
      })}
      {/* <Route component={NotFound} path="/*" /> */}
    </Router>
  )
}

export default Main
