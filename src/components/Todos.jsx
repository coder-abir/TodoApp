/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <section className="w-[50%] mx-auto bg-slate-700 p-5 h-[60vh] overflow-y-scroll">
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
