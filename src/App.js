import { useState } from "react";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <>
      <div className="App">
        {" "}
        <h1>TaskBuddy</h1>
        <TaskForm addTask={addTask} />
      </div>
    </>
  );
}

export default App;
