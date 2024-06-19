import React from "react";
import proPic from "../assets/pro-pic.jpg";
import { useState } from "react";

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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar bg-neutral-950 flex flex-col items-center w-72 absolute top-0 h-screen">
        <div className="first-row flex justify-between mt-3 w-full h-10 items-center px-3">
          <div className="btn-profile flex items-center cursor-pointer hover:bg-neutral-900 delay-75 h-9 rounded-md p-1">
            <img src={proPic} alt="ProPic" className="w-7 h-7 rounded-full" />
            <label
              htmlFor="proName"
              className="text-sm font-semibold ms-2 cursor-pointer"
            >
              KODI
            </label>
            <i class="bx bxs-chevron-down text-xl ms-2"></i>
          </div>

          <div className="first-row-btns flex">
            <i class="bx bx-bell text-2xl cursor-pointer hover:bg-neutral-800 delay-75 w-8 h-8 flex justify-center rounded-full"></i>
            <button onClick={toggleSidebar}>
              <i class="bx bxs-grid text-2xl cursor-pointer ms-1 hover:bg-neutral-800 delay-75 w-8 h-8 flex justify-center rounded-full"></i>
            </button>
          </div>
        </div>

        <div className="second-row flex items-center cursor-pointer my-5 w-[95%] px-1 ps-2 py-2 rounded-md hover:bg-neutral-900">
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

        <div className="second-row flex items-center justify-between cursor-pointer mt-5 w-[95%] px-1 ps-2 py-2 rounded-md hover:bg-neutral-900">
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

        <div className="second-row flex items-center justify-between cursor-pointer mt-5 w-[95%] px-1 ps-2 py-2 rounded-md hover:bg-neutral-900">
          <label htmlFor="addTask" className="font-bold text-lg cursor-pointer">
            # My projects
          </label>
          <div className="">
            <i class="bx bx-plus text-xl me-2 text-neutral-400 hover:text-white"></i>
            <i class="bx bxs-chevron-down text-xl me-1 text-neutral-400 hover:text-white"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
