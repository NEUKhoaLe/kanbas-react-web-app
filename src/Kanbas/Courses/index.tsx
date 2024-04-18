import "./index.css";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { CourseNavigation } from "./Navigation/CourseNavigation";
import { RightSideBar } from "./RightSideBar";
import { useCallback, useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../store";
import axios from "axios";
import { setCourse } from "../Dashboard/reducer";

export const Courses = function () {
  const course = useSelector(
    (state: KanbasState) => state.courseReducer.course,
  );

  const dispatch = useDispatch();
  const API_BASE = process.env.REACT_APP_API_BASE;

  const { user } = useSelector((state: KanbasState) => state.usersReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Kanbas/Account/Signin");
    }
  }, [navigate, user]);

  const { course_id } = useParams();
  const COURSES_API = `${API_BASE}/api/courses`;

  const retrieveCourse = useCallback(async () => {
    const response = await axios.get(`${COURSES_API}/${course_id}`);
    dispatch(setCourse(response.data));
  }, [COURSES_API, course_id, dispatch]);

  useEffect(() => {
    if (user) {
      retrieveCourse();
    }
  }, [user, retrieveCourse]);

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
