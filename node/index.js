const express = require("express");
const taskModel = require("./models/tasks.js");
const cors = require("cors");
const connectDB = require("./db.js");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.listen(5173, () => {
  console.log("Server is running on port 5173 :)");
});

app.get("/todo", async (req, res) => {
  const items = await taskModel.find();
  res.json(items);
});
