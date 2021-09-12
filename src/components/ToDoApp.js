// import React, { useState, useEffect } from "react";
// import ToDoForm from "./ToDoForm";
// import ToDo from "./ToDo";
// import ToDoCompleted from "./ToDoCompleted";

// function ToDoList() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const json = localStorage.getItem("todos");
//         const savedTodos = JSON.parse(json);

//         if (savedTodos) {
//             setTodos(savedTodos);
//         }
//     }, []);

//     useEffect(() => {
//         const json = JSON.stringify(todos);
//         localStorage.setItem("todos", json);
//     }, [todos]);

//     const addTodo = (todo) => {
//         if (!todo.text || /^\s*$/.test(todo.text)) {
//             return null;
//         }

//         const newTodos = [...todos, todo];

//         setTodos(newTodos);
//     };

//     const updateTodo = (todoId, newValue) => {
//         if (!newValue.text || /^\s*$/.test(newValue.text)) {
//             return null;
//         }

//         setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
//     };

//     const completeTodo = (id) => {
//         let updatedTodos = todos.map((todo) => {
//             if (todo.id === id) {
//                 todo.isComplete = !todo.isComplete;
//             }
//             return todo;
//         });
//         setTodos(updatedTodos);
//     };

//     const removeTodo = (id) => {
//         const removeArr = [...todos].filter((todo) => todo.id !== id);
//         setTodos(removeArr);
//     };

//     return (
//         <div className='todo-app'>
//             <div className='todo-task'>
//                 <h3>Tasks</h3>
//                 <ToDo
//                     todos={todos}
//                     completeTodo={completeTodo}
//                     removeTodo={removeTodo}
//                     updateTodo={updateTodo}
//                 />
//             </div>
//             <div className='todo-task completed'>
//                 <h3>Completed</h3>
//                 <ToDoCompleted todos={todos} completeTodo={completeTodo} />
//             </div>
//             <ToDoForm onSubmit={addTodo} />
//         </div>
//     );
// }

// export default ToDoList;

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

/* 

1.toDoApp container for all
  2.toDoList container 
    2.1 toDoCategory for subtitle like task & completed
    2.2 toDoTask container for all todo task
    2.3 toDoCompleted for all completed todo task
  3. toDoForm for input 
*/
