/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </li>
  );
};

export default TodoItem;
