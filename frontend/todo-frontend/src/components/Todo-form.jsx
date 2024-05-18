/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const TodoForm = ({ currentTodo, onSubmit, onClear }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title);
      setDescription(currentTodo.description);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onSubmit({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  const handleClear = () => {
    onClear();
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
};

export default TodoForm;
