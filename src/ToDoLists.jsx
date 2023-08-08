import "./ToDoLists.css";
import ToDoItem from "./ToDoItem.jsx";
import ListForm from "./ListForm.jsx";
import React, { useState, useEffect } from "react";

const ToDoLists = ({
  Lists,
  addTask,
  handleToggle,
  handleDelet,
  handleEdit,
  listTitle,
}) => {
  const [rebuilder, setrebuilder] = useState(1);
  const handleRebuilder = () => {
    setrebuilder(!rebuilder);
  };

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(Lists));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Lists.list1]);

  return (
    <div className="todo-list-wrapepr">
      <div className="list-header-wrapper">
        <h3 className="list-title">{listTitle}</h3>
        <div className="list-menu-btn">•••</div>
      </div>
      <ul className="todo-list">
        {Lists[listTitle]
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((todo) => {
            return (
              <ToDoItem
                key={todo.id + Math.random()}
                todo={todo}
                handleRebuilder={handleRebuilder}
                handleToggle={handleToggle}
                handleDelet={handleDelet}
                handleEdit={handleEdit}
                listTitle={listTitle}
              />
            );
          })}
      </ul>
      <ListForm
        addTask={addTask}
        handleAdding={handleRebuilder}
        listTitle={listTitle}
      />
    </div>
  );
};

export default ToDoLists;
