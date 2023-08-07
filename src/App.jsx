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

  const handleToggle = (id, status) => {
    let tempList = Lists.list1.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: status }
        : { ...task };
    });
    Lists.list1 = tempList;
    setLists(Lists);
  };

  const handleDelet = (id) => {
    let tempList = Lists.list1.filter((task) => task.id !== id);
    Lists.list1 = tempList;
    setLists(Lists);
  };

  const handleEdit = (id, taskText) => {
    let tempList = Lists.list1.map((task) => {
      return task.id === Number(id) ? { ...task, task: taskText } : { ...task };
    });
    Lists.list1 = tempList;
    console.log(tempList);
    setLists(Lists);
  };

  return (
    <div className="App">
      <Header />
      <div className="todo-lists-wrapepr">
        <ToDoLists
          Lists={Lists}
          setLists={setLists}
          addTask={addTask}
          handleToggle={handleToggle}
          handleDelet={handleDelet}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
