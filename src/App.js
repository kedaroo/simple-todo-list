import "./styles.css";
import { useState } from "react";
// https://www.npmjs.com/package/uuid

const dummyTasks = [
  {
    id: 1,
    name: "Study JS",
    completed: false
  },
  {
    id: 2,
    name: "Eat food",
    completed: false
  },
  {
    id: 3,
    name: "Drink water",
    completed: false
  },
  {
    id: 4,
    name: "Do homework",
    completed: false
  },
  {
    id: 5,
    name: "Watch TV",
    completed: false
  }
];

export default function App() {
  const [tasks, setTasks] = useState(dummyTasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          name: newTask,
          completed: false,
          id: Math.random()
        }
      ];
    });

    setNewTask("");
  };

  const completeTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>add task</button>
      {tasks &&
        tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <div className="task" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => completeTask(task.id)}
              />
              <p>{task.name}</p>
            </div>
          ))}

      <h2>Completed list</h2>
      {tasks &&
        tasks
          .filter((task) => task.completed)
          .map((task) => (
            <div className="completedTask" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => completeTask(task.id)}
              />
              <p>{task.name}</p>
            </div>
          ))}
    </div>
  );
}
