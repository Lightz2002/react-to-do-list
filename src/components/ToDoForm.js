// import React, { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

// function ToDoForm(props) {
//   const [input, setInput] = useState(props.edit ? props.edit.value : "");

//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   });

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.onSubmit({
//       id: Math.floor(Math.random() * 1000),
//       text: input,
//     });
//     setInput("");
//   };

//   return (
//     <form className="todo-form" onSubmit={handleSubmit}>
//       {props.edit ? (
//         <>
//           <input type="text" value={input} name="text" className="todo-input-edit" onChange={handleChange} ref={inputRef} />
//           <FontAwesomeIcon icon={faEdit} className="todo-button-edit" onClick={handleSubmit} />
//         </>
//       ) : (
//         <>
//           <input type="text" value={input} placeholder="Add Tasks" name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
//           <FontAwesomeIcon icon={faPlusCircle} className="todo-button" onClick={handleSubmit} />
//         </>
//       )}
//     </form>
//   );
// }

// export default ToDoForm;
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
