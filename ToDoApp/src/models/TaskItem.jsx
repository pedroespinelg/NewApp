import styles from "./taskitem.module.css";

export default function TaskItem({ task, taskList, setTaskList }) {
  function handleClickDelete(taskName, taskList, setTaskList) {
    setTaskList(taskList.filter((item) => item.name !== taskName));
  }

  function handleClickTask(taskName, taskList, setTaskList) {
    setTaskList(
      taskList.map((item) =>
        item.name === taskName ? { ...item, done: !item.done } : item
      )
    );
  }

  const taskClassName = task.done ? styles.taskCompleted : "";

  return (
    <li className={styles.mainbody}>
      <div className={styles.container}>
        <span
          className={taskClassName}
          onClick={() => handleClickTask(task.name, taskList, setTaskList)}
        >
          {task.name}
        </span>
        <button
          onClick={() => handleClickDelete(task.name, taskList, setTaskList)}
          className={styles.deletebutton}
        >
          X
        </button>
      </div>
      <hr className={styles.separator} />
    </li>
  );
}
