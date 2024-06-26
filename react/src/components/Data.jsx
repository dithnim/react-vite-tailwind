import React from "react";
import { useState } from "react";

export let tasks = [
  {
    id: 0,
    title: "Watch recordings",
    desc: "Need to watch SE recordings",
  },
  {
    id: 1,
    title: "Play games",
    desc: "Need to play Forza Horizon 5",
  },
];

const Data = () => {
  const [tasks, setTasks] = useState();

  return tasks;
};

export default Data;
