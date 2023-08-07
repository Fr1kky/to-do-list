import "./ToDoItem.css";

function ToDoItem({ todo }) {
  console.log(todo.id + todo.task);
  return (
    <div className="li-wrapper">
      <li
        id={todo.id}
        name="todo"
        value={todo.id + todo.task}
        className={todo.complete ? "todo strike" : "todo"}
      >
        <span className="li-text">{todo.task}</span>
      </li>
      <div className="li-btn-wrapper">
        <div className="done-btn btn" id="doneBtn" name="doneBtn">
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
