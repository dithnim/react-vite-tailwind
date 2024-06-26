import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const Navigate = useNavigate();

  const backToHome = () => {
    Navigate("/");
  };

  return (
    <div className="err-page flex h-screen items-center justify-center text-white flex-col">
      <h1 className="text-8xl font-semibold">404</h1>
      <h3 className="text-2xl mt-3">Oops that was an error..!</h3>
      <button
        className="bg-white text-black font-medium px-3 py-1 rounded-md mt-2"
        onClick={backToHome}
      >
        Go back
      </button>
      <div className="yellow-circle-hero"></div>
      <div className="blue-circle-hero"></div>
      <div className="green-circle-hero"></div>
    </div>
  );
};

export default Error;
