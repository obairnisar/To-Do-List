import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row ubi">
      <div className="col-6">{todoName} </div>

      <div className="col-4">{todoDate}</div>

      <div className="col-2">
        <button
          className="btn btn-danger batan"
          onClick={() => {
            onDeleteClick(todoName);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
