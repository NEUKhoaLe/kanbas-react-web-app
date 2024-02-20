import { modules } from "../../Database";
import { useParams } from "react-router-dom";
import "../index.css";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { ModuleSection } from "./ModuleSection";

export const Modules = function () {
  const { course_id } = useParams();

  const moduleList = modules.filter((item) => {
    return item.course === course_id;
  });

  return (
    <div className={"col main-course-content"}>
      <div className={"row"}>
        <div className="d-flex central-four-buttons">
          <button className="btn no-hover course-home-button">
            Collapse All
          </button>
          <button className="btn no-hover course-home-button">
            View Progress
          </button>
          <div className="course-home-button">
            <FaCheckCircle className={"text-success"} />
            <select id="publish-all-options">
              <option selected value="publish all">
                Publish All
              </option>
              <option value="publish selected">Option 2</option>
              <option selected value="publish at another time">
                Option 3
              </option>
              <option selected value="Cancel">
                Cancel
              </option>
            </select>
          </div>
          <button className="btn course-module-button no-hover">
            <FaPlus />
            Module
          </button>
          <button className="btn no-hover course-home-button">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
      <div className={"row"}>
        {moduleList.map((item, index) => {
          return <ModuleSection item={item} index={index} />;
        })}
      </div>
    </div>
  );
};
