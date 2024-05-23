/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li className=''>
      <h2 className='text-white text-xl font-semibold'>{todo.title}</h2>
      <p className='p-1 w-96'>{todo.description}</p>
      <p className='badge badge-secondary'>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <div className="divider"></div>
    </li>
  );
};

export default TodoItem;
