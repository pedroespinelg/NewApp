import TaskItem from "./TaskItem";
import styles from "./tasklist.module.css";

export default function TaskList({ taskList, setTaskList }) {
  return (
    <ul className={styles.tasklist}>
      {taskList.map((item) => (
        <TaskItem
          key={item.name}
          task={item}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </ul>
  );
}
