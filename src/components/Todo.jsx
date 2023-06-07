/* eslint-disable react/prop-types */
import React from "react";

const Todo = (props) => {
  const { title, id, desc } = props.todo;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <div className="mb-5 last:mb-0 border border-b-1 border-x-0 border-t-0 pb-5">
      <article className="flex gap-10 items-center justify-between">
        <div className="w-[100%]">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="text-xl bg-emerald-800 p-3 mt-5">{desc}</p>
        </div>
        <div className="f">
          <button
            onClick={() => {
              handleClick(props.id);
            }}
          >
            <i className="fa fa-trash fa-2x text-slate-200 hover:text-red-500 transition duration-400"></i>
          </button>
        </div>
      </article>
    </div>
  );
};

export default Todo;
