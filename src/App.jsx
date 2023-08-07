import "./App.css";
import Header from "./Header.jsx";
import ToDoLists from "./ToDoLists.jsx";
import React, { useState } from "react";

function App() {
  const [Lists, setLists] = useState({
    list1: [
      { id: 2, task: "Task 2", complete: false },
      { id: 1, task: "Task 1", complete: false },
    ],
  });

  const addTask = (userInput) => {
    let copy = [...Lists.list1];
    Lists.list1 = [
      ...copy,
      { id: Lists.list1.length + 1, task: userInput, complete: false },
    ];
    console.log(Lists);
    setLists(Lists);
  };

  return (
    <div className="App">
      <Header />
      <div className="todo-lists-wrapepr">
        <ToDoLists Lists={Lists} setLists={setLists} addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
