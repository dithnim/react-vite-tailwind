const express = require("express");
const taskModel = require("./models/tasks.js");
const cors = require("cors");
const connectDB = require("./db.js");

const app = express();
app.use(express.json());

app.use(cors());
connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000 :)");
});

//get API
app.get("/", async (req, res) => {
  const tasks = await taskModel.find();
  res.json(tasks);
});

//update API
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const task = await taskModel.findByIdAndUpdate(id, req.body);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }
  } catch {
    res.status(500).json({ message: error.message });
  }
});

//delete API
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//post API
app.post("/api/tasks", async (req, res) => {
  try {
    const newTask = await taskModel.create(req.body);
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
