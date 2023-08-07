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
      <textarea
        type="text"
        name="work-with-task"
        id="work-with-task"
        className="work-with-task"
        autoComplete="off"
        placeholder="Type new task here"
        value={userInput}
        onChange={handleChange}
        rows={3}
        cols={19}
      />
      <div
        className="btn-submit"
        onClick={userInput.length !== 0 ? handleSubmit : () => {}}
      >
        Submit
      </div>
    </form>
  );
};

export default ListForm;
