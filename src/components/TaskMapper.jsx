import React from "react";
import { tasks } from "./Data.jsx";

const TaskMapper = () => {
  tasks.map((data) => {
    const { id, title, desc } = data;

    return (
      <p key={id}>
        task = {title} and {desc}
      </p>
    );
  });
};

export default TaskMapper;
