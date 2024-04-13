import { useParams } from "react-router-dom";
import "../index.css";
import { FaCheckCircle, FaEdit, FaEllipsisV, FaPlus } from "react-icons/fa";
import { ModuleSection } from "./ModuleSection";
import { useSelector, useDispatch } from "react-redux";
import { addModule, updateModule, setModule, setModules } from "./reducer";
import { KanbasState } from "../../store";
import { useEffect } from "react";
import {
  createModule,
  findModulesForCourse,
  updateModuleClient,
} from "./client";

interface Module {
  name: string;
  description: string;
  _id: string;
  course: string;
}

export const Modules = function () {
  const { course_id } = useParams();

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules,
  );
  const module: Module = useSelector(
    (state: KanbasState) => state.modulesReducer.module,
  );

  const handleUpdateModule = async () => {
    const status = await updateModuleClient(module);
    dispatch(updateModule(module));
  };

  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(course_id!, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  useEffect(() => {
    if (course_id) {
      findModulesForCourse(course_id).then((modules) =>
        dispatch(setModules(modules)),
      );
    }
  }, [course_id, dispatch]);

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
                handleAddModule();
              }}
            >
              <FaPlus />
              Module
            </button>
          )}
          {moduleList.find((item) => item._id === module._id) && (
            <button
              onClick={() => {
                handleUpdateModule();
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
