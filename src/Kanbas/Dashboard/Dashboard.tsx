import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import { CoursesTiles } from "./CoursesTiles";

export const Dashboard = function () {
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
          <CoursesTiles />
        </div>
      </div>
    </div>
  );
};
