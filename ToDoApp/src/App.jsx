import { useState } from "react";
import Header from "./models/Header";
import TaskInput from "./models/TaskInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskInput />
    </div>
  );
}

export default App;
