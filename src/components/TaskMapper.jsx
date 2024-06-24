import React from "react";
import { rawTasks } from "./Data.jsx";
import { useState } from "react";

const TaskMapper = () => {
  const [task, setTask] = useState(rawTasks);

  const removeTask = (id) => {
    const newTask = task.filter((removedTask) => removedTask.id !== id);
    setTask(newTask);
  };

  return (
    <div className="flex flex-col w-[100%] mt-10">
      {task.map((data) => {
        return (
          <div
            className="task-container w-full bg-neutral-950 mb-2 py-2 px-4 rounded-xl flex justify-between"
            key={data.id}
          >
            <div className="left">
              <h1 className="task-title text-lg font-bold flex items-center">
                <button onClick={() => removeTask(data.id)}>
                  <i class="bx bx-check me-3 rounded-full border text-black hover:text-white cursor-pointer"></i>
                </button>
                {data.title}
              </h1>
              <p className="task-desc text-md ms-8">{data.desc}</p>
            </div>

            <div className="right flex">
              <i class="bx bx-edit text-lg me-1 cursor-pointer hover:bg-neutral-800 h-7 py-1 px-1 flex items-center rounded-full"></i>
              <i class="bx bx-dots-horizontal-rounded text-lg cursor-pointer hover:bg-neutral-800 h-7 py-1 px-1 flex items-center rounded-full"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskMapper;
