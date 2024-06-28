import React from "react";

const SuccessPopup = (status) => {
  return (
    <div className="bg-neutral-950 flex p-3 rounded-2xl absolute bottom-3 left-3  items-center">
      <label htmlFor="">Task added successfully</label>
      <i className="bx bx-x flex items-center text-2xl text-neutral-600 ms-4 cursor-pointer"></i>
    </div>
  );
};

export default SuccessPopup;
