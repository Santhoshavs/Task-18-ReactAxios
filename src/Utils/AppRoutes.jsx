import Dashboard from "../Components/Dashboard";
import Create from "../Components/Create";
import Edit from "../Components/Edit";
import { Navigate } from "react-router-dom";

const AppRoutes = [
  {
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/create",
    exact: true,
    element: <Create />,
  },
  {
    path: "/edit/:id",
    exact: true,
    element: <Edit />,
  },
  {
    path: "*",
    exact: false,
    element: <Navigate to="/dashboard" />,
  },
];

export default AppRoutes;