import { HiddenKanbasNavigation, KanbasNavigation } from "./Navigation";
import { useEffect, useState } from "react";
import "./Dashboard/index.css";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { HiddenCourseNavigation } from "./Courses/Navigation/CourseNavigation";
import { courses } from "./Database";
import store from "./store";
import { Provider } from "react-redux";

interface Course {
  course_id: string;
  course_title: string;
}

function Kanbas() {
  const [isOpen, setIsOpen] = useState(false);
  const [courseNavIsOpen, setCourseNavIsOpen] = useState(false);
  const [title, setTitle] = useState<Course | null>(null);
  const { pathname } = useLocation();
  const { course_id } = useParams();

  useEffect(() => {
    const course = courses.find((item) => item.course_id === course_id);

    if (course) {
      setTitle({ course_title: course.title, course_id: course.course_id });
    }
  }, [course_id]);

  const topTitle = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <Provider store={store}>
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
        {pathname.includes("Courses") && title && (
          <Link
            to={`/Kanbas/Courses/${title.course_id}/Home`}
            className={"navigation-row-small-anchor"}
          >
            {title.course_title}
            <p className={"text"}>{topTitle}</p>
          </Link>
        )}
        {pathname.includes("Courses") && title && (
          <button
            className={"btn navigation-row-small-button"}
            onClick={() => setCourseNavIsOpen((prev) => !prev)}
          >
            <FaChevronDown className={"fa-lg navigation-row-small-icon"} />
          </button>
        )}
      </div>
      <div
        style={{ display: `${isOpen ? `` : `none`}` }}
        className="kanbasCollapse"
        id={"kanbasCollapse"}
      >
        <HiddenKanbasNavigation isOpen={setIsOpen} />
      </div>
      {title && (
        <div
          style={{ display: `${courseNavIsOpen ? `` : `none`}` }}
          className={"courseCollapse"}
        >
          <HiddenCourseNavigation onClick={() => setCourseNavIsOpen(false)} />
        </div>
      )}
      <div
        className={`container-fluid ${pathname.includes("Courses") ? "parent-div-course" : "parent-div dashboard"}`}
      >
        <div className={"col-auto navigation-col"}>
          <KanbasNavigation />
        </div>
        <Outlet />
      </div>
    </Provider>
  );
}

export default Kanbas;
