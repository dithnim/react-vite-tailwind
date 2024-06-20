import React from "react";

const AddTaskPopup = () => {
  return (
    <div
      className="add-task-popup bg-neutral-900 absolute top-[30%] left-[25%] w-[60%] rounded-md p-2 px-4 shadow-xl flex flex-col"
      id="add-task-popup"
    >
      <input
        type="text"
        placeholder="Task name"
        className="bg-transparent outline-0 font-semibold text-xl w-full"
      />
      <input
        type="text"
        placeholder="Description"
        className="bg-transparent outline-0 font-semibold text-sm w-full mt-2"
        style={{width:'200px'}}
      />
      <div className="add-task-btns mt-2">
        <button className="add-task-sub bg-transparent rounded-md px-2 border border-neutral-500">
          <i class="bx bx-calendar-plus cursor-pointer"></i>
          <label htmlFor="cal" className="ms-1 text-sm cursor-pointer">
            Today
          </label>
        </button>
        <button className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500">
          <i class="bx bxs-flag-alt cursor-pointer"></i>
          <label htmlFor="priority" className="ms-1 text-sm cursor-pointer">
            Priority
          </label>
        </button>
        <button className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500">
          <i class="bx bx-alarm-add cursor-pointer"></i>
          <label htmlFor="reminders" className="ms-1 text-sm cursor-pointer">
            Reminders
          </label>
        </button>
        <button className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500">
          <i class="bx bx-dots-horizontal-rounded"></i>
        </button>

        <div className="w-[100%] bg-neutral-700 h-[1px] mt-4"></div>

        <div className="mt-3 flex justify-end">
          <button
            type="reset"
            className="bg-white text-black font-semibold px-2 rounded-md me-2"
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
    </div>
  );
};

export default AddTaskPopup;
