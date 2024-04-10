import React, { useState } from "react";
import TextInputField from "../../component/TextInput";
import MainButton from "../../component/Button";
import "./list.css";
import ListItem from "../../component/ListItem";

const TodoAddScreen = () => {
  const [inputType, setInputType] = useState("");
  const [items, setItems] = useState([]);

  // Add item to list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputType.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputType]);
      setInputType("");
    } else {
      alert("Please enter a task");
    }
  };

  // Delete item from list
  const handleDelete = (id) => {
    setItems((prevItems) => {
      return (
        prevItems.filter((item, index) => {
          return index !== id;
        })
      );
    })
  }

  console.log(items);

  return (
    <div className="root">
      <div className="main-container">
        <div className="container">
          <h1 className="heading"> Todo-List </h1>

          <div className="input-container">
            <TextInputField
              type="text"
              placeholder="Please Enter Your Task"
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
            />

            <MainButton
              title="Add Task"
              onClick={handleSubmit} // Just pass the function reference, don't call it here
            />
          </div>
            
          <div className="list-container">
            <ul className="list">
            {/* <li> Computer Repair</li>
            <li> Ac Repair</li> */}
              {items.map((todoItem, index) => (
                <ListItem 
                  id = {index}
                  key={index} 
                  task={todoItem} 
                  onClickDelete={handleDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoAddScreen;
