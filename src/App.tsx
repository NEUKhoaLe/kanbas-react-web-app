import React from "react";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Assignment3 from "./Labs/a3";
import { Dashboard } from "./Kanbas/Dashboard/Dashboard";
import Kanbas from "./Kanbas";
import { Courses } from "./Kanbas/Courses";
import { Modules } from "./Kanbas/Courses/Modules/Modules";
import { Assignments } from "./Kanbas/Courses/Assignments";
import { Grades } from "./Kanbas/Courses/Grades";
import Assignment4 from "./Labs/a4";
import Assignment5 from "./Labs/a5";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import Signin from "./Users/Signin";
import Account from "./Kanbas/Account";
import Profile from "./Users/Profile";
import UserTable from "./Users/Table";
import Signup from "./Users/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/Labs"} />,
      children: [],
    },
    {
      path: "/Labs/",
      element: <Labs />,
      children: [
        {
          path: "a3/*",
          element: <Assignment3 />,
        },
        {
          path: "a4/*",
          element: <Assignment4 />,
        },
        {
          path: "a5/*",
          element: <Assignment5 />,
        },
      ],
    },
    {
      path: "/Kanbas/Account",
      element: <Account />,
      children: [
        { index: true, element: <Navigate to="Profile" replace /> },
        {
          path: "Signin",
          element: <Signin />,
        },
        {
          path: "Signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/Kanbas/",
      element: <Kanbas />,
      children: [
        { index: true, element: <Navigate to="Dashboard" replace /> },
        {
          path: "Dashboard",
          element: <Dashboard />,
        },
        {
          path: "Account/Profile",
          element: <Profile />,
        },
        {
          path: "Account/Admin/Users",
          element: <UserTable />,
        },
        {
          path: "/Kanbas/Courses/:course_id/",
          element: <Courses />,
          children: [
            {
              path: "Home",
              element: <Modules />,
            },
            {
              path: "Modules",
              element: <Modules />,
            },
            {
              path: "Piazza",
              element: (
                <h1 className={"col"} style={{ paddingLeft: "16px" }}>
                  Piazza
                </h1>
              ),
            },
            {
              path: "Assignments",
              element: <Assignments />,
            },
            {
              path: "Assignments/:assignment_id",
              element: (
                <h1 className={"col"} style={{ paddingLeft: "16px" }}>
                  Assignment Editor
                </h1>
              ),
            },
            {
              path: "Grades",
              element: <Grades />,
            },
            {
              path: "*",
              element: <Navigate to={"Home"} />,
            },
          ],
        },
        {
          path: "*",
          element: <Navigate to={"/Kanbas/Dashboard"} replace />,
        },
      ],
    },
    {
      path: "/hello",
      element: <HelloWorld />,
    },
    {
      path: "*",
      element: <Navigate to={"/Labs"} replace />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
