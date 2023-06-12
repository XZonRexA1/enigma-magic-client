import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import Classes from "../components/ClassesPage/Classes";
import MySelectedClasses from "../components/DashBoard/MySelectedClasses/MySelectedClasses";
import Payment from "../components/DashBoard/Payment/Payment";
import MyEnrolledClasses from "../components/DashBoard/MyEnrolledClasses/MyEnrolledClasses";
import MyPaymentHistory from "../components/DashBoard/MyPaymentHistory/MyPaymentHistory";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../components/DashBoard/ManageUsers/ManageUsers";
import AdminHome from "../components/DashBoard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import StudentHome from "../components/DashBoard/StudentHome/StudentHome";
import Instructors from "../components/Instructors/Instructors";

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
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: "mySelectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "myPaymentHistory",
        element: <MyPaymentHistory></MyPaymentHistory>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'studentHome',
        element: <StudentHome></StudentHome>
      }
      
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
