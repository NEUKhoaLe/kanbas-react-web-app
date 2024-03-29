import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { TodoType } from "../../../store";

interface TodoItemProps {
  todo: TodoType;
}

const TodoItem: React.FC<TodoItemProps> = function (props) {
  const dispatch = useDispatch();
  return (
    <li key={props.todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(props.todo.id))}>
        {" "}
        Delete{" "}
      </button>
      <button onClick={() => dispatch(setTodo(props.todo))}> Edit </button>
      {props.todo.title}
    </li>
  );
};
export default TodoItem;
