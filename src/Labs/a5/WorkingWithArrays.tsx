import React, { useState, useEffect } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
}

function WorkingWithArrays() {
  const API = `http://${process.env.REACT_APP_API_BASE}/a5/todos`;
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [todos, setTodos] = useState<Todo[]>([]);
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo: Todo) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id: number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <textarea
        value={todo.title}
        placeholder={"Title"}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <textarea
        value={todo.description}
        placeholder={"Description"}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <input
        value={todo.due}
        type="date"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />
      <label>
        <input
          type="checkbox"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: !todo.completed,
            })
          }
        />
        Completed
      </label>
      <button onClick={postTodo}> Post Todo</button>
      <button onClick={updateTodo}>Update Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button onClick={() => fetchTodoById(todo.id)}>Edit</button>
            <button onClick={() => removeTodo(todo)}>Remove</button>
          </li>
        ))}
      </ul>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: +e.target.value,
          })
        }
      />
      <a href={`${API}/${todo.id}`}>Get Todo by ID</a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}>Get Completed Todos</a>
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`}>Create Todo</a>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Title to {todo.title}
      </a>
      <h3>Updating Description</h3>
      <input
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <a href={`${API}/${todo.id}/description/${todo.description}`}>
        Update Description to {todo.description}
      </a>
      <h3>Updating Completed</h3>
      <input
        type="checkbox"
        value={todo.description}
        onChange={() =>
          setTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
        Update Completed
      </a>
    </div>
  );
}

export default WorkingWithArrays;
