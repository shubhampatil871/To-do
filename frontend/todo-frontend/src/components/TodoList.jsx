/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul className="card bg-zinc-800 p-4 w-96 my-4">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
