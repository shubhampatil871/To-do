/* eslint-disable no-unused-vars */
// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodosForm.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching the todos", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
