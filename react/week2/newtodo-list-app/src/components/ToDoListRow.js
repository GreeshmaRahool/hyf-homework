import React, { useState } from "react";

const ToDoListRow = ({id , description , onRemove}) => {
  const [status, setStatus] = useState(false);
  return (
    <li>
      <label
        htmlFor={id}
        style={{ textDecoration: status ? "line-through" : "none" }}
      >
        {description}
      </label>
      <input
        type="checkBox"
        value={id}
        onChange={() => {
          setStatus(!status);
        }}
      ></input>

      <button onClick={onRemove}>Delete</button>
    </li>
  );
};

export default ToDoListRow;