import React from "react";
import TodoNavbar from "./components/TodoNavbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import bodySvg from "./assets/body.svg";

const Todo = () => {
  return (
    <div className="todo-body flex justify-between">
      <Sidebar />
      <div className="body flex items-center justify-center bg-slate-700 w-full h-screen ms-auto">
        <p>dhfsjdfhj</p>
      </div>
    </div>
  );
};

export default Todo;
