import { useState } from "react";

export default function Form({ taskList, setTaskList }) {
  const [task, setTask] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="Submit">Add</button>
    </form>
  );
}
