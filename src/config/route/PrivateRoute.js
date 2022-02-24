import React from "react"
import { Route, Redirect } from "react-router-dom"
import Layout from "../../layout/Layout"
import MiniDrawer from "../../layout/drawer/Drawer"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (true) {
          return (
            <Layout>
              <MiniDrawer>
                <Component />
              </MiniDrawer>
            </Layout>
          )
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      }}
    />
  )
}
