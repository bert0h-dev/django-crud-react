import { useNavigate } from 'react-router-dom';

export function TaskCard({ task }) {
  // Se utiliza el hook useNavigate para navegar entre rutas
  const navigate = useNavigate();

  return (
    <div
      style={{ background: '#101010' }}
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completed' : 'Pending'}</p>
      <hr />
    </div>
  );
}
