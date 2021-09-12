import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function ToDoCompleted({ task, completeTask }) {
    return (
        <div className='todo-row-completed'>
            <FontAwesomeIcon icon={faCheckCircle} onClick={completeTask} />
            <p>{task.text}</p>
        </div>
    );
}

export default ToDoCompleted;
