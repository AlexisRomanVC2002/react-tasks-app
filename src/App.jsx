import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 p-10 min-h-screen">
      <div className="container mx-auto flex-col space-y-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
