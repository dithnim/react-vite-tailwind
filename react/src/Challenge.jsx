import React from "react";
import photo from "./assets/photo-challenge.jpg";

const challenge = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold mt-5">
        Welcome to a fun challenge
      </h1>
      <img src={photo} alt="photo" className="w-[640px] h-[427px] mt-16" />
      <div className="bottom mt-20 flex items-center justify-between w-[60%]">
        <h2>A clue is hidden in this image. Are you smart enough to find it :) (Hint :~ www.example.netlify.app)</h2>
        <a href={photo} download>
          <button className="ms-20 bg-white text-black p-2 rounded-full font-semibold cursor-pointer flex items-center"> Download Image</button>
        </a>
      </div>
    </div>
  );
};

export default challenge;
