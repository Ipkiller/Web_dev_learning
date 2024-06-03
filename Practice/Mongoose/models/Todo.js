import mongoose, { Types } from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {type: String, required: true, default: "Untitled"},
  desc: String,
  isDone: Boolean,
});

export const Todo = mongoose.model("todo_list", TodoSchema);
