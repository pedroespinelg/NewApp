import styles from "./taskitem.module.css";

export default function TaskItem({ task }) {
  return (
    <li className={styles.mainbody}>
      {task} <button>X</button>
    </li>
  );
}
