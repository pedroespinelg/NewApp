import styles from "./taskitem.module.css";

export default function TaskItem({ task }) {
  return (
    <li className={styles.mainbody}>
      <div className={styles.container}>
        {task} <button className={styles.deletebutton}>X</button>
      </div>
      <hr className={styles.separator} />
    </li>
  );
}
