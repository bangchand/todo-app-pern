import express from "express";
import { getAllTodo } from "../controller/TodoController";

const router = express.Router();

router.get("/todos", getAllTodo);

export default router;
