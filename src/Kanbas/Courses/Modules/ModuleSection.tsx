import {
  FaCaretDown,
  FaCaretUp,
  FaCheckCircle,
  FaEdit,
  FaEllipsisV,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import React, { useState } from "react";
import { deleteModule, setModule } from "./reducer";
import { useDispatch } from "react-redux";

interface ModuleSectionProps {
  item:
    | {
        _id: string;
        name: string;
        description: string;
        course: string;
        lessons: {
          _id: string;
          name: string;
          description: string;
          module: string;
        }[];
      }
    | {
        _id: string;
        name: string;
        description: string;
        course: string;
        lessons?: undefined;
      };
  index: number;
}
export const ModuleSection: React.FC<ModuleSectionProps> = function ({
  item,
  index,
}) {
  const [collapse, setCollapse] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className={"week-row"} key={index}>
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
          <p className={"row-text"}>{item.name}</p>
        </div>
        <div className={"week-row-subsection"}>
          <FaCheckCircle className={"main-content-check"} />
          <FaPlus className={"main-content-right-icons"} />
          <FaEdit
            className={"main-content-right-icons"}
            onClick={() => dispatch(setModule(item))}
          />
          <FaTrash
            className={"main-content-right-icons trash-red"}
            onClick={() => dispatch(deleteModule(item._id))}
          />
        </div>
      </div>
      <div className={"header"} style={{ display: collapse ? "none" : "" }}>
        {item.lessons?.map((lesson, i) => {
          return (
            <div className={"header-content"} key={i}>
              <div className={"header-content-left"}>
                <FaEllipsisV className={"main-content-icons fa-lg"} />
                <FaEllipsisV className={"main-content-icons fa-lg"} />
                <p className={"week-row-text"}>{lesson.description}</p>
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
  );
};
