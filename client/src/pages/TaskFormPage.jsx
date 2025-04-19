import { useForm } from 'react-hook-form';
import { createTask, deleteTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';

export function TaskFormPage() {
  // register: Permite registrar que inputs y sus validaciones
  // handleSubmit: Permite manejar el submit del formulario
  // formState: Permite manejar el estado del formulario
  // errors: Permite manejar los errores del formulario
  // useForm: Permite manejar el formulario
  // Algunas bibliotecas adicionales seria yup o zod para manejar la validación de los formularios
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Para navegar entre las rutas del dom ya generadas
  const navigate = useNavigate();

  // useParams: Permite obtener los parámetros de la url
  // En este caso se obtiene el id de la tarea
  const params = useParams();

  // Permite manejar los datos al hacer submit del formulario
  // data: Contiene los datos del formulario
  const onSubmit = handleSubmit(async (data) => {
    try {
      await createTask(data);
      navigate('/tasks');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register('title', { required: true })}
        />
        {errors.title && <span>Title is required</span>}
        <textarea
          rows="3"
          placeholder="Description"
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && <span>Description is required</span>}
        <button type="submit">Create Task</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm(
              'Are you sure you want to delete this task?'
            );
            if (accepted) {
              // Aquí se llamaría a la función deleteTask
              // y se pasaría el id de la tarea a eliminar
              await deleteTask(params.id);
              navigate('/tasks');
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
