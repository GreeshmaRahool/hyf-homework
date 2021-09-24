import { useState, useEffect } from "react";
import Counter from "./Counter";
import AddTodo from "./Addtodo";
import api from "./helper";
import TodoList from "./Todolist";
import "./App.css";

const Form = () => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([]);
    api()
      .then((data) => {
        setItems(data);
        setIsLoaded(true);
      })
      .catch(() => setError(true));
  }, []);

  if (!isLoaded) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>Error :{error.message};</div>;
  }

  //ADD TODO
  const addTodo = (newDescription, deadLine) => {
    const newTodoItem = {
      id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
      description: newDescription,
      deadline: deadLine.toISOString().substring(0, 10),
    };
    const newTodoItems = items.concat(newTodoItem);
    setItems(newTodoItems);
  };

  //DELETE TODO
  const deleteTodo = (id) => {
    const newTodoItems = items.filter((item) => {
      if (item.id === id) return false;
      else return true;
    });

    setItems(newTodoItems);
  };

  //UPDDATE TODO
  const updateTodo = (id, newDescription) => {
    items.map((item) => {
      if (item.id === id) {
        console.log(newDescription);
        item.description = newDescription;
        // item.deadline = newDate;
      }
      return item;
    });
  };

  return (
    <div className="main-Container">
      <h1>Todolist</h1>
      <Counter />
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoItems={items}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};
export default Form;
