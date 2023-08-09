import "./ToDoLists.css";
import ToDoItem from "./ToDoItem.jsx";
import ListForm from "./ListForm.jsx";
import DropDownTaskList from "./DropDownTaskList.jsx";
import React, { useState, useEffect } from "react";

const ToDoLists = ({
  Lists,
  listTitle,
  listIndex,
  addTask,
  handleToggle,
  handleDelet,
  handleEdit,
  removeList,
  listId,
}) => {
  const [rebuilder, setrebuilder] = useState(1);
  const handleRebuilder = () => {
    setrebuilder(!rebuilder);
  };

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(Lists));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Lists.lists[listIndex].tasks]);

  return (
    <div className="todo-list-wrapepr">
      <div className="list-header-wrapper">
        <h3 className="list-title">{listTitle}</h3>
        <div className="list-menu-btn">
          •••
          <DropDownTaskList
            listId={listId}
            handleRebuilder={handleRebuilder}
            removeList={removeList}
          />
        </div>
      </div>
      <ul className="todo-list">
        {Lists.lists.length !== 0 &&
          Lists.lists[listIndex].tasks
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
                  listIndex={listIndex}
                />
              );
            })}
      </ul>
      <ListForm
        addTask={addTask}
        handleAdding={handleRebuilder}
        listIndex={listIndex}
      />
    </div>
  );
};

export default ToDoLists;
