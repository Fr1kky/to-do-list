import "./ToDoItem.css";
import React, { useState } from "react";

function ToDoItem({
  todo,
  handleToggle,
  handleRebuilder,
  handleDelet,
  handleEdit,
}) {
  const [doneStatus, setDoneStatus] = useState(todo.complete);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [editingStatus, setEditingStatus] = useState("nothing");
  const [userInput, setUserInput] = useState(todo.task);

  //Check as done/undone
  const clickDoneHendler = () => {
    doneStatus === true ? setDoneStatus(false) : setDoneStatus(true);
    handleToggle(todo.id, !doneStatus);
    handleRebuilder();
  };

  //Deleting
  const clickDeleteHendler = () => {
    if (deleteStatus === false) {
      setDeleteStatus(true);
    }
    handleDelet(todo.id);
    handleRebuilder();
  };

  //Editing
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const clickEditHendler = () => {
    if (editingStatus === "nothing") {
      console.log("kek");
      setEditingStatus("editing");
    } else if (editingStatus === "editing") {
      if (userInput.length !== 0) {
        setEditingStatus("nothing");
        handleEdit(todo.id, userInput);
        handleRebuilder();
      }
    }
  };

  return (
    <div className="li-wrapper">
      {editingStatus === "nothing" ? (
        <li
          id={todo.id}
          name="todo"
          value={todo.id + todo.task}
          className="todo"
        >
          <span className={todo.complete ? "li-text strike" : "li-text"}>
            {userInput}
          </span>
        </li>
      ) : (
        <input
          className="edit-input"
          onChange={handleChange}
          value={userInput}
        ></input>
      )}
      <div className="li-btn-wrapper">
        <div
          className="done-btn btn"
          id="doneBtn"
          name="doneBtn"
          onClick={() => {
            clickDoneHendler();
          }}
        >
          Done
        </div>
        <div
          className="edit-btn btn"
          id="editBtn"
          name="editBtn"
          onClick={clickEditHendler}
        >
          Edit
        </div>
        <div
          className="delete-btn btn"
          id="deleteBtn"
          name="deleteBtn"
          onClick={clickDeleteHendler}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
