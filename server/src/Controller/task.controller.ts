import { Request, Response } from "express";
import { createTask, deleteOneTask, getAllTasks, getOnlyTask } from "../Service/task.service";

// API lấy tất cả task
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await getAllTasks();
        return res.status(201).json({
            data: tasks
        })
    } catch (error) {
        console.log(error);
    }
}

// API lấy 1 task
export const getTaskById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        const task = await getOnlyTask(Number(id));
        return res.status(201).json({
            data: task
        })
    } catch (error) {
        console.log(error);
    }
}

// API thêm task
export const addTask = async (req: Request, res: Response) => {
    try {        
        const { name, status } = req.body;
        const task = await createTask(req.body);
        return res.status(200).json({
            messeger: "Tạo task thành công",
        })
    } catch (error) {
        console.log(error);
    }
}

// API xóa task
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const task = await deleteOneTask(Number(id));
        return res.status(200).json({
            messeger: "xóa task thành công",
        })
    } catch (error) {
        console.log(error);
    }
}