import { useEffect, useState } from 'react'
import axios from 'axios'
import './todoList.scss'
interface Task {
    name: string,
    status: boolean
}
export default function TodoList() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState<Task>({
        name: '',
        status: false
    })
    const [flag, setFlag] = useState(-1);
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/tasks')
            .then((response) => {
                setTasks(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleChange = (e: any) => {
        setTask({
            ...task,
            name: e.target.value,
            status: false
        })
    }

    const addToDo = async () => {
        if (flag === -1) {
            await axios.post('http://localhost:8080/api/v1/task', task)
                .then((response) => {
                    alert('Thêm thành công')
                    location.reload()
                })
                .catch((error) => {
                    console.log(error)
                })
            setTask({
                name: '',
                status: false
            })
        } else {
            axios.put(`http://localhost:8080/api/v1/tasks/${flag}`, task)
                .then((response) => {
                    alert('Cập nhật thành công')
                })
                .catch((error) => {
                    console.log(error)
                })
            setTask({
                name: '',
                status: false
            })
            setFlag(-1)
        }
    }

    const checkJob = (item: any) => {

    }
    const updateToDo = (id: any) => {

    }
    const deleteToDo = (id: number) => {
        axios.delete(`http://localhost:8080/api/v1/task/${id}`)
        .then((response) => {
            alert('Xóa thành công')
            location.reload()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='main'>
            <div className='mainToDo'>
                <div className='headerToDo'>
                    <p>Todo List</p>
                    <span>get things done, one item at a time</span>
                    <hr />
                </div>
                <div className='bodyToDo'>
                    <ul>
                        {
                            tasks.map((item: any) => {
                                return (
                                    <li key={item.id}>
                                        <span style={{ textDecoration: item.status ? 'line-through' : '' }}>
                                            {item.name}
                                        </span>
                                        <div>
                                            <input
                                                type="checkbox"
                                                checked={item.status}
                                                value={item.status}
                                                onChange={() => checkJob(item)}
                                            />
                                            <span>
                                                <i
                                                    className="fa-regular fa-pen-to-square"
                                                    onClick={() => updateToDo(item.id)}
                                                />
                                            </span>
                                            <span>
                                                <i
                                                    className="fa-solid fa-trash"
                                                    onClick={() => deleteToDo(item.id)}
                                                />
                                            </span>
                                        </div>
                                    </li>

                                )
                            })
                        }
                    </ul>
                    <div className='moveItem'>
                        <p>Move done items at the end? </p>
                        <input
                            type="checkbox"
                            className='swicth-toggle'
                        // onClick={moveItem}
                        />
                    </div>
                </div>
                <div className='footerToDo'>
                    <p>Add to the todo list </p>
                    <div className='footerAdd'>
                        <input
                            type="text"
                            value={task.name}
                            onChange={() => handleChange(event)}
                        />
                        <button onClick={addToDo}>{flag === -1 ? "ADD ITEM" : "UPDATE"} </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
