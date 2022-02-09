export default function TaskItem({ item }) {
  function onCheckbox() {
    console.log("TaskItem.jsx id", item.id);
  }

  return (
    <li>
      <input type="checkbox" checked={item.isCompleted} onChange={onCheckbox} />
      {item.name}, {item.price}:-
    </li>
  );
}
