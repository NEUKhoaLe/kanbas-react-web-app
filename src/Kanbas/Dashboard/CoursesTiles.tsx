import "./index.css";

import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import React from "react";
import { addNewCourse, setCourse, updateCourse, deleteCourse } from "./reducer";
import { useDispatch } from "react-redux";

interface Course {
  course_id: string;
  filename: string;
  title: string;
  description: string;
  "sub-body": string;
}

interface CourseTilesProps {
  courses: Course[];
}

export const CoursesTiles: React.FC<CourseTilesProps> = function ({ courses }) {
  const dispatch = useDispatch();
  return (
    <div className={"container"}>
      <div className={"row sub-row"}>
        <span className="col d-flex dashboard-subtext">
          Published Courses ({courses.length})
        </span>
        <hr />
        <div className={"d-flex flex-wrap card-box"}>
          {courses.map((item, index) => {
            return (
              <div className={"card dashboard-card"} key={item.course_id}>
                <img
                  alt={""}
                  className={"card-img-top course-image"}
                  src={`${process.env.PUBLIC_URL}/Images/${item.filename}`}
                />
                <div className={"card-body"}>
                  <Link
                    to={`/Kanbas/Courses/${item.course_id}/Home`}
                    className={"card-anchor"}
                  >
                    <p className={"card-title"}>{item.title}</p>
                    <p className={"description"}>
                      {item.description}
                      <br />
                      <span className={"card-sub-body"}>
                        {item["sub-body"]}
                      </span>
                    </p>
                  </Link>
                  <Link
                    to={`/Kanbas/Courses/${item.course_id}/Home`}
                    className={"book-icon"}
                  >
                    <FaBook className={""} />
                    <button
                      className="delete-course-button"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(setCourse(item));
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-course-button"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(item.course_id));
                      }}
                    >
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
