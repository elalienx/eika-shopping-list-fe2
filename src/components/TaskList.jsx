import TaskItem from "./TaskItem";

export default function TasksList({ list, onChecbox }) {
  const Items = list.map((item) => (
    <TaskItem key={item.id} item={item} onChecbox={onChecbox} />
  ));

  return <ul>{Items}</ul>;
}
