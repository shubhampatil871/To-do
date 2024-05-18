/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
