import React from "react";
import TodoNavbar from "./components/TodoNavbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import bodySvg from "./assets/body.svg";

const Todo = () => {
  return (
    <div className="todo-body flex">
      <div className="flex">
        <Sidebar />
      </div>
      <div className="body flex items-center justify-center bg-slate-100 w-[63%]">
        <p>dhfsjdfhj</p>
      </div>
    </div>
  );
};

export default Todo;
