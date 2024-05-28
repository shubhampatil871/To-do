/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/TodoForm.js

// src/components/TodoForm.jsx
import React, { useState, useEffect } from "react";

const TodoForm = ({ onAddOrUpdateTodo, editingTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrUpdateTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex  flex-col w-96 bg-zinc-800 rounded-2xl p-6" >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="m-1 input input-bordered w-full max-w-xs bg-base-200"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="m-1 input input-bordered input-lg w-full max-w-xs bg-base-200"
      />
      <button type="submit" className="btn btn-primary">
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;












// import React, { useState } from "react";
// import axios from "axios";

// const TodoForm = ({ onAddTodo }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/api/todos", {
//         title,
//         description,
//         completed: false,
//       });
//       onAddTodo(response.data);
//       setTitle("");
//       setDescription("");
//     } catch (error) {
//       console.error("Error adding the todo", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex  flex-col w-96 bg-zinc-800 rounded-2xl p-6"
//     >
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//         className="m-1 input input-bordered w-full max-w-xs bg-base-200"
//       />
//       <input
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Description"
//         required
//         className=" m-1 input input-bordered input-lg w-full max-w-xs bg-base-200"
//       />
//       <button type="submit" className="btn btn-primary my-2">
//         Add Todo
//       </button>
//     </form>
//   );
// };

// export default TodoForm;
