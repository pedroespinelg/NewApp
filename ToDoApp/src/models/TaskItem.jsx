import styles from "./taskitem.module.css";

export default function TaskItem({ task, taskList, setTaskList }) {
  function handleClickDelete(task, taskList, setTaskList) {
    setTaskList(taskList.filter((item) => item.name !== task));
    console.log("deleted");
  }

  return (
    <li className={styles.mainbody}>
      <div className={styles.container}>
        {task}{" "}
        <button
          onClick={() => handleClickDelete(task, taskList, setTaskList)}
          className={styles.deletebutton}
        >
          X
        </button>
      </div>
      <hr className={styles.separator} />
    </li>
  );
}
