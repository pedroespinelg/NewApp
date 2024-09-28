import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskInput() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="Submit">Add</button>
      </form>

      <ul>
        {taskList.map((item) => (
          <TaskItem key={item} task={item} />
        ))}
      </ul>
    </div>
  );
}
