import React from "react";

const SuccessPopup = (status) => {
  const toggleSuccess = () => {
    document.getElementById("success").classList.toggle("success-popup-close");
  };

  return (
    <div
      className="success-popup-close bg-neutral-900  flex p-3 rounded-2xl absolute bottom-0 left-3  items-center"
      id="success"
    >
      <label htmlFor="">Task added successfully</label>
      <i
        className="bx bx-x flex items-center text-2xl text-neutral-600 ms-4 cursor-pointer rounded-full hover:bg-white hover:text-black h-6 w-6"
        onClick={toggleSuccess}
      ></i>
    </div>
  );
};

export default SuccessPopup;
