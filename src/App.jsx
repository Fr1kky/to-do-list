import "./App.css";
import Header from "./Header.jsx";
import ToDoLists from "./ToDoLists.jsx";
import React, { useState } from "react";

function App() {
  // localStorage.clear();
  let storedLists = JSON.parse(localStorage.getItem("Lists"));
  if (storedLists === null || storedLists.listsTitles.length === 0) {
    storedLists = {
      listsTitles: ["list1", "list2"],
      list1: [{ id: 1, task: "Task 1", complete: false }],
      list2: [{ id: 2, task: "Task 1", complete: false }],
      nextTaskId: 3,
    };
  }

  const [Lists, setLists] = useState(storedLists);

  const addTask = (userInput, listTitle) => {
    let copy = [...Lists[listTitle]];
    Lists[listTitle] = [
      ...copy,
      {
        id: Lists.nextTaskId,
        task: userInput,
        complete: false,
      },
    ];
    Lists.nextTaskId = Lists.nextTaskId + 1;
    console.log(Lists);
  };

  const handleToggle = (id, status, listTitle) => {
    let tempList = Lists[listTitle].map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: status }
        : { ...task };
    });
    Lists[listTitle] = tempList;
    setLists(Lists);
  };

  const handleDelet = (id, listTitle) => {
    let tempList = Lists[listTitle].filter((task) => task.id !== id);
    Lists[listTitle] = tempList;
    setLists(Lists);
  };

  const handleEdit = (id, taskText, listTitle) => {
    let tempList = Lists[listTitle].map((task) => {
      return task.id === Number(id) ? { ...task, task: taskText } : { ...task };
    });
    Lists[listTitle] = tempList;
    setLists(Lists);
  };

  return (
    <div className="App">
      <Header />
      <section className="todo-lists-wrapepr">
        {Lists.listsTitles.map((listTitle, index) => (
          <ToDoLists
            key={index + Math.random()}
            Lists={Lists}
            listTitle={listTitle}
            setLists={setLists}
            addTask={addTask}
            handleToggle={handleToggle}
            handleDelet={handleDelet}
            handleEdit={handleEdit}
          />
        ))}

        {/* <div className="adding-list-wrapper"></div> */}
        <div className="add-list-btn-wrapper">
          <div className="add-list-btn">Add new list</div>
        </div>
      </section>
    </div>
  );
}

export default App;
