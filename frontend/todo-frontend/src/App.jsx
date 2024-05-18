/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/todos");
        console.log(response.data); // Replace with your backend URL
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching the todos", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
