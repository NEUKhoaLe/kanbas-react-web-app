import {
  FaBullhorn,
  FaCertificate,
  FaChartBar,
  FaCircleNotch,
  FaCog,
  FaComments,
  FaDotCircle,
  FaFile,
  FaFilePdf,
  FaFolder,
  FaHome,
  FaPlug,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import React, { useState } from "react";

const links = [
  { label: "/Kanbas/Courses/:course_id/Home", icon: <FaHome /> },
  { label: "/Kanbas/Courses/:course_id/Modules", icon: <FaDotCircle /> },
  { label: "/Kanbas/Courses/:course_id/Piazza", icon: <FaPlug /> },
  { label: "/Kanbas/Courses/:course_id/Zoom", icon: <FaPlug /> },
  { label: "/Kanbas/Courses/:course_id/Assignments", icon: <FaFilePdf /> },
  { label: "/Kanbas/Courses/:course_id/Quizzes", icon: <FaRocket /> },
  { label: "/Kanbas/Courses/:course_id/Grades", icon: <FaFile /> },
  { label: "/Kanbas/Courses/:course_id/People", icon: <FaUsers /> },
  { label: "/Kanbas/Courses/:course_id/Panopto Video", icon: <FaPlug /> },
  { label: "/Kanbas/Courses/:course_id/Discussions", icon: <FaComments /> },
  { label: "/Kanbas/Courses/:course_id/Announcements", icon: <FaBullhorn /> },
  { label: "/Kanbas/Courses/:course_id/Pages", icon: <FaFile /> },
  { label: "/Kanbas/Courses/:course_id/Files", icon: <FaFolder /> },
  { label: "/Kanbas/Courses/:course_id/Rubrics", icon: <FaChartBar /> },
  { label: "/Kanbas/Courses/:course_id/Outcomes", icon: <FaCircleNotch /> },
  {
    label: "/Kanbas/Courses/:course_id/Collaborations",
    icon: <FaCertificate />,
  },
  { label: "/Kanbas/Courses/:course_id/Syllabus", icon: <FaFilePdf /> },
  { label: "/Kanbas/Courses/:course_id/Settings", icon: <FaCog /> },
];

export const CourseNavigation = function () {
  const { pathname } = useLocation();
  const { course_id } = useParams();

  return (
    <div className={"col course-navigation"}>
      <ul className={"wd-navigation"}>
        {links.map((item, index) => {
          const split = item.label.split("/");

          return (
            <li
              key={index}
              className={
                pathname.includes(split[split.length - 1]) ? "wd-active" : ""
              }
            >
              <Link
                to={item.label.replace(
                  ":course_id",
                  course_id ? course_id : "",
                )}
              >
                {split[split.length - 1]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface HiddenCourseNavigationProps {
  onClick: () => void;
}

export const HiddenCourseNavigation: React.FC<HiddenCourseNavigationProps> =
  function ({ onClick }) {
    const { course_id } = useParams();

    return (
      <div className={"course-collapse"}>
        <ul className={"collapse-course-navigation"}>
          {links.map((item, index) => {
            const split = item.label.split("/");

            return (
              <li key={index} onClick={onClick}>
                <Link
                  to={item.label.replace(
                    ":course_id",
                    course_id ? course_id : "",
                  )}
                >
                  {item.icon}
                  {split[split.length - 1]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
