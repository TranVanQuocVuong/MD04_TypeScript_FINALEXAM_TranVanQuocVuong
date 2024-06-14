import pool from "../Config/database";
interface Task {
    name: string;
    status: boolean;
}
// Lấy toàn bộ task
export const getAllTasks = async () => {
    const query = "SELECT * FROM tasks";
    const [result] = await pool.execute(query);    
    return result;
}

// Lấy 1 task
export const getOnlyTask = async (id: number) => {
    const query = `SELECT * FROM tasks WHERE id = ${id}`;
    const [result] = await pool.execute(query);
    return result;
}
// Thêm task
export const createTask = async (data: Task) => {
    const {name, status} = data;
    const query = `INSERT INTO tasks (name, status)
                     VALUES ('${name}', '${status}')`;
    const [result] = await pool.execute(query);
    return result;
}
// cập nhât task
export const updateTask = async () => {
    const query = "UPDATE tasks SET task = ? WHERE id = ?";
    const [result] = await pool.execute(query);
    return result;
}
// Xóa task
export const deleteOneTask = async (id: number) => {    
    const query = `DELETE FROM tasks WHERE id = ?`;
    const [result] = await pool.execute(query, [id]);
    return result;
}