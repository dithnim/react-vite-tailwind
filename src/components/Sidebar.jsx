import React from "react";
import proPic from "../assets/pro-pic.jpg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar bg-neutral-950 flex flex-col items-center w-72 absolute top-0 h-screen">
        <div className="first-row flex justify-between mt-3 w-full h-10 items-center px-3">
          <div className="btn-profile flex items-center cursor-pointer hover:bg-neutral-900 delay-75 h-9 rounded-md p-1">
            <img src={proPic} alt="ProPic" className="w-7 h-7 rounded-full" />
            <label
              htmlFor="proName"
              className="text-white text-sm font-semibold ms-2 cursor-pointer"
            >
              KODI
            </label>
            <i class="bx bxs-chevron-down text-white text-xl ms-2"></i>
          </div>

          <div className="first-row-btns flex">
            <i class="bx bx-bell text-white text-2xl cursor-pointer hover:bg-neutral-800 delay-75 w-8 h-8 flex justify-center rounded-full"></i>
            <i class="bx bxs-grid text-white text-2xl cursor-pointer ms-1 hover:bg-neutral-800 delay-75 w-8 h-8 flex justify-center rounded-full"></i>
          </div>
        </div>

        <div className="second-row flex items-center">
          <i class="bx bx-plus"></i>
          <label htmlFor="addTask" className="text-white">
            Add task
          </label>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
