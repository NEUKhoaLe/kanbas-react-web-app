import React from "react";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Assignment3 from "./Labs/a3";
import { Dashboard } from "./Kanbas/Dashboard/Dashboard";
import Kanbas from "./Kanbas";
import { Courses } from "./Kanbas/Courses";
import { Modules } from "./Kanbas/Courses/Modules/Modules";
import { Assignments } from "./Kanbas/Courses/Assignments";
import { Grades } from "./Kanbas/Courses/Grades";

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
      ],
    },
    {
      path: "/Kanbas/",
      element: <Kanbas />,
      children: [
        {
          index: true,
          path: "Dashboard",
          element: <Dashboard />,
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
          path: "Account",
          element: (
            <h1 style={{ marginLeft: "116px", paddingTop: "8px" }}>Account</h1>
          ),
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

  return <RouterProvider router={router} />;
}

export default App;
