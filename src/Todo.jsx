import React from "react";
import TodoNavbar from "./components/TodoNavbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import bodySvg from "./assets/body.svg";
import "./components/Todo.css";
import proPic from "./assets/pro-pic.jpg";
import { useState } from "react";
import AddTaskPopup from "./components/AddTaskPopup.jsx";
import TaskMapper from "./components/TaskMapper.jsx";

function Row(svg, text) {
  return (
    <div className="normal-row flex items-center cursor-pointer mt-1 w-[95%] px-1 ps-2 rounded-md hover:bg-neutral-900 active:bg-red-500/15">
      <i class={svg}></i>
      <label htmlFor="addTask" className="cursor-pointer">
        {text}
      </label>
    </div>
  );
}

const Todo = () => {
  const toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("sidebar-open");
    document.getElementById("todo-body").classList.toggle("body-padding");
  };

  const toggleAddTask = () => {
    document
      .getElementById("add-task-popup")
      .classList.toggle("add-task-popup-open");
  };

  const toggleProfile = () => {
    document
      .getElementById("profile-popup")
      .classList.toggle("profile-popup-open");
  };

  return (
    <div className="todo-body flex w-screen" id="todo-body">
      {/* <Sidebar /> */}

      <div
        className="sidebar-close bg-neutral-950 flex flex-col items-center absolute top-0 h-screen"
        id="sidebar"
      >
        <div className="first-row flex justify-between mt-3 w-full h-10 items-center px-3">
          <div
            className="btn-profile flex items-center cursor-pointer hover:bg-neutral-900 delay-75 h-9 rounded-md p-1 me-20"
            onClick={toggleProfile}
          >
            <img src={proPic} alt="ProPic" className="w-7 h-7 rounded-full" />
            <label
              htmlFor="proName"
              className="text-sm font-semibold ms-2 cursor-pointer"
            >
              KODI
            </label>
            <i class="bx bxs-chevron-down text-xl ms-2"></i>
          </div>

          <div
            class="absolute profile-popup-close top-12 z-10 mt-2 w-56 divide-y divide-gray-800 rounded-md bg-neutral-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            id="profile-popup"
          >
            <div class="py-1 " role="none">
              <a
                href="#"
                class="flex items-center px-4 py-1 text-sm hover:bg-neutral-800 rounded-lg"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <i class="bx bx-plus me-2 text-lg"></i>
                Add a team
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-1 text-sm hover:bg-neutral-800 rounded-lg"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <i class="bx bx-cog me-2 text-lg"></i>
                Settings
              </a>
            </div>

            <div class="py-1" role="none">
              <a
                href="#"
                class="flex items-center px-4 py-1 text-sm hover:bg-neutral-800 rounded-lg"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <i class="bx bx-desktop me-2 text-lg"></i>
                Activity log
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-1 text-sm hover:bg-neutral-800 rounded-lg"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <i class="bx bx-book me-2 text-lg"></i>
                Resources
              </a>
            </div>

            <div class="py-1" role="none">
              <a
                href="#"
                class="flex items-center px-4 py-1 text-sm hover:bg-neutral-800 rounded-lg"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <i class="bx bx-gift me-2 text-lg"></i>
                What's new
              </a>
            </div>

            <div class="py-1" role="none">
              <a
                href="#"
                class="flex items-center px-4 py-1 text-sm hover:bg-neutral-800 rounded-lg"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <i class="bx bx-star me-2 text-lg text-yellow-400"></i>
                Upgrade to pro
              </a>
            </div>

            <div class="py-1" role="none">
              <a
                href="#"
                class="flex items-center px-4 py-1 text-sm hover:bg-neutral-800 rounded-lg"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <i class="bx bx-log-out me-2 text-lg"></i>
                log out
              </a>
            </div>

            <div class="py-1" role="none">
              <p className="px-4 text-sm">v1.0 . changelog</p>
            </div>
          </div>

          <div className="first-row-btns flex">
            <i class="bx bx-bell text-2xl cursor-pointer hover:bg-neutral-800 delay-75 w-8 h-8 flex justify-center rounded-full"></i>
            <i class="bx bx-cog text-2xl cursor-pointer ms-1 hover:bg-neutral-800 delay-75 w-8 h-8 flex justify-center rounded-full"></i>
            <button onClick={toggleSidebar} id="btn-menu">
              <i class="bx bx-sidebar text-xl cursor-pointer bg-neutral-900 w-8 h-8 left-[300px] top-4 flex justify-center items-center rounded-full absolute hover:bg-white hover:text-black"></i>
            </button>
          </div>
        </div>

        <div
          className="second-row flex items-center cursor-pointer my-5 w-[95%] px-1 ps-2 py-2 rounded-md hover:bg-neutral-900"
          onClick={toggleAddTask}
        >
          <i class="bx bx-plus bg-red-500 me-2 p-1 rounded-full cursor-pointer"></i>
          <label htmlFor="addTask" className="text-red-600 cursor-pointer">
            Add task
          </label>
        </div>

        {/* <div className="second-row flex items-center cursor-pointer mt-5 w-[95%] px-1 ps-2 rounded-md hover:bg-neutral-900">
          <i class="bx bx-search-alt me-2 p-1 rounded-full cursor-pointer text-xl"></i>
          <label htmlFor="addTask" className="cursor-pointer">
            Search
          </label>
        </div> */}
        {Row(
          "bx bx-search-alt me-2 p-1 rounded-full cursor-pointer text-xl",
          "Search"
        )}
        {Row(
          "bx bxs-inbox me-2 p-1 rounded-full cursor-pointer text-xl",
          "Inbox"
        )}
        {Row(
          "bx bxs-calendar me-2 p-1 rounded-full cursor-pointer text-xl",
          "Today"
        )}
        {Row(
          "bx bx-calendar-star me-2 p-1 rounded-full cursor-pointer text-xl",
          "Upcoming"
        )}

        <div className="w-[90%] bg-neutral-800 h-[1px] mt-4"></div>

        <div className="second-row flex items-center justify-between cursor-pointer mt-2 w-[95%] px-1 ps-2 py-2 rounded-md hover:bg-neutral-900">
          <label htmlFor="addTask" className="font-bold text-lg cursor-pointer">
            # Tags & Filters
          </label>
          <i class="bx bxs-chevron-down text-xl me-1 text-neutral-400 hover:text-white"></i>
        </div>

        {Row(
          "bx bxs-purchase-tag me-1 rounded-full cursor-pointer text-lg text-red-500",
          "Red"
        )}
        {Row(
          "bx bxs-purchase-tag me-1 rounded-full cursor-pointer text-lg text-blue-500",
          "Blue"
        )}
        {Row(
          "bx bxs-purchase-tag me-1 rounded-full cursor-pointer text-lg text-yellow-500",
          "Yellow"
        )}
        {Row(
          "bx bxs-purchase-tag me-1 rounded-full cursor-pointer text-lg text-green-500",
          "Green"
        )}

        <div className="w-[90%] bg-neutral-800 h-[1px] mt-4"></div>

        <div className="second-row flex items-center justify-between cursor-pointer mt-2 w-[95%] px-1 ps-2 py-2 rounded-md hover:bg-neutral-900">
          <label htmlFor="addTask" className="font-bold text-lg cursor-pointer">
            # My projects
          </label>
          <div className="">
            <i class="bx bx-plus text-xl me-2 text-neutral-400 hover:text-white"></i>
            <i class="bx bxs-chevron-down text-xl me-1 text-neutral-400 hover:text-white"></i>
          </div>
        </div>
      </div>

      {/* Body element */}
      <div
        className="body flex flex-col items-center justify-center h-screen ms-auto"
        id="todo-body"
      >
        <section className="task-section flex w-[60%] items-start justify-center flex-col">
          <h1 className="text-4xl font-semibold mb-3">Today</h1>
          <label htmlFor="task-count" style={{ display: "none" }}>
            <i class="bx bx-check-circle"></i>
            <label htmlFor="task">{" 0 "}tasks</label>
          </label>
          <button className="flex items-center" onClick={toggleAddTask}>
            <i class="bx bx-plus me-2 text-lg text-red-500 px-1 rounded-full hover:bg-red-500 hover:text-white"></i>
            Add task
          </button>
          <TaskMapper />
        </section>
        <img src={bodySvg} alt="" className="body-svg w-80" />
        <div className="null-content mt-4 flex items-center flex-col">
          <h2 className="text-lg font-semibold">
            You're all done for today, KODI!
          </h2>
          <p className="text-sm mt-2">
            Enjoy the rest of your day and Don't forget
          </p>
          <p className="text-sm">to keep your tasks organized : )</p>
        </div>
      </div>

      <AddTaskPopup />
    </div>
  );
};

export default Todo;
