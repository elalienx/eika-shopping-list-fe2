// Project files
import TaskList from "../components/TaskList";

export default function ShoppingScreen({ list, setShowModal }) {
  return (
    <div>
      <h1>Shopping list</h1>
      <TaskList list={list} />
      <button onClick={() => setShowModal(true)}>Add item</button>
    </div>
  );
}
