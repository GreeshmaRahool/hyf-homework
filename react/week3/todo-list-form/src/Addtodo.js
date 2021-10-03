import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const [endDate, setEndDate] = useState(new Date());

  const addTask = (e) => {
    if (input === "") {
      alert("Enter a valid task");
    } else if (!endDate) {
      alert("Enter a deadline for the task");
    } else {
      addTodo(input, endDate);
      setInput("");
    }
    };
    
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo.."
        className="add-Task"
      />
      <br />
      <DatePicker
        selected={endDate}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => setEndDate(date)}
        className="add-Date"
      />
      <br />
      <button onClick={addTask} className="btnAdd">
        Add todo
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  input: PropTypes.string,
};

export default AddTodo;
