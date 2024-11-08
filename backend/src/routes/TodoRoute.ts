import express from "express";
import { getAllTodo, markDoneTodo } from "../controller/TodoController";

const router = express.Router();

router.get("/todos", getAllTodo);
router.patch("/todo/:id/mark-done", markDoneTodo);

export default router;
