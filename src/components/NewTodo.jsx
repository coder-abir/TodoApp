/* eslint-disable react/prop-types */
import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const { title, desc } = todo;
  // to update the state
  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };
  // to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <div className="w-[50%]">
      <form className="p-4 mb-5 bg-slate-700" onSubmit={handleSubmit}>
        <div className="flex mb-5 gap-5 items-center">
          <label className="basis-[20%]" htmlFor="title">
            Title:{" "}
          </label>
          <input
            className="basis-[80%] outline-none text-slate-800 p-2 text-xl"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-5">
          <label className="basis-[20%] " htmlFor="desc">
            Description:
          </label>
          <textarea
            className="basis-[80%] outline-none resize-none text-slate-800  text-xl p-2"
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="bg-emerald-600 p-2 mt-5 w-full  mb-5 cursor-pointer"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
