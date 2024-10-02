import TaskItem from "./TaskItem";
import styles from "./tasklist.module.css";

export default function TaskList({ taskList, setTaskList }) {
  return (
    <ul className={styles.tasklist}>
      {taskList.map((item) => (
        <div key={item.name}>
          <TaskItem task={item} taskList={taskList} setTaskList={setTaskList} />
        </div>
      ))}
    </ul>
  );
}
