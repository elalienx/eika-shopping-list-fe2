export default function TaskItem({ item, list, setList }) {
  function onCheckbox() {
    const clonedList = [...list];
    const editedItem = clonedList[item.id];
    editedItem.isCompleted = false;

    setList((list) => [...list, editedItem]);
  }

  return (
    <li>
      <input type="checkbox" checked={item.isCompleted} onChange={onCheckbox} />
      {item.name}, {item.price}:-
    </li>
  );
}
