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
      element: <Outlet />,
      children: [
        {
          index: true,
          path: "Dashboard",
          element: <Dashboard />,
        },
        // {
        //   path: "/Kanbas/Courses/:course_id/",
        //   element: <Navigate to={"/Kanbas/Courses/:course_id/Home"} />,
        //   children: [
        //     {
        //       path: "Home",
        //       element: <CourseHome />
        //     },
        //     {
        //       path:
        //     }
        //   ]
        // },
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
