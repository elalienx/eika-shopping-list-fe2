import TaskItem from "./TaskItem";

export default function TasksList({ list, setList }) {
  const Items = list.map((item) => (
    <TaskItem key={item.id} item={item} list={list} setList={setList} />
  ));

  return <ul>{Items}</ul>;
}
