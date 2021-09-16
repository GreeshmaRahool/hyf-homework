import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDo from "./Todo";
import todoItems from "./getTodos";
const todos = todoItems();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const ToDoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return <ToDo id={ todo.id} description={todo.description} endDate={todo.endDate} />;
      })}
    </div>
  );
};

ReactDOM.render(<ToDoList />, document.getElementById("root"));
