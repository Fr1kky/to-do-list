import "./ToDoLists.css";
import ToDoItem from "./ToDoItem.jsx";
import ListForm from "./ListForm.jsx";
import React, { useState } from "react";

const ToDoLists = ({ Lists, addTask }) => {
  // const [userInput, setUserInput] = useState("");
  const [adding, setAdding] = useState(1);

  const handleAdding = () => {
    setAdding(!adding);
  };

  console.log("im hereeee");

  return (
    <div className="todo-list-wrapepr">
      <ul className="todo-list">
        {Lists.list1
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((todo) => {
            return <ToDoItem key={todo.id} todo={todo} />;
          })}
      </ul>
      <ListForm addTask={addTask} handleAdding={handleAdding} />
    </div>
  );
};

export default ToDoLists;
