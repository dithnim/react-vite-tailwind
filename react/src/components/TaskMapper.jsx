import React from "react";
import { useState, useEffect } from "react";

const TaskMapper = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          const data = await response.json();
          setTasks(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const removeTask = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("Something went wrong while deleting task " + id);
      }
      alert("Task complete");
      const newTask = tasks.filter((removedTask) => removedTask._id !== id);
      setTasks(newTask);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-[100%] mt-10">
      {tasks.map((data) => {
        return (
          <div
            className="task-container w-full bg-neutral-950 mb-2 py-2 px-4 rounded-xl flex justify-between"
            key={data._id}
          >
            <div className="left">
              <h1 className="task-title text-lg font-bold flex items-center">
                <button onClick={() => removeTask(data._id)}>
                  <i className="bx bx-check me-3 rounded-full border text-black hover:text-white cursor-pointer"></i>
                </button>
                {data.title}
              </h1>
              <p className="task-desc text-md ms-8">{data.desc}</p>
            </div>

            <div className="right flex">
              <i className="bx bx-edit text-lg me-1 cursor-pointer hover:bg-neutral-800 h-7 py-1 px-1 flex items-center rounded-full"></i>
              <i className="bx bx-dots-horizontal-rounded text-lg cursor-pointer hover:bg-neutral-800 h-7 py-1 px-1 flex items-center rounded-full"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskMapper;
