import "./index.css";
import { FaEllipsisV, FaPlus } from "react-icons/fa";
import { CoursesTiles } from "./CoursesTiles";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../store";
import { addNewCourse, setCourse, updateCourse } from "./reducer";

export const Dashboard = function () {
  const courses = useSelector(
    (state: KanbasState) => state.courseReducer.courses,
  );

  const course = useSelector(
    (state: KanbasState) => state.courseReducer.course,
  );
  const dispatch = useDispatch();

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
                dispatch(addNewCourse(course));
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
                dispatch(updateCourse(course));
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
