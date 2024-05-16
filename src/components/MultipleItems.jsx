import TodoItem from "./TodoItem";

const MultipleItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default MultipleItems;
