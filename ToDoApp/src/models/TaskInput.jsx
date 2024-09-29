import { useState } from "react";
import styles from "./taskinput.module.css";
import Form from "./Form";
import TaskList from "./TaskList";

export default function TaskInput() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className={styles.mainbody}>
      <Form taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
