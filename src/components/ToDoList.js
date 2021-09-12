import React from "react";
import ToDoTask from "./ToDoTask";
import ToDoCategory from "./ToDoCategory";
import ToDoCompleted from "./ToDoCompleted";

function ToDoList({ category, tasks, completeTask , deleteTask}) {
    return category === "Task" ? (
        <div className='todo-task'>
            <ToDoCategory category={category} />
            {tasks.map(
                (task) =>
                    !task.completed && (
                        <ToDoTask
                            completeTask={() => completeTask(task.id)}
                            deleteTask={() => deleteTask(task.id)}
                            key={task.id}
                            task={task}
                        />
                    )
            )}
        </div>
    ) : (
        <div className={`todo-task `}>
            <ToDoCategory category={category} />
            {tasks.map(
                (task) =>
                    task.completed && (
                        <ToDoCompleted
                            completeTask={() => completeTask(task.id)}
                            key={task.id}
                            task={task}
                        />
                    )
            )}
        </div>
    );
}

export default ToDoList;
