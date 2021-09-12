// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// function ToDoCompleted({ todos, completeTodo }) {
//     //const [completedTodos, setCompleteTodos] = useState([]);

//     const completedTodos = todos.filter((todo) => todo.isComplete);

//     if (completedTodos.length === 0) {
//         return null;
//     }

//     return completedTodos.map((completedTodo, index) => (
//         <div className='todo-row-completed' key={index}>
//             <FontAwesomeIcon
//                 key={completedTodo.id}
//                 icon={faCheckCircle}
//                 onClick={() => completeTodo(completedTodo.id)}
//             />
//             <p>{completedTodo.text}</p>
//         </div>
//     ));
// }

// export default ToDoCompleted;
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
