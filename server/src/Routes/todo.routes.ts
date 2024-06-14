import exprss from "express";
import { addTask, deleteTask, getTaskById, getTasks } from "../Controller/task.controller";

const userRouter = exprss.Router();

userRouter.get("/api/v1/tasks", getTasks);
userRouter.get("/api/v1/task/:id", getTaskById);

userRouter.post("/api/v1/task", addTask)
userRouter.put("/api/v1/task/:id")
userRouter.delete("/api/v1/task/:id", deleteTask);

export default userRouter;