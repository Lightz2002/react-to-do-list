import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

function ToDoForm({ addTask }) {
    const [taskInput, setTaskInput] = useState("");

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setTaskInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const charRegex = /\w+/g;
        if (charRegex.test(taskInput)) {
            addTask({
                id: uuid(),
                text: taskInput,
                completed: false,
            });
        }

        setTaskInput("");
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type='text'
                value={taskInput}
                placeholder='Add Tasks'
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />

            <FontAwesomeIcon icon={faPlusCircle} className='todo-button' onClick={handleSubmit} />
        </form>
    );
}

export default ToDoForm;
