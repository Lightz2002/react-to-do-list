import React, { useState } from "react";
import ToDoList from "./ToDoList.js";
import ToDoForm from "./ToDoForm";

function ToDoApp() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const completeTask = (id) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return { ...task };
            }
        });

        setTasks(newTasks);
    };

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        console.log(newTasks);
    };

    return (
        <div className='todo-app'>
            <ToDoList
                tasks={tasks}
                deleteTask={deleteTask}
                completeTask={completeTask}
                category='Task'
            />
            <ToDoList
                tasks={tasks}
                deleteTask={deleteTask}
                completeTask={completeTask}
                category='Completed'
            />
            <ToDoForm tasks={tasks} addTask={addTask} />
        </div>
    );
}

export default ToDoApp;
