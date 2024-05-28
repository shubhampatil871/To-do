/* eslint-disable no-unused-vars */
// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodosForm.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

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

  const addOrUpdateTodo = async (newTodo) => {
    if (editingTodo) {
      // Update existing todo
      try {
        const response = await axios.put(
          `http://localhost:8080/api/todos/${editingTodo._id}`,
          newTodo
        );
        setTodos(
          todos.map((todo) =>
            todo._id === editingTodo._id ? response.data : todo
          )
        );
        setEditingTodo(null);
      } catch (error) {
        console.error("Error updating the todo", error);
        alert("Failed to update the todo. Please try again.");
      }
    } else {
      // Add new todo
      try {
        const response = await axios.post(
          "http://localhost:8080/api/todos",
          newTodo
        );
        setTodos([...todos, response.data]);
      } catch (error) {
        console.error("Error adding the todo", error);
        alert("Failed to add the todo. Please try again.");
      }
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting the todo", error);
      alert("Failed to delete the todo. Please try again.");
    }
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className="bg-base-300 w-full min-h-screen flex items-center py-2 flex-col">
      <h1 className="text-white font-bold text-5xl mb-5">Todo List</h1>
      <TodoForm onAddOrUpdateTodo={addOrUpdateTodo} editingTodo={editingTodo} />
      <div>
        <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </div>
    </div>
  );
};

export default App;
