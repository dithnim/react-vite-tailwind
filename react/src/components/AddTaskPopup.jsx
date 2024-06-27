import React from "react";
import { useState } from "react";
import TaskMapper from "./TaskMapper";

const AddTaskPopup = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleFromSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      desc,
    };

    try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();
      if (response.ok) {
        toggleAddTask();
        setTitle("");
        setDesc("");
      } else {
        console.error("Failed to create task:", data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAddTask = () => {
    document
      .getElementById("add-task-popup")
      .classList.toggle("add-task-popup-open");
  };

  const togglePriority = () => {
    document
      .getElementById("priority-menu")
      .classList.toggle("priority-popup-close");
  };

  const toggleDateSelect = () => {
    document.getElementById("date-popup").classList.toggle("date-popup-open");
  };

  return (
    <div
      className="add-task-popup bg-neutral-900 absolute top-[30%] left-[25%] w-[60%] rounded-md p-2 px-4 shadow-xl flex flex-col"
      id="add-task-popup"
    >
      <form onSubmit={handleFromSubmit}>
        <input
          type="text"
          placeholder="Task name"
          className="bg-transparent outline-0 font-semibold text-xl w-full"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={handleDescChange}
          className="bg-transparent outline-0 font-semibold text-sm w-full mt-2"
        />
        <div className="add-task-btns mt-2">
          <button
            className="add-task-sub bg-transparent rounded-md px-2 border border-neutral-500"
            onClick={toggleDateSelect}
          >
            <i className="bx bx-calendar-plus cursor-pointer"></i>
            <label htmlFor="cal" className="ms-1 text-sm cursor-pointer">
              Today
            </label>
          </button>

          <div
            className="absolute date-popup-close z-10 mt-2 w-[150px] rounded-md bg-neutral-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            id="date-popup"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="flex items-center py-1 px-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <i className="bx bxl-react text-lg me-1 text-green-500"></i>
                Today
              </a>
              <a
                href="#"
                className="flex items-center py-1 px-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                <i className="bx bx-sun text-lg me-1 text-yellow-500"></i>
                Tommorow
              </a>

              <button
                type="submit"
                className="flex items-center w-full px-4 py-1 text-left text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                <i className="bx bx-game text-lg me-1 text-blue-500"></i>
                This weekend
              </button>

              <a
                href="#"
                className="flex items-center py-1 px-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                <i className="bx bx-meteor text-lg me-1 text-purple-500"></i>
                Next week
              </a>
            </div>
          </div>

          <button
            className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500"
            id="btn-priority"
            onClick={togglePriority}
          >
            <i className="bx bxs-flag-alt cursor-pointer"></i>
            <label htmlFor="priority" className="ms-1 text-sm cursor-pointer">
              Priority
            </label>
          </button>

          <div
            className="priority-popup-close absolute left-[80px] z-10 mt-2 w-26 divide-y divide-gray-100 rounded-md bg-neutral-900 ring-1 ring-white ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            id="priority-menu"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <i className="bx bxs-flag-alt me-2 text-red-500"></i>
                Priority 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <i className="bx bxs-flag-alt me-2 text-yellow-500"></i>
                Priority 2
              </a>

              <a
                href="#"
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <i className="bx bxs-flag-alt me-2 text-blue-500"></i>
                Priority 3
              </a>
            </div>
          </div>

          <button
            className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500"
            role="menuitem"
          >
            <i className="bx bx-alarm-add cursor-pointer"></i>
            <label htmlFor="reminders" className="ms-1 text-sm cursor-pointer">
              Reminders
            </label>
          </button>
          <button className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500">
            <i className="bx bx-dots-horizontal-rounded"></i>
          </button>

          <div className="w-[100%] bg-neutral-700 h-[1px] mt-4"></div>

          <div className="mt-3 flex justify-end">
            <button
              type="reset"
              className="bg-white text-black font-semibold px-2 rounded-md me-2"
              onClick={toggleAddTask}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-500 font-semibold px-2 rounded-md"
            >
              Add task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTaskPopup;
