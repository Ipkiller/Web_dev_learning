import express from "express";
import mongoose from "mongoose";
import { Entry } from "./models/Entry.js";

// MongoDB Connection

await mongoose.connect("mongodb://localhost:27017/Company");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: "/Users/Shadow/Learning/Web_dev_learning/Practice/Dummy",
  });
});
const random = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}
const data={
  name: ["Rohan", "Sohan", "Mohan", "Raj", "Ravi"],
  salary: [50000, 40000, 30000, 20000, 10000],
  language: ["JavaScript", "Python", "Java", "C++", "C"],
  city: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  isManager: [true, false, true, false, true],
}
app.get("/data", async (req, res) => {

  await Entry.deleteMany({});

  for (let i = 0; i < 10; i++) {
    const entry = await Entry.create({
      name: random(data.name),
      salary: random(data.salary),
      language: random(data.language),
      city: random(data.city), 
      isManager: random(data.isManager),
    });
  }
  let detail= await Entry.findOne({});
  res.send(detail);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
