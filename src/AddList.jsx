import "./AddList.css";
import React, { useState } from "react";

const AddList = ({ addList, handleRebuilder }) => {
  const [addingState, setAddingState] = useState("default");
  const [userInput, setUserInput] = useState("");

  const addingBtnHendler = () => {
    setAddingState("adding");
  };

  const handleInputChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const addingInputHendler = () => {
    if (userInput !== "") {
      addList(userInput);
      handleRebuilder();
    }
    setAddingState("default");
    setUserInput("");
  };

  const declineAdding = () => {
    setAddingState("default");
    setUserInput("");
  };

  return (
    <div className="add-list-btn-wrapper">
      {addingState === "default" && (
        <div className="add-list-btn" onClick={addingBtnHendler}>
          Add new list
        </div>
      )}
      {addingState === "adding" && (
        <div className="ading-input-wrapper">
          <input
            type="text"
            className="adding-input"
            autoFocus
            onChange={handleInputChange}
          />
          <div className="adding-input-handlers-wrapper">
            <div className="accept-adding" onClick={addingInputHendler}>
              &#128504;
            </div>
            <div className="decline-adding" onClick={declineAdding}>
              &#10007;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddList;
