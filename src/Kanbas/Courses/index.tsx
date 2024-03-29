import "./index.css";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";
import { CourseNavigation } from "./Navigation/CourseNavigation";
import { RightSideBar } from "./RightSideBar";
import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../store";

export const Courses = function () {
  const { course_id } = useParams();
  const courses = useSelector(
    (state: KanbasState) => state.courseReducer.courses,
  );
  const course = useSelector(
    (state: KanbasState) => state.courseReducer.course,
  );
  const { pathname } = useLocation();
  const [showCourseNavigation, setShowCourseNavigation] = useState(true);

  const paths = pathname.split("/");

  return (
    <div className={"col right-column"}>
      <div className={"middle-row-top-bar"}>
        <div className={"hamburger"}>
          <div className={"hamburger-icon"}>
            <HiMiniBars3
              size={24}
              onClick={() => setShowCourseNavigation((prev) => !prev)}
            />
          </div>
          <Link to={"Home"} className={"middle-row-top-bar-text"}>
            {course ? course.title : "Class"}
          </Link>
          <span className={"middle-row-top-bar-text-module"}>
            {" "}
            {`> ${paths[paths.length - 1]}`}
          </span>
        </div>
        <button className={"btn course-home-button no-hover"}>
          Student View
        </button>
      </div>
      <hr className={"hr-class"} />
      <div className={"row"}>
        {showCourseNavigation && <CourseNavigation />}
        <Outlet />
        {pathname.includes("Home") && <RightSideBar />}
      </div>
    </div>
  );
};
