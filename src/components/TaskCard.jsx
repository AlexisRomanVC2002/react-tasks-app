import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskCard({ task }) {
  const { removeTask } = useContext(TaskContext);

  function handleClick() {
    removeTask(task.id);
  }

  return (
    <div className="bg-gray-800 text-white p-5 rounded-md flex-col space-y-6">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400" onClick={handleClick}>
        Eliminar tarea
      </button>
    </div>
  );
}
