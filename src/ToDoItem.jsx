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
  // const [preEditText, setPreEditText] = useState(todo.task);
  let preEditText = todo.task;

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
      setEditingStatus("editing");
    } else if (editingStatus === "editing") {
      if (userInput.length !== 0) {
        setEditingStatus("nothing");
        handleEdit(todo.id, userInput);
        handleRebuilder();
      }
    }
  };

  //Сancel edit
  const canselHendler = () => {
    setEditingStatus("nothing");
    handleEdit(todo.id, preEditText);
    setUserInput(preEditText);
    handleRebuilder();
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
        <textarea
          className="edit-textarea"
          onChange={handleChange}
          value={userInput}
        ></textarea>
      )}
      <div className="li-btn-wrapper">
        <div
          className={
            editingStatus === "editing" ? "done-btn btn none" : "done-btn btn"
          }
          // className="done-btn btn"
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
          {editingStatus === "editing" ? "Save" : "Edit"}
        </div>
        {editingStatus === "editing" ? (
          <div
            className="edit-btn btn"
            id="editBtn"
            name="editBtn"
            onClick={canselHendler}
          >
            Cansel
          </div>
        ) : null}
        <div
          // className="delete-btn btn"
          className={
            editingStatus === "editing"
              ? "delete-btn btn none"
              : "delete-btn btn"
          }
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
