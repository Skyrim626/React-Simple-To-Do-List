import React, { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import data from "../data.json";
import Todo from "../components/Todo";

export default function HomePage() {
  const onSelect = (ev) => {
    console.log();
  };

  /* const handleCheck = (e) => {
    console.log(e.target.checked);
  }; */

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(data);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-indigo-700 px-10 py-7 text-white flex justify-between items-center">
        <h1 className="font-bold text-xl hidden sm:block">To-Do List</h1>
        <a
          href=""
          className="px-5 py-3 bg-red-600 hover:bg-red-700 transition rounded-md flex items-center gap-2"
        >
          <FaPlus />
          Add new task
        </a>
      </nav>

      {/* Main */}
      <section>
        <div className="mt-8 md:w-2/4 bg-indigo-300 p-3 mx-auto rounded-md">
          {/* Filter Drop Down */}
          <div className="flex justify-between items-center">
            <h2 className="font-bold">Your Todos</h2>
            <select
              name=""
              id=""
              className="py-3 px-3 bg-white font-bold rounded-sm cursor-pointer"
            >
              <option defaultValue="all">All</option>
              <option defaultValue="low">Low Priority</option>
              <option defaultValue="medium">Medium Priority</option>
              <option defaultValue="high">High Priority</option>
            </select>
          </div>

          {/* Todo Lists */}
          <div className="mt-3 space-y-3">
            {/* Todo */}
            {todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  title={todo.title}
                  priorityLevel={todo.priorityLevel}
                  isChecked={todo.isChecked}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
