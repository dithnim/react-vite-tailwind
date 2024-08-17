import React from "react";
import { useState, useEffect } from "react";
import AddTaskPopup from "./AddTaskPopup.jsx";

const TaskMapper = () => {
  const [tasks, setTasks] = useState([]);
  const [savedTasks, setSavedTasks] = useState([]);
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tasks")) || [];
    setSavedTasks(savedData);

    const fetchData = async () => {   
      try {
        const response = await fetch(
          "https://dkodi-backend.netlify.app/.netlify/functions/api"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          const data = await response.json();
          setTasks(data);
          localStorage.setItem("tasks", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
    
  const removeTask = async (id) => {
    try {
      const response = await fetch(
        `https://dkodi-backend.netlify.app/.netlify/functions/api?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("Something went wrong while deleting task " + id);
        console.log(response);
        return;
      }
      const newTask = tasks.filter((removedTask) => removedTask._id !== id);
      setTasks(newTask);
      setSavedTasks(newTask);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-[100%] mt-6">
      {savedTasks.map((savedData) => {
        return (
          <div
            className="task-container w-full bg-neutral-950 mb-2 py-2 px-4 rounded-xl flex justify-between"
            key={savedData._id}
          >
            <div className="left">
              <h1 className="task-title text-lg font-bold flex items-center">
                <button
                  onClick={() => {
                    removeTask(savedData._id);
                    console.log(savedData._id);
                  }}
                >
                  <i className="bx bx-check me-3 rounded-full border text-black hover:text-white cursor-pointer"></i>
                </button>
                {savedData.title}
              </h1>
              <p className="task-desc text-md ms-8">{savedData.desc}</p>
            </div>

            <div className="right flex">
              <i className="bx bx-edit text-lg me-1 cursor-pointer hover:bg-neutral-800 h-7 py-1 px-1 flex items-center rounded-full"></i>
              <i className="bx bx-dots-horizontal-rounded text-lg cursor-pointer hover:bg-neutral-800 h-7 py-1 px-1 flex items-center rounded-full"></i>
            </div>
          </div>
        );
      })}
      <AddTaskPopup />
    </div>
  );
};

export default TaskMapper;
