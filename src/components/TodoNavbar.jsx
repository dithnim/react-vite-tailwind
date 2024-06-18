import React from "react";
import proPic from "../assets/pro-pic.jpg";

const TodoNavbar = () => {
  return (
    <>
      <nav className="flex items-center bg-neutral-950 justify-between py-2 px-3">
        <div className="logo-side flex items-center justify-center">
          <i class="bx bxs-grid me-3 text-white text-xl"></i>
          <p className="text-black tracking-widest dark:text-white text-xl">
            K<span>O</span>DI
          </p>
        </div>
        <div className="social flex items-center justify-between">
          <input
            type="search"
            className="bg-neutral-900 rounded-full px-2 w-44 font-semibold"
            placeholder="search"
          />
          <button className="flex items-center justify-center">
            <i class="bx bx-search text-black font-semibold text-lg ms-2 rounded-full bg-white w-8 h-6"></i>
          </button>
          <i class="bx bxs-bell-ring text-white text-xl ms-8  cursor-pointer"></i>
          <i class="bx bxs-cog text-white text-xl ms-2 cursor-pointer"></i>
          <img src={proPic} alt="" className="w-8 h-8 rounded-full ms-4 cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default TodoNavbar;
