import React from "react";
import { tasks } from "./Data.jsx";

const TaskMapper = () => {
  return (
    <div className="flex flex-col w-[100%] mt-10">
      {tasks.map((data) => {
        return (
          <div
            className="task-container w-full bg-neutral-950 mb-2 py-2 px-4 rounded-xl flex justify-between"
            key={data.id}
          >
            <div className="left">
              <h1 className="task-title text-lg font-bold flex items-center">
                <i class="bx bx-check me-3 rounded-full border text-black hover:text-white cursor-pointer"></i>
                {data.title}
              </h1>
              <p className="task-desc text-md ms-8">{data.desc}</p>
            </div>

            <div className="right flex">
              <i class="bx bx-edit text-lg me-2 cursor-pointer"></i>
              <i class="bx bx-dots-horizontal-rounded text-lg cursor-pointer"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskMapper;
