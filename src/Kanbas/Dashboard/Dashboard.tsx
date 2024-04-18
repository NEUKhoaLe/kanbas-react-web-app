import "./index.css";
import { FaEllipsisV, FaPlus } from "react-icons/fa";
import { CoursesTiles } from "./CoursesTiles";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../store";
import { addCourse, setCourse, setCourses } from "./reducer";
import axios from "axios";
import { CourseType } from "../index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = function () {
  const courses = useSelector(
    (state: KanbasState) => state.courseReducer.courses,
  );

  const course = useSelector(
    (state: KanbasState) => state.courseReducer.course,
  );

  const { user } = useSelector((state: KanbasState) => state.usersReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Kanbas/Account/Signin");
    }
  }, [navigate, user]);

  const dispatch = useDispatch();

  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_API = `${API_BASE}/api/courses`;

  const addC = async (course: CourseType) => {
    const newCourse = {
      ...course,
      course_id: new Date().getTime().toString(),
    };
    const response = await axios.post(COURSES_API, newCourse);

    dispatch(addCourse(response.data));
  };

  const updateC = async (course: CourseType) => {
    const response = await axios.patch(
      `${COURSES_API}/${course.course_id}`,
      course,
    );

    dispatch(setCourses(response.data));
  };

  return (
    <div className={"col dashboard-col"}>
      <div className={"container dashboard-header"}>
        <div className={"row"}>
          <span className={"col d-flex dashboard-text"}>
            Dashboard
            <button type="button" className="btn button">
              <FaEllipsisV className={"fa-2x"} />
            </button>
          </span>
          <hr />
          <div className={"edit-course-input"}>
            <label className={"fw-bold"}>Course Title</label>
            <input
              value={course.title}
              onChange={(e) =>
                dispatch(setCourse({ ...course, title: e.target.value }))
              }
              className="form-control"
            />
            <label className={"fw-bold"}>Course ID</label>
            <input
              value={course.course_id}
              onChange={(e) =>
                dispatch(setCourse({ ...course, course_id: e.target.value }))
              }
              className="form-control"
            />
            <label className={"fw-bold"}>Course Description</label>
            <input
              value={course.description}
              onChange={(e) =>
                dispatch(setCourse({ ...course, description: e.target.value }))
              }
              className="form-control"
            />
            <label className={"fw-bold"}>Course Body</label>
            <input value={course["sub-body"]} className="form-control" />
          </div>

          {!courses.find((item) => item.course_id === course.course_id) && (
            <button
              className="btn add-course-button"
              onClick={() => {
                addC(course);
              }}
            >
              <FaPlus className="add-course-button-plus" />
              Add Course
            </button>
          )}
          {courses.find((item) => item.course_id === course.course_id) && (
            <button
              className="btn add-course-button"
              onClick={() => {
                updateC(course);
              }}
            >
              Edit Course
            </button>
          )}

          <CoursesTiles courses={courses} />
        </div>
      </div>
    </div>
  );
};
