import axios from 'axios';

// Se puede crear una instancia de axios para evitar repetir la url base
const taksApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/',
});

export const getAllTasks = () => taksApi.get('/');

export const createTask = (task) => taksApi.post('/', task);
