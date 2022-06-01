const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
});

const TasksModel = mongoose.model("tasks", TasksSchema);

module.exports = TasksModel;
