/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/TodoItem.jsx
import React from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(todo._id); // Call the onDelete callback
  };

  return (
    <li className="todo-item">
      <h2 className="text-white text-xl font-semibold">{todo.title}</h2>
      <p className="p-1 w-96">{todo.description}</p>
      <p className="badge badge-secondary">
        Completed: {todo.completed ? "Yes" : "No"}
      </p>
      <button
        className="btn btn-xs btn-outline btn-error mx-10"
        onClick={handleDelete}
      >
        X
      </button>
      <button
        className="btn btn-xs btn-outline btn-primary mx-10"
        onClick={() => onEdit(todo)}
      >
        Edit
      </button>
      <div className="divider"></div>
    </li>
  );
};

export default TodoItem;
