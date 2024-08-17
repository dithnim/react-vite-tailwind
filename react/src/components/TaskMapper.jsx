import React, { useState, useEffect } from "react";
import AddTaskPopup from "./AddTaskPopup.jsx";


const TaskMapper = () => {
  const [tasks, setTasks] = useState([]);
  const [savedTasks, setSavedTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedData);
    setSavedTasks(savedData);

    const fetchData = async () => {
      try {
        console.log("api call");
        const response = await fetch(
          "https://dkodi-backend.netlify.app/.netlify/functions/api"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          const data = await response.json();
          setTasks(data);
          setSavedTasks(data);
          localStorage.setItem("tasks", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setSavedTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task._id === updatedTask._id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setSavedTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTaskToEdit(null);
    setIsEditMode(false);
  };

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
      const updatedTasks = tasks.filter(
        (removedTask) => removedTask._id !== id
      );
      setTasks(updatedTasks);
      setSavedTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (task) => {
    setTaskToEdit(task);
    setIsEditMode(true);
    document
      .getElementById("add-task-popup")
      .classList.add("add-task-popup-open");
  };

  return (
    <div className="flex flex-col w-[100%] mt-6">
      {savedTasks.map((savedData) => (
        <div
          className="task-container w-full bg-neutral-950 mb-2 py-2 px-4 rounded-xl flex justify-between"
          key={savedData._id}
        >
          <div className="left">
            <h1 className="task-title text-lg font-bold flex items-center">
              <button onClick={() => removeTask(savedData._id)}>
                <i className="bx bx-check me-3 rounded-full border text-black hover:text-white cursor-pointer"></i>
              </button>
              {savedData.title}
            </h1>
            <p className="task-desc text-md ms-8">{savedData.desc}</p>
            <label
              htmlFor="date"
              className="text-[12px] ms-8 cursor-pointer text-red-300"
            >
              <i className="bx bxs-calendar me-1"></i>
              {savedData.createdAt.slice(5, 7)}/
              {savedData.updatedAt.slice(8, 10)} -{}{" "}
              {savedData.updatedAt.slice(11, 16)}
            </label>
          </div>

          <div className="right flex">
            <i
              className="bx bx-edit text-lg me-1 cursor-pointer hover:bg-neutral-800 h-7 py-1 px-1 flex items-center rounded-full"
              onClick={() => {
                handleEditClick(savedData);
              }}
            ></i>
            <i className="bx bx-dots-horizontal-rounded text-lg cursor-pointer hover:bg-neutral-800 h-7 py-1 px-1 flex items-center rounded-full"></i>
          </div>
        </div>
      ))}
      <AddTaskPopup
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
        isEditMode={isEditMode}
        togglePopup={() => {
          document
            .getElementById("add-task-popup")
            .classList.toggle("add-task-popup-open");
          setTaskToEdit(null);
          setIsEditMode(false);
        }}
      />
    </div>
  );
};

export default TaskMapper;
