import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const AddTaskPopup = ({
  addTask,
  editTask,
  taskToEdit,
  isEditMode,
  togglePopup,
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [selectedPriority, setSelectedPriority] = useState("Priority");
  const [selectedDate , setSelectedDate] = useState("Date");

  const handleSelectPriority = (priority) => {
    setSelectedPriority(priority);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  }

  useEffect(() => {
    if (isEditMode && taskToEdit) {
      setTitle(taskToEdit.title);
      setDesc(taskToEdit.desc);
    } else {
      setTitle("");
      setDesc("");
    }
  }, [taskToEdit, isEditMode]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const task = {
      title,
      desc,
      priority: selectedPriority,
      date : selectedDate,
      _id: taskToEdit?._id,
    };

    try {
      if (isEditMode) {
        const response = await fetch(
          `https://dkodi-backend.netlify.app/.netlify/functions/api?id=${task._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
          }
        );

        if (response.ok) {
          const data = await response.json();
          editTask(data);
        } else {
          console.error("Failed to update task");
        }
      } else {
        const response = await fetch(
          "https://dkodi-backend.netlify.app/.netlify/functions/api",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
          }
        );

        if (response.ok) {
          const data = await response.json();
          addTask(data);
        } else {
          console.error("Failed to create task");
        }
      }
      togglePopup();
      setTitle("");
      setDesc("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="add-task-popup bg-neutral-950 w-[100%] rounded-2xl p-2 px-4  flex flex-col"
      id="add-task-popup"
    >
      <div>
        <input
          type="text"
          placeholder="Task name"
          className="bg-transparent outline-0 font-semibold text-xl w-full"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={handleDescChange}
          className="bg-transparent outline-0 font-semibold text-sm w-full mt-2"
        />
        <div className="add-task-btns mt-2">
          {/* Date selection menu */}
          <Menu as="div" className="relative inline-block text-left ms-2">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-neutral-950 px-3 py-[2px] text-sm text-white ring-1 ring-white ring-opacity-50 cursor-pointer focus:outline-none">
                {selectedDate}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-white"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-[150px] origin-top-right rounded-md bg-neutral-900 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div>
                <MenuItem>
                  {({ active }) => (
                    <label
                      className={`flex items-center px-4 py-2 text-sm text-white ${
                        active ? "bg-red-950/50" : ""
                      }`}
                      onClick={() => handleSelectDate("Today")}
                    >
                      <i className="bx bxl-react text-lg me-1 text-green-500"></i>
                      Today
                    </label>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <label
                      className={`flex px-4 py-2 items-center text-sm text-white ${
                        active ? "bg-red-950/50" : ""
                      }`}
                      onClick={() => handleSelectDate("Tomorrow")}
                    >
                      <i className="bx bx-sun text-lg me-1 text-yellow-500"></i>
                      Tomorrow
                    </label>
                  )}
                </MenuItem>
              </div>
              <div>
                <MenuItem>
                  {({ active }) => (
                    <label
                      className={`flex items-center px-4 py-2 text-sm text-white ${
                        active ? "bg-red-950/50" : ""
                      }`}
                      onClick={() => handleSelectDate("This weekend")}
                    >
                      <i className="bx bx-game text-lg me-1 text-blue-500"></i>
                      This weekend
                    </label>
                  )}
                </MenuItem>
              </div>
              <div>
                <MenuItem>
                  {({ active }) => (
                    <label
                      className={`flex items-center px-4 py-2 text-sm text-white ${
                        active ? "bg-red-950/50" : ""
                      }`}
                      onClick={() => handleSelectDate("Next week")}
                    >
                      <i className="bx bx-meteor text-lg me-1 text-purple-500"></i>
                      Next week
                    </label>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* <button
            className="add-task-sub bg-transparent rounded-md px-2 border border-neutral-500"
            onClick={toggleDateSelect}
          >
            <i className="bx bx-calendar-plus cursor-pointer"></i>
            <label htmlFor="cal" className="ms-1 text-sm cursor-pointer">
              Today
            </label>
          </button> */}

          {/* <div
            className="absolute date-popup-close z-10 mt-2 w-[150px] rounded-md bg-neutral-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            id="date-popup"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="flex items-center py-1 px-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <i className="bx bxl-react text-lg me-1 text-green-500"></i>
                Today
              </a>
              <a
                href="#"
                className="flex items-center py-1 px-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                <i className="bx bx-sun text-lg me-1 text-yellow-500"></i>
                Tommorow
              </a>

              <button
                type="submit"
                className="flex items-center w-full px-4 py-1 text-left text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                <i className="bx bx-game text-lg me-1 text-blue-500"></i>
                This weekend
              </button>

              <a
                href="#"
                className="flex items-center py-1 px-4 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                <i className="bx bx-meteor text-lg me-1 text-purple-500"></i>
                Next week
              </a>
            </div>
          </div> */}

          {/* priority Menu */}

          <Menu as="div" className="relative inline-block text-left ms-2">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-neutral-950 px-3 py-[2px] text-sm text-white ring-1 ring-white ring-opacity-50 cursor-pointer focus:outline-none">
                {selectedPriority}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-white"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-[150px] origin-top-right rounded-md bg-neutral-900 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div>
                <MenuItem>
                  {({ active }) => (
                    <label
                      className={`block px-4 py-2 text-sm text-white ${
                        active ? "bg-red-950/50" : ""
                      }`}
                      onClick={() => handleSelectPriority("Priority 1")}
                    >
                      <i className="bx bxs-flag me-1 text-red-500 text-md"></i>
                      Priority 1
                    </label>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <label
                      className={`block px-4 py-2 text-sm text-white ${
                        active ? "bg-red-950/50" : ""
                      }`}
                      onClick={() => handleSelectPriority("Priority 2")}
                    >
                      <i className="bx bxs-flag me-1 text-yellow-500 text-md"></i>
                      Priority 2
                    </label>
                  )}
                </MenuItem>
              </div>
              <div>
                <MenuItem>
                  {({ active }) => (
                    <label
                      className={`block px-4 py-2 text-sm text-white ${
                        active ? "bg-red-950/50" : ""
                      }`}
                      onClick={() => handleSelectPriority("Priority 3")}
                    >
                      <i className="bx bxs-flag me-1 text-blue-500 text-md"></i>
                      Priority 3
                    </label>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* <button
            className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500"
            id="btn-priority"
            onClick={togglePriority}
          >
            <i className="bx bxs-flag-alt cursor-pointer"></i>
            <label htmlFor="priority" className="ms-1 text-sm cursor-pointer">
              Priority
            </label>
          </button>

          <div
            className="priority-popup-close absolute ms-[65px] z-10 mt-2 w-26 divide-y divide-gray-100 rounded-md bg-neutral-900 ring-1 ring-white ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            id="priority-menu"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                <i className="bx bxs-flag-alt me-2 text-red-500"></i>
                Priority 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <i className="bx bxs-flag-alt me-2 text-yellow-500"></i>
                Priority 2
              </a>

              <a
                href="#"
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <i className="bx bxs-flag-alt me-2 text-blue-500"></i>
                Priority 3
              </a>
            </div>
          </div> */}

          <button
            className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500"
            role="menuitem"
          >
            <i className="bx bx-alarm-add cursor-pointer"></i>
            <label htmlFor="reminders" className="ms-1 text-sm cursor-pointer">
              Reminders
            </label>
          </button>
          <button className="add-task-sub bg-transparent rounded-md px-1 ms-2 border border-neutral-500">
            <i className="bx bx-dots-horizontal-rounded"></i>
          </button>

          <div className="w-[100%] bg-neutral-700 h-[1px] mt-4"></div>

          <div className="mt-3 flex justify-end">
            <button
              type="reset"
              className="bg-white text-black font-semibold px-2 rounded-md me-2"
              onClick={togglePopup}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-500 font-semibold px-2 rounded-md"
              onClick={handleFormSubmit}
            >
              {isEditMode ? "Update Task" : "Add Task"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskPopup;
