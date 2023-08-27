import express from "express";
import Todo from "../Models/Todo.js";

const router = express.Router();

// Create a new todo
router.post("/todos", async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text, completed: false });
  await todo.save();
  res.json(todo);
});

// Get all todos
router.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Update a todo's completion status
router.patch("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  await Todo.findByIdAndUpdate(id, { completed });
  res.sendStatus(200);
});

// Delete a todo
router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.sendStatus(200);
});

export default router;
