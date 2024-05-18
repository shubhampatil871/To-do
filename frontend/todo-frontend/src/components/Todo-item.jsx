/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{todo.completed ? "Completed" : "Not Completed"}</p>
      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
