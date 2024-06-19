import React from "react";
import TodoNavbar from "./components/TodoNavbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

const Todo = () => {
  return (
    <>
      <div className="body flex items-center">
        <Sidebar />
      </div>
    </>
  );
};

export default Todo;
