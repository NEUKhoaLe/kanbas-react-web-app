import { HiddenKanbasNavigation, KanbasNavigation } from "./Navigation";
import { useCallback, useEffect, useState } from "react";
import "./Dashboard/index.css";
import { FaBars, FaChevronDown } from "react-icons/fa";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { HiddenCourseNavigation } from "./Courses/Navigation/CourseNavigation";
import { KanbasState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCourses } from "./Dashboard/reducer";

interface Course {
  course_id: string;
  course_title: string;
}

export interface CourseType {
  course_id: string;
  filename: string;
  title: string;
  description: string;
  "sub-body": string;
}

function Kanbas() {
  const [isOpen, setIsOpen] = useState(false);
  const [courseNavIsOpen, setCourseNavIsOpen] = useState(false);
  const [title, setTitle] = useState<Course | null>(null);
  const { pathname } = useLocation();
  const { course_id } = useParams();

  const { user } = useSelector((state: KanbasState) => state.usersReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Kanbas/Account/Signin");
    }
  }, [navigate, user]);

  const courses = useSelector(
    (state: KanbasState) => state.courseReducer.courses,
  );

  const dispatch = useDispatch();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_API = `${API_BASE}/api/courses`;

  const findAllCourses = useCallback(
    async function () {
      const response = await axios.get(COURSES_API);
      dispatch(setCourses(response.data));
    },
    [COURSES_API, dispatch],
  );

  useEffect(() => {
    if (user) {
      findAllCourses();
    }
  }, [user, findAllCourses]);

  useEffect(() => {
    const course = courses.find((item) => item.course_id === course_id);

    if (course) {
      setTitle({ course_title: course.title, course_id: course.course_id });
    }
  }, [course_id, courses]);

  const topTitle = pathname.split("/")[pathname.split("/").length - 1];

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
    </>
  );
}

export default Kanbas;
