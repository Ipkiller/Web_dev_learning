import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");



const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    desc: "This is my first code",
    isDone: false,
  });
  todo.save();
  res.send("Hello World!");
});

app.get("/a", async (req, res) => {
  const todos = await Todo.findOne();
  res.send(todos.title);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
