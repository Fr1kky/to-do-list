import "./ToDoLists.css";
import ToDoItem from "./ToDoItem.jsx";
import ListForm from "./ListForm.jsx";
import React, { useState } from "react";

const ToDoLists = ({
  Lists,
  addTask,
  handleToggle,
  handleDelet,
  handleEdit,
}) => {
  const [rebuilder, setrebuilder] = useState(1);
  const handleRebuilder = () => {
    setrebuilder(!rebuilder);
  };

  console.log("im hereeee");

  return (
    <div className="todo-list-wrapepr">
      <ul className="todo-list">
        {Lists.list1
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((todo) => {
            return (
              <ToDoItem
                key={todo.id}
                todo={todo}
                handleRebuilder={handleRebuilder}
                handleToggle={handleToggle}
                handleDelet={handleDelet}
                handleEdit={handleEdit}
              />
            );
          })}
      </ul>
      <ListForm addTask={addTask} handleAdding={handleRebuilder} />
    </div>
  );
};

export default ToDoLists;
