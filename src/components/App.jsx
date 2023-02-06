import React, { useState } from "react";
import ToDoItem from "./TodoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
