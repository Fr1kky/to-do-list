import "./ToDoItem.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleCheck,
//   faPen,
//   faTrashCan,
// } from "@fortawesome/free-solid-svg-icons";

function ToDoItem({ todo }) {
  console.log(todo.complete);

  return (
    <li
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      className={todo.complete ? "todo strike" : "todo"}
    >
      {todo.task}
      <button></button>
    </li>
  );
}

export default ToDoItem;
