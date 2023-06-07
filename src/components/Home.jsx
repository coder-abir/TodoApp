/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((previousTodos) => {
      const filteredTodos = previousTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <div className="bg-gradient-to-tr  from-slate-600 to-emerald-800 text-white flex justify-center items-center h-[100vh] flex-col">
      <h1 className="text-center text-white font-bold text-3xl mb-10 uppercase ">
        To <span className="text-emerald-400">Do</span> List
      </h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
