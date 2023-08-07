import "./ToDoItem.css";
import React, { useState } from "react";

function ToDoItem({ todo, handleToggle, handleRebuilder }) {
  const [status, setStatus] = useState(todo.complete);

  const clickHendler = () => {
    status === true ? setStatus(false) : setStatus(true);
    handleToggle(todo.id, !status);
    handleRebuilder();
  };

  return (
    <div className="li-wrapper">
      <li id={todo.id} name="todo" value={todo.id + todo.task} className="todo">
        <span className={todo.complete ? "li-text strike" : "li-text"}>
          {todo.task}
        </span>
      </li>
      <div className="li-btn-wrapper">
        <div
          className="done-btn btn"
          id="doneBtn"
          name="doneBtn"
          onClick={() => {
            clickHendler();
          }}
        >
          Done
        </div>
        <div className="edit-btn btn" id="editBtn" name="editBtn">
          Edit
        </div>
        <div className="delete-btn btn" id="deleteBtn" name="deleteBtn">
          Delete
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
