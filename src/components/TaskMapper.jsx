import React from "react";
import { rawTasks } from "./Data.jsx";
import { useState, useEffect } from "react";

const TaskMapper = () => {
  const [task, setTask] = useState(rawTasks);
  // const [newTaskName, setNewTaskName] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchTask = async () => {
  //   try {
  //     const response = await fetch("localhost:5173/todo");
  //     if (!response.ok) {
  //       throw new Error("Bad response");
  //     }
  //     const data = await response.json();
  //     setTask(data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     setLoading(false);
  //   }
  // };

  // fetchTask();

  // const addTask = async () => {
  //   try {
  //     const response = await fetch("localhost:5173/todo", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name: newTaskName }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const newTask = await response.json();
  //     // Add the new task to the local state
  //     setTask([...task, newTask]);
  //     setNewTaskName("");
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

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
