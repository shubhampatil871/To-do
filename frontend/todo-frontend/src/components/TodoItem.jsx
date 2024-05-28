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
    <li className="todo-item mt-2">
      <h2 className="text-white text-xl font-semibold">{todo.title}</h2>
      <p className="p-1 w-96">{todo.description}</p>
      <div className="flex mt-4">
        <p className="btn btn-xs btn-outline  mr-48">
          Completed: {todo.completed ? "Yes" : "No"}
        </p>
        <button
          className="btn btn-xs btn-outline btn-primary mr-4"
          onClick={() => onEdit(todo)}
        >
          Edit
        </button>
        <button
          className="btn btn-xs btn-outline btn-error flex-end "
          onClick={handleDelete}
        >
          X
        </button>
      </div>
      <div className="divider"></div>
    </li>
  );
};

export default TodoItem;
