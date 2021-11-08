
import Dashboard from "views/Dashboard.js"
import Notifications from "views/Notifications.js"
import TableList from "views/TableList.js"
import Typography from "views/Typography.js"
import UserProfile from "views/UserProfile.js"

var routes = [
  {
    path: "dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/",
  },
  {
    path: "notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/",
  },
  {
    path: "user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/",
  },
  {
    path: "tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/",
  },
  {
    path: "typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/",
  },
]
export default routes
