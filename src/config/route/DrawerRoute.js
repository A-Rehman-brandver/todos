import TaskIcon from "@mui/icons-material/Task"
import LightModeIcon from "@mui/icons-material/LightMode"

export const drawerRoutes = [
  {
    key: "my_day",
    title: "My Day",
    route: "/my-days",
    icon: <LightModeIcon />,
  },
  {
    key: "tasks",
    title: "Tasks",
    route: "/tasks",
    icon: <TaskIcon />,
  },
  // {
  //   key: "category",
  //   title: "Category",
  //   route: "/category",
  //   icon: <MailIcon />,
  // },
]
