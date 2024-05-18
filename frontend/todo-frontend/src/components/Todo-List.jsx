/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TodoItem from "./Todo-item.jsx";

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
