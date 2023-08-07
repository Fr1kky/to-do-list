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
        <button className="done-btn" id="doneBtn" name="doneBtn">
          Done
        </button>
        <button className="edit-btn" id="editBtn" name="editBtn">
          Edit
        </button>
        <button className="delete-btn" id="deleteBtn" name="deleteBtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
