import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircle } from "@fortawesome/free-solid-svg-icons";

function ToDoTask({ task, completeTask, deleteTask }) {
    return (
        <div className='todo-row'>
            <FontAwesomeIcon className='fa-circle' icon={faCircle} onClick={completeTask} />
            <p>{task.text}</p>
            <FontAwesomeIcon className='fa-trash' icon={faTrash} onClick={deleteTask} />
        </div>
    );
}

export default ToDoTask;
