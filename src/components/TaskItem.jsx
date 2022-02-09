export default function TaskItem({ item, onChecbox }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => onChecbox(item.id)}
      />
      {item.name}, {item.price}:-
    </li>
  );
}
