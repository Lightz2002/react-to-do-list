// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { faTrash, faCircle } from "@fortawesome/free-solid-svg-icons";
// import ToDoForm from "./ToDoForm";

// function ToDo({ todos, removeTodo, completeTodo, updateTodo }) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: "",
//   });

//   const submitUpdate = (value) => {
//     updateTodo(edit.id, value);
//     setEdit({
//       id: null,
//       value: "",
//     });
//   };

//   return todos.map((todo, index) => (
//     <>
//       {todo.isComplete ? null : (
//         <div className="todo-row" key={index}>
//           {edit.id === todo.id ? (
//             <ToDoForm edit={edit} onSubmit={submitUpdate} />
//           ) : (
//             <>
//               <FontAwesomeIcon key={todo.id} icon={faCircle} onClick={() => completeTodo(todo.id)} />
//               <p onClick={() => setEdit({ id: todo.id, value: todo.text })}>{todo.text}</p>
//               {todo.isComplete ? null : (
//                 <div className="icons">
//                   <FontAwesomeIcon className="fa-trash" icon={faTrash} onClick={() => removeTodo(todo.id)} fixedWidth />
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       )}
//     </>
//   ));
// }

// export default ToDo;
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
