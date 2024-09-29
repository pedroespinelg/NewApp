import TaskItem from "./TaskItem";

export default function TaskList({ taskList }) {
  return (
    <ul>
      {taskList.map((item) => (
        <TaskItem key={item} task={item} />
      ))}
    </ul>
  );
}
