import "./App.css";
import Header from "./Header.jsx";
import ToDoLists from "./ToDoLists.jsx";
import AddList from "./AddList";
import React, { useState, useEffect } from "react";

function App() {
  // localStorage.clear();

  let storedLists = JSON.parse(localStorage.getItem("Lists"));
  if (storedLists === null) {
    storedLists = {
      lists: [],
      nextTaskId: 3,
      nextListId: 3,
    };
  }

  const [Lists, setLists] = useState(storedLists);

  const addTask = (userInput, listIndex) => {
    let copy = [...Lists.lists[listIndex].tasks];
    Lists.lists[listIndex].tasks = [
      ...copy,
      {
        id: Lists.nextTaskId,
        task: userInput,
        complete: false,
      },
    ];
    Lists.nextTaskId = Lists.nextTaskId + 1;
    setLists(Lists);
  };

  const handleToggle = (id, status, listIndex) => {
    let tempList = Lists.lists[listIndex].tasks.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: status }
        : { ...task };
    });
    Lists.lists[listIndex].tasks = tempList;
    setLists(Lists);
  };

  const handleDelet = (id, listIndex) => {
    let tempList = Lists.lists[listIndex].tasks.filter(
      (task) => task.id !== id
    );
    Lists.lists[listIndex].tasks = tempList;
    setLists(Lists);
  };

  const handleEdit = (id, taskText, listIndex) => {
    let tempList = Lists.lists[listIndex].tasks.map((task) => {
      return task.id === Number(id) ? { ...task, task: taskText } : { ...task };
    });
    Lists.lists[listIndex].tasks = tempList;
    setLists(Lists);
  };

  const addList = (listTitle) => {
    Lists.lists = [
      ...Lists.lists,
      {
        listTitle: listTitle,
        listId: Lists.nextListId,
        tasks: [],
      },
    ];
    Lists.nextListId = Lists.nextListId + 1;
    setLists(Lists);
  };

  const removeList = (listId) => {
    Lists.lists = Lists.lists.filter((list) => list.listId !== listId);
    setLists(Lists);
    handleRebuilder();
  };

  const [rebuilder, setRebuilder] = useState(1);

  const handleRebuilder = () => {
    setRebuilder(!rebuilder);
  };

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(Lists));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Lists.lists]);

  return (
    <div className="App">
      <Header />
      <section className="todo-lists-wrapepr">
        {Lists.lists.map((list, index) => (
          <ToDoLists
            key={index + Math.random()}
            Lists={Lists}
            listTitle={list.listTitle}
            listIndex={index}
            setLists={setLists}
            addTask={addTask}
            handleToggle={handleToggle}
            handleDelet={handleDelet}
            handleEdit={handleEdit}
            removeList={removeList}
            listId={list.listId}
          />
        ))}
        {/* <div className="adding-list-wrapper"></div> */}
        <AddList addList={addList} handleRebuilder={handleRebuilder} />
      </section>
    </div>
  );
}

export default App;
