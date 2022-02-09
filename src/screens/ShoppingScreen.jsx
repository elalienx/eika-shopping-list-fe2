// Project files
import TaskList from "../components/TaskList";

export default function ShoppingScreen({ list, setList }) {
  return (
    <div>
      <h1>Shopping list</h1>
      <TaskList list={list} setList={setList} />
    </div>
  );
}
