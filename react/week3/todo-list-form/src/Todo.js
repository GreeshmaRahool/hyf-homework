import React, { useState } from "react";
import Border from "./Border";
import PropTypes from "prop-types";

const Todo = ({ todoItem, deleteTodo, updateTodo }) => {
  const [status, setStatus] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newDescription, setNewDescription] = useState(todoItem.description);

  const checkStatus = () => {
    return setStatus(!status);
  };
  const checkEdit = () => {
    return setIsEdit(!isEdit);
  };
  console.log(isEdit);
  const buttonUpdate = () => {
    if (newDescription === "") {
      alert("Enter a valid task");
    } else {
      updateTodo(todoItem.id, newDescription);
      setIsEdit(!isEdit);
    }
  };

  const editTemplate = (
    <div>
      <Border>
        <input
          className="edit-Input"
          value={newDescription}
          type="text"
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}
        />
        <button onClick={buttonUpdate} className="btnUpdate">
          Update
        </button>
        <button className="btnDelete" onClick={() => deleteTodo(todoItem.id)}>
          Delete
        </button>
      </Border>
    </div>
  );

  const viewTemplate = (
    <Border>
      <span
        className="todo"
        style={{ textDecoration: status ? "line-through" : "none" }}
      >
        {todoItem.description} | {todoItem.deadline}
      </span>

      <input type="checkbox" value={todoItem.id} onClick={checkStatus}></input>

      <button className="btnDelete" onClick={() => deleteTodo(todoItem.id)}>
        Delete
      </button>

      <button className="btnEdit" onClick={checkEdit}>
        Edit
      </button>
    </Border>
  );
  return <div>{isEdit ? editTemplate : viewTemplate}</div>;
};
export default Todo;
Todo.propTypes = {
  todoItem: PropTypes.object,
  newDescription: PropTypes.string,
};
