/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/TodoForm.js
import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/todos", {
        title,
        description,
        completed: false,
      });
      onAddTodo(response.data);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding the todo", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
