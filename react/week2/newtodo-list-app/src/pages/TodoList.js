import React,{useState} from "react";
import Counter from "../components/Counter";
import getToDos from "../getToDos";
import ToDoListRow from "../components/ToDoListRow";

const ToDoItems = getToDos();

const TodoList = () => {
  const [item, setItem] = useState(ToDoItems);

  const AddnewItem = () => {
    const newItem = item.concat({
      id: getRandomToDo(),
      description: "random text",
    });
    setItem(newItem);
  };

  function getRandomToDo() {
    return 1 + Math.random();
  }

  const RemoveItem = (id) => {
    const newArray = item.filter((todo) => todo.id !== id);
    setItem(newArray);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Counter />
      <button onClick={() => AddnewItem(item, setItem)}>Add Todo</button>
      <ul>
        {item.length < 1
          ? "No items found"
          : item.map((todo) => (
              <ToDoListRow
                key={todo.id}
                id={todo.id}
                description={todo.description}
                onRemove={() => RemoveItem(todo.id)}
              />
            ))}
      </ul>
    </div>
  );
};
export default TodoList;
