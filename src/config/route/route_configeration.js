import Login from "../../main/login/Login"
import Tasks from "../../main/tasks/Tasks"
import MyDay from "../../main/my_day/MyDay"
import Category from "../../main/category/Category"

export const routes = [
  {
    key: "login",
    title: "Login",
    route: "/",
    auth_required: false,
    component: Login,
  },
  {
    key: "tasks",
    title: "Tasks",
    route: "/tasks",
    auth_required: true,
    component: Tasks,
  },
  {
    key: "my_day",
    title: "My Day",
    route: "/my-days",
    auth_required: true,
    component: MyDay,
  },
  {
    key: "category",
    title: "Category",
    route: "/category",
    auth_required: true,
    component: Category,
  },
]
