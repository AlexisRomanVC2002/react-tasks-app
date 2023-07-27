import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      <h1 className="text-white font-bold text-center text-2xl">CREA TU TAREA</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titulo Tarea"
        value={title}
        className="p-3 w-full"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripcion Tarea"
        value={description}
        className="p-3 w-full"
      />
      <button className="w-auto self-center bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 text-white font-bold">Guardar</button>
    </form>
  );
}
