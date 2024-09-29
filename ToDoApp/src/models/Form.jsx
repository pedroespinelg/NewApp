import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ taskList, setTaskList }) {
  const [task, setTask] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.div}>
        <input
          className={styles.input}
          type="text"
          value={task}
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button className={styles.button} type="Submit">
          Add
        </button>
      </div>
    </form>
  );
}
