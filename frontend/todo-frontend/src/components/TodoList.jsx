/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return <p className="text-white text-xl">No todos available. Please add some tasks.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};

export default TodoList;
