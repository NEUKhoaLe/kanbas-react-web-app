import "./index.css";
import { courses } from "../Database";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

export const CoursesTiles = function () {
  return (
    <div className={"container"}>
      <div className={"row sub-row"}>
        <span className="col d-flex dashboard-subtext">
          Published Courses (7)
        </span>
        <hr />
        <div className={"d-flex flex-wrap card-box"}>
          {courses.map((item, index) => {
            return (
              <div className={"card dashboard-card"}>
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
