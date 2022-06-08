const express = require("express");
const mongoose = require("mongoose");
const TasksModel = require("./models/Tasks");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://task-app:NowChqArBR5LxwQg@cluster0.fgg4j.mongodb.net/tasksDatabase?retryWrites=true&w=majority"
);

app.get("/getTasks", (req, res) => {
  TasksModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/addTask", async (req, res) => {
  const task = req.body;
  const newTask = new TasksModel(task);
  await newTask.save();

  res.json(task);
});

app.put("/updateTask", async (req, res) => {
  const topic = req.body.topic;
  const priority = req.body.priority;
  const content = req.body.content;
  const id = req.body.id;

  try {
    await TasksModel.findById(id, (err, taskObj) => {
      taskObj.topic = topic;
      taskObj.priority = priority;
      taskObj.content = content;
      taskObj.save();
      res.send("updated");
    }).clone();
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("server is live at port no 3001");
});

