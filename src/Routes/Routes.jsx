import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import PrivateRoute from "./PrivateRoute";
import Classes from "../components/ClassesPage/Classes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
