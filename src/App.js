import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodolist] = useState([]);
  const [NewTask, setNewTask] = useState("");

  const handlechange = (event) => {
    setNewTask(event.target.value);
  };

  const addtask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: NewTask,
      completed: false,
    };
    setTodolist([...todoList, task]);
  };

  const deletetask = (id) => {
    const newTodolist = todoList.filter((task) => {
      return task.id !== id;
    });

    setTodolist(newTodolist);
  };

  const completetask = (id) => {
    const changecolor = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      } else {
        return task;
      }
    });

    setTodolist(changecolor);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handlechange} />
        <button onClick={addtask}>Add Task</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deletetask={deletetask}
              completetask={completetask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
