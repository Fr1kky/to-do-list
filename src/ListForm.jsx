import "./ListForm.css";
import React, { useState } from "react";

const ListForm = ({ addTask, handleAdding }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
    handleAdding();
  };

  return (
    <form className="list-form">
      <input
        type="text"
        name="work-with-task"
        id="work-with-task"
        className="work-with-task"
        autocomplete="off"
        value={userInput}
        onChange={handleChange}
      />
      <div className="btn-submit" onClick={handleSubmit}>
        Submit
      </div>
    </form>
  );
};

export default ListForm;
