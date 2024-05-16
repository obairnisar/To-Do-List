import Todo from "./components/todo";
import MultipleItems from "./components/MultipleItems";
import WelcomeMessege from "./components/WelcomeMessege";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "buy milk",
      date: "01/10/2024",
    },
    {
      name: "goo to college",
      date: "01/10/2024",
    },
    {
      name: "go home",
      date: "after college",
    },
    {
      name: "eat dinner",
      date: "after sunset",
    },
  ];

  const [todoItems, settodoItems] = useState(initialTodoItems);

  const handleOnNewItem = (itemName, itemDueDate) => {
    // console.log(`new item added ${itemName}, new date added ${itemDueDate}`);

    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    settodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
    console.log(`item deleted ${todoItemName}`);
  };
  return (
    <div>
      <center className="Todo-Container ubi">
        <h1>Todo List</h1>
        <Todo onNewItem={handleOnNewItem}></Todo>
        {todoItems.length === 0 && <WelcomeMessege />}
        <MultipleItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></MultipleItems>
      </center>
    </div>
  );
}

export default App;
