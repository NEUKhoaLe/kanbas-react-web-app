import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../index.css";
import {
  FaBook,
  FaCaretDown,
  FaCaretUp,
  FaCheckCircle,
  FaEllipsisV,
  FaGripLinesVertical,
  FaPlus,
} from "react-icons/fa";
import React, { useState } from "react";

export const Assignments = function () {
  const { course_id } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === course_id,
  );

  const [collapse, setCollapse] = useState(false);

  return (
    <div className={"col main-course-content"}>
      <div className={"d-flex row assignment-top-bar "}>
        <input
          type={"text"}
          placeholder={"Search for Assignments"}
          className={"assignment-search-input"}
        />
        <div className={"d-flex assignment-top-bar-right central-four-buttons"}>
          <button className="btn course-home-button no-hover">
            <FaPlus />
            Group
          </button>
          <button className="btn course-module-button no-hover">
            <FaPlus />
            Assignment
          </button>
          <button className="btn no-hover course-home-button">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
      <div className={"row"}>
        <div className={"week-row"}>
          <div className={"week-row-content"}>
            <div className={"week-row-subsection"}>
              <FaEllipsisV className={"main-content-icons"} />
              <FaEllipsisV className={"main-content-icons"} />
              {!collapse && (
                <FaCaretDown
                  className={"main-content-chevron"}
                  onClick={() => setCollapse(true)}
                />
              )}
              {collapse && (
                <FaCaretUp
                  className={"main-content-chevron"}
                  onClick={() => setCollapse(false)}
                />
              )}
              <p className={"row-text"}>ASSIGNMENTS</p>
            </div>
            <div className={"week-row-subsection"}>
              <FaCheckCircle className={"main-content-check"} />
              <FaPlus className={"main-content-right-icons"} />
              <FaEllipsisV className={"main-content-right-icons"} />
            </div>
          </div>
          <div className={"header"} style={{ display: collapse ? "none" : "" }}>
            {assignmentList.map((item, index) => {
              return (
                <div className={"header-content"} key={index}>
                  <div className={"header-content-left"}>
                    <FaEllipsisV className={"main-content-icons fa-lg"} />
                    <FaEllipsisV className={"main-content-icons fa-lg"} />
                    <FaBook
                      className={"main-content-icons main-content-icons-book"}
                      size={24}
                    />
                    <div className={"container"}>
                      <Link
                        to={`/Kanbas/Courses/${course_id}/Assignments/${item._id}`}
                        className={"assignment-link"}
                      >
                        {item.title}
                      </Link>
                      <span className={"d-flex sub-text"}>
                        <p className={"multiple-modules"}>Multiple Modules</p>
                        <FaGripLinesVertical size={10} />
                        <p className={"due"}>Due</p>
                        <p className={"due-date"}>Oct 2 at 11:59pm</p>
                        <FaGripLinesVertical size={10} />
                        <p className={"grade"}>100 pts</p>
                      </span>
                    </div>
                  </div>
                  <div className={"header-content-right"}>
                    <FaCheckCircle className={"main-content-check"} />
                    <FaEllipsisV className={"main-content-right-icons"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
