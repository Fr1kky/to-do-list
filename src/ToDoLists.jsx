import "./ToDoLists.css";
import ToDoItem from "./ToDoItem.jsx";

const ToDoLists = ({ toDoList }) => {
  return (
    <div className="todo-list-wrapepr">
      {toDoList.list1
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((todo) => {
          return <ToDoItem todo={todo} />;
        })}
      <input
        type="text"
        name="work-with-task"
        id="work-with-task"
        className="work-with-task"
      />
      <button className="btn-submit">Submit</button>
    </div>
  );
};

export default ToDoLists;
