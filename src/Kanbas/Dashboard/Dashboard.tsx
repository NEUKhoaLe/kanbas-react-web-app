import { HiddenKanbasNavigation, KanbasNavigation } from "../Navigation";
import "./index.css";
import { FaBars, FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import { CoursesTiles } from "./CoursesTiles";
import { Link } from "react-router-dom";

interface Course {
  course_id: string;
  course_title: string;
}

export const Dashboard = function () {
  const [isOpen, setIsOpen] = useState(false);
  const [courseNavIsOpen, setcourseNavIsOpen] = useState(false);
  const [title, setTitle] = useState<Course | null>(null);

  return (
    <>
      <div
        className="navigation-row-small"
        style={{ display: `${isOpen ? `none` : ``}` }}
      >
        <button
          className="btn navigation-row-small-button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <FaBars className={"navigation-row-small-icon"} />
        </button>
        {title && (
          <Link
            to={`/Kanbas/Courses/${title.course_id}/Home`}
            className={"navigation-row-small-anchor"}
          >
            {title.course_title}
            <p className={"text"}>Modules</p>
          </Link>
        )}
        {title && (
          <button
            className={"btn navigation-row-small-button"}
            onClick={() => setcourseNavIsOpen(true)}
          ></button>
        )}
      </div>
      <div
        style={{ display: `${isOpen ? `` : `none`}` }}
        id="kanbasCollapseDash"
      >
        <HiddenKanbasNavigation isOpen={setIsOpen} />
      </div>
      <div className={"container-fluid parent-div dashboard"}>
        <div className={"col-auto navigation-col"}>
          <KanbasNavigation />
        </div>
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
              <CoursesTiles />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
