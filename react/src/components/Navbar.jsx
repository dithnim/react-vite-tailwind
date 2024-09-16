import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar bg-white dark:bg-black flex items-center justify-between px-3 md:px-10 lg:px-12 xl:px-14 pt-1">
      <div className="flex items-center justify-between">
        <i className="bx bx-menu me-2 px-1 rounded-full text-2xl hover:bg-neutral-900 cursor-pointer sm:hidden" onclick={{}}></i>
        <p className="logo text-black dark:text-white" onClick={navigateToHome}>
          K<span>O</span>DI
        </p>
      </div>

      <ul className="navlist text-black dark:text-white">
        <button onClick={navigateToHome}>
          <li>Home</li>
        </button>
        <li>Pricing</li>
        <li id="drop-button" className="drop-button">
          <label htmlFor="">Apps</label>{" "}
          <ion-icon name="chevron-down-outline"></ion-icon>
        </li>
        <li>Contact</li>
      </ul>

      <div className="drop absolute  dark:bg-neutral-900 right-[50%] dark:text-white z-10 mt-20 w-32 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-3 py-1">
        Coming Soon
      </div>

      <div className="buttons">
        <button
          id="btn-signin"
          className="text-black dark:text-white rounded-md px-3 py-1 mr-1"
          onClick={navigateToLogin}
        >
          Sign in
        </button>
        <button
          className="text-white dark:text-black rounded-md bg-black dark:bg-white px-3 py-1"
          onClick={navigateToLogin}
        >
          Join us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
