import "./App.css";
import React from "react";
import ToDoApp from "./components/ToDoApp";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>
                    <span>To-Do-List</span> App
                </h1>
                <ToDoApp />
            </header>
        </div>
    );
}

export default App;
