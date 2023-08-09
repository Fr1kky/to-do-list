import "./DropDownTaskList.css";

const DropDownTaskList = ({ listId, handleRebuilder, removeList }) => {
  const deleteListHandler = () => {
    removeList(listId);
    handleRebuilder();
  };

  return (
    <div className="drop-down-wrapper">
      <ul className="drop-down-options">
        <li className="options-btn remove-list-btn" onClick={deleteListHandler}>
          Delete List
        </li>
      </ul>
    </div>
  );
};

export default DropDownTaskList;
