import React, { useState } from "react";

const ToDoListRow = (props) => {
  const [status, setStatus] = useState(false);
  return (
    <li>
      <label
        htmlFor={props.id}
        style={{ textDecoration: status ? "line-through" : "none" }}
      >
        {props.description}
      </label>
      <input
        type="checkBox"
        value={props.id}
        onChange={() => {
          setStatus(!status);
        }}
      ></input>

      <button onClick={props.onRemove}>Delete</button>
    </li>
  );
};

export default ToDoListRow;
