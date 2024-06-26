const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: String,
  title: String,
  desc: String
});

const taskModel = mongoose.model("Tasks", taskSchema);

module.exports = taskModel;
