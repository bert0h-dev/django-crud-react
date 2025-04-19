import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {

  // Estado para almacenar las tareas
  // Primer parametro es el nombre del estado y el segundo es la funcion que lo actualiza
  const [tasks, setTasks] = useState([]);

  // Se ejecuta una vez al cargar el componente
  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await getAllTasks();
        // Se asignan las tareas al estado
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    loadTasks();
  }, []);

  return (<div>
    {tasks.map(task => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
  )
}