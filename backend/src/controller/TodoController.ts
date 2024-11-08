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
