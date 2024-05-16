import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";
import "../App.css";

function Todo({ onNewItem }) {
  let [todoName, settodoName] = useState("");
  let [todoDate, settodoDate] = useState("");

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    settodoDate(event.target.value);
  };
  let handleAddClicked = () => {
    onNewItem(todoName, todoDate);
    settodoName("");
    settodoDate("");
  };

  return (
    <div className="row ubi">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={handleNameChange}
          value={todoName}
        />
      </div>

      <div className="col-4">
        <input type="date" onChange={handleDateChange} value={todoDate} />
      </div>

      <div className="col-2">
        <button className="btn btn-success batan" onClick={handleAddClicked}>
          <IoIosAddCircle />
        </button>
      </div>
    </div>
  );
}

export default Todo;
