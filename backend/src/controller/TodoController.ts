import { Request, Response } from "express";
import Todo from "../models/Todo";
import { todo } from "node:test";

export const getAllTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const todos = await Todo.findAll();
  res.status(200).json({
    data: todos,
    message: "success",
  });
};

export const markDoneTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      todo.completed = true;
      await todo.save();
      res.status(200).json({
        data: todo,
        message: "success mark todo",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
};
