import { tasks as data } from "../data/tasks";
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(title, description) {
    let id = tasks.length;
    let task = {
      id,
      title,
      description,
    };

    setTasks([...tasks, task]);
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        removeTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
