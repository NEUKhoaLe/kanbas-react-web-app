import { useParams } from "react-router-dom";
import "../index.css";
import { FaCheckCircle, FaEdit, FaEllipsisV, FaPlus } from "react-icons/fa";
import { ModuleSection } from "./ModuleSection";
import { useSelector, useDispatch } from "react-redux";
import { addModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

interface Module {
  name: string;
  description: string;
  _id: string;
  course_id: string;
}

export const Modules = function () {
  const { course_id } = useParams();

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules,
  );
  const module: Module = useSelector(
    (state: KanbasState) => state.modulesReducer.module,
  );

  const dispatch = useDispatch();

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
          <input
            value={module.name}
            placeholder={"Enter Module Name"}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          ></input>
          {!moduleList.find((item) => item._id === module._id) && (
            <button
              className="btn course-module-button"
              onClick={() => {
                dispatch(addModule({ ...module, course: course_id }));
              }}
            >
              <FaPlus />
              Module
            </button>
          )}
          {moduleList.find((item) => item._id === module._id) && (
            <button
              onClick={() => {
                dispatch(updateModule(module));
              }}
              className="btn course-module-button"
            >
              <FaEdit />
              Update
            </button>
          )}
          <button className="btn no-hover course-home-button">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
      <div className={"row"}>
        {moduleList
          .filter((m) => m.course === course_id)
          .map((item, index) => {
            return <ModuleSection key={index} item={item} index={index} />;
          })}
      </div>
    </div>
  );
};
