import React from "react";
import Todo from "./Todo";
const TodoList = ({ todoItems, deleteTodo, updateTodo }) => {
  return (
    <ul>
      {todoItems.length > 0
        ? todoItems.map((item) => {
            return (
              <li key={item.id}>
                <Todo
                  todoItem={item}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
              </li>
            );
          })
        : "No items found"}
    </ul>
  );
};
export default TodoList;
