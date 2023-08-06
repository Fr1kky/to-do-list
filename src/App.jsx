import "./App.css";
import Header from "./Header.jsx";
import ToDoLists from "./ToDoLists.jsx";
import React, { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState({
    list1: [
      { id: 2, task: "Task 2", complete: false },
      { id: 1, task: "Task 1", complete: false },
    ],
  });

  return (
    <div className="App">
      <Header />
      <div className="todo-lists-wrapepr">
        <ToDoLists toDoList={toDoList} />
      </div>
    </div>
  );
}

export default App;
