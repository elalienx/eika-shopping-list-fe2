import TaskItem from "./TaskItem";

export default function TasksList({ list }) {
  const Items = list.map((item) => <TaskItem key={item.id} item={item} />);

  return <ul>{Items}</ul>;
}
