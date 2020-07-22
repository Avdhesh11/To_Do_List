import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  var [item, setItem] = useState("");
  var [items, setItems] = useState([]);
  function HandleChange(event) {
    setItem(event.target.value);
  }

  function HandleClick() {
    setItems(prevValue => {
      return [...prevValue, item];
    });
    setItem("");
  }

  function deleteItems(id) {
    setItems(prevValue => {
      return prevValue.filter((item, index) => {
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
        <input type="text" onChange={HandleChange} value={item} />
        <button onClick={HandleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                value={toDoItem}
                onChecked={deleteItems}
              />
            );
          })}
          {/* <li>{item} </li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
